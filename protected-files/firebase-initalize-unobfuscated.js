var firebaseConfig = {
  apiKey: "AIzaSyBCiswuXhqa5tUe2-DhyZyyC_1nop8dLXU",
  authDomain: "countergasnica.firebaseapp.com",
  projectId: "countergasnica",
  storageBucket: "countergasnica.appspot.com",
  messagingSenderId: "776426877928",
  appId: "1:776426877928:web:0c6559a3fcc4c64d206a5d",
  measurementId: "G-6Z9SFEGPKR",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var userLogged = false;

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

/* if user has a admin_status = true show AdminPanel button */
function checkAdminStatus(loginProvided, passwordProvided) {
  if (!userLogged) {
    return;
  } else {
    const usersCollection = db.collection("users");
    usersCollection
      .where("userLogged", "==", true)
      .where("login", "==", loginProvided)
      .where("password", "==", passwordProvided)
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.empty) {
          notis.create(
            "Error",
            "Nie znaleziono użytkownika! Sprawdź czy został utworzony!",
            10,
            true
          );
        } else {
          const user = querySnapshot.docs[0].data();
          const userId = querySnapshot.docs[0].id;
          if (user.admin_status) {
            const adminPanelButton =
              document.querySelector("#adminPanelButton");
            adminPanelButton.style.display = "block";

            adminPanelButton.addEventListener("click", function () {
              /* Change counter value prompt */
              var newvalue = prompt("Podaj nową wartość licznika:", "0");
              if (newvalue != null) {
                setCounter(parseInt(newvalue));
              }
            });
          }
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
        const user = querySnapshot.docs[0].data();
        const userId = querySnapshot.docs[0].id;

        // Update userLogged to true
        db.collection("users")
          .doc(userId)
          .update({ userLogged: true })
          .then(function () {
            notis.create("Success", "Zalogowano pomyślnie", 15, true);
            const loginForm = document.querySelector("#loginForm");
            loginForm.style.display = "none";
            const counterSection = document.querySelector("#counter-section");
            counterSection.style.display = "block";
            /* Show logout button */
            const logoutButton = document.querySelector("#logoutButton");
            logoutButton.style.display = "block";
            userLogged = true;
            if (userLogged) {
              getCounter();
              checkAdminStatus(username, password);
              notis.create("Success", "Pomyślnie załadowano licznik!", 5, true);
            }
            // Schedule a timeout to set userLogged to false after 10 minutes
            setTimeout(function () {
              db.collection("users")
                .doc(userId)
                .update({ userLogged: false })
                .then(function () {
                  notis.create(
                    "Wylogowano",
                    "Zostałeś wylogowany z powodu braku aktywności przez 10 minut!",
                    5,
                    true
                  );
                  const loginForm = document.querySelector("#loginForm");
                  loginForm.style.display = "block";
                  const counterSection =
                    document.querySelector("#counter-section");
                  counterSection.style.display = "none";
                  userLogged = false;
                });
            }, 600000); // 10 minutes in milliseconds
            // Set a flag to track whether the user is closing the page
            let isClosing = false;

            // Add an event listener for the beforeunload event
            window.addEventListener("beforeunload", function (e) {
              // Prevent the event from being immediately handled
              e.preventDefault();
              // Set the flag to indicate the user is closing the page
              isClosing = true;

              // Delay the update to allow the userLogged status to be changed
              setTimeout(() => {
                // Check if the user is actually closing the page
                if (isClosing) {
                  // Change `userLogged` to `false` when the user closes the website
                  db.collection("users")
                    .doc(userId)
                    .update({ userLogged: false })
                    .then(function () {
                      console.log("User is closing the page");
                      const loginForm = document.querySelector("#loginForm");
                      loginForm.style.display = "block";
                      const counterSection =
                        document.querySelector("#counter-section");
                      counterSection.style.display = "none";
                      userLogged = false;
                    });
                }
              }, 1000); // Add a small delay for smoother experience
            });

            // Clear the flag when the user interacts with the page
            document.addEventListener("click", function () {
              console.log("User is interacting with the page");
              isClosing = false;
            });
          })
          .catch(function (error) {
            console.error(
              "Błąd podczas aktualizowania statusu użytkownika: ",
              error
            );
          });
      }
    })
    .catch(function (error) {
      console.error("Błąd podczas edycji dokumentu: ", error);
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
          notis.create(
            "Error",
            "Licznik nie widnieje w bazie danych!",
            10,
            true
          );
        }
      })
      .then(function () {
        notis.create(
          "Zaktualizowano",
          `Licznik został zwiększony o ${newvalue}!`,
          5,
          true
        );
        getCounter();
      })
      .catch(function (error) {
        notis.create(
          "Error",
          `Wystąpił niezidentyfikowany błąd! Wartość: ${error}!`,
          5,
          true
        );
        console.log(error);
      });
  }
}

/* updateCounter function in Firebase */
function setCounter(newvalue) {
  if (!userLogged) {
    return;
  } else {
    const counterCollection = db.collection("counter").doc("counter");

    // Get the current value
    counterCollection
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const updatedValue = newvalue;

          // Update the value with the new value
          return counterCollection.update({ value: updatedValue });
        } else {
          notis.create(
            "Error",
            "Licznik nie widnieje w bazie danych!",
            5,
            true
          );
        }
      })
      .then(function () {
        notis.create(
          "Zaktualizowano",
          `Licznik został ustawiony na ${newvalue}!`,
          5,
          true
        );
        getCounter();
      })
      .catch(function (error) {
        notis.create(
          "Error",
          `Wystąpił niezidentyfikowany błąd! Wartość: ${error}!`,
          5,
          true
        );
        console.log(error);
      });
  }
}

/* Logout  */
function logout() {
  if (!userLogged) {
    return;
  } else {
    const usersCollection = db.collection("users");
    usersCollection
      .where("userLogged", "==", true)
      .get()
      .then(function (querySnapshot) {
        if (querySnapshot.empty) {
          notis.create(
            "Error",
            "Nie znaleziono użytkownika! Sprawdź czy został utworzony!",
            10,
            true
          );
        } else {
          const user = querySnapshot.docs[0].data();
          const userId = querySnapshot.docs[0].id;
          db.collection("users")
            .doc(userId)
            .update({ userLogged: false })
            .then(function () {
              notis.create("Success", "Wylogowano pomyślnie", 10, true);
              userLogged = false;
              /* Reload website */
              location.reload();
            });
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

/* Logout when button "Wyloguj" clicked */
document.getElementById("logoutButton").addEventListener("click", function () {
  logout();
});
