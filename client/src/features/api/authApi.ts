import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3030',
    }),
    endpoints: (builder) => ({
        signIn: builder.mutation<any, { email: string, password: string }>({
            query: ({ email, password }) => ({
                url: '/users/login',
                method: 'POST',
                body: {
                    email,
                    password,
                },
            }),
        }),
    })
})

export const {
    useSignInMutation,
} = authApi;
