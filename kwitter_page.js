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

    var room_name;
    var user_name;
    room_name=localStorage.getItem("MyRoom");
    user_name=localStorage.getItem("User's Name");

    function send(){
      var msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            heart:0,
            thumbdown:0,
            like:0
      });
      document.getElementById("msg").value="";
    }

    function logOut(){
      localStorage.removeItem("User's Name");
      localStorage.removeItem("MyRoom");
      window.location.replace("index.html");
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
