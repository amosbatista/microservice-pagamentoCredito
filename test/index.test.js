import index from '../src/index'

describe('project',()=>{
  const moduleType = typeof index
  it('should be a function', ()=>{
    expect(moduleType).toBe("function");
  })
})