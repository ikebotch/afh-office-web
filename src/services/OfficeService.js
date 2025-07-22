import axios from 'axios';
import config from '@/config';

const OfficeService = {
    async getOffices(pageIndex = 1, pageSize = 4) {
        try {
            const response = await axios.get(`${config.apiUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`);
            return response.data;
        } catch (error) {
            console.error('Failed to fetch office locations:', error);
            throw error;
        }
    }
};

export default OfficeService;
