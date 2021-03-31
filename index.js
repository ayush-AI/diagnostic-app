if("serviceWorker" in navigator){

    navigator.serviceWorker.register("serviceworker.js").then(registration => {
        console.log("serviceWorker Registered");
    }).catch(error => {
        console.log("serviceWorker Registration failed");
        console.log(error);
    }); 
    
}