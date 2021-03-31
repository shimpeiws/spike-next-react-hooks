import { useContext, useEffect, useState } from "react";
import { ItemContext, ItemUpdateContext } from "../contexts/itemContext";
import { actions, State } from "../reducers/item";
import { Item } from "../types/Item";
import { useQuery } from "react-query";

const useItems = () => {
  return useQuery("items", async () => {
    const res = await fetch("http://localhost:8080");
    const data = await res.json();
    return data;
  });
};

export const useItemFetch = () => {
  const itemState = useContext(ItemContext);
  const dispatch = useContext(ItemUpdateContext);
  const { isLoading, data, error } = useItems();

  const addItem = async (name: string) => {
    dispatch(actions.startPostItemAction());
    try {
      const res = await fetch("http://localhost:8080", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ item: { name } })
      });
      const data = await res.json();
      dispatch(actions.successPostItemAction(data.item));
    } catch (e) {
      dispatch(actions.failPostItemAction(["Failed"]));
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(actions.failFetchItemsAction(["Failed"]));
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      const d = data as Item[];
      dispatch(actions.successFetchItemsAction(d));
    }
  }, [data]);

  useEffect(() => {
    if (isLoading) {
      dispatch(actions.startLoadingAction);
    } else {
      dispatch(actions.finishLoadingAction);
    }
  }, [isLoading]);

  return { itemState, addItem };
};
