
var submit1 = document.getElementById('submit1');
var print1 = document.getElementById('print1');
var select1 = document.getElementById('select1');
 

function myFunction(){

    var a = document.getElementById('select1').value;

      console.log(a);
      
    if(a == 'open'){
        print1.innerHTML = "We Are " +a;
    }
    else{
        print1.innerHTML = "We Are " +a;
    }
}