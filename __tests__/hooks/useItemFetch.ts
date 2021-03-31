import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { useItemFetch } from "../../hooks/useItemFetch";
import { initialState, actions } from "../../reducers/item";

beforeEach(() => {
  jest.clearAllMocks();
});

test("success", async () => {
  const mockSuccessResponse = {
    data: [{ id: 123, name: "name-123", createdAt: "2020/01/01" }]
  };
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });
  var globalRef: any = global;
  globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  const mockDispatch = jest.fn();

  const mockUseContext = jest
    .fn()
    .mockImplementationOnce(() => initialState)
    .mockImplementationOnce(() => mockDispatch);

  React.useContext = mockUseContext;

  const { result } = renderHook(() => useItemFetch());

  await act(async () => {});

  expect(mockDispatch.mock.calls.length).toBe(2);
  expect(mockDispatch.mock.calls[0][0]).toMatchObject(
    actions.startFetchItemsAction()
  );
  expect(mockDispatch.mock.calls[1][0]).toMatchObject(
    actions.successFetchItemsAction(mockSuccessResponse.data)
  );
});
