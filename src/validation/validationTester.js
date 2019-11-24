import brand from './brand'

export default class {

  constructor(validators){
    this.validators = validators
  }
  isCardValid (card) {
    return this.validators.every(
      (validator)=>validator(card)
    )
  }
}