import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Partidas extends BaseSchema {
  protected tableName = 'partidas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('jugador1').notNullable().unsigned().references('id').inTable('users')
      table.integer('jugador2').notNullable().unsigned().references('id').inTable('users')
      table.date('fecha_partida').notNullable()

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
