

// Code written and edited by Aniket Kumar Singh 


//Variable declaration
let hr=0;
let min=0;
let sec=0;
var count=0;


//it will decide whether the timer is running or not
var timer=false;




function start(){
  //when someone click on start timer will start and call stopwatch function
  timer=true;
  stopwatch();
}

function stop(){
    //intializing the value of timer false to stop the stopwatch
  timer=false;
}

function reset(){
  
    //intializing the value of timer as false to stop the stopwatch and intializing all the variable to 0

  timer=false;
  hr=0;
  min=0;
  sec=0;
  count=0;

  document.getElementById("hr").innerHTML = "00"; 
  document.getElementById("mins").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  
}

function stopwatch(){
  //checking whether the timer is started or not 
    if(timer == true)
    {
      count= count+1;
      
      if(count == 100)
      {
        sec=sec+1;
        count=0;
        document.getElementById("sec").innerHTML = sec;  
      }
      if(sec == 60)
      {
        min=min+1;
        sec=0;
        count=0;
        document.getElementById("mins").innerHTML = min;  
      }
      if(min == 60){
        
        hr=hr+1;
        min=0;
        sec=0;
        count=0;
        document.getElementById("hr").innerHTML = hr; 
      }


      
      document.getElementById("count").innerHTML = count;

      //calling timeout function to calculate the count
      setTimeout("stopwatch()",10)
    }

  
  
}