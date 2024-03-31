import axios from "axios";

const spaceClient = {

    getAllStudySpaces(){
        return axios.get("api/studySpace")
    },
    createspace(space){
        return axios.post("api/studySpace", space)
    },
    findStudySpaceModelBySpaceIdById(id) {
        return axios.get(`api/studySpace/${id}`)
    },
}

export {spaceClient}