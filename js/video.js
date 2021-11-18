var video = document.getElementById("player1");
var rate = 1;
const b = document.getElementById("mute");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

let volume = document.getElementById("slider");
let volVal = document.getElementById("volume");

volume.addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;
	volVal.innerText = e.currentTarget.value + "%";
})

document.getElementById("slower").addEventListener("click", function(){
	rate = rate  -.05;
	video.playbackRate = rate;
	console.log(video.playbackRate)
});

document.getElementById("faster").addEventListener("click", function(){
	rate = rate + 0.5;
	video.playbackRate = rate;
	console.log(video.playbackRate)
});

document.getElementById("skip").addEventListener("click", function(){
	if(video.duration<video.currentTime+15){
		video.currentTime = 0;
	}
	else{
		video.currentTime = video.currentTime +15;
	}
	console.log(video.currentTime);
});

b.addEventListener("click", function(){
	if(b.innerText == "Mute"){
		b.innerText = "Unmute"
		video.muted = true;
		document.getElementById("volume").innerText = video.volume*100 + "%";
	}
});

document.getElementById("vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
});

document.getElementById("orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
});
