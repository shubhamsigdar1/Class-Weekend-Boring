//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
    document.querySelector('#placeToSee').innerText="YOU HAVE CLASS".toUpperCase()
    document.querySelector('#imagesection1').classList.toggle('hidden')
    const image = document.createElement('img')
    image.src  = 'img/class.jpg'
    document.querySelector('#imagesection1').appendChild(image)
    document.querySelector('#imagesection2').classList.add('hidden')
    document.querySelector('#imagesection3').classList.add('hidden')
  }
  else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
    document.querySelector('#placeToSee').innerText="Its The Weekend".toUpperCase()
    document.querySelector('#imagesection2').classList.toggle('hidden')
    const image = document.createElement('img')
    image.src  = 'img/weekend.jpg'
    document.querySelector('#imagesection2').appendChild(image)
    document.querySelector('#imagesection1').classList.add('hidden')
    document.querySelector('#imagesection3').classList.add('hidden')
    
  }else{
    console.log("BORING")
    document.querySelector('#placeToSee').innerText="BORING".toUpperCase()
    document.querySelector('#imagesection3').classList.toggle('hidden')
    const image = document.createElement('img')
    image.src  = 'img/boring.jpg'
    document.querySelector('#imagesection3').appendChild(image)
    document.querySelector('#imagesection1').classList.add('hidden')
    document.querySelector('#imagesection2').classList.add('hidden')
  }

}
