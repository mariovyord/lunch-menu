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
        signOut: builder.mutation<any, { accessToken: string }>({
            query: ({ accessToken }) => ({
                url: '/users/logout',
                method: 'GET',
                headers: {
                    'X-Authorization': accessToken,
                }
            })
        })
    })
})

export const {
    useSignInMutation,
    useSignOutMutation,
} = authApi;
