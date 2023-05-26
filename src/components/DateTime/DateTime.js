import * as React from 'react';
import dayjs from 'dayjs';
import {DemoContainer, DemoItem} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';

function DateTime() {
    const [date, setDate] = React.useState([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
    ]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
                <DemoItem component="DateRangePicker">
                    <DateRangePicker
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default DateTime;
