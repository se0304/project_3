//menu hover p 나타남.
let fadehs = document.querySelectorAll('aside a h1');

fadehs.forEach(function(fadeh){
    fadeh.onmouseover = function(){
        console.log(this.nextSibling)
        this.nextSibling.style.opacity = 1
    }

    fadeh.onmouseout = function(){
        this.nextSibling.style.opacity = 0
    }
});
