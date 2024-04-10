//cipg3 is a version of cipg which was a old project to grab ip address (for educational purposes ofc)
//in cipg3 i wanna add more features ig. (for educational purposes ifykyk)
//made by donishbuttercookies
//donishbuttercookie on discord.

`
how it works: on cdo you use expliots to make a 1x1 image from here
then we take ur ip (for educational purposes) and send it in dweet.io 
cdo can access dweet from startwebrequest.
`
//----------------------------------------------------------------------------------------
//basics
const express = require("express");
const axios = require("axios");
const app=express();
const port=3000
const root = {root:__dirname} //to send a file use res.sendFile("name", root)

//-----------------------------------------------------------------------------------------
//file imports


//-----------------------------------------------------------------------------------------
app.get("/", (req,res)=>{
	res.send(`cipg3 port: ${port}
		/ip?dweet=____`) //returns image, dweet ip address to dweet param
});

app.get("/dev", (req, res)=>{ //just to test stuff out
	res.send(!!axios?"yes" : "no");
});

app.get("/ip", async (req,res)=>{
	let ip;
	const query = req.query;

	if (!query.dweet) {

		res.send("bruh no dweet");

	} else if (typeof query.dweet=="string") {

		ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
		let request = axios.get(`https://dweet.io/dweet/for/${query.dweet}?ip=${ip}`);
		res.sendFile("1x1.gif",root);

	} else {res.send("what did blud type (bro u made a typo)");};
});

app.listen(port, ()=>{

	console.log(`yeahh we listening on ${port}`);

});
