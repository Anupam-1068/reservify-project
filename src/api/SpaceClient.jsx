import axios from "axios";

const spaceClient = {

    getAllStudySpaces(){
        return axios.get("/api/studySpace")
    },
    createspace(space){
        return axios.post("/api/studySpace", space)
    },
    getStudySpaceById(spaceId) {
        return axios.get(`/api/studySpace/${spaceId}`)
    },
}

export {spaceClient}