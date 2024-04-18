import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state) => state.mailbox.users;
export const selectFilter = (state) => state.mailbox.filter;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    return users.filter((user) => {
      console.log("CALCULATIONS!");
      return (
        user.userName.toLowerCase().includes(filter.toLowerCase()) ||
        user.userEmail.toLowerCase().includes(filter.toLowerCase())
      );
    });
  }
);

  // const filteredUsers = useMemo(
  //   () =>
  //     users.filter((user) => {
  //       return (
  //         user.userName.toLowerCase().includes(filter.toLowerCase()) ||
  //         user.userEmail.toLowerCase().includes(filter.toLowerCase())
  //       );
  //     }),
  //   [filter, users]
  // );