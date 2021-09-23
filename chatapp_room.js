
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCYfExUueJe2nu7KnPeCXWb12DYoWXoyKw",
      authDomain: "chatweb-app.firebaseapp.com",
      databaseURL: "https://chatweb-app-default-rtdb.firebaseio.com",
      projectId: "chatweb-app",
      storageBucket: "chatweb-app.appspot.com",
      messagingSenderId: "277250845972",
      appId: "1:277250845972:web:cf96bca130140528102601"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
