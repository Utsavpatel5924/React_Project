import React from "react"
import image from "./Asset/img.jpg"

let Cdate=new Date();
// let hour=Cdate.getHours();
let hour="10";
let word="";
let clr;

if(hour>=1&& hour<=12){
    word="Good Morning";
    clr={color:"green"}
}else if(hour >=12&&hour<15){
    word="Good Afternoon";
    clr={color:"red"}
}else if(hour >=15&&hour<19){
    word="Good Evening";
    clr={color:"yellow"}
}else{
    word="Good Night";
    clr={color:"black"}
}

const Greting = () => {
    return<><div>
    <img src={image}  className="m-auto h-auto p-auto mt-6"></img>
    <h1 className="text-7xl text-center text-white absolute top-[180px] left-[100px]">Hello Sir, !</h1>
    <h1 className="text-9xl text-center text-white absolute top-[250px] left-[100px]" style={clr}>{word}</h1> </div></>
}


export default Greting;