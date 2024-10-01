import * as postFetch from "./custom.js"

// REQUISIÇÃO

postFetch.interceptors.request.use(
    function(config){
        console.log("antes da requisição")
        return config;
    },
    function(error){
        return Promise.reject(error)

    }
)

// RESPOSTA

postFetch.interceptors.respose.use(
    function(response){
        console.log("antes da resposta")
        return config;
    },
    function(error){
        return Promise.reject(error)

    }
)