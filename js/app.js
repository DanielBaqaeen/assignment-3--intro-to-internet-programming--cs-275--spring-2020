window.onload = () => {
    let letterA = document.getElementsByTagName(`td`)[0];
    let letterB = document.getElementsByTagName(`td`)[1];
    let letterC = document.getElementsByTagName(`td`)[2];
    let letterD = document.getElementsByTagName(`td`)[3];
    let letterARotated = false;
    let letterBRotated = false;
    let letterCRotated = false;
    let letterDRotated = false;

    function rotateA () {
        if(letterARotated == false){
            letterA.style.transform = `rotate(180deg)`;
            letterARotated = true;
            unRotateB();
            unRotateC();
            unRotateD();
        }

        else if(letterARotated == true){
            letterA.style.transform = `rotate(0deg)`;
            letterARotated = false;
        }

    }

    function rotateB () {
        if(letterBRotated == false){
            letterB.style.transform = `rotate(180deg)`;
            letterBRotated = true;
            unRotateA();
            unRotateC();
            unRotateD();
        }

        else if(letterBRotated == true){
            letterB.style.transform = `rotate(0deg)`;
            letterBRotated = false;
        }

    }

    function rotateC () {
        if(letterCRotated == false){
            letterC.style.transform = `rotate(180deg)`;
            letterCRotated = true;
            unRotateA();
            unRotateB();
            unRotateD();
        }

        else if(letterCRotated == true){
            letterC.style.transform = `rotate(0deg)`;
            letterCRotated = false;
        }

    }

    function rotateD () {
        if(letterDRotated == false){
            letterD.style.transform = `rotate(180deg)`;
            letterDRotated = true;
            unRotateA();
            unRotateB();
            unRotateC();
        }

        else if(letterDRotated == true){
            letterD.style.transform = `rotate(0deg)`;
            letterDRotated = false;
        }

    }
    function unRotateA () {
        letterA.style.transform = `rotate(0deg)`;
        letterARotated = false;
    }

    function unRotateB () {
        letterB.style.transform = `rotate(0deg)`;
        letterBRotated = false;
    }

    function unRotateC () {
        letterC.style.transform = `rotate(0deg)`;
        letterCRotated = false;
    }

    function unRotateD () {
        letterD.style.transform = `rotate(0deg)`;
        letterDRotated = false;
    }


    letterA.addEventListener(`click`, rotateA );
    letterB.addEventListener(`click`, rotateB);
    letterC.addEventListener(`click`, rotateC);
    letterD.addEventListener(`click`, rotateD);
};
