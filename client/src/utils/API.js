import axios from "axios";

export default {
    saveClient: function(eclientRoutes) {
      return axios.post("/api/homepage", eclientRoutes);
    },
    getClients: function(clientRoutes) {
      return axios.get("/api/clients", clientRoutes);
    },
    getClient: function(id) {
      return axios.get("/api/clients/" + id);
    },
    updateClient: function(id, bodyinfo) {
      return axios.put("/api/clients/" + id, bodyinfo);
    },
    updatethisClient: function(id, bodyinfo) {
      return axios.put("/api/homepage/" + id, bodyinfo);
    }
  
};
