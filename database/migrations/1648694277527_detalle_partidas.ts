import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DetallePartidas extends BaseSchema {
  protected tableName = 'detalle_partidas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('ganador').notNullable().unsigned().references('id').inTable('users')
      table.integer('partida').notNullable().unsigned().references('id').inTable('partidas')
      table.integer('puntaje_jugador1').nullable()
      table.integer('puntaje_jugador2').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
