import brand from './brand'
import aboveZero from './aboveZero'

import validationTest from './validationTester'

export default () =>{
  return new validationTest([
    brand,
    aboveZero
  ])
}