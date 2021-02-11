export default (purchase)=>{
    const limitParcelsWithInterest = 3
    const interestRate = 0.5 / 100
    const parcelsYearPeriod = 12
    
    const totalPurchase =  purchase.parcels < limitParcelsWithInterest ? 
        purchase.value :
        purchase.value * (1 + interestRate * purchase.parcels / parcelsYearPeriod)

    return +totalPurchase.toFixed(2)
}