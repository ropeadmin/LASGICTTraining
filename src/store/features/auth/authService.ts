import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/config/auth-config'
import type { LoginRequest, SignupRequest } from './authType'



export const authApi = createApi({
  baseQuery,
  reducerPath: 'authApi',
  endpoints: (builder) => ({
    signup: builder.mutation<any, SignupRequest>(
    {
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation<any, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    })
})

export const { 
  useLoginMutation, useSignupMutation
} = authApi
