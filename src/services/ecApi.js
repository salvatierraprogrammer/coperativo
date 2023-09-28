import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../firebase/api';


export const ecApi = createApi({
    reducerPath: "ecApi",
    baseQuery: fetchBaseQuery({
    baseUrl: base_url,
}),

    endpoints: (builder) => ({
    getCategories: builder.query({
        query: () => "categories.json",
        }),
   
    getMedicacions: builder.query({
      query: () => "medicacions.json",
        }),
    }),
});

export const { useGetCategoriesQuery, useGetMedicacionsQuery } = ecApi; 

