import MasterService from "./MasterService";

class BookingService {
    createBooking(params) {
        return MasterService.post('/booking/create', params)
    }
}

export default new BookingService()