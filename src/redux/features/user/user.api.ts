import baseApi from "@/redux/api/baseApi";
import { TQueryParams } from "@/types/user.type";

export const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/users",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: (id) => ({
        url: `/users/profile`,
        method: "PUT",
        body: id,
      }),
      invalidatesTags: ["User"],
    }),

    updateUserStatus: builder.mutation({
      query: (args) => ({
        url: `/users/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["User"],
    }),

    getAllMedia: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }
        return {
          url: "/media",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Media"],
    }),

    getmedia: builder.query({
      query: (id) => ({
        url: `/media/${id}`,
        method: "GET",
      }),
      providesTags: ["Media"],
    }),

    updateMedia: builder.mutation({
      query: (args) => ({
        url: `/media/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["Media"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserMutation,
  useUpdateUserStatusMutation,
  useGetmediaQuery,
  useGetAllMediaQuery,
  useUpdateMediaMutation,
} = restaurantApi;
