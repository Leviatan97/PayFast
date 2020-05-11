import coneccion from '../Coneccion/Coneccion';

export default class usuModel {
    constructor(
        
    ) 
    {
        
    }

    public registrar(
        Usu_nombre : string,
        Usu_apellido : string,
        Usu_FechaNacimiento : Date,
        Usu_TipoDoc : string,
        Usu_NumeroDoc : string,
        Correo : string,
        Usu_Contra : string
    )
    {

        const datos = {
            us_n  : Usu_nombre,
            us_a  : Usu_apellido,
            us_fn : Usu_FechaNacimiento,
            us_td : Usu_TipoDoc,
            us_nd : Usu_NumeroDoc,
            us_c  : Correo,
            us_ca : Usu_Contra
        }

        return new Promise(async (resolve,reject)=>{
            (await coneccion).query('INSERT INTO usuario set ?',[datos]).then((result:object)=>{
                resolve ({
                    resultado:true,
                    respuesta:result
                })
            }, (error: any)=>{
                reject({
                    resultado:false,
                    respuesta:error
                })
            })
        })
        
        

    }

    public validarCorreo(correo : string)
    {
        return new Promise(async (resolve, reject)=>{
            (await coneccion).query(`SELECT * FROM usuario WHERE us_c = '${correo}'`,(error: any, result: any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })

    }

    public validarNumeroDoc(numeroDoc : string)
    {
        return new Promise(async (resolve, reject)=>{
            (await coneccion).query(`SELECT * FROM usuario WHERE us_nd = '${numeroDoc}'`,(error: any, result: any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
        
    }

    private actualizar(){

    }

    private ingresar(){

    }
}

