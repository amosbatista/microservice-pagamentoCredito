export default class {

  constructor(validators){
    this.validators = validators
  }
  isCardValid (card) {
    
    return  this.validators.reduce((result, validator)=>{
      const validatorResult = validator(card)

      if(!validatorResult.isValid){
        result = validatorResult
      }

      return result
    },{
      isValid: true
    })
  }
}