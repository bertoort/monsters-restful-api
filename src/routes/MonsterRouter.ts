import {Router, Request, Response, NextFunction} from 'express'
import Monster from '../db/Monster.model'

export class MonsterRouter {
  router: Router

  constructor() {
    this.router = Router()
    this.init()
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.json([])
  }

  public getOne(req: Request, res: Response, next: NextFunction) {
    let query: number = parseInt(req.params.id)
    const monster: Monster = {}
    if (monster) {
      res.json({ message: 'Success', monster })
    } else {
      res.json({ message: 'No monster found with the given id.' })
    }
  }

  init() {
    this.router.get('/', this.getAll)
    this.router.get('/:id', this.getOne)
  }

}

const monsterRoutes = new MonsterRouter()
monsterRoutes.init()

export default monsterRoutes.router
