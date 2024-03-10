import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICovid {
  data: {
    date: string
    confirmed: number
    deaths: number
    recovered: number
    confirmed_diff: number
    deaths_diff: number
    recovered_diff: number
    last_update: string
    active: number
    active_diff: number
    fatality_rate: number
    region: {
      iso: string
      name: string
      province: string
      lat: string
      long: string
    }
  } | null,
  isLoading: boolean
}

const initialState:ICovid = {
  data: null,
  isLoading: false
}

const covid = createSlice({
  name: "covid",
  initialState,
  reducers: {
    getCovidData: (state, action: PayloadAction<string>)=>{
      state.isLoading = true
    },
    getCovidDataSuccess: (state, action)=>{
      state.data = action.payload
      state.isLoading = false
    },
    getCovidDataFailure: (state)=>{
      state.isLoading = false
    }
  }
})

export const { getCovidData, getCovidDataSuccess, getCovidDataFailure } = covid.actions
export default covid.reducer