export const getDayStringFromCode = (dayCode: number) => {
	switch (dayCode) {
		case 0:
			return 'Monday';
		case 1:
			return 'Tuesday';
		case 2:
			return 'Wednesday';
		case 3:
			return 'Thursday';
		case 4:
			return 'Friday';
		case 5:
			return 'Saturday';
		case 6:
			return 'Sunday';
		default:
			throw new Error('Number should be from 0 to 6')
	}
}