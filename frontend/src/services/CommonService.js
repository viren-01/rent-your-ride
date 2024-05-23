import MasterService from "./MasterService";

class CommonService {
    getCityList() {
        return MasterService.get('/common/getCities')
    }
}

export default new CommonService()