/*
Create app of managing Contacts. 


Write javascript code to to follow this operation 

Create contact — it would take firstName, last name, and phone number.

Update contact — Given unique Id  and detail (first name, lastName, phone )update the contact .

Delete contact — Given an unique contact Id delete the contact

Search contact - Given a name can you search contact available in Array 

*/

function generateUniqueId(firstName, lastName, phoneNumber) {
  // make unique id using contact details

  var result =
    firstName.toLowerCase() + "." + lastName.toLowerCase() + "#" + phoneNumber;
  return result;
}

function createPersonObject(firstName, lastName, phoneNumber) {
  // declare object
  // add required field 
  // return onject

  var obj = new Object();

  obj.id = generateUniqueId(firstName, lastName, phoneNumber);
  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.phoneNumber = phoneNumber;

  return obj;
}

var phoneBook = [];
createContact();
console.log(phoneBook);
// searchContact();
// console.log(phoneBook);
deleteContact();
console.log(phoneBook);
// updateContact();
// console.log(phoneBook);



function createContact() {
  // take user input 
  // get first name
  // get last name
  // get phone number
  // create an object 
  // then push to the phoneBook array

  phoneBook.push(createPersonObject("Hamid", "Hussain", 9213767221));
  
}

function updateContact(id) {
  // search contact by unique id

  // if found
  // get the value from user
  // update with new value

  // if not then inform contact does not exits

  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].id == id) {
      // get the value 
      let fn = "H"
      phoneBook[i].firstName = fn;
    }
  }
  console.log(phoneBook);
}

function searchContact(id) {
  // search contact by unique id
  // if found
  // return the value of the object

  // if not then inform contact does not exits

  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].id == id) {
      return phoneBook[i];
    }
  }

  console.log("Contact does not exist.");
  return null;
}

function deleteContact(id) {
  // search contact by unique id
  // if found then delete

  // if not then inform contact does not exits

  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].id == id) {
      phoneBook.splice(i, 1);  // removing one element at present index
      return;
    }
  }
  console.log("Contact does not exist.");
}

function start() {

  // this function will run continously 
  // it supposed to provide an reoccuring Command Line Interface to interact with

  // HOW TO TAKE INPUT VIA CONSOLE ???
  // HOW TO PAUSE RUNNING CODE TO GET INPUT ( like java language ) ???


  let choice;
  while (choice != 5) {
    console.log("CHOOSE THE OPTION BELOW");
    console.log("1 - > Create Contact");
    console.log("2 - > Update Contact");
    console.log("3 - > Delete Contact");
    console.log("4 - > Search Contact");
    console.log("5 - > Exit");

    switch (choice) {
      case 1:
        createContact();
        break;
      case 2:
        updateContact();
        break;
      case 3:
        deleteContact();
        break;
      case 4:
        searchContact();
        break;
      case 5:
        console.log("Thanks for Using the App");
    }
  }
}