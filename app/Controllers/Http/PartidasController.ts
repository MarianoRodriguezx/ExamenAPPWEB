import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CuadrillaMongo } from 'App/Datos/cuadrilla'
import Partidas from 'App/Models/Mongoose/Partidas'
import Partida from 'App/Models/Partida'

export default class PartidasController {
  public async index({response}: HttpContextContract) {
    try{
      const partidas = await Partida.query().preload('Jugador1').preload('Jugador2')

      response.status(200).json({message: 'consulta correcta', data: partidas})
    }
    catch(error){
      response.status(500).json({message: 'ocurrio un error'})
    }
  }

  public async store({response, request}: HttpContextContract) {
    try{

      const partida = await Partida.create(request.all())

      const cuadriculaMongo = await CuadrillaMongo(partida.id)

      await Partidas.insertMany(cuadriculaMongo)

      response.status(200).json({message: 'se inserto correctamente'})
    }
    catch(error){
      response.status(500).json({message: 'ocurrio un error'})
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
