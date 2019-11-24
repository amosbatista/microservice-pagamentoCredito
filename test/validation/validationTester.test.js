import ValidationTester from '../../src/validation/validationTester'

describe('card validation tester', () => {

  it('should instantiate, receive payment data and return true if validation are true', ()=>{
    const validationTester = new ValidationTester()
    const card = {}

    expect(validationTester.isCardValid(card)).toBe(true)
  })
})