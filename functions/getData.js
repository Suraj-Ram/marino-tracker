const functions = require("firebase-functions");
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// initializeApp()
// const db = getFirestore();

// Adds numDays number of days to originalDate. DOES NOT MUTATE original date.
const addDays = (originalDate, numDays) => {
    let newDate = new Date(originalDate.valueOf())
    newDate.setDate(newDate.getDate() + numDays)
    return newDate
}

const myFunc1 = functions.https.onRequest(async (req, res) => {
    const db = getFirestore()
    const dataRef = db.collection('scheduled-2')


    const {date} = req.query
    // Example: date = "YYYY-MM-DD"s
    // Example: date = "2022-11-06"
    const startDateRange = new Date(date)
    console.log(startDateRange)
    const endDateRange = addDays(startDateRange, 1)
    console.log(endDateRange)

    const startTimestamp = Timestamp.fromDate(startDateRange)
    const endTimestamp = Timestamp.fromDate(endDateRange)

    // const queryRef = dataRef.limit(50)
    const queryRef = dataRef.where('createdAt', '>=', startTimestamp)
                            .where('createdAt', '<', endTimestamp)
    const snapshot = await queryRef.get()
    let dataArr = []
    let rowIdx = 0;

    snapshot.forEach(doc => {
        rawDataRow = doc.data()

        const seconds = parseInt(rawDataRow['createdAt']['_seconds'])
        const nanoseconds = parseInt(rawDataRow['createdAt']['_nanoseconds'])
        const timestamp = new Timestamp(seconds, nanoseconds)
        const dateObj = timestamp.toDate()

        let cleanDataRow = {}
        cleanDataRow['idx'] = rowIdx
        cleanDataRow['date'] = dateObj.toDateString()
        cleanDataRow['time_utc'] = dateObj.toTimeString()
        cleanDataRow['time_eastern'] = dateObj.toLocaleTimeString("en-US", {timeZone: 'America/New_York'})

        cleanDataRow['squash_4th_floor_count'] = parseInt(rawDataRow['squash_4th_floor']['lastCount'])
        cleanDataRow['squash_4th_floor_percent'] = parseFloat(rawDataRow['squash_4th_floor']['percentage'])

        cleanDataRow['marino_track_count'] = parseInt(rawDataRow['marino_track']['lastCount'])
        cleanDataRow['marino_track_percent'] = parseFloat(rawDataRow['marino_track']['percentage'])

        cleanDataRow['marino_3rd_floor_weight_count'] = parseInt(rawDataRow['marino_3rd_floor_weight']['lastCount'])
        cleanDataRow['marino_3rd_floor_weight_percent'] = parseFloat(rawDataRow['marino_3rd_floor_weight']['percentage'])

        cleanDataRow['marino_2nd_floor_count'] = parseInt(rawDataRow['marino_2nd_floor']['lastCount'])
        cleanDataRow['marino_2nd_floor_percent'] = parseFloat(rawDataRow['marino_2nd_floor']['percentage'])

        cleanDataRow['marino_gym_count'] = parseInt(rawDataRow['marino_gym']['lastCount'])
        cleanDataRow['marino_gym_percent'] = parseFloat(rawDataRow['marino_gym']['percentage'])

        cleanDataRow['marino_3rd_floor_cardio_count'] = parseInt(rawDataRow['marino_3rd_floor_cardio']['lastCount'])
        cleanDataRow['marino_3rd_floor_cardio_percent'] = parseFloat(rawDataRow['marino_3rd_floor_cardio']['percentage'])

        dataArr.push(cleanDataRow)

        rowIdx += 1
    })

    console.log(`Returned ${dataArr.length} rows`)

    res.json(dataArr)
})
 
exports.myFunc = myFunc1