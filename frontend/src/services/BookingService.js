import MasterService from "./MasterService";

class BookingService {
    createBooking(params) {
        return MasterService.post('/booking/create', params)
    }
}
const service = new BookingService()
export default service