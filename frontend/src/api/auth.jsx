import axios from "axios";

export const userLogin = async (email, password) => {
    // Update the URL to use the deployed backend on Render
    const url = `https://foodbackend-9rp4.onrender.com/api/user/login`;  // <-- Updated URL
    
    try {
        const { data } = await axios.post(url, {
            email: email,
            password: password
        });
        
        return data;
    } catch (err) {
        return err;
    }
}
