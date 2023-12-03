import { INewUser } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { createUserAccount } from "../appwright/api";

export const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};
