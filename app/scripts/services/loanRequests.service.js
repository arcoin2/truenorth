import axiosInstance from './axios.config';


const loanRequestsService = {
    
    getAllCountries: function () {
        return axiosInstance.get('/timezone');
    },
    getCountryDetails: function (country) {
        return axiosInstance.get(`/timezone/${country}`);
    },
    putCountry: function (country) {
        return axiosInstance.put(`/timezone/${country}`);
    },
    deleteCountry: function (country) {
        return axiosInstance.delete(`/timezone/${country}`);
    },
}


export default loanRequestsService; 