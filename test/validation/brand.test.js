import validator from '../../src/validation/brand'

describe('brancd validation', () => {

  it('it must return true when card brand are in its list', ()=>{
    const card = {
      bandeira: "visa"
    }

    expect(validator(card)).toBe(true)
  })

  it('it must return false when card brand aren\'t in it list', ()=>{
    const card = {
      bandeira: "foo"
    }

    expect(validator(card)).toBe(false)
  })
})