import { Item } from "../types/Item";

const START_FETCH_ITEMS = "START_FETCH_ITEMS" as const;
const SUCCESS_FETCH_ITEMS = "SUCCESS_FETCH_ITEMS" as const;
const FAIL_FETCH_ITEMS = "FAIL_FETCH_ITEMS" as const;

const startFetchItemsAction = () => {
  return { type: START_FETCH_ITEMS };
};

const successFetchItemsAction = (items: Item[]) => {
  return { type: SUCCESS_FETCH_ITEMS, payload: { items } };
};

const failFetchItemsAction = (errors: strint[]) => {
  return { type: FAIL_FETCH_ITEMS, payload: { errors } };
};

export const actions = {
  startFetchItemsAction,
  successFetchItemsAction,
  failFetchItemsAction,
};

export type ActionType =
  | ReturnType<typeof startFetchItemsAction>
  | ReturnType<typeof successFetchItemsAction>
  | ReturnType<typeof failFetchItemsAction>;

export type State = {
  loading: boolean;
  items: Item[] | undefined;
  errors: string[] | undefined;
};

export const initialState: State = {
  loading: false,
  items: undefined,
  errors: undefined,
};

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case START_FETCH_ITEMS:
      return {
        ...state,
        loading: true,
        errors: undefined,
      };
    case SUCCESS_FETCH_ITEMS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
      };
    case FAIL_FETCH_ITEMS:
      return {
        ...state,
        loading: false,
        data: undefined,
        errors: action.payload.errors,
      };
    default:
      return state;
  }
};
