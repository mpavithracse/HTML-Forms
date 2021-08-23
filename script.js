var selectedrow=null;
function submitbutton()
{
    var formdata=readData();
    addrow(formdata);
    reset();             
 }

 function readData()
 {
     var formdata={
     firstName: document.getElementById("Firstname").value,
     lastName : document.getElementById("Lastname").value,
     address : document.getElementById("Address").value,
     pincode : document.getElementById("Pincode").value,
     gender : document.getElementById("Gender").value,
     food : document.getElementById("Foodlist").value,
     state : document.getElementById("State").value,
     country : document.getElementById("Country").value
     }
     return formdata;
 }

 function addrow(data)
 {
 var table=document.getElementById("userdetails").getElementsByTagName('tbody')[0];
 var row=table.insertRow(table.length);
 c1=row.insertCell(0);
 c1.innerHTML=data.firstName;
 c2=row.insertCell(1);
 c2.innerHTML=data.lastName;
 c3=row.insertCell(2);
 c3.innerHTML=data.address;
 c4=row.insertCell(3);
 c4.innerHTML=data.pincode;
 c5 = row.insertCell(4);
 c5.innerHTML=data.gender;
 c6= row.insertCell(5);
 c6.innerHTML=data.food;
 c7=row.insertCell(6);
 c7.innerHTML=data.state;
 c8=row.insertCell(7);
 c8.innerHTML=data.country;
 }

 function reset()
 {
     document.getElementById("Firstname").value="";
     document.getElementById("Lastname").value="";
     document.getElementById("Address").value="";
     document.getElementById("Pincode").value="";
     document.getElementById("Gender").value="";
     document.getElementById("Foodlist").value="";
     document.getElementById("State").value="";
     document.getElementById("Country").value="";
     selectedrow=null;
 }

