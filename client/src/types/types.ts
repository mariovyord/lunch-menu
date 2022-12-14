export type TDaysOfTheWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export type TDaysOfTheWeekCodes = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type TCartProduct = {
    title: string,
    qty: number,
    price: number,
    description: string,
}

export type TUser = {
    _id: string,
    accessToken: string,
    email: string,
    username: string,
}

export type TCart = {
    _id: string,
    _ownerId: string,
    products: TCartProduct[]
}