
var counter = {}
var isVisible = {}


window.addEventListener('scroll', function () {
  var elements = $("img")
  for (var i = 0; i < elements.length; i++) {
    if (isVisible[elements[i]] == undefined) {
      isVisible[elements[i]] = false
    }
    if (isVisible[elements[i]] == false && $(elements[i]).visible(true)) {
      if (counter[elements[i]]) {
        counter[elements[i]] += 1
      }
      else {
        counter[elements[i]] = 1
      }
    }
    isVisible[elements[i]] = $(elements[i]).visible(true)

  }
})

window.addEventListener("keydown", event => {
  var elements = $("img")
  if (event.keyCode === 75) {
    for (var i = 0; i < elements.length; i++) {
      console.log(elements[i])
      console.log(counter[elements[i]])
    }
  }
})