window.onload = function(){
    document.querySelector(".card-part-1 .left-arrow-container").
    addEventListener("click", function() {card_1_left();});

    document.querySelector(".card-part-1 .right-arrow-container").
    addEventListener("click", function() {card_1_right();});

    document.querySelector(".card-part-2 .left-arrow-container").
    addEventListener("click", function() {card_2_left();});

    document.querySelector(".card-part-2 .right-arrow-container").
    addEventListener("click", function() {card_2_right();});

    document.querySelector(".card-part-3 .left-arrow-container").
    addEventListener("click", function() {card_3_left();});

    document.querySelector(".card-part-3 .right-arrow-container").
    addEventListener("click", function() {card_3_right();});

    document.querySelector(".randomizer-button").
    addEventListener("click", function() {randomizeImg();});
}

    // Only works with this naming convention and under 10 images
    // Give me a break, it was made before Christmas.

function card_1_left(){
    let currentImg = document.querySelector(".card-img-1").src;
    currentImg = currentImg.substring(currentImg.length-5, currentImg.length-4);
    swapImage("left","card-img-1", currentImg);
}

function card_1_right(){
    let currentImg = document.querySelector(".card-img-1").src;
    currentImg = currentImg.substring(currentImg.length-5, currentImg.length-4);
    swapImage("right","card-img-1", currentImg);
}

function card_2_left(){
    let currentImg = document.querySelector(".card-img-2").src;
    currentImg = currentImg.substring(currentImg.length-5, currentImg.length-4);
    swapImage("left","card-img-2", currentImg);
}

function card_2_right(){
    let currentImg = document.querySelector(".card-img-2").src;
    currentImg = currentImg.substring(currentImg.length-5, currentImg.length-4);
    swapImage("right","card-img-2", currentImg);
}

function card_3_left(){
    let currentImg = document.querySelector(".card-img-3").src;
    currentImg = currentImg.substring(currentImg.length-5, currentImg.length-4);
    swapImage("left","card-img-3", currentImg);
}

function card_3_right(){
    let currentImg = document.querySelector(".card-img-3").src;
    currentImg = currentImg.substring(currentImg.length-5, currentImg.length-4);
    swapImage("right","card-img-3", currentImg);
}

function swapImage(dir, card, currentImgNr){
    let cardImg = card.substring( 5,10 );
    if(dir == "right"){
        //Change if there is more images
        if(currentImgNr >= 5){
            currentImgNr = 1;
        } else {
            currentImgNr++;
        }
        document.querySelector("." + card).setAttribute('src', './images/' + cardImg + '-' + currentImgNr +'.png');
    } else if(dir == "left") {
        //Change if there is more images
        if(currentImgNr <= 1){
            currentImgNr = 5;
        } else {
            currentImgNr--;
        }
        document.querySelector("." + card).setAttribute('src', './images/' + cardImg + '-' + currentImgNr +'.png');
    }
    document.querySelector("." + card).setAttribute('src', './images/' + cardImg + '-' + currentImgNr +'.png');
}

function randomizeImg(){
    //Change if there is more images
    let randomImg1 = Math.floor(Math.random() * 5) + 1;
    let randomImg2 = Math.floor(Math.random() * 5) + 1;
    let randomImg3 = Math.floor(Math.random() * 5) + 1;

    document.querySelector(".card-img-1").setAttribute('src', './images/img-1-' + randomImg1 + '.png');
    document.querySelector(".card-img-2").setAttribute('src', './images/img-2-' + randomImg2 + '.png');
    document.querySelector(".card-img-3").setAttribute('src', './images/img-3-' + randomImg3 + '.png');
}