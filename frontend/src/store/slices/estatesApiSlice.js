import { ESTATES_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

export const estatesApiSlice = apiSlice.injectEndpoints({    
    endpoints: (builder) => ({
        getEstates: builder.query({
            query: () => ({
                url: ESTATES_URL,
            }),
            keepUnusedDataFor: 5,           
        }), 
        getEstateById: builder.query({
            query: (imgId) => ({
                url: `${ESTATES_URL}/${imgId}`
            }),
            keepUnusedDataFor: 5,
        }),
        getSearchByType: builder.mutation({
            query: (data) => ({
                url:ESTATES_URL,
                method: "POST",
                body: data,
            }),
        }),      
    }),
})

export const { 
    useGetEstatesQuery,
    useGetEstateByIdQuery,
    useGetSearchByTypeMutation,
} = estatesApiSlice;