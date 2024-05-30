"use client";

import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";

type DesktopDatePickerProps = React.ComponentProps<typeof DesktopDatePicker>;
export type OnChange = DesktopDatePickerProps["onChange"];

interface DatePickerProps {
  date: Dayjs;
  onChange?: OnChange;
}

export default function DatePicker({ date, onChange }: DatePickerProps) {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          value={date}
          onChange={onChange}
          format="YYYY. MM. DD"
        />
      </LocalizationProvider>
    </div>
  );
}
