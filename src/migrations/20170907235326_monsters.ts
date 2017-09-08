const up = knex => {
  return knex.schema.createTable('monster', (table) => {
    table.increments()
    table.text('name').notNullable()
    table.text('description')
    table.text('image')
    table.integer('eyes')
    table.boolean('scary')
  })
}

const down = knex => {
  return knex.schema.dropTableIfExists('monster')
}

export {up, down}
