import validator from '../../../src/validation/aboveZero'

describe('above zero validation', () => {

  it('it must return true when payment value is valid and is above zero', ()=>{
    const card = {
      totalCompra: 1.00
    }

    expect(validator(card)).toEqual({
      isValid: true
    })
  })

  it('it must return false when payment value is not a number', ()=>{
    const cardWithoutValue = {}

    expect(validator(cardWithoutValue)).toEqual({
      isValid: false,
      reason: "Pagamento sem valor"
    })

    const cardWithoutValidValue = {
      totalCompra: "foo"
    }

    expect(validator(cardWithoutValidValue)).toEqual({
      isValid: false,
      reason: "Valor de pagamento inválido"
    })
  })

  it('it must return false when payment value is below or equal zero', ()=>{
    const cardWithZeroValue = {
      totalCompra: 0
    }

    expect(validator(cardWithZeroValue)).toEqual({
      isValid: false,
      reason: "Valor de pagamento menor ou igual a zero"
    })

    const cardWithBelowZeroValue = {
      totalCompra: -1.23
    }

    expect(validator(cardWithBelowZeroValue)).toEqual({
      isValid: false,
      reason: "Valor de pagamento menor ou igual a zero"
    })
  })
})