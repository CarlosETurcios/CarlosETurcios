var app = document.getElementById('typewriter')

const instance = new Typewriter(app, {
    loop: true
});
instance.typeString("Hello World!")
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am Carlos Turcios')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString(' an aspiring Software Engineer')
    .pauseFor(1000)
    .deleteChars(29)
    .typeString('currently learning Web Development')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my work at<br>github.com/CarlosETurcios')
    .pauseFor(1000)
    .deleteAll()
    .start()