const axios = require("axios");

const GetAPI = {
  CreateHousing: async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/housings",
        formData
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  PatchHousing: async (formData, id) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/housings/${id}`,
        formData
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  GetHousingFilter: async (city, leasecontract, housingtype) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/housings/${city}/${leasecontract}/${housingtype}`
      );
      return response;
    } catch (e) {
      console.log("erreur");
    }
  },
  GetHousingByID: async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/housings/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
  GetAllHousing: async () => {
    try {
      const response = await axios.get("http://localhost:8080/housings");
      return response;
    } catch (e) {
      console.log("erreur");
    }
  },
  GetHousingDescription: async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/housing/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  DeleteHousing: async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/housings/${id}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  CreateCustomer: async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/customers",
        data
      );

      if (response.status === 201) {
        return "compte creer";
      }
    } catch (e) {
      console.error(e);
      return "compte deja creer";
    }
  },
  Login: async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/login", data);
      return response;
    } catch (e) {
      console.log(e);
    }
  },

  PostEmail: async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/sendmail", data);
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};

export default GetAPI;
