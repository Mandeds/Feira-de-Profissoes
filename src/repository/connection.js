import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'jonas',
  password: '1234',
  database: 'feira_profissoes'
})

export { connection }



/*
João Victor --- MEU CODIGO SQL
    host: 'localhost',
    user: 'jonas',
    password: '1234',
    database: 'feira_profissoes'


Marcos Gomes --- COdigo SQL DELE
  host: 'localhost',
  user: 'Mgs',
  password: 'Potato10!',
  database: 'Mgs'

*/