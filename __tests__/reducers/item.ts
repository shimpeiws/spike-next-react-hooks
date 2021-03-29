import { actions, initialState, reducer } from "../../reducers/item";

test("START_FETCH_ITEMS", () => {
  const startFetchItemsAction = actions.startPostItemAction();
  const state = reducer(initialState, startFetchItemsAction);
  expect(state).toEqual({
    ...initialState,
    loading: true,
    errors: undefined,
  });
});
