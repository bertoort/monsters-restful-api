import {Router, Request, Response, NextFunction} from 'express'
import Monster from '../db/Monster.model'
import monsterQueries from '../db/monster.queries'

export class MonsterRouter {
  router: Router

  constructor() {
    this.router = Router()
    this.init()
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const monsters: Monster[] = await monsterQueries.getAll()
    res.json(monsters)
  }

  public async getOne(req: Request, res: Response, next: NextFunction) {
    let id: number = parseInt(req.params.id)
    const monster: Monster = await monsterQueries.getOne(id) 
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
