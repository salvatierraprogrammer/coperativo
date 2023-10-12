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
           // ACCESO A LA IMAGEN EN LA BD
    getImage: builder.query({
        query: () => "image.json",
      }),
  
      // ENVIA LA IMAGEN A LA BD
      putImage: builder.mutation({
        query: (image) => ({
          url: "image.json",
          method: "PUT",
          body: image,
        }),
      }),
    }),
  });
  

export const { useGetCategoriesQuery, useGetMedicacionsQuery, useGetImageQuery, usePutImageMutation } = ecApi; 

