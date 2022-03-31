import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import user from './user'
import Partida from './Partida'

export default class DetallePartida extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ganador: number

  @column()
  public partida: number

  @column()
  public puntaje_jugador1: number

  @column()
  public puntaje_jugador2: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> user, {
    foreignKey: 'ganador'
  })
  public Ganador: BelongsTo<typeof user>

  @belongsTo(()=> Partida, {
    foreignKey: 'partida'
  })
  public Partida: BelongsTo<typeof Partida>
}
