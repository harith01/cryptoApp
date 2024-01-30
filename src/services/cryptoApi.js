import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': `${process.env.REACT_APP_CRYPTO_API_KEY}`,
    'X-RapidAPI-Host': `${process.env.REACT_APP_RAPID_API_HOST}`,
}

// const cryptoApiHeaders = {
//     'X-RapidAPI-Key': '11b3430d03msh03e2bec5b174da3p1c3784jsn8ae0d7539b43',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// }

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCrytos: builder.query({
            query: () => createRequest(`/coins`)
        })
    })
});

export const { useGetCrytosQuery } = cryptoApi;