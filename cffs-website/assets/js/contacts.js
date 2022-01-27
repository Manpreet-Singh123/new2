firebase.initializeApp({
    apiKey: "AIzaSyCk1WrUXwTZyP1dfhJO3vAm0Vcb_HHxHyc",
    authDomain: "cffs-contacts.firebaseapp.com",
    projectId: "cffs-contacts"
});

var db = firebase.firestore();

function submitContactForm() {

    var name = document.getElementById("nameField").value;
    var email = document.getElementById("emailField").value;
    var phone = document.getElementById("phoneField").value;
    var message = document.getElementById("messageField").value;

    if(name != "" && email != "" && phone != "" && message != "") {

        if(email.indexOf("@") != -1 && phone.length==10) {

            db.collection("Messages").add({
                "Name": name,
                "Email": email,
                "Phone": phone,
                "Message": message
            })
            .then((docRef)=> {
                console.log("Form successfully submitted.");
                return true;
            })
            .catch((error)=> {
                console.log(error);
                return false;
            })

        } else {
            console.log("Invalid email or phone");
            return false;
        }

    } else {
        console.log("All fields are required.");
        return false;
    }

}
