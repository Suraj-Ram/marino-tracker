import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useState } from "react";
import TextField from "@mui/material/TextField";

function MyDatePicker({dateValue, handleDateChange}) {
    
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Date"
          value={dateValue}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
}

export default MyDatePicker;
