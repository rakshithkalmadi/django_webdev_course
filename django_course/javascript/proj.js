alert("Hello welcome here!!");
var firstname=prompt("Whats your first name");
var lastname=prompt("Whats your last name");
var age=prompt("Whats your age");
var height=prompt("Whats your height");
var petname=prompt("Whats your pet name");
alert("Thank you for the information");


//Conditions
var namecond=null;
var agecond=null;
var heightcond=null;
var petcond=null;

//Name Condition
if(firstname[0]==lastname[0]){
  namecond=true;
}
else{
  namecond=false;
}

//Age Condition
if(age>20 && age<30){
  agecond=true;
}
else{
  agecond=false;
}

//Height Condition
if(height>170){
  heightcond=true;
}
else {
  heightcond=false;
}

//Pet Condition
if(petname[petname.lenght-1]==='y'){
  petcond=true;

}
else {
  petcond=false;
}
//Check all Conditions
if(namecond && agecond && heightcond && petcond){
  console.log("Welcome to Spy!!");
}
else {
  console.log("Nothing to see here");
}
