var firebaseConfig = {
  apiKey: "AIzaSyBCiswuXhqa5tUe2-DhyZyyC_1nop8dLXU",
  authDomain: "countergasnica.firebaseapp.com",
  projectId: "countergasnica",
  storageBucket: "countergasnica.appspot.com",
  messagingSenderId: "776426877928",
  appId: "1:776426877928:web:0c6559a3fcc4c64d206a5d",
  measurementId: "G-6Z9SFEGPKR",
};

var userLogged = false;

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Get a reference to the "users" collection
var usersCollection = db.collection("counter");

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  // Reference to the "users" collection
  var usersCollection = db.collection("users");

  usersCollection
    .where("login", "==", username)
    .where("password", "==", password)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.empty) {
        notis.create(
          "Error",
          "Logowanie nie powiodło się. Sprawdź login bądź hasło!",
          15,
          true
        );
      } else {
        notis.create("Sucess", "Zalogowano pomyślnie", 15, true);
        const loginForm = document.querySelector("#loginForm");
        loginForm.style.display = "none";
        const counterSection = document.querySelector("#counter-section");
        counterSection.style.display = "block";
        userLogged = true;
        getCounter();
      }
    })
    .catch(function (error) {
      console.error("Error getting documents: ", error);
    });
});

/* updateCounter function in Firebase */
function updateCounter(newvalue) {
  if (!userLogged) {
    return;
  } else {
    const counterCollection = db.collection("counter").doc("counter");

    // Get the current value
    counterCollection
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const currentValue = doc.data().value;
          const updatedValue = currentValue + newvalue;

          // Update the value with the new value
          return counterCollection.update({ value: updatedValue });
        } else {
          notis.create("Error", "Counter document does not exist!", 10, true);
        }
      })
      .then(function () {
        notis.create(
          "Zaktualizowano",
          `Licznik został zwiększony o ${newvalue}!`,
          10,
          true
        );
        getCounter();
      })
      .catch(function (error) {
        notis.create(
          "Error",
          `Wystąpił niezidentyfikowany błąd! Wartość: ${error}!`,
          10,
          true
        );
        console.log(error);
      });
  }
}

/* Get Counter value from Firebase */
function getCounter() {
  if (!userLogged) {
    return;
  } else {
    const counterCollection = db.collection("counter").doc("counter");
    counterCollection
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const counterValue = doc.data().value;
          document.getElementById("counterValue").innerHTML = counterValue;
        } else {
          notis.create(
            "Error",
            "Nie znaleziono licznika! Sprawdź czy został utworzony!",
            10,
            true
          );
        }
      })
      .catch(function (error) {
        notis.create(
          "Error",
          `Wystąpił niezidentyfikowany błąd! Wartość: ${error}!`,
          10,
          true
        );
        console.log(error);
      });
  }
}