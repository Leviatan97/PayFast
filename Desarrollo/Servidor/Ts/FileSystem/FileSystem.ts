import { FileUpload } from '../Interfaz/imgInterfaz';
import path from 'path'
import fs from 'fs'
import uniqid from 'uniqid'

export default class FileSystem {
    constructor() {}

    public guardarImagen(file: FileUpload, id: string) {

        return new Promise ((resolve, reject)=> {
            const pathU = this.crearCarpeta(id)
            const nombre = this.generarNombre(file.name)

            file.mv(`${pathU}/${nombre}`,(err: any)=> {
                if(err) {
                    reject(err)
                }
                else {
                    resolve(nombre)
                }
            })
        })
        
    }

    private generarNombre (nombreOrginal: string) {
        const nombreArr = nombreOrginal.split('.')
        const extencion = nombreArr[nombreArr.length-1]
        const nomUnico = uniqid()
        return `${nomUnico}.${extencion}`
    }

    private crearCarpeta(id: string) {
        const pathU = path.resolve(__dirname,'../Perfil',id)
        const existe = fs.existsSync(pathU)
        
        if(!existe) {
            fs.mkdirSync(pathU)
        }

        return pathU
    }

    public getFotoUrl(usId: string, usIm: string) {
        const foto = path.resolve(__dirname,'../Perfil',usId,usIm)
        const existe = fs.existsSync(foto)
        if(!existe) {
            return path.resolve(__dirname,'../Perfil/default/perfil.svg')
        }
        return foto
    }

}