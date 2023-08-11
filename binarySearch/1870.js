var minSpeedOnTime = function(dist, hour) {
  let left=1,right=10000000,speed,sum,ans=-1;

  while(left<=right){
      speed = left + Math.floor((right-left)/2);

      sum=0;
      for(let i=0;i<dist.length-1;i++){
          sum += Math.ceil((dist[i]/speed));
      }
      sum += (dist[dist.length-1]/speed);//For the last train we need not to do Math.ceil
      
      
      if(sum<=hour){//sum(time taken is less than the required time, so it can be our answer, but we will keep looking for the another smaller speed until left<=right)
          ans=speed;
          right = speed-1;
      }else{
          left=speed+1;
      }
  }
  return ans;
};

// console.log(minSpeedOnTime([1, 3, 2], 6));
// console.log(minSpeedOnTime([1, 3, 2], 2.7));
