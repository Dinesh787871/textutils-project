import axios from 'axios';

export const getLang = async (text) => {
    try {
        const res = await axios.get(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|hi`);

        return res;
    } catch (error) {
        return error;
    }
}