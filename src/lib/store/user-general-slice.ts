import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface IUserGeneral {
  name: string
  isLoaded: boolean
  isLogout: boolean
}

// Get stored data safely
const nameFromStorage = localStorage.getItem("user_info") ?? ""
const isLogoutFromStorage = localStorage.getItem("user_isLogout")

// Parse safely (in case it's not JSON)
const parsedIsLogout =
  isLogoutFromStorage !== null ? JSON.parse(isLogoutFromStorage) : false

const initialState: IUserGeneral = {
  name: nameFromStorage,
  isLoaded: false, // since you’re loading from localStorage
  isLogout: parsedIsLogout,
}

const userGeneralSlice = createSlice({
  name: "user-general-slice",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      const _name = action.payload.trim()
      if (_name.length === 0) return
      state.name = _name
      localStorage.setItem("user_info", _name)
    },
    setIsLogout(state, action: PayloadAction<boolean>) {
      const _booleanState = action.payload
      state.isLogout = _booleanState
      localStorage.setItem("user_isLogout", JSON.stringify(_booleanState))
    },

    setIsLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload
    },
  },
})

export const { setIsLogout, setIsLoaded, setName } = userGeneralSlice.actions
export default userGeneralSlice.reducer
