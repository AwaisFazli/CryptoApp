// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

// const cryptoNewsHeaders = {
//   "x-bingapis-sdk": "true",
//   "'x-rapidapi-key'": "209a228048msh5cb6313198371dfp1b650bjsne7e8ca88ddc2",
//   "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
// };

// const baseUrl = "https://bing-news-search1.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//   reducerPath: "cryptoNewsApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({ newsCategory, count }) =>
//         createRequest(
//           `/news/search?q=${"Cryptocurrency"}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${10}`
//         ),
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "209a228048msh5cb6313198371dfp1b650bjsne7e8ca88ddc2",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
