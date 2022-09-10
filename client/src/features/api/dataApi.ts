import { TCart, TCartProduct } from '../../types/types';
import { api } from './api';

const apiWithTag = api.enhanceEndpoints({ addTagTypes: ['CART'] })

export const dataApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query<TCart, string>({
            query: (userId) => ({
                url: `/data/cart?where=_ownerId` + encodeURIComponent(`="${userId}"`),
            }),
            transformResponse: (response: any): TCart => {
                return {
                    _id: response[0]._id,
                    _ownerId: response[0]._ownerId,
                    products: response[0].products
                }
            },
            providesTags: ['CART'],
        }),
        createCart: builder.mutation<TCart, { accessToken: string, body: any }>({
            query: ({ accessToken, body }) => ({
                url: `/data/cart`,
                method: 'POST',
                headers: {
                    'X-Authorization': accessToken,
                },
                body,
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
        })
    })
})

export const {
    useGetCartQuery,
    useCreateCartMutation,
    useUpdateCartMutation,
    useDeleteCartMutation,
} = dataApi;
