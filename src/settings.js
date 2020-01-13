const URLs = {
    "loginApi": "https://jjugroup.ga/Euro-Delivery-Manager/",
    "userUrl" : "https://jjugroup.ga/Euro-Delivery-Manager/api/info/",
    "DeliveryUrl": "https://jjugroup.ga/Euro-Delivery-Manager/api/deliveries/all"
}

function Settings() {
    const getURL = (key) => { return URLs[key] }

    return {
        getURL
    }
}
export default Settings();