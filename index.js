// Code your solution in this fil

function distanceFromHqInBlocks(D){
   if(D >= 42){
       return (D - 42)
   }else if(D <= 42){
       return (42 - D)
   }
}

function distanceFromHqInFeet(destination){
    let blocks = distanceFromHqInBlocks(destination)
  return (blocks * 264)

}

function distanceTravelledInFeet(start, finish){
   if (start >= finish){
       let blocksTravelled = start - finish
       return blocksTravelled *264
   }else if(start <= finish){
       let blocksTravelled = finish - start
       return blocksTravelled * 264
   }
}

function calculatesFarePrice(pickUpLocation, dropOfLocation){
    let distanceInFeet = distanceTravelledInFeet(pickUpLocation,dropOfLocation)
    let faresPrice = 0;
    if (distanceInFeet < 400 ){
        return faresPrice = 0;
    } else if (distanceInFeet >= 400 && distanceInFeet < 2000){
            return faresPrice = (distanceInFeet - 400) * 0.02
    } else if (distanceInFeet >= 2000 && distanceInFeet <=2500){
        return faresPrice = 25
    } else {
        return "cannot travel that far"
    }

}