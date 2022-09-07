import { TDaysOfTheWeek } from "../types/types";

export const getDayCodeFromString = (dayCode: TDaysOfTheWeek) => {
	switch (dayCode.toLowerCase()) {
		case 'monday':
			return 0;
		case 'tuesday':
			return 1;
		case 'wednesday':
			return 2;
		case 'thursday':
			return 3;
		case 'friday':
			return 4;
		case 'saturday':
			return 5;
		case 'sunday':
			return 6;
		default:
			throw new Error('Argument should be a valid day!')
	}
}