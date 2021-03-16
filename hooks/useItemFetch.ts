import { useContext, useEffect, useState } from "react";
import { ItemContext, ItemUpdateContext } from "../contexts/itemContext";
import { actions, State } from "../reducers/item";
import { Item } from "../types/Item";

export const useUserFetch = (): [State] => {
  const itemState = useContext(ItemContext);
  const dispatch = useContext(ItemUpdateContext);

  useEffect(() => {
    const fetchData = async () => {
      if (!dispatch) retur;
      dispatch(actions.startFetchItemsAction());
      fetch("http://example.com")
        .then((res) => res.json())
        .then((data) =>
          dispatch(actions.successFetchItemsAction(data as Item[]))
        )
        .catch(() => dispatch(actions.failFetchItemsAction(["Failed"])));
    };
    fetchData();
  }, []);

  return [itemState];
};
