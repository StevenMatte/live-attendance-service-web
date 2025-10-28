"use client"; // Date pickers need client-side state

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

export default function historyMonthYearPicker({value, onDateChange}: {value:Dayjs|null , onDateChange: (newValue: Dayjs | null) => void}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label='Select "Month" and "Year"'
        value={value}
        onChange={(newValue) => {
            onDateChange(newValue)
        }}
        views={['month', 'year']}
      />
    </LocalizationProvider>
  );
}