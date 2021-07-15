var userName ;

function addUser(){
   userName= document.getElementById("user_name").value;
   localStorage.setItem("User's Name",userName );
   window.location.replace("kwitter_room.html");
}