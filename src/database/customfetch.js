import productos from "../database/products.js";



export  const customFetch = (time,task) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(task);
        },time);
    }
    );
}


export const fetchProductByGender = (time,gender) => {
    return new Promise (resolve =>{
setTimeout(()=>{
    resolve(productos.filter(prod=> prod.gender===gender))
},time);

    });
    
}











