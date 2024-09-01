import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_AFF_BASE_URL}/api/v1/`,
  prepareHeaders: (headers, { getState }) => {

    // const token = (getState() as RootState).auth.token;
    const cookieValue = Cookies.get('authData');

    if (cookieValue) {
      const parsedCookie = JSON.parse(cookieValue);
      const accessToken = parsedCookie.sessionToken

      headers.set('authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
});