jest.mock('axios')
import library from 'axios'

import service from '../../../src/util/request'

describe('http request', ()=>{
  it('should receive a post request data and return a post response', async ()=>{
    const data = {
      url: '/ping',
      body: {
        foo: "bar"
      },
      header: {foo: "bar"}
    }
    const result = {
      data: {
        status: 0,
        body: {
          test: "test"
        }
      }
    }
    library.mockResolvedValue(result)
    
    const reqResult = await service.post(data)

    expect(reqResult).toEqual({
      status: 0,
      body: {
        test: "test"
      }
    })
  })
})