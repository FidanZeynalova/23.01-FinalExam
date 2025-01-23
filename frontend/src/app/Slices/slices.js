import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cosmeticApi = createApi({
    reducerPath: 'cosmeticApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => `cosmetic/`,
        }),
        getDataById: builder.query({
            query: (id) => `cosmetic/${id}`,
        }),
        postData: builder.mutation({
            query: (newData) => ({
                url: `cosmetic/`,
                body: newData,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
        }),
        deleteData: builder.mutation({
            query: (id) => ({
                url: `cosmetic/${id}`,
                method: "DELETE"

            })
        })
    }),
})

export const { useGetDataQuery, useDeleteDataMutation, usePostDataMutation, useGetDataByIdQuery } = cosmeticApi