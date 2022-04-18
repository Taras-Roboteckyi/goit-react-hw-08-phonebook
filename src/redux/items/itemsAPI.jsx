import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://624b3ec871e21eebbcef8fb0.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    ////GET запит на бекенд////////
    fetchContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),

    ////Delete запит на бекенд////////
    deleteContacts: builder.mutation({
      query: contactsID => ({
        url: `contacts/${contactsID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),

    ////POST запит на бекенд////////
    createContacts: builder.mutation({
      query: createContact => ({
        url: `contacts`,
        method: 'POST',
        body: createContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchContactsQuery, useDeleteContactsMutation, useCreateContactsMutation } =
  contactsApi;
