import { FAVOURITE_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

export const favouriteSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       
        addFavourite: builder.mutation({
            query: (data) => ({
                url: FAVOURITE_URL,
                method: 'POST',
                body: data,
            }),
        }),
        getFavouriteId: builder.query({
            query: () => ({
                url: FAVOURITE_URL,
            }),    
            keepUnusedDataFor: 5,
        }),
        
    }),
});

export const { 
    useAddFavouriteMutation,
    useGetFavouriteIdQuery,
 } = favouriteSlice;