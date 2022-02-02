import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useQueryParams() {
  const { search } = useLocation();
  let queryParams = useMemo(() => new URLSearchParams(search), [search]);
  let o: any = {};
  queryParams.forEach((value, key) => (o[key] = value));
  return { queryParams, object: o };
}

export default useQueryParams;
