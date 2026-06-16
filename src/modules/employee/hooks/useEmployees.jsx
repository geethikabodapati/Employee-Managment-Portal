import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchEmployeesThunk,
  addEmployeeAction,
  deleteEmployeeAction,
} from "../store/actions";

export const useEmployeesQuery = () => {
  const dispatch = useDispatch();
  const { employees = [], isFetched } = useSelector(
    (state) => state.employee || {}
  );

  const query = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      if (!isFetched) {
        await dispatch(fetchEmployeesThunk());
      }
      return true;
    },
  });

  return {
    ...query,
    data: employees,
  };
};

export const useAddEmployeeMutation = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => {
      dispatch(addEmployeeAction(data)); 
      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
};

export const useDeleteEmployeeMutation = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => {
      dispatch(deleteEmployeeAction(id)); 
      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });
};