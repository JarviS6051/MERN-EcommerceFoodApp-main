import axios from "axios";

const BaseUrl = 'https://foodbackend-9rp4.onrender.com/api/products';

export const getAllCategories = async () =>{
    const url= `${BaseUrl}/categories`;
    try{
        const {data} = await axios.get(url);
        //console.log(data);
        return data.map((category, index) => ({ id: index, name: category }));
    } catch(error){
        return error;
    }
}

export default getAllCategories
