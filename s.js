  class Person {
    constructor(){
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
      this.city = city;
      this.number = number;
      this.address = address;
    }
  }

  function user(){
    let id = new Person(
      document.getElementById("firstName"),
      document.getElementById("lastName"),
      document.getElementById("dateOfBirth"),
      document.getElementById("city"),
      document.getElementById("number"),
      document.getElementById("address")
    );

let row = "<tr><td>"+id.firstName.value+"</td><td>"+id.lastName.value+"</td><td>"+id.dateOfBirth.value+"</td><td>"+id.city.value+"</td><td>"+id.number.value+"</td><td>"+id.address.value+"</td></tr>"
document.getElementById('tab').innerHTML += row;


document.getElementById("firstName").value="";
document.getElementById("lastName").value="";
document.getElementById("dateOfBirth").value="";
document.getElementById("city").value="";
document.getElementById("number").value="";
document.getElementById("address").value="";

}
