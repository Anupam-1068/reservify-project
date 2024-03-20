

const SpotClient = {
    createSpot(spot){
        return axios.post("api/spot", spot)
    }
}

export {SpotClient}