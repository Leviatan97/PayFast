import mysql from 'promise-mysql';
import { MysqlError } from 'mysql';

class Coneccion{
    public BD = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'payfastv3'
    })
    constructor() {
        this.conectar()
    }

    public async conectar(){
        (await this.BD).getConnection().then(async connection=>{
            (await this.BD).releaseConnection(connection)
            console.log('DB esta conectada');
        }).catch( (err:MysqlError) => {
            console.log( 'Error al Conectar DB\n', {
                ok:false,
                err: err.fatal,
                errCode: err.code,
                errSqlState: err.sqlState,
                errSqlMessage: err.sqlMessage
            })
        })
    }
}

const coneccion: Coneccion = new Coneccion()
export default coneccion.BD