function sequenceContainer(){
    const container = document.createElement("div");
    container.appendChild(createArrow("arrows/arrow-up-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-up-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-down-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-down-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-left-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-right-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-left-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-right-solid.svg"));
    container.appendChild(createArrow("arrows/b.png"));
    container.appendChild(createArrow("arrows/a.png"));
    const mainBody = document.querySelector("body");
    mainBody.appendChild(container);
}
function createArrow(src){
    const Arrow = document.createElement("img");
    Arrow.src = src;
    Arrow.setAttribute("height", "100px");
    return Arrow;
}
function inputHandler(){
    const sequence = [];
    const konamiCode = ["up","up","down","down","left","right","left","right","b","a"];
    const zeldaCode = ["up","left","right","up","left","right"];

    let isKonamiCode = false;
    let isZeldaCode = false;
    document.addEventListener("keydown", (e)=>{
        const logo = document.querySelector("img");

        if(e.key === "ArrowUp"){
            sequence.push("up");
        }
        if(e.key === "ArrowDown"){
            sequence.push("down");
        }
        if(e.key === "ArrowLeft"){
            sequence.push("left");
        }
        if(e.key === "ArrowRight"){
            sequence.push("right");
            console.log(sequence);
        }
        if(e.key === "b"){
            sequence.push("b");
        }
        if(e.key === "a"){
            sequence.push("a");
        }
        if(e.key === "Enter"){
            const testKonami = sequence.filter((word, index) => word === konamiCode[index]);
            if(testKonami.length === konamiCode.length){
                isKonamiCode = true;
            }
            else{
                isKonamiCode = false;
            }
            const testZelda = sequence.filter((word, index) => word === zeldaCode[index]);
            if(testZelda.length === zeldaCode.length){
                isZeldaCode = true;
            }
            if(isZeldaCode === true){
                const audio = document.querySelector("audio");
                audio.play();
                sequence.splice(0, sequence.length)
            }
            else{
                sequence.splice(0, sequence.length)
            }
            if(isKonamiCode === false){
                logo.classList.remove("combo");
                sequence.splice(0, sequence.length)
            }
            else{
                logo.classList.add("combo");
                sequence.splice(0, sequence.length)
            }
        }
       
    })
}

function createAudio(){
    const mainBody = document.querySelector("body");
    const container = document.createElement("div");
    const triforce = document.createElement("img");
    triforce.src = "triforce.svg";
    triforce.setAttribute("height","150px");
    container.innerHTML = 
    `<audio id="audio" controls style="display:none">
    <source src="epona.mp3" type="audio/mpeg"> Your browser does not support the audio element.
    </audio>`
    mainBody.appendChild(triforce);
    mainBody.appendChild(container);
    container.appendChild(createArrow("arrows/arrow-up-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-left-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-right-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-up-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-left-solid.svg"));
    container.appendChild(createArrow("arrows/arrow-right-solid.svg"));
}


sequenceContainer();
createAudio();
inputHandler();
