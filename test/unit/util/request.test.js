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
      status: 200,
      data: {
        test: "test"
      }
    }
    library.mockResolvedValue(result)
    
    const reqResult = await service.post(data)

    expect(reqResult).toEqual({
      status: 200,
      body: {
        test: "test"
      }
    })
  })

  it('should receive an error data when request emit an error', async ()=>{
    const data = {
      url: '/ping',
      body: {
        foo: "bar"
      },
      header: {foo: "bar"}
    }
    const err = {
      response: {
        status: 500,
        statusText: "err"
      }
    }
    library.mockResolvedValue(Promise.reject(err))
    
    await expect(service.post(data)).rejects.toEqual({
      status: 500,
      body: "err"
    })
  })
})