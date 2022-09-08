import { TDaysOfTheWeek } from "../types/types";

export const getDayCodeFromString = (dayCode: TDaysOfTheWeek) => {
	switch (dayCode.toLowerCase()) {
		case 'monday':
			return 1;
		case 'tuesday':
			return 2;
		case 'wednesday':
			return 3;
		case 'thursday':
			return 4;
		case 'friday':
			return 5;
		case 'saturday':
			return 6;
		case 'sunday':
			return 0;
		default:
			throw new Error('Argument should be a valid day!')
	}
}