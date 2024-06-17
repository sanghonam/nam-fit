"use client";

import { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import DatePicker, { DatePickerProps } from "../common/DatePicker";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const DATE_FORMAT = "YYYY-MM-DD";

export default function WorkoutsDatePicker() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const selectedDate = dayjs(searchParams.get("date") ?? dayjs());

  const initializeSearchParam = () => {
    updateSearchParam();
  };

  const updateSearchParam = (date: Dayjs = selectedDate) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("date", date.format(DATE_FORMAT));
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    initializeSearchParam();
  }, []);

  const handleDatePickerChange: DatePickerProps["onChange"] = (date) => {
    date && updateSearchParam(date);
  };

  return (
    <DatePicker
      value={selectedDate}
      format={DATE_FORMAT}
      onChange={handleDatePickerChange}
    />
  );
}
