import axios from "axios";

const spaceClient = {

    getAllStudySpaces(){
        return axios.get("/api/studySpace")
    },
    createspace(space){
        return axios.post("/api/studySpace", space)
    },
    getStudySpaceById(spaceId) {
        console.log(`/api/studySpace/${spaceId}`);
        return axios.get(`/api/studySpace/${spaceId}`)
    },
}

export {spaceClient}