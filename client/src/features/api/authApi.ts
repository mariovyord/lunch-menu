import { api } from './api';

export const authApi = api.injectEndpoints({
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
