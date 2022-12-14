import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TDaysOfTheWeekCodes } from '../../types/types';
import { getDayStringFromCode } from '../../utils/getDayStringFromCode';
import { RootState } from '../../app/store';

const getInitialState = () => {
    const date = new Date();
    const day = date.getDay();

    return {
        code: day,
        title: getDayStringFromCode(day),
    }
};

export const daySlice = createSlice({
    name: 'day',
    initialState: getInitialState(),
    reducers: {
        setDay: (state, action: PayloadAction<TDaysOfTheWeekCodes>) => {
            state = {
                code: action.payload,
                title: getDayStringFromCode(action.payload),
            }
        },
    }
})

export const dayActions = daySlice.actions;
export const selectDay = (state: RootState) => state.day;

export default daySlice.reducer;