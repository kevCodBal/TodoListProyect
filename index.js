import {initDB} from "./DB/index.js"

initDB().then(()=>{
    console.log('DB CREATED ')
})