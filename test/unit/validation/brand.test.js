import validator from '../../../src/validation/brand'

describe('brand validation', () => {

  it('it must return true when card brand are in its list', ()=>{
    const card = {
      bandeira: "visa"
    }

    expect(validator(card)).toEqual({
      isValid: true
    })
  })

  it('it must return false when card brand aren\'t in it list', ()=>{
    const card = {
      bandeira: "foo"
    }

    expect(validator(card)).toEqual({
      isValid: false,
      reason: "Bandeira do cartão inválida."
    })
  })
})