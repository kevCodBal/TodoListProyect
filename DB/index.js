import {open} from 'sqlite'
import sqlite3  from 'sqlite3'


async function getDBHandler() {
    try {
        const dbHandler =await open({
            filename: "todos.sqlite",
            driver: sqlite3.Database
        });

        if(!dbHandler) throw new TypeError(`DB Handle expected got ${dbHandler}`)

        return dbHandler
    }catch(error){
        console.error(
            `Something went wrong when trying creacte the DB Handler: ${error.meessage}`
        )
    }
}


 async function initDB() {
    try{
            const dbHandler = await getDBHandler();

           await dbHandler.exec(`
                CREATE TABLE IF NOT EXISTS todos(
                    id INTEGER PRIMARY KEY,
                    title TEXT,
                    description TEXT,
                    is_done INTEGER DEFAULT 0
                )`
            )

            await dbHandler.close()
    }catch(error){
      console.error(  `Something went wrong when trying creacte the DB Handler: ${error.meessage}`)
    }
}

export {initDB, getDBHandler}