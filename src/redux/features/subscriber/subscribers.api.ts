import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/user.type";

export const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllInActiveSubscribers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/auth/inactive-subscribers",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["User"],
    }),


  }),
});

export const { useGetAllInActiveSubscribersQuery } = restaurantApi;
