import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import user from './user'

export default class Partida extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public jugador1: number

  @column()
  public jugador2: number

  @column()
  public fecha_partida: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> user, {
    foreignKey: 'jugador1'
  })
  public Jugador1: BelongsTo<typeof user>

  @belongsTo(()=> user, {
    foreignKey: 'jugador2'
  })
  public Jugador2: BelongsTo<typeof user>

}
