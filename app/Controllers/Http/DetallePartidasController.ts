import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DetallePartida from 'App/Models/DetallePartida'

export default class DetallePartidasController {
  public async index({response}: HttpContextContract) {
    try{
      const det_par = await DetallePartida.query().preload('Ganador').preload('Partida')

      return det_par
    }
    catch(error){
      response.status(500).json({message: 'ocurrio un error'})
    }
  }

  public async store({request, response}: HttpContextContract) {
    try{
      await DetallePartida.create(request.all())

      return 'correcto'
    }
    catch(error){
      response.status(500).json({message: 'ocurrio un error'})
    }
  }

  public async show({params, response}: HttpContextContract) {
    try{
      const det_par = await DetallePartida.query().preload('Ganador').preload('Partida').where('partida', params.id)

      return det_par
    }
    catch(error){
      response.status(500).json({message: 'ocurrio un error'})
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
