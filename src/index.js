const express = require("express");
const app = express();
const colors = require("colors");
const path = require("path");
const {compile}= require("nexe");




app.use(express.urlencoded());
//var A = new Array(1,3,2,1,2,1,5,3,3,4,2);
var A;
var counter = 0;

function decrease() {
  for (let i = 0; i < A.length; i++) {
    A[i] -= 1;
  }
  console.log("decrease() ==> " + A);
  return;
}

function countContinues() {
  //count continues positive numbers
let amount_cells_positive=0;
let temp_count=0;
  for (let i = 0; i < A.length; i++) {


    if (A[i] > 0&&i!=0) {
      //positive number
      console.log("A[" + i + "] = " + A[i]);
      if (A[i - 1] <= 0) {
        //previous number is zero or less
        console.log("A[" + i + "] = " + A[i]);

        temp_count++;
        console.log("temp_count = " + temp_count);
      }

       
    }//end if statement


    if(A[i]>0)
    {//counts positive numbers 
      amount_cells_positive++;
    
    }

  }//end of for loop




  if(amount_cells_positive==A.length)
  {
      console.log("all array is positive numbers");
      temp_count++;
  }
  //add to counter

  counter += temp_count;
  temp_count = 0;
  decrease();
  
}


function isExistPositiveNums() {
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      console.log("isExistPositiveNums() ==> true".green);

      return true;
    }
  }

  console.log("isExistPositiveNums() ==> false".yellow);
  return false;
}






function solution() {



 
  while (isExistPositiveNums()) {
    countContinues();
    
  }

  console.log("final amount of brushes: " + counter.toString().bgMagenta);
  let html_code = "<h4>" + "Number of brushes: " + counter + "</h4>";
  return html_code;
}
app.get("/",function(req,res){
//  res.set({ "Content-Type": "text/html;charset=utf-8" });
res.sendFile(path.join(__dirname,"index.html"));
});
app.post("/submit-form", function(req, res) {
  res.set({ "Content-Type": "text/html;charset=utf-8" });
 console.log(req.body.user_array);
A=req.body.user_array.split(",");




  res.end(solution());
});

app.listen(3000);
