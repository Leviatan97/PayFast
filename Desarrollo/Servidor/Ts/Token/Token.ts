import jwt from 'jsonwebtoken';

export default class token {
    private static seed: string = "este-es-el-seed-de-mi-app-secreto"
    private static caducidad: string = '30d'

    constructor() {}

    static getJwtToken(payLoad : any) {
        return jwt.sign({
            usuario: payLoad
        }, this.seed, {expiresIn: this.caducidad})
    }

    static compararToke(userToken: string) {

        return new Promise ((resolve, reject)=>{
            jwt.verify(userToken, this.seed, (error, decoded)=> {
                if(error){
                    reject(error)
                }else{
                    resolve(decoded)
                }
            })
        })
        
    }
}