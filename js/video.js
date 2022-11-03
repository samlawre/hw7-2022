var video;

window.addEventListener("load", function() {
	video=document.querySelector("#player1");
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
	video.volume=this.value/100
	console.log("The current value is " + video.volume)
	document.querySelector('#volume').innerHTML = video.volume * 100+ "%"
})	


document.querySelector("#vintage").addEventListener("click",function() {
	video.classList.add("oldSchool")
	console.log("Vintage")
})

document.querySelector("#orig").addEventListener("click",function() {
	video.classList.remove("oldSchool")
	console.log("Original")
})

// Deeper questions:
// 1. Yes I could add soemthing that shows the current runetime of the video by putting in an innerHTML and putting the        video.currentTime as the value of that.
// 2. Yes, a thumbnail can be shown if I use the <video> tag itself. 
// 3. Yes, if you put a different src into the video class in the html I could get a different video to work. 
// 4. The slider is not currently accessible. We could make it accessible by adding a focus element for users to tab into it. 