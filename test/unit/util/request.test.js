import request from '../../../src/util/request' 

describe('http request', ()=>{
  it('should receive a post request data and return a post response', async ()=>{
    const data = {
      body: {
        foo: "bar"
      },
      header: [
        {foo: "bar"}
      ]
    }
    const result = await request.post(data)

    expect(result).toEqual({
      status: 0,
      body: {
        test: "test"
      }
    })
  })
})