import { apiPost } from "../utils/api";

class LocalTransferService {
    async saveTransaction(user, header) {
        const response = await apiPost("/api/v1/transfer/local", user, header, true)
        console.log(response.data);
        return response.data;
    }
}

export default new LocalTransferService();