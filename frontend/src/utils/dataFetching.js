/* DEVELOPMENT */
const API_URL = "http://localhost:5001/tracker-231c8/us-central1/test1-myFunc"
/* PRODUCTION */
// const API_URL = "https://us-central1-tracker-231c8.cloudfunctions.net/get-getByDate"

/**
 * Returns an array of objects that HH:MM -> count as Integer, per room
 * @param {} rawDatData An array of row objects from backend API
 * @param {} room a key of a room qty. identifier
 * @returns Array of objects Time in HH:MM -> Count as Integer, per room
 */
function getDatapoints(rawDatData, room) {
  let ret = []; // has time and count fields in each element
  rawDatData.forEach((data) => {
    let cleanDataPoint = {};
    cleanDataPoint["time"] =
      data.time_utc.split(":")[0] + ":" + data.time_utc.split(":")[1];
    cleanDataPoint["amount"] = data[room];
    ret.push(cleanDataPoint);
  });
  return ret;
}

/**
 * Returns raw data for the specified date
 * @param {*} date 
 * @returns array of raw data objects
 */
async function fetchRawData(date) {
    const resp = await fetch(API_URL + `?date=${date}`)
    const data = await resp.json()
    return data
}


// const fetchCountsData = () => {
//     fetch("http://localhost:5001/tracker-231c8/us-central1/get-getByDate?date=2022-11-10")
//         .then(response => {
//             return response.json()
//         })
//           .then(data => {
//             const dps = getDatapoints(data)
//             console.log(dps)
//             setRawData(dps)
//         })
// }


export { getDatapoints, fetchRawData };
