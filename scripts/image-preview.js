import axios from "./axios.js";
import {renderPrevImg} from "./render.js";

const URL = location.search;
const IMAGE_ID = new URLSearchParams(URL).get("image-id")

const loadSingle = async (id) => {
    try {
        const responce = await axios(`/photos/${id}`);
        renderPrevImg(responce.data)
    } catch (error) {
        console.log(error);
    }
}
loadSingle(IMAGE_ID)