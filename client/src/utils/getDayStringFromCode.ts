export const getDayStringFromCode = (dayCode: number) => {
	switch (dayCode) {
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
		case 0:
			return 'Sunday';
		default:
			throw new Error('Number should be from 0 to 6')
	}
}