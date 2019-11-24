import ValidationTester from '../../src/validation/validationTester'
import ValidatorFactory from '../../src/validation/validationTesterFactory'

describe('card validation tester', () => {

  it('should create a instantied validator tester', ()=>{

    const validationTester = ValidatorFactory()

    expect(validationTester).toBeInstanceOf(ValidationTester)
  })

  it('should instantiate, receive payment data and return true if validation are true', ()=>{

    const validationTester = ValidatorFactory()
    const card = {}

    expect(validationTester.isCardValid(card)).toBe(true)
  })
})