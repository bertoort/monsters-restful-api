# Monsters RESTful API

TDD API built using node, typescript, gulp, and express.

## Usage

RESTful API on endpoint `/api/v1/monsters`

```js
class Monster {
  id: number
  name: string // required
  description: string
  image: string
  eyes: number
  scary: boolean
}
```

## Deployment to Heroku

```
heroku create
git push heroku master
heroku addons:create heroku-postgresql
heroku run npm run migrate
heroku open
```

