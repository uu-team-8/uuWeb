import * as React from 'react';
import dayjs from 'dayjs';
import {DemoContainer, DemoItem} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';

function DateTime({onChange}) {
    const [date, setDate] = React.useState([
        dayjs('2023-04-17'),
        dayjs('2023-04-21'),
    ]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
                <DemoItem component="DateRangePicker">
                    <DateRangePicker
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                            onChange(newValue); // Invoke the onChange prop with the new date range
                        }}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default DateTime;
