import { create } from "zustand";

type AppState = {
  userToken: string;
  setUserToken: (payload: { token: string }) => void;
};

const initialState: Pick<AppState, "userToken"> = {
  userToken: "",
};

const appStore = create<AppState>((set) => ({
  ...initialState,
  //Action
  setUserToken: ({ token }: { token: string }) =>
    set(() => ({
      userToken: token,
    })),
}));

export default appStore;
