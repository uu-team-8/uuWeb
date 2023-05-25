import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

function DateTime() {
  const [value, setValue] = React.useState(dayjs("2022-04-17T15:30"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateTimeField", "DateTimeField", "DateTimeField"]}>
        <DateTimeField
          label="Format with meridiem"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="L hh:mm a"
        />
        <DateTimeField
          label="Format without meridiem"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="L HH:mm"
        />
        <DateTimeField
          label="Localized format with full letter month"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="LLL"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

function BasicDate() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DateRangePicker localeText={{ start: "Check-in", end: "Check-out" }} />
      </DemoContainer>
    </LocalizationProvider>
  );
}

const components = {
  BasicDate,
  DateTime,
};

export default components;
