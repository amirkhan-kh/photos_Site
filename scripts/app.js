import axios from "./axios.js";
import { renderPhotosGrid } from "./render.js";

const API_KEY = "gNmvSLQY6yU4Z2Z4vmxIkmNI1RhDdA3uonxDMrjP5gfQpqwAhOb89Dba";

localStorage.setItem("key", API_KEY)

const loadData = async (searchWord) => {
    try {
        // LOADING block
        const response = await axios(`/search?query=${searchWord}&per_page=60`)
           
        if (!response.status || response.status !== 200) {
            throw new Error(response);
        }

        const data = response.data;
        renderPhotosGrid(data.photos);
    } catch (error) {
        console.log(error.message);
    }
    finally{
        //LOADIN NONE
    }
}

loadData("nature");

const searPhotos = (e) => {
    e.preventDefault()
    loadData($search.value)
}
$searchForm.addEventListener("submit" ,searPhotos)

