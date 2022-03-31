import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Partida from './Partida'
import DetallePartida from './DetallePartida'

export default class user extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: user) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(()=> Partida, {
    foreignKey: 'jugador1',
    localKey: 'id'
  })
  public user1: HasMany<typeof Partida>

  @hasMany(()=> Partida, {
    foreignKey: 'jugador2',
    localKey: 'id'
  })
  public user2: HasMany<typeof Partida>

  @hasMany(()=> DetallePartida, {
    foreignKey: 'ganador',
    localKey: 'id'
  })
  public ganador: HasMany<typeof DetallePartida>
}
