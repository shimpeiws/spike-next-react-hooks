import { createContext, Dispatch, ReactChild, useReducer } from "react";
import { initialState, reducer, State, ActionType } from "../reducers/item";

export const ItemContext = createContext<State | undefined>(undefined);

export const ItemUpdateContext = createContext<Dispatch<ActionType>>(null);

export function ItemContextProvider({ children }: { children: ReactChild }) {
  const [items, dispatch] = useReducer(reducer, initialState);

  return (
    <ItemContext.Provider value={items}>
      <ItemUpdateContext.Provider value={dispatch}>
        {children}
      </ItemUpdateContext.Provider>
    </ItemContext.Provider>
  );
}
