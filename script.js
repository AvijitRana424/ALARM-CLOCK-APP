const curTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selMenu = document.querySelectorAll("select"),
setBtn = document.querySelector("button");

let aT, isAset = false,
ring = new Audio("ringtone.mp3");


for(let i=12; i>0;i--)
{
	i = i<10 ? "0"+i : i;
	let option = `<option value="${i}">${i}</option>`;
	selMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);

}

for(let i=59; i >= 0;i--)
{
	i = i<10 ? "0"+i : i;
	let option = `<option value="${i}">${i}</option>`;
	selMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);

}

for(let i=2; i>0;i--)
{
	let ap = i==1 ? "AM" : "PM";
	let option = `<option value="${ap}">${ap}</option>`;
	selMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);

}

setInterval(() => {

   let date = new Date(),
   h = date.getHours();
   m = date.getMinutes();
   s = date.getSeconds();
   ap = "AM";
   if(h>=12)
   {
   	h = h-12;
   	ap = "PM";

   }

   h = h==0 ? h =12: h;

   h = h<10 ? "0"+h : h;
   m = m<10 ? "0"+m : m;
   s = s<10 ? "0"+s : s;

   
   curTime.innerText = `${h}:${m}:${s} ${ap}`;

   // console.log(`${h}:${m}:${ap}`);
   if(aT == `${h}:${m}:${ap}`)
   {
   ring.play();
   ring.loop = true;
   
   }


}, 1000);

function setAlam()
{
	if(isAset)
	{
		aT = "";
		ring.pause();
		content.classList.remove("disable");
		setBtn.innerText = "Set Alarm";
		return isAset = false;

	}
	let time = `${selMenu[0].value}:${selMenu[1].value}:${selMenu[2].value}`;
	if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM") ){
       return alert("Please, select a valid time to set Alarm!");
	}

	isAset = true;
	aT = time;
	content.classList.add("disable");
	setBtn.innerText = "Clear Alarm";
	// console.log(aT);
}
setBtn.addEventListener("click", setAlam);