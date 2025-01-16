import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const api = createApi({
reducerPath : 'fidelityApi',
baseQuery : fetchBaseQuery({
  baseUrl : 'https://jsonplaceholder.typicode.com/'
}),
endpoints : (builder) => ({
  getFidelity : builder.query({
    query: () => 'todos/1'
    })
  })
})

export const  {useGetFidelityQuery } = api;