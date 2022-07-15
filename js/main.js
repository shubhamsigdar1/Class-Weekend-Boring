//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
    document.querySelector('#placeToSee').innerText="YOU HAVE CLASS".toUpperCase()
    const image = document.createElement('img')
    image.src  = 'img/backgroundimage.jpg'
    document.querySelector('#imagesection').appendChild(image)
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
    document.querySelector('#placeToSee').innerText="Its The Weekend".toUpperCase()
  }else{
    console.log("BORING")
    document.querySelector('#placeToSee').innerText="BORING".toUpperCase()
  }

}
