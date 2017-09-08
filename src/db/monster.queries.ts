import knex from './connection'
import Monster from './Monster.model'

const getAll = (): Monster[] => {
  return knex('monster').select()
}

const getOne = (id: number): Monster => {
  return knex('monster').select().where('id', id)
}

export default {
  getAll,
  getOne
}
