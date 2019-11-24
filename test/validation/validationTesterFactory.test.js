import ValidatorFactory from '../../src/validation/validationTesterFactory'
import ValidationTester from '../../src/validation/validationTester'

describe('card validation factory tester', () => {

  it('should create a instantied validator tester', ()=>{

    const validationTester = ValidatorFactory()

    expect(validationTester).toBeInstanceOf(ValidationTester)
  })
})