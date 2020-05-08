import coneccion from '../Coneccion/Coneccion';

export default class usuModel {
    constructor(
        private Usu_nombre : string,
        private Usu_apellido : string,
        private Usu_FechaNacimiento : Date,
        private Usu_TipoDoc : string,
        private Usu_NumeroDoc : string,
        private Usu_Correo : string,
        private Usu_Contra : string
    ) 
    {
        this.Usu_nombre = Usu_nombre;
        this.Usu_apellido = Usu_apellido;
        this.Usu_FechaNacimiento = Usu_FechaNacimiento;
        this.Usu_TipoDoc = Usu_TipoDoc;
        this.Usu_NumeroDoc = Usu_NumeroDoc;
        this.Usu_Correo = Usu_Correo;
        this.Usu_Contra = Usu_Contra
    }

    public registrar(){

        const datos = {
            us_n  : this.Usu_nombre,
            us_a  : this.Usu_apellido,
            us_fn : this.Usu_FechaNacimiento,
            us_td : this.Usu_TipoDoc,
            us_nd : this.Usu_NumeroDoc,
            us_c  : this.Usu_Correo,
            us_ca : this.Usu_Contra
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

    private actualizar(){

    }

    private ingresar(){

    }
}

