import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
import { TCart, TCartProduct, TUser } from '../../types/types';
// TODO see this for auth state
// TODO https://github.com/reduxjs/redux-toolkit/issues/1509#issuecomment-919255436
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3030',
    }),
    tagTypes: ['CART'],
    endpoints: (builder) => ({
        getCart: builder.query<TCart, TUser>({
            query: (user) => ({
                url: `/data/cart?where=_ownerId` + encodeURIComponent(`="${user._id}"`),
            }),
            transformResponse: (response: any): TCart => {
                return {
                    _id: response[0]._id,
                    _ownerId: response[0]._ownerId,
                    products: response[0].products
                }
            },
            providesTags: ['CART'],
            async onQueryStarted(body, { dispatch, queryFulfilled }) {
                queryFulfilled.then(res => {
                    return res;
                }).catch(err => {
                    if (err.error.status === 404) {
                        dispatch(api.endpoints.createCart.initiate({
                            accessToken: body.accessToken,
                            products: [],
                        }))
                    }
                })
            }
        }),
        createCart: builder.mutation<TCart, { accessToken: string, products: TCartProduct[] }>({
            query: ({ accessToken, products }) => ({
                url: `/data/cart`,
                method: 'POST',
                headers: {
                    'X-Authorization': accessToken,
                },
                body: {
                    products,
                },
            }),
            transformResponse: (response: any): TCart => {
                return {
                    _id: response._id,
                    _ownerId: response._ownerId,
                    products: response.products
                }
            },
            invalidatesTags: ['CART'],
        }),
        updateCart: builder.mutation<TCart, { accessToken: string, cart: TCart }>({
            query: ({ accessToken, cart }) => ({
                url: `/data/cart/${cart._id}`,
                method: 'PUT',
                headers: {
                    'X-Authorization': accessToken,
                },
                body: cart,
            }),
            transformResponse: (response: any): TCart => {
                return {
                    _id: response._id,
                    _ownerId: response._ownerId,
                    products: response.products
                }
            },
            invalidatesTags: ['CART'],
        }),
        deleteCart: builder.mutation<unknown, { accessToken: string, cartId: string }>({
            query: ({ accessToken, cartId }) => ({
                url: `/data/cart/${cartId}`,
                method: 'DELETE',
                headers: {
                    'X-Authorization': accessToken,
                }
            }),
            invalidatesTags: ['CART'],
        }),
        signIn: builder.mutation<any, { email: string, password: string }>({
            query: ({ email, password }) => ({
                url: '/users/login',
                method: 'POST',
                body: {
                    email,
                    password,
                },
            }),
            invalidatesTags: ['CART']
        }),
        signOut: builder.mutation<any, { accessToken: string }>({
            query: ({ accessToken }) => ({
                url: '/users/logout',
                method: 'GET',
                headers: {
                    'X-Authorization': accessToken,
                }
            }),
            invalidatesTags: ['CART'],
        }),
    })
})

export const {
    useSignInMutation,
    useSignOutMutation,
    useGetCartQuery,
    useCreateCartMutation,
    useUpdateCartMutation,
    useDeleteCartMutation,
} = api;
