import * as dotenv from 'dotenv'

dotenv.config()

const development = {
  client: 'pg',
  connection:'postgres://localhost/monsters'
}

const production = {
  client: 'pg',
  connection: process.env.DATABASE_URL
}

export {development, production}
