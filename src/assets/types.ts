type transactionCardprop={
 
    cafename:string,
        day:string,
        time:string,
        type:string,
        payment:string,
        reward:number
}
type rewardCard ={
    cafename:string,
    speciality:string,
    type:string,
    offer:string,
    subtext:string,
    coins:number,

}
type ClaimCardtype={
    cafename:string,
    offer:string,
    coinsspent:number
}
export type {
    transactionCardprop,
    ClaimCardtype
}