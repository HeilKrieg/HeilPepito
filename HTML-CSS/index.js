function evento(e) {
    console.dir(e.target.clildren[0]);
    let h2 = e.target.clildren[0];
    h2.innertTex = "Buena Suerte";
}

function evento(event) {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.width = '100px';
    });
    setTimeout(()=>{
        location.href = "https://youtu.be/9E0ZWH0usvk"
    },500);
    
    let currentBox = event.currentTarget;
    currentBox.style.width = '600px';
}