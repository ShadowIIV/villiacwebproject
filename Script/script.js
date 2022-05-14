function bgm {
  document.getElementById('bgm()').volume = 0.2;
  const audio = document.getElementById('bgm()');
  const playlist = ['Audio/jazzy-abstract-beat.mp3', 'Audio/Jazzy_Music1.mp3'];
  let current = 0;

  // Loads next song

  audio.onended = () => {
    current++;
    if (current >= playlist.length) { current = 0; }
    audio.src = playlist[current];
    audio.pause();
    audio.load();
    audio.play();
  };
}

function Contactjs(){
  var name = document.getElementById("Inputname").value;
  var Email = document.getElementById("InputEmail").value;
  var number = document.getElementById("Inputnumber").value;
  var NameMinLength = 4;
  var NameMaxLength = 12;
  
  var text;
  if(name.length < NameMinLength || name.length > NameMaxLength ) {
	alert("Please Enter Name Between 4 and 12 Characters!");
	return false;
}
  if(Email.length < 3){
    alert("Address Should Not Be Blank Or Less Than 3 Characters!");
    return false;
  }
  if(isNaN(number) || number.length  <1){
    alert("Please Enter valid Phone Number!");
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
