import { api } from './api';

const apiWithTag = api.enhanceEndpoints({ addTagTypes: ['CART'] })

export const dataApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query<any, { userId: string }>({
            query: ({ userId }) => ({
                url: `/data/cart?where=owner=${userId}`
            }),
            providesTags: ['CART'],
        }),
        createCart: builder.mutation<any, { accessToken: string, body: any }>({
            query: ({ accessToken, body }) => ({
                url: `/data/cart`,
                method: 'POST',
                headers: {
                    'X-Authorization': accessToken,
                },
                body,
            }),
            invalidatesTags: ['CART'],
        }),
        updateCart: builder.mutation<any, { accessToken: string, body: any, cartId: string, }>({
            query: ({ accessToken, body, cartId }) => ({
                url: `/data/cart/${cartId}`,
                method: 'POST',
                headers: {
                    'X-Authorization': accessToken,
                },
                body
            }),
            invalidatesTags: ['CART'],
        }),
        deleteCart: builder.mutation<any, { accessToken: string, cartId: string }>({
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
