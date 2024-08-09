export const getItem = (key) =>{

    if(!key){
        return;
    }
    const value = localStorage.getItem(key)

    {
        return value
    } 
}

export const setItem = (key, value) =>{
    if(!key || !value){
        alert('Please provide key and its value')
    }
    else{
        localStorage.setItem(key, value)
    }
}

export const clear =()=>{
    localStorage.clear()
}

export const removeItem = (key)=>{
    if(!key){
        alert('No such key exists')
    }else localStorage.removeItem(key)
}