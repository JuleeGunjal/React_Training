let age = 25;

switch (true){
  case (age < 11):
    console.log("child");
    break;
  case (age > 18):
    console.log("adult");
    break;
  case (12 < age < 19):
    console.log("teen");
    break;
}
 // Gives o/p as "adult"