import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/user.type";

export const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRestaurant: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/restaurant/all",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Restaurant"],
    }),

    getRestaurant: builder.query({
      query: (id) => ({
        url: `/restaurant/${id}`,
      }),
      providesTags: ["Restaurant"],
    }),

    createRastaurant: builder.mutation({
      query: (data) => ({
        url: "/restaurant",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Restaurant"],
    }),

    updateRastaurant: builder.mutation({
      query: (args) => ({
        url: `/restaurant/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["Restaurant"],
    }),

    deleteRastaurant: builder.mutation({
      query: (id) => ({
        url: `/restaurant/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Restaurant"],
    }),

    coreRestaurent: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/restaurant/core-ten",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Restaurant"],
    }),
  }),
});

export const {
  useGetAllRestaurantQuery,
  useGetRestaurantQuery,
  useCreateRastaurantMutation,
  useUpdateRastaurantMutation,
  useDeleteRastaurantMutation,
  useCoreRestaurentQuery,
} = restaurantApi;
