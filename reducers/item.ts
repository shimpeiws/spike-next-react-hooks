import { Item } from "../types/Item";

const START_FETCH_ITEMS = "START_FETCH_ITEMS" as const;
const SUCCESS_FETCH_ITEMS = "SUCCESS_FETCH_ITEMS" as const;
const FAIL_FETCH_ITEMS = "FAIL_FETCH_ITEMS" as const;
const START_POST_ITEM = "START_POST_ITEM" as const;
const SUCCESS_POST_ITEM = "SUCCESS_POST_ITEM" as const;
const FAIL_POST_ITEM = "FAIL_POST_ITEM" as const;

const startFetchItemsAction = () => {
  return { type: START_FETCH_ITEMS };
};

const successFetchItemsAction = (items: Item[]) => {
  return { type: SUCCESS_FETCH_ITEMS, payload: { items } };
};

const failFetchItemsAction = (errors: string[]) => {
  return { type: FAIL_FETCH_ITEMS, payload: { errors } };
};

const startPostItemAction = () => {
  return { type: START_FETCH_ITEMS };
};

const successPostItemAction = (item: Item) => {
  return { type: SUCCESS_POST_ITEM, payload: { item } };
};

const failPostItemAction = (errors: string[]) => {
  return { type: FAIL_POST_ITEM, payload: { errors } };
};

export const actions = {
  startFetchItemsAction,
  successFetchItemsAction,
  failFetchItemsAction,
  startPostItemAction,
  successPostItemAction,
  failPostItemAction,
};

export type ActionType =
  | ReturnType<typeof startFetchItemsAction>
  | ReturnType<typeof successFetchItemsAction>
  | ReturnType<typeof failFetchItemsAction>
  | ReturnType<typeof startPostItemAction>
  | ReturnType<typeof successPostItemAction>
  | ReturnType<typeof failPostItemAction>;

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
        items: undefined,
        errors: action.payload.errors,
      };
    case START_POST_ITEM:
      return {
        ...state,
        loading: true,
        errors: undefined,
      };
    case SUCCESS_POST_ITEM:
      console.info(state.items);
      return {
        ...state,
        loading: false,
        items: state.items
          ? [...state.items, action.payload.item]
          : [action.payload.item],
      };
    case FAIL_POST_ITEM:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
      };
    default:
      return state;
  }
};
