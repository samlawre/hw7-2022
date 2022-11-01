var video=document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay= false;
	video.loop=false;
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Looping is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector('#volume').innerHTML = video.volume * 100+ "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= .9
	console.log("speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= .9
	console.log("speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping ahead")
	video.currentTime+=10
	if (video.currentTime >= video.duration){
		video.currentTime=0
	}
	console.log("Video is at position "+ video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==true){
		console.log("Video is now unmuted")
		video.muted=false
		this.innerHTML="Mute"
	}
	else{
		console.log("Video is now muted")
		video.muted=true
		this.innerHTML="Unmute"
	}
})

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume")
	video.value=this.value/100
	console.log("The current value is " + video.value)
	document.querySelector('#volume').innerHTML = video.value * 100+ "%"
})	


document.querySelector("#video").addEventListener("click",function() {
	// need to finish
    if (this==true){
		console.log("Vintage")
    }
})