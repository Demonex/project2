import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { environment } from './environment/environment';

const baseQuery = fetchBaseQuery({
    baseUrl: environment.baseUrl + '/api/v1/'
})
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const coreApi = createApi({
    reducerPath: 'coreApi',
    baseQuery: baseQueryWithRetry,
    tagTypes: [],
    endpoints: () => ({}),
})