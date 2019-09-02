const cowFloat = TweenMax.to('.cow', 3, {y: 400, rotation: 5});
const moopsFloat = TweenMax.to('.moops', 3, {opacity: 0.2, rotation:-2});
const ufoFloat = TweenMax.to('.ufo', 5, {x: -20, rotation: 3});
const cloudsFloat = TweenMax.to('.clouds', 90, {x: 60});
const actionAppear = TweenMax.to('.action', 1, {opacity: 1});

cowFloat.yoyo(true).repeat(-1);
moopsFloat.yoyo(true).repeat(-1);
ufoFloat.yoyo(true).repeat(-1);
cloudsFloat.yoyo(true).repeat(-1);