const liveCounts = [
    {
        key: 0,
        name: "Marino 2nd Floor",
        count: 12,
        subtext: "34%"
    },
    {
        key: 1,
        name: "Marino Gymnasium",
        count: 12,
        subtext: "34%"
    },
    {
        key: 2,
        name: "Marino Weight Room",
        count: 12,
        subtext: "34%"
    },
    {
        key: 3,
        name: "Marino Cardio",
        count: 12,
        subtext: "34%"
    },
    {
        key: 4,
        name: "Marino Track",
        count: 12,
        subtext: "34%"
    },

]

const marinoRooms = [
    "2nd Floor",
    "Gymnasium",
    "Weight Room",
    "Cardio",
    "Track"
]

const marinoRoomsEnumOld = {
    secondFloor: "2nd Floor",
    gym: "Gymnasium",
    weightRoom: "Weight Room",
    cardio: "Cardio",
    track: "Track"
}


const marinoRoomsEnum = {
    secondFloor: {
        displayName: "2nd Floor",
        dbCountColName: "marino_2nd_floor_count",
        dbPercentColName: "marino_2nd_floor_percent"
    },
    gym: {
        displayName: "Gymnasium",
        dbCountColName: "marino_gym_count",
        dbPercentColName: "marino_gym_percent"
    },
    weightRoom: {
        displayName: "Weight Room",
        dbCountColName: "marino_3rd_floor_weight_count",
        dbPercentColName: "marino_3rd_floor_weight_percent"
    },
    cardio: {
        displayName: "Cardio",
        dbCountColName: "marino_3rd_floor_cardio_count",
        dbPercentColName: "marino_3rd_floor_cardio_percent"
    },
    track: {
        displayName: "Track",
        dbCountColName: "marino_track_count",
        dbPercentColName: "marino_track_percent"
    }
}

export {liveCounts, marinoRooms, marinoRoomsEnum}