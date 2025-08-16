import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'Mgs',
  password: 'Potato10!',
  database: 'Mgs'
})

export { connection }



/*
João Victor --- MEU CODIGO SQL
    host: 'localhost',
    user: 'jonas',
    password: '1234',
    database: 'feira_profissioes'


Marcos Gomes --- COdigo SQL DELE
  host: 'localhost',
  user: 'Mgs',
  password: 'Potato10!',
  database: 'Mgs'

*/