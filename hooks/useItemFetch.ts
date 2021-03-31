import { useContext, useEffect, useState } from "react";
import { ItemContext, ItemUpdateContext } from "../contexts/itemContext";
import { actions, State } from "../reducers/item";
import { Item } from "../types/Item";

export const useItemFetch = () => {
  const itemState = useContext(ItemContext);
  const dispatch = useContext(ItemUpdateContext);

  const addItem = async (name: string) => {
    dispatch(actions.startPostItemAction());
    try {
      const res = await fetch("http://localhost:8080", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: { name } }),
      });
      const data = await res.json();
      dispatch(actions.successPostItemAction(data.item));
    } catch (e) {
      dispatch(actions.failPostItemAction(["Failed"]));
    }
  };

  const fetchItems = () => {
    const res = await fetch("http://localhost:8080");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(actions.startFetchItemsAction());
      try {
        const data = await fetchItems();
        dispatch(actions.successFetchItemsAction(data.data as Item[]));
      } catch (e) {
        dispatch(actions.failFetchItemsAction(["Failed"]));
      }
    };
    fetchData();
  }, []);

  return { itemState, addItem };
};
