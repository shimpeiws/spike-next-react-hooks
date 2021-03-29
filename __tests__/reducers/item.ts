import { actions, initialState, reducer } from "../../reducers/item";
import { Item } from "../../types/Item";

test("START_FETCH_ITEMS", () => {
  const startFetchItemsAction = actions.startPostItemAction();
  const state = reducer(initialState, startFetchItemsAction);
  expect(state).toEqual({
    ...initialState,
    loading: true,
    errors: undefined,
  });
});

test("SUCCESS_FETCH_ITEMS", () => {
  const items: Item[] = [
    {
      id: 123,
      name: "item123",
      createdAt: "2020/01/01",
    },
    {
      id: 234,
      name: "item234",
      createdAt: "2021/01/01",
    },
  ];
  const successFetchItemsAction = actions.successFetchItemsAction(items);
  const state = reducer(initialState, successFetchItemsAction);
  expect(state).toEqual({
    ...initialState,
    loading: false,
    items: items,
  });
});

test("FAIL_FETCH_ITEMS", () => {
  const errors = ["some error"];
  const failFetchItemsAction = actions.failFetchItemsAction(errors);
  const state = reducer(initialState, failFetchItemsAction);
  expect(state).toEqual({
    ...initialState,
    loading: false,
    items: undefined,
    errors: errors,
  });
});

test("START_POST_ITEM", () => {
  const startPostItemAction = actions.startFetchItemsAction();
  const state = reducer(initialState, startPostItemAction);
  expect(state).toEqual({
    ...initialState,
    loading: true,
    errors: undefined,
  });
});

test("SUCCESS_POST_ITEM", () => {
  const item: Item = {
    id: 345,
    name: "item345",
    createdAt: "2020/02/02",
  };
  const successPostItemAction = actions.successPostItemAction(item);
  const state = reducer(initialState, successPostItemAction);
  expect(state).toEqual({
    ...initialState,
    loading: false,
    items: [item],
  });
});

test("FAIL_POST_ITEM", () => {
  const errors = ["some error"];
  const failPostItemAction = actions.failPostItemAction(errors);
  const state = reducer(initialState, failPostItemAction);
  expect(state).toEqual({
    ...initialState,
    loading: false,
    errors: errors,
  });
});
