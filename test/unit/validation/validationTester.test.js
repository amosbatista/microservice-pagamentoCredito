
import ValidationTester from '../../../src/validation/validationTester'

describe('card validation tester', () => {

  it('should instantiate, receive card and return true if validation are true', ()=>{
     
    const validatorsWhoReturnTrue = [
      (card) => {
        return {
          isValid: true
        }
      },
      (card) => {
        return {
          isValid: true
        }
      }
    ]
    
    const validationTester = new ValidationTester(validatorsWhoReturnTrue)
    const card = {}

    expect(validationTester.isCardValid(card)).toEqual({
      isValid: true
    })
  })

  it('should instantiate, receive card and return false if any validation are false', ()=>{
     
    const validatorsWithAFalseResult = [
      (card) => {
        return {
          isValid: true
        }
      },
      (card) => {
        return {
          isValid: true
        }
      },
      (card) => {
        return {
          isValid: false,
          reason: "foo"
        }
      }
    ]
    
    const validationTester = new ValidationTester(validatorsWithAFalseResult)
    const card = {}

    expect(validationTester.isCardValid(card)).toEqual({
      isValid: false,
      reason: "foo"
    })
  })
})