import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URI;
const accessToken = "";

export const apiPost = (path, data, { headers, ...conf }, auth = true) => {
    //const Authorization = auth && `Bearer ${localStorage.getItem("accessToken")}`;
    const Authorization = auth && `Bearer ${ accessToken }`;

    const config = {
        ...conf,
        headers: {
            Authorization,
            ...(headers ? headers : {}),
        },
    };
    return axios.post(`${url}${path}`, data, config);
};