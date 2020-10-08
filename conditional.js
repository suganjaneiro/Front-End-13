var age = Number(prompt("Enter your age: (Only in Numbers)"));
if(age <= 0)
{
	console.log("Come back once you're out of the womb");
}
if(age===21)
{
	console.log("Happy 21st Birthday");
}
if(age % 2 !== 0)
{
	console.log("Your age is odd!");
}
if(age % 2 === 0)
{
	console.log("Your age is a even number");
}
if(age % Math.sqrt(age) === 0)
{
	console.log("Your age is a perfect square");
}