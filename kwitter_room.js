
var firebaseConfig = {
      apiKey: "AIzaSyCa9SuBRJhY-yNfJD7sv0WzvgBEw2B5XV8",
      authDomain: "kwitter-2dbc5.firebaseapp.com",
      databaseURL: "https://kwitter-2dbc5-default-rtdb.firebaseio.com",
      projectId: "kwitter-2dbc5",
      storageBucket: "kwitter-2dbc5.appspot.com",
      messagingSenderId: "38517817201",
      appId: "1:38517817201:web:edcee7ed59360204d5c0d0"
    };
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='reDirectToRoom(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();

var extract_user_name;
extract_user_name=localStorage.getItem("User's Name");
document.getElementById("user_name_display").innerHTML="Welcome "+extract_user_name+ "!!!";

function addRoom(){
      var room_name;
      room_name=document.getElementById("RoomName").value;
      localStorage.setItem("MyRoom",room_name);
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding a room"});
      window.location.replace("kwitter_page.html");
}

function reDirectToRoom(name_of_the_room){
      console.log(name_of_the_room);
      localStorage.setItem("MyRoom",name_of_the_room);
      window.location.replace("kwitter_page.html");
}

function logOut(){
      localStorage.removeItem("User's Name");
      localStorage.removeItem("MyRoom");
      window.location.replace("index.html");
}