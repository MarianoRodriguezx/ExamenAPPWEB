// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import user from 'App/Models/user'

export default class UsersController {
    public async login({auth, request, response}){

        const email = request.input('email')
        const password = request.input('password')

        try{
            const token = await auth.use('api').attempt(email, password)
            response.status(200).json({
                message: "Logueo Exitoso",
                data: token
            })
            
        }catch{
            return response.badRequest('Error al iniciar')
        }
    }

    public async logout({auth, response}){
        try
        {
            await auth.use('api').revoke()
            return true;
        }
        catch(error){
            response.status(500).json({
                message: "ocurrio un error"
            })
        }
        
    }

    public async signup({request, response}){

        const UsersSchema = schema.create({
            nombre: schema.string(
                {trim: true},
                [rules.required()]
            ),
            email: schema.string(
                {trim: true},
                [rules.email(), rules.required(), rules.unique({table: 'users', column: 'email'})]
            ),
            password: schema.string(
                {trim: true},
                [rules.required()]
            )
        })

        const myUser: any = await request.validate({schema: UsersSchema})
        await user.create(myUser)

        return response.created(myUser)
    }
}
