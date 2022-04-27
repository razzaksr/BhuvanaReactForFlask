import axios from 'axios'

const url="http://127.0.0.1:5000/rest"

export const all=async()=>{
    const t = await axios.get(`${url}/`)
    return t;
}

export const add=async(object)=>{
    const t = await axios.post(`${url}/`,object)
    return t;
}

export const getOne=async(key)=>{
    const t = await axios.get(`${url}/${key}`)
    return t;
}

export const up=async(object)=>{
    const t = await axios.put(`${url}/${object.id}`,object)
    return t;
}

export const byRole=async(obj1,obj2)=>{
    const t = await axios.get(`${url}/role/${obj1}/${obj2}`)
    return t;
}