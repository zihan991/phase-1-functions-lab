// Code your solution in this file!

const startingRoad = 42;
function distanceFromHqInBlocks(blocks){
 if (blocks >=42){
   return (blocks - startingRoad)
 }   
    else if (blocks <= 42){
       return (startingRoad - blocks) 
    }
 }

 function distanceFromHqInFeet(blocks){
     if (blocks >= 42){
         return((blocks -startingRoad)* 264)
     }
     else if (blocks <= 42){
         return((startingRoad -blocks)*264)
     }
 }

 function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return ((destination - start)*264) 
    }
     else if(start > destination){
        return ((start - destination)*264)
     }   
  } 
 
  function calculatesFarePrice(start, destination){
   const distance = distanceTravelledInFeet(start, destination)  
    if (distance <= 400){
        return 0
    }
    else if(distance > 400 && distance <= 2000){
        return (.02 *(distance -400))
    }
    else if (distance > 2000 && distance < 2500){
        return 25
    }
    else 
        return"cannot travel that far"
    }

