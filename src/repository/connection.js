import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'Mgs',
  password: 'Potato10!',
  database: 'feira_profissoes'
})

export { connection }