"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";

export type DatePickerProps = React.ComponentProps<typeof DesktopDatePicker>;

export default function DatePicker(datePickerProps: DatePickerProps) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker {...datePickerProps} />
      </LocalizationProvider>
    </div>
  );
}
