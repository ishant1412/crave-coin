type transactionCardprop={
 
    cafename:string,
        day:string,
        time:string,
        type:string,
        payment:string,
        reward:number
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