import * as path from 'path'
import * as express from 'express'
import * as logger from 'morgan'
import * as bodyParser from 'body-parser'
import MonsterRouter from './routes/MonsterRouter'

class App {

  public app: express.Application

  constructor() {
    this.app = express()
    this.middleware()
    this.routes()
  }

  private middleware(): void {
    this.app.use(logger('dev'))
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  private routes(): void {
    let router = express.Router()
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.app.use('/', router)
    this.app.use('/api/v1/monsters', MonsterRouter)
  }

}

export default new App().app
