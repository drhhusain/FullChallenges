/*
Create app of managing Contacts. 


Write javascript code to to follow this operation 

Create contact — it would take firstName, last name, and phone number.

Update contact — Given unique Id  and detail (first name, lastName, phone )update the contact .

Delete contact — Given an unique contact Id delete the contact

Search contact - Given a name can you search contact available in Array 

*/


var phoneBook = [];

function generateUniqueId(firstName, lastName, phoneNumber) {
  // make unique id using contact details

  var result =
    firstName.toLowerCase() + "." + lastName.toLowerCase() + "#" + phoneNumber;
  return result;
}

function alreadyExist(fname, lname, ph) {
  if (phoneBook.length == 0)
    return "No";
  
  let id = fname + "." + lname + "#" + ph;
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].id == id) {
      return "Yes"
    }
  }

  return "No"
}

function createPersonObject(firstName, lastName, phoneNumber) {
  // declare object
  // add required field 
  // return onject

  if (alreadyExist(firstName, lastName, phoneNumber) == "Yes")
  return null;

  var obj = new Object();

  obj.id = generateUniqueId(firstName, lastName, phoneNumber);
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.phoneNumber = phoneNumber;

  return obj;
}

function createContact() {

  let fname = document.getElementById("n1").value;
  let lname = document.getElementById("n2").value;
  let ph = document.getElementById("ph1").value;

  if (fname && lname && ph ) {

    var obj = createPersonObject(fname, lname, ph);
    if (obj) {

      phoneBook.push(obj);
    } else {
      var ans = document.getElementById("answer").innerHTML = "Person Already Exist 📂";
      console.log(obj);
      return;
    }
    // phoneBook.push(createPersonObject(fname, lname, ph));
    
    var ans = document.getElementById("answer").innerHTML = fname + " " + lname + " having phone number as " + ph + " is added in the contact";

    console.log(ans);

  } else {
    var ans = document.getElementById("answer").innerHTML = "Please enter right values in the field 📃";
    // console.log("Nahi value hai");
  }
}

function updateContact() {
  var id = prompt("Enter the Unique Id: ");
  var found = false;
  // search contact by unique id

  // if found
  // get the value from user
  // update with new value

  // if not then inform contact does not exits

  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].id == id) {
      found = true;
      // get the value 

      var fname = document.getElementById("n1").value;
      var lname = document.getElementById("n2").value;
      var ph = document.getElementById("ph1").value;

      if (fname && lname && ph) {
        let input = prompt("What to update:\n1 -> First Name\n2 -> Last Name:\n3 -> Phone Number");

        switch(input) {

          case "1":
            phoneBook[i].firstName = fname;
            break;

          case "2":
            phoneBook[i].firstName = lname;
            break;

          case "3":
            phoneBook[i].firstName = ph;
            break;
          default:
            phoneBook[i].id = fname + "." + lname + "#" + ph;
        }
      } else {
        var ans = document.getElementById("answer").innerHTML = "Please fill every input field 📃";
      }
      
    }
  }
  if (!found)
  var ans = document.getElementById("answer").innerHTML = "Entered Unique Id does not Exist ❌";
}


function deleteContact() {
  var id = prompt("Enter the Unique Id: ");
  var found = false;
  // search contact by unique id
  // if found then delete

  // if not then inform contact does not exits

  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].id == id) {
      found = true;
      
      var ans = document.getElementById("answer").innerHTML = "Contact named \"" + phoneBook[i].firstName + "\" was removed ✅";
      
      phoneBook.splice(i, 1);  // removing one element at present index

      return;
    }
  }

  if (!found)
  var ans = document.getElementById("answer").innerHTML = "Contact does not exist ❌";

  // console.log("Contact does not exist");
}

function searchContact() {
  var id = prompt("Enter the Unique Id: ");
  var found = false;
  // search contact by unique id
  // if found
  // return the value of the object

  // if not then inform contact does not exits

  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].id == id) {
      found = true;

      var ans = document.getElementById("answer").innerHTML = "Contact found:\nName: " + phoneBook[i].firstName + " " + phoneBook[i].lastName + "\nPh No: " + phoneBook[i].phoneNumber;

      return;
    }
  }

  if (!found)
  var ans = document.getElementById("answer").innerHTML = "Contact does not exist ❌";

  // console.log("Contact does not exist.");

}