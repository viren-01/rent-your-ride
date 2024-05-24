import { toast } from "react-toastify"
import CommonService from "../../services/CommonService"
import { createSlice } from "@reduxjs/toolkit"
import BookingService from "../../services/BookingService"

const CommonSlice = createSlice({
    name: 'common',
    initialState: {
        cityList: [],
        vehicleList: [],
        showPopup: {}
    },
    reducers: {
        cityListing: (state, action) => {
            state.cityList = action.payload
        },
        vehicleListing: (state, action) => {
            state.vehicleList = action.payload
        },
        showPopup: (state, action) => {
            state.showPopup = action.payload
        }
    }
}) 

export const { cityListing, vehicleListing, showPopup } = CommonSlice.actions

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



export const getVehicleListing = async (dispatch) => {
    try {
        const response = await CommonService.getVehicleList()
        if(response?.status === 200) {
            if(response?.data) {
                dispatch(vehicleListing(response?.data?.data || []))
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

export const updateShowPopup = (params) => async (dispatch) => {
    try {
        dispatch(showPopup(params))
    } catch (error) {
        return
    }
}