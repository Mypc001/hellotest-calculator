input=document.getElementById("input")

function calc(){
	res=eval(input.value)
	input.value=res
	console.log("result="+res)
}
function clr(){
	input.value=" "
}