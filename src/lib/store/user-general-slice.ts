import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface IUserGeneral {
  name: string,
  isExcited: boolean,
  isLoaded: boolean,
}

const initialState: IUserGeneral = {
  name: "",
  isExcited: false,
  isLoaded: false
}

const userGeneralSlice = createSlice({
  name: "user-general-slice",
  initialState: initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      const _name = action.payload;
      if (_name.length! < 0) return;
      state.name = _name
    },
    setIsExcited(state, action: PayloadAction<boolean>) {
      const _boolean_state = action.payload;
      state.isExcited = _boolean_state
    },
    setIsLoaded(state, action: PayloadAction<boolean>) {
      const _boolean_state = action.payload;
      state.isLoaded = _boolean_state
    }
  }
})


export const { setIsExcited, setIsLoaded, setName } = userGeneralSlice.actions
export default userGeneralSlice.reducer
