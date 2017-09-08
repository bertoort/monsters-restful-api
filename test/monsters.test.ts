import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

import app from '../src/App'

chai.use(chaiHttp)
const expect = chai.expect

describe('RESTful API api/v1/monsters', () => {

  it('responds with JSON object with the new monster', async () => {
    const res = await chai.request(app)
      .post('/api/v1/monsters')
      .send({
          id: 0,
          name: 'Mike Wazowski',
          description: 'Green and funny',
          image: 'https://vignette2.wikia.nocookie.net/pixar/images/d/d4/Mike_Wazowski2.jpg/revision/latest/scale-to-width-down/162?cb=20100819115525',
          eyes: '1',
          scary: false
        })
    expect(res.status).to.equal(200)
    expect(res).to.be.json
    expect(res.body).to.be.an('object')
    expect(res.body.monster).to.be.an('object')
    expect(res.body.monster.name).to.eq('Mike Wazowski')
  })

  it('responds with JSON object with a monsters array', async () => {
    const res = await chai.request(app).get('/api/v1/monsters')
    expect(res.status).to.equal(200)
    expect(res).to.be.json
    expect(res.body).to.be.an('object')
    expect(res.body.monsters).to.be.an('array')
  })

  it('responds with single JSON object with a monster', async () => {
    const res = await chai.request(app).get('/api/v1/monsters/0')
    expect(res.status).to.equal(200)
    expect(res).to.be.json
    expect(res.body).to.be.an('object')
    expect(res.body.monster).to.be.an('object')
    expect(res.body.monster.name).to.eq('Mike Wazowski')
  })

  it('responds with single JSON object with an updated monster', async () => {
    const res = await chai.request(app)
      .put('/api/v1/monsters/0')
      .send({
          name: 'Sully',
          description: 'Purple and funny',
          eyes: '2'
        })
    expect(res.status).to.equal(200)
    expect(res).to.be.json
    expect(res.body).to.be.an('object')
    expect(res.body.monster).to.be.an('object')
    expect(res.body.monster.name).to.eq('Sully')
  })

  it('responds with JSON object when deleting a monster', async () => {
    const res = await chai.request(app).del('/api/v1/monsters/0')
    expect(res.status).to.equal(200)
    expect(res).to.be.json
    expect(res.body).to.be.an('object')
  })

})
