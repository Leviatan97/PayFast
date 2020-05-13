import coneccion from '../Coneccion/Coneccion';

class superMerModelo
{
    constructor(){}

    public mostrarSuper(){
        return new Promise(async (resolve,reject)=>{
            (await coneccion).query('SELECT * FROM smo',(error:any, result : any)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }
}

const SuperMerModelo : superMerModelo = new superMerModelo()
export default SuperMerModelo