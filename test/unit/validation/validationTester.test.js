
import ValidationTester from '../../../src/validation/validationTester'

describe('card validation tester', () => {

  it('should instantiate, receive card and return true if validation are true', ()=>{
     
    const validatorsWhoReturnTrue = [
      jest.fn( (card) => true ),
      jest.fn( (card) => true )
    ]
    
    const validationTester = new ValidationTester(validatorsWhoReturnTrue)
    const card = {}

    expect(validationTester.isCardValid(card)).toBe(true)
  })

  it('should instantiate, receive card and return false if any validation are false', ()=>{
     
    const validatorsWithAFalseResult = [
      jest.fn( (card) => true ),
      jest.fn( (card) => false ),
      jest.fn( (card) => true )
      // Pode ser diretamente desta maneira, mas usamos a implementação do Jest
      // (card)=>true,
      // (card)=>true,
      // (card)=>false
    ]
    
    const validationTester = new ValidationTester(validatorsWithAFalseResult)
    const card = {}

    expect(validationTester.isCardValid(card)).toBe(false)
  })
})