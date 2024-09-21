let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
  let text_speak = new SpeechSynthesisUtterance(text)
  text_speak.rate=1
  text_speak.pitch=1
  text_speak.volume=1
  text_speak.lang="hi-GB" 
  window.speechSynthesis.speak(text_speak)
}

function wishMe(){

   let day = new Date()
   let hours = day.getHours()
  if(hours >=0 && hours<12){
    speak(" Good Morning Sir ") 
    speak("Hello , I am shifra") 
    speak("what can you help you")   
  }
  else if(hours>=12 && hours <16){
    speak("Good afternoon Sir")
    speak("I am shifra") 
    speak("what can you help you")
  }else{
    speak(" Good Evening Sir")
    speak("I am shifra") 
    speak("what can you help you")
    console.log("Hello shifra")
  }
}

wishMe()

// Refresh the page when this script is executed

var wishMe = new wishMe();


window.addEventListener('load', () =>{
  wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition = new speechRecognition()

recognition.onresult = ((event) =>{
  let currentIndex =event.resultIndex
  let transcript = event.results[currentIndex][0].transcript
  content.innerText = transcript
  console.log(transcript.toLowerCase().replace("shipra","")) 
  takeCommand(transcript.toLowerCase())
})

btn.addEventListener("click", () =>{
  recognition.start()
  btn.style.display="none"
  voice.style.display="block"
})

function takeCommand(message){
  btn.style.display="flex"
  voice.style.display="none"
  if(message.includes("hello") || message.includes("hey")){
    speak("hello, sir , what can you help you")
  }
  else if(message.includes("who are you")){
    speak("I am virtual assistant , created by Mukesh Prajapati")
  }
  else if(message.includes("open youtube")){
    speak("opening youtube")
    window.open("https://www.youtube.com/","_blank")
  }
  else if(message.includes("open facebook")){
    speak("opening facebook")
    window.open("https://www.facebook.com/","_blank")
  }
  else if(message.includes("open instagram")){
    speak("opening instagram")
    window.open("https://www.instagram.com/","_blank")
  }
  else if(message.includes("open google")){
    speak("opening google")
    window.open("https://www.google.com/","_blank")
  }
  else if(message.includes("open calculator")){
    speak("opening calculator")
    window.open("calculator://")
  }
  else if(message.includes("open whatsapp ")){
    speak("opening whatsapp")
    window.open("whatsapp://")
  }
  else{
     let finalText=message.replace("shifra","") || message.replace("shipra","")
     let textFinal = "this is what i found on internet regarding" + finalText
    speak(textFinal)
    window.open(`https://www.google.com/search?q=${finalText}`,"_blank")
  }
}


