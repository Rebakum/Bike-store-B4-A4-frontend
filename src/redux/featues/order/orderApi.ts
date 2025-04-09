import { baseApi } from "@/redux/api/baseApi";
import { IOrderResponse, TResponseRedux } from "@/types/types";

// Define the order API with various endpoints
const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Query to fetch all orders
    fetchAllOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<IOrderResponse[] | []>) => ({
        data: response.data,
        meta: response.meta,
      }),
      providesTags: ["order"],
    }),

    // Query to fetch revenue data
    getRevenue: builder.query({
      query: () => ({
        url: "/orders/revenue",
        method: "GET",
      }),
      providesTags: ["revenue"],
    }),

    //  create a new order
    createNewOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order", "product", "revenue"],
    }),

    // verify an order
    confirmOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/verify",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["order", "product"],
    }),
  }),
});

export const {
  useCreateNewOrderMutation,
  useFetchAllOrdersQuery,
  useConfirmOrderMutation,
  useGetRevenueQuery,
} = orderApi;
