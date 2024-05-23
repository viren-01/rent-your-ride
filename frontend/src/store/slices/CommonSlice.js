import { toast } from "react-toastify"
import CommonService from "../../services/CommonService"
import { createSlice } from "@reduxjs/toolkit"
import BookingService from "../../services/BookingService"

const CommonSlice = createSlice({
    name: 'common',
    initialState: {
        cityList: []
    },
    reducers: {
        cityListing: (state, action) => {
            state.cityList = action.payload
        }
    }
}) 

export const { cityListing } = CommonSlice.actions

export default CommonSlice.reducer


export const getCityListing = async (dispatch) => {
    try {
        const response = await CommonService.getCityList()
        if(response?.status === 200) {
            if(response?.data) {
                dispatch(cityListing(response?.data?.data || []))
                return response.data
            }
        } else {
            toast.error(response?.data?.message || 'error occured')
            return
        }
    } catch (error) {
        toast.error(error)
        return
    }
}


export const createBooking = async (params) => {
    try {
        const response = await BookingService.createBooking(params)
        if(response?.status === 200) {
            if(response?.data) {
                return response.data
            }
        } else {
            toast.error(response?.data?.message || 'error occured')
            return
        }
    } catch (error) {
        toast.error(error)
        return
    }
}