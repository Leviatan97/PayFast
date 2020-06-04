import coneccion from '../Coneccion/Coneccion';
class tiendaModelo {
    constructor() {}

    public verificarCoordenada(co: string) {
        return new Promise(async (resolve, reject)=>{
            (await coneccion).query(`SELECT * FROM ta WHERE ta_co = '${co}'`,(error: any,result :any)=>{
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
            (await coneccion).query(`SELECT * FROM ra WHERE ta_i = ${id}`,(error: any,result :any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

}