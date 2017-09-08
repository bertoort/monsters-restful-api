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
    res.json({ message: 'Success', monsters })
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

  public async add(req: Request, res: Response, next: NextFunction) {
    if (req.body.name && typeof req.body.name === 'string') {
      const monster = await monsterQueries.add(req.body)
      res.json({ message: 'Success', monster })
    } else {
      res.json({ message: 'Name is required to add a monster' })
    }
  }

  public async edit(req: Request, res: Response, next: NextFunction) {
    let id: number = parseInt(req.params.id)
    const monster: Monster = await monsterQueries.edit(id, req.body)
    res.json({ message: 'Success', monster })
  }

  public async remove(req: Request, res: Response, next: NextFunction) {
    let id: number = parseInt(req.params.id)
    try {
      await monsterQueries.remove(id) 
      res.json({ message: 'Success'})
    } catch(error) {
      res.json({ message: 'No monster found with the given id.', error })
    }
  }

  init() {
    this.router.get('/', this.getAll)
    this.router.get('/:id', this.getOne)
    this.router.post('/', this.add)
    this.router.put('/:id', this.edit)
    this.router.delete('/:id', this.remove)
  }

}

const monsterRoutes = new MonsterRouter()
monsterRoutes.init()

export default monsterRoutes.router
