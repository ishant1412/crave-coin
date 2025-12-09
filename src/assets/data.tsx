import { House, Scan, UserRound,Gift } from "lucide-react"

const transactionData=[
    {
        cafename:"jodhana",
        day:"monday",
        time:" 22:30 pm",
        type:"rewarded",
        payment:'230',
        reward:23

    },
     {
        cafename:"tacobells",
        day:"tuesday",
        time:" 22:30 pm",
        type:"spent",
        payment:'230',
        reward:23
        
    },
     {
        cafename:"burger king",
        day:"thursday",
        time:" 22:30 pm",
        type:"rewarded",
        payment:'230',
        reward:23
        
    },
     {
        cafename:"kfc",
        day:"sunday",
        time:" 22:30 pm",
        type:"rewarded",
        payment:'230',
        reward:23
        
    },
      {
        cafename:"kfc",
        day:"sunday",
        time:" 22:30 pm",
        type:"rewarded",
        payment:'230',
        reward:23
        
    },  {
        cafename:"kfc",
        day:"sunday",
        time:" 22:30 pm",
        type:"rewarded",
        payment:'230',
        reward:23
        
    },  {
        cafename:"kfc",
        day:"sunday",
        time:" 22:30 pm",
        type:"rewarded",
        payment:'230',
        reward:23
        
    },  {
        cafename:"kfc",
        day:"sunday",
        time:" 22:30 pm",
        type:"rewarded",
        payment:'230',
        reward:23
        
    },  {
        cafename:"kfc",
        day:"sunday",
        time:" 22:30 pm",
        type:"rewarded",
        payment:'230',
        reward:23
        
    },  {
        cafename:"kfc",
        day:"sunday",
        time:" 22:30 pm",
        type:"rewarded",
        payment:'230',
        reward:23
        
    },
]
const bottombarlinks=[
    {
        href:'/dashboard',
        logo:<House></House>,
        name:"home"
    },
     {
        href:'/scan',
        logo:<Scan></Scan>,
        name:"scan"
    },
     {
        href:'/rewards',
        logo:<Gift></Gift>,
        name:"rewards"

    },
     {
        href:'/profile',
        logo:<UserRound></UserRound>,
        name:"profile"
    }

]
const rewards=[
    {
    cafename:"jodhana",
    speciality:"sweets",
    type:"POPULAR",
    offer:"free coffee",
    subtext:"get  a free coffee now",
    coins:200,

},
   {
    cafename:"jodhana",
    speciality:"sweets",
    type:"POPULAR",
    offer:"free coffee",
    subtext:"get  a free coffee now",
    coins:200,

},
   {
    cafename:"jodhana",
    speciality:"sweets",
    type:"POPULAR",
    offer:"free coffee",
    subtext:"get  a free coffee now",
    coins:200,

},
   {
    cafename:"jodhana",
    speciality:"sweets",
    type:"POPULAR",
    offer:"free coffee",
    subtext:"get  a free coffee now",
    coins:200,

},
   {
    cafename:"jodhana",
    speciality:"sweets",
    type:"POPULAR",
    offer:"free coffee",
    subtext:"get  a free coffee now",
    coins:200,

},
{
    cafename:"jodhana",
    speciality:"sweets",
    type:"POPULAR",
    offer:"free coffee",
    subtext:"get  a free coffee now",
    coins:200,

},
]
const claimeddata=[
    {
          cafename:'jodhana',
    offer:'free ghevar',
    coinsspent:200
    },
     {
          cafename:'jodhana',
    offer:'free ghevar',
    coinsspent:200
    }, {
          cafename:'jodhana',
    offer:'free ghevar',
    coinsspent:200
    }, {
          cafename:'jodhana',
    offer:'free ghevar',
    coinsspent:200
    }, {
          cafename:'jodhana',
    offer:'free ghevar',
    coinsspent:200
    }, {
          cafename:'jodhana',
    offer:'free ghevar',
    coinsspent:200
    }, {
          cafename:'jodhana',
    offer:'free ghevar',
    coinsspent:200
    },
]
export {
transactionData,
bottombarlinks,
rewards,
claimeddata
} 