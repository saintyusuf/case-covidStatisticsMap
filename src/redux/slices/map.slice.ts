import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IMap {
  data: any | null,
  isLoading: boolean
}

const initialState:IMap = {
  data: null,
  isLoading: false
}

const map = createSlice({
  name: "map",
  initialState,
  reducers: {
    getMapData: (state)=>{
      state.isLoading = true
    },
    getMapDataSuccess: (state, action)=>{
      state.data = action.payload
      state.isLoading = false
    },
    getMapDataFailure: (state)=>{
      state.isLoading = false
    }
  }
})

export const { getMapData, getMapDataSuccess, getMapDataFailure } = map.actions
export default map.reducer