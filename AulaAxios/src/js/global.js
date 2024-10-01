const { default: axios, Axios, AxiosHeaders } = require("axios");

axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common["Authorization"] = "MEUTOKENDEACCESS"