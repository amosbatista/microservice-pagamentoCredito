import calculator from "../../../src/purchase/parcelsCalculator"

describe("purchase parcels calculator", ()=>{
    it("must be a function that receives a purchase with one parcel, and return the same purchase value", ()=>{
        const purchase = {
            value: 12.45,
            parcels: 1
        }

        expect(calculator(purchase)).toBe(12.45)
    })

    it("must receive a purchase with more than 3 parcels, and return a total with 0.5% interest each parcel", ()=>{
        const purchase = {
            value: 15.95,
            parcels: 5
        }

        expect(calculator(purchase)).toBe(15.98)
    })
})