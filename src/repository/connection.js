import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'feira_profissoes'
})

export { connection }



/*

PC FREI --- SQL
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'feira_profissoes'



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