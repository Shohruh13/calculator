var equation = "";
var terms = [];
var answer = 0;
var tries = 0;
//{}
var deg;
onEvent("radians","click",function(){
  
  deg = false;
  
});
onEvent("degrees","click",function(){
  
  deg = true;
  
});


onEvent("text_input1","keyup",function(){
  
  var text = getText("text_input1");
  
  for(var i = 0; i < text.length; i ++){
    
    if( text[i] == " "){
      
      equation += getText("text_input1") - " ";
      setText("label1", equation);
      appendItem(terms, getNumber("text_input1"));
      setText("text_input1", "");
      
    }
    
  }
  
  
  
  
});






onEvent("add","click",function(){
  
  equation += " + ";
  setText("label1", equation);
  appendItem(terms, "+" );
  
  
});
onEvent("subtraction","click",function(){
  
  equation += " - ";
  setText("label1", equation);
  appendItem(terms, "-" );
  
  
});
onEvent("times","click",function(){
  
  equation += " * ";
  setText("label1", equation);
  appendItem(terms, "*" );
  
});
onEvent("divide","click",function(){
  
  equation += " / ";
  setText("label1", equation);
  appendItem(terms, "/" );
  
  
});
onEvent("sin","click",function(){
  
  equation = " sin(" + terms[terms.length-1] +")";
  
  setText("label1", equation);
  appendItem(terms, "sin" );
  
  
});
onEvent("cos","click",function(){
  
  
  
  equation = " cos(" + terms[terms.length-1] +")";
  
  setText("label1", equation);
  appendItem(terms, "cos" );
  
  
});
onEvent("tan","click",function(){
  
  equation = " tan(" + terms[terms.length-1] +")";
  
  setText("label1", equation);
  appendItem(terms, "tan" );
  
  
});
onEvent("asin","click",function(){
  
  
  
  equation = " arcsin(" + terms[terms.length-1] +")";
  
  setText("label1", equation);
  appendItem(terms, "arcsin" );
  
  
});
onEvent("acos","click",function(){
  
  
  
  equation = " arccos(" + terms[terms.length-1] +")";
  
  setText("label1", equation);
  appendItem(terms, "arccos" );
  
  
});
onEvent("atan","click",function(){
  
  
  
  equation = " arctan(" + terms[terms.length-1] +")";
  
  setText("label1", equation);
  appendItem(terms, "arctan" );
  
  
});




onEvent("clear","click",function(){
  
  
  setText("label1", equation);
  
  removeAll(terms);
  equation = "";
  setText("text_input1","");
  
});
onEvent("calculate","click",function(){
  
  getText("label1");
  
    
  setText("label1",calculate(terms));
  
  
  
  
  
  
});


/************************************
Use a list where each item is a different math term.
For instance you can use numbers or operations and then even put a trig function.
Here's the list for how the operations must be typed on a list.

Numbers, [2,3, 6];
The 4 basic operations: [4, "+", 5, "*", 6, "/", 8];
Trig functions: [5, "sin"] (Make sure you put the number before the trig function.)
************************************/
function calculate(list){
  
  answer = 0;
  tries = 0;
  
  for(var i = 0; i < list.length; i ++){
  
    if(list[i] == "+"){
      
      if(tries == 0){
        
        answer += (list[i - 1] + list[i + 1]); 
        tries ++;
      }
      else {
        
        answer += list[i + 1];
        
      }
      
      
    }
    else if(list[i] == "-"){
      
      if(tries == 0){
        
        answer += (list[i - 1] - list[i + 1]); 
        tries ++;
      }
      else {
        
        answer -= list[i + 1];
        
      }
      
      
    }
    else if(list[i] == "*"){
      
      if(tries == 0){
        
        answer += (list[i - 1] * list[i + 1]); 
        tries ++;
      }
      else {
        
        answer *= list[i + 1];
        
      }
      
      
    }
    else if(list[i] == "/"){
      
      if(tries == 0){
        
        answer += (list[i - 1] / list[i + 1]); 
        tries ++;
      }
      else {
        
        answer /= list[i + 1];
        
      }
      
      
    }
    else if(list[i] == "sin"){
      
      if(tries == 0){
        
        if(deg == true){
          
          
          answer = turnToRad(list[i-1]);
          
          answer = Math.sin(answer);
          
          
          
        }
        else {answer += Math.sin(list[i - 1]); }
        
        tries ++;
        
      }
     
      
    }
    else if(list[i] == "cos"){
      
      if(tries == 0){
        
        if(deg == true){
          
          
          answer = turnToRad(list[i-1]);
          
          answer = Math.cos(answer);
          
          
          
        }
        else {answer += Math.cos(list[i - 1]); }
        Math.round(answer);
        tries ++;
        
      }
     
      
    }
    else if(list[i] == "tan"){
      
      if(tries == 0){
        
        if(deg == true){
          
          
          answer = turnToRad(list[i-1]);
          
          answer = Math.tan(answer);
          
          
          
        }
        else {answer += Math.tan(list[i - 1]); }
        tries ++;
        
      }
     
      
    }
    else if(list[i] == "arcsin"){
      
      if(tries == 0){
        
        if(deg == true){
          
          
          answer = turnToRad(list[i-1]);
          
          answer = Math.asin(answer);
          
          
          
        }
        else {answer += Math.asin(list[i - 1]); }
        tries ++;
        
      }
     
      
    }
    else if(list[i] == "arccos"){
      
      if(tries == 0){
        
        if(deg == true){
          
          
          answer = turnToRad(list[i-1]);
          
          answer = Math.acos(answer);
          
          
          
        }
        else {answer += Math.acos(list[i - 1]); }
        tries ++;
        
      }
     
      
    }
    else if(list[i] == "arctan"){
      
      if(tries == 0){
        
        if(deg == true){
          
          
          answer = turnToRad(list[i-1]);
          
          answer = Math.atan(answer);
          
          
          
        }
        else {answer += Math.atan(list[i - 1]); }
        tries ++;
        
      }
     
      
    }
    else if(list[i] == "log"){
      
      if(tries == 0){
        
        if(deg == true){
          
          
          answer = turnToRad(list[i-1]);
          
          answer = Math.log10(answer);
          
          
          
        }
        else {answer += Math.log10(list[i - 1]); }
        tries ++;
        
      }
     
      
    }
    
    
  }
  
  
  equation = answer + "";
    removeAll(terms);
    terms[0] = answer;
    console.log(tries);
  return answer;
  
}

// Description stuff
function removeAll (list){
  // removes all the items in the list
  
  for(var i = 0; i < list.length; i++){
    
    removeItem(list, i - i);
    
  }
  
}
//Can this function be posted now?



// Turns rad to deg
//dumb stuff
function turnToRad (num){
    num *= Math.PI;
    num /= 180;
    var answer = num;
    return answer;
    
    
  }
// Turns deg to rad
function turnToDeg (num){
    num *= 180;
    num /= Math.PI;
    
    var answer = num;
    return answer;
    
    
  }


console.log(Math.asin(3));
