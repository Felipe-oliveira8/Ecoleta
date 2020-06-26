//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

//utilizar o objeto de banco de dados, para operações

db.serialize(() => {
  //criar uma tabela, com comandos sql 
  db.run(`
  CREATE TABLE IF NOT EXISTS places (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    name TEXT,
    address TEXT,
    address2 TEXT,
    state TEXT,
    city TEXT,
    items TEXT
    );
    `)
  })
  
  /*
  //inserir dados na tabela
  const query = `
  INSERT INTO places (
    image,
    name,
    addres,
    address2,
    state,
    city,
    items

  ) VALUES (?,?,?,?,?,?,?);
`

function afterInsertData(err) {
  if(err) {
    return console.log(err)
  }

  console.log("Cadastrado com sucesso")
  console.log(this)
}

  //db.run(query, values, afterInsertData)

  //consultar dados na tabela 
  db.all(`SELECT * FROM places`, function(err, rows){
    if(err) {
      return console.log(err)
    }

    console.log("Aqui estão os registros")
  })
  //deletar dados de uma tabela 
  db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    if(err) {
      return console.log(err)
    }
    console.log("Registro deletado com sucesso!")
  })
})
 */