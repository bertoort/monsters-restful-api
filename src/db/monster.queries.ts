import knex from './connection'
import Monster from './Monster.model'

const getAll = (): Monster[] => {
  return knex('monster').select()
}

const getOne = async (id: number) => {
  const monster = await knex('monster').select().where('id', id)
  return monster[0]
}

const add = async (monster: any) => {
  const result = await knex('monster').insert(monster).returning('*')
  return result[0]
}

const edit = async (id: number, monster: any) => {
  const result = await knex('monster').update(monster).where('id', id).returning('*')
  return result[0]
}

const remove = (id: number) => {
  return knex('monster').del().where('id', id)
}

export default {
  getAll,
  getOne,
  add,
  edit,
  remove
}
