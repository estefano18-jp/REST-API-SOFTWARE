import {pool} from '../db.js'
//req = requiere > solicitud  (CLIENTE) 
//res = results > respuesta (SERVIDOR)

export const getSoftwares = async (req, res) => {
  try{
    const querySQL = "SELECT * FROM softwares"
    const [results] = await pool.query(querySQL)
    res.send(results)
  }catch{
    console.error("No se puede concretar GET")
  }
}

export const getSoftwareBYid = async (req, res) => {
  try {
    const id = req.params.id;
    const querySQL = "SELECT * FROM softwares WHERE id = ?";
    const [results] = await pool.query(querySQL, [id]);

    if (results.length === 0) {
      return res.status(404).json({ message: "ID NO EXISTE" });
    }

    res.send(results[0]); // Envía solo el software encontrado
  } catch (error) {
    console.error("No se puede concretar GET por ID", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};



export const createSoftwares = async (req, res) => {
  try{
    const querySQL = `INSERT INTO softwares (nombre, espaciomb, versionsoft, precio) VALUES (?,?,?,?)`
    const {nombre, espaciomb, versionsoft, precio} = req.body

    const [results] = await pool.query(querySQL, [nombre, espaciomb, versionsoft, precio])

    if(results.affectedRows == 0){
      res.send({
        status: false,
        message: "No se pudo completar el proceso",
        id: null
      })
    }else{
      res.send({
        status: true,
        message: "Registrado correctamente",
        id: results.insertId
      })
    }
  }catch{
    console.error("No se pudo concretar POST")
  }
}

export const updateSoftwares = async (req, res) => {
  try{
    const id = req.params.id
    const {nombre, espaciomb, versionsoft, precio} = req.body


    const querySQL = `
    UPDATE softwares SET
      nombre = ?,
      espaciomb = ?,
      versionsoft = ?,
      precio = ?
    WHERE id =? 
    `

    const [results] = await pool.query(querySQL, [nombre, espaciomb, versionsoft, precio, id])
  
    if(results.affectedRows == 0){
      return res.status(404).json({
        status: false,
        message: 'El ID no existe'
      })
    }else{
      return res.send({
        status: true,
        message: "Registrado actualizado",
      })
    }

  }
  catch{
    console.error("No se puede concretar PUT")
  }
}

export const deleteSoftwares = async (req, res) => {
  try{
    const querySQL = 'DELETE FROM softwares WHERE id = ?'
    const id = req.params.id

    const [results] = await pool.query(querySQL, [id])

    //No se pudo eliminar.................
    if (results.affectedRows == 0){
      return res.status(404).json({
        status: false,
        message: 'EL ID enviado NO existe'
      })
    }else{ //res.send () ->> status 200 ok
      return res.send({
        status:true,
        message: 'eliminado correctamente'
      })
    }

    
  }
  catch{
    console.error("No se puedo croncretar DELETE")
  }
}
