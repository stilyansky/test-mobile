

window.onload=function(){
    w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    var targetWidth = 700;
    if ( w >= targetWidth) {     
        const cowFloat = TweenMax.to('.cow', 3, {y: -10, rotation: 5});
        const moopsFloat = TweenMax.to('.moops', 4, {y: 5,opacity: 0.2, rotation:-2});
        const ufoFloat = TweenMax.to('.ufo', 5, {x: 5, rotation: 3});
        const cloudsFloat = TweenMax.to('.clouds', 90, {x: 60});
        
        cowFloat.yoyo(true).repeat(-1);
        moopsFloat.yoyo(true).repeat(-1);
        ufoFloat.yoyo(true).repeat(-1);
        cloudsFloat.yoyo(true).repeat(-1);
    }
    else {
        const cowFloat = TweenMax.to('.cow', 3, {y: 10, rotation: 5});
        const moopsFloat = TweenMax.to('.moops', 4, {y: 5,opacity: 0.2, rotation:-2});
        const ufoFloat = TweenMax.to('.ufo', 5, {x: 5, rotation: 3});
        const cloudsFloat = TweenMax.to('.clouds', 90, {x: 60});
        
        cowFloat.yoyo(true).repeat(-1);
        moopsFloat.yoyo(true).repeat(-1);
        ufoFloat.yoyo(true).repeat(-1);
        cloudsFloat.yoyo(true).repeat(-1);
    }  
    };