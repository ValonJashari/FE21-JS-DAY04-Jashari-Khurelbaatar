var d = document.getElementById("select").value;
console.log(d);
document.getElementById("demo1").addEventListener("click", myfunction)
function myfunction() 
{   
    
    var e =document.getElementById("firstname");
   
    
    var t =document.getElementById("lastname");

    var z =document.getElementById("age");
    var dname = document.getElementById("display");
    
    if (e.value.length < 5){
        dname.style.color="red";
        
    }
    else  {
        dname.style.color = "green";
       
    }
    var fullname = e.value + " "+t.value +" " +z.value;
    document.getElementById("display").innerText=fullname;
    
}




