import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface IUserGeneral {
  name: string
  isLoaded: boolean
  isLogout: boolean
}


// Parse safely (in case it's not JSON)

const initialState: IUserGeneral = {
  name: "",
  isLoaded: false,
  isLogout: true,
}

const userGeneralSlice = createSlice({
  name: "user-general-slice",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      const _name = action.payload.trim()
      if (_name.length === 0) return
      state.name = _name
    },
    setIsLogout(state, action: PayloadAction<boolean>) {
      const _booleanState = action.payload
      state.isLogout = _booleanState
    },

    setIsLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload
    },
  },
})

export const { setIsLogout, setIsLoaded, setName } = userGeneralSlice.actions
export default userGeneralSlice.reducer
