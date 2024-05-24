import MasterService from "./MasterService";

class CommonService {
    getCityList() {
        return MasterService.get('/common/getCities')
    }

    getVehicleList() {
        return MasterService.post('/vehicle/getAll')
    }
}

const service = new CommonService()
export default service