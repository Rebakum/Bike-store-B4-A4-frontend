import { baseApi } from "@/redux/api/baseApi";
import { IOrderResponse, TResponseRedux } from "@/types/types";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<IOrderResponse[] | []>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["order"],
    }),

    revenue: builder.query({
      query: () => ({
        url: `/orders/revenue`,
        method: "GET",
      }),
      providesTags: ["revenue"],
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: `/orders`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["order", "product", "revenue"],
    }),
    verifyOrder: builder.mutation({
      query: (data) => ({
        url: `/orders/verify`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["order", "product"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useAllOrdersQuery,
  useVerifyOrderMutation,
  useRevenueQuery,
} = orderApi;
