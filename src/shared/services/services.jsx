import axios from 'axios';


export const apiGet = async (_url) => {
    try {
        const resp = await axios.get(_url,{
            headers: {
                'Content-Type': 'application/json'
                
            }
        })
        return resp
    } catch (err) {
        throw err;
    }
}

export const apiPost = async (_url,_body={}) => {
    try {
        const resp = await axios({
            url: _url,
            method:'POST',
            data: JSON.stringify(_body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return resp
    } catch (err) {
        throw err;
    }
}

export const apiPut = async (_url,_body={}) => {
    try {
        const resp = await axios({
            url: _url,
            method:'PUT',
            data: JSON.stringify(_body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return resp
    } catch (err) {
        throw err;
    }
}

export const apiDelete = async (_url) => {
    try {
        const resp = await axios({
            url: _url,
            method:'DELETE',
            data: JSON.stringify(_body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return resp
    } catch (err) {
        throw err;
    }
}