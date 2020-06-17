import coneccion from '../Coneccion/Coneccion';
class tiendaModelo {
    constructor() {}

    public verificarCoordenada(co: string, smo: number) {
        return new Promise(async (resolve, reject)=>{
            (await coneccion).query(`SELECT * FROM ta WHERE ta_co = '${co}' AND smo_i = ${smo}`,(error: any,result :any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    public consultarProducto(id:number) {
        return new Promise(async (resolve, reject)=>{
            (await coneccion).query(`SELECT * FROM ra WHERE ta_i = ${id} AND ra_tp = 'consulta'`,(error: any,result :any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    public comprarProductos(id:number) {
        return new Promise(async (resolve, reject)=>{
            (await coneccion).query(`SELECT * FROM ra WHERE ta_i = ${id} AND ra_tp = 'compra'`,(error: any,result :any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

}

const TiendaModelo : tiendaModelo = new tiendaModelo();
export default TiendaModelo;