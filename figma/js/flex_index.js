// document.querySelector('.ellipse_1').onclick = function() {
//     document.querySelector('.karusel_img_1').classList.add('active');
//     document.querySelector('.karusel_img_2').classList.remove('active');
//     document.querySelector('.karusel_img_3').classList.remove('active');
//     document.querySelector('.karusel_img_4').classList.remove('active');
//     document.querySelector('.karusel_img_5').classList.remove('active');
// }
// document.querySelector('.ellipse_2').onclick = function() {
//     document.querySelector('.karusel_img_2').classList.add('active');
//     document.querySelector('.karusel_img_1').classList.remove('active');
//     document.querySelector('.karusel_img_3').classList.remove('active');
//     document.querySelector('.karusel_img_4').classList.remove('active');
//     document.querySelector('.karusel_img_5').classList.remove('active');
// }
// document.querySelector('.ellipse_3').onclick = function() {
//     document.querySelector('.karusel_img_3').classList.add('active');
//     document.querySelector('.karusel_img_1').classList.remove('active');
//     document.querySelector('.karusel_img_2').classList.remove('active');
//     document.querySelector('.karusel_img_4').classList.remove('active');
//     document.querySelector('.karusel_img_5').classList.remove('active');
// }
// document.querySelector('.ellipse_4').onclick = function() {
//     document.querySelector('.karusel_img_4').classList.add('active');
//     document.querySelector('.karusel_img_1').classList.remove('active');
//     document.querySelector('.karusel_img_2').classList.remove('active');
//     document.querySelector('.karusel_img_3').classList.remove('active');
//     document.querySelector('.karusel_img_5').classList.remove('active');
// }
// document.querySelector('.ellipse_5').onclick = function() {
//     document.querySelector('.karusel_img_5').classList.add('active');
//     document.querySelector('.karusel_img_1').classList.remove('active');
//     document.querySelector('.karusel_img_2').classList.remove('active');
//     document.querySelector('.karusel_img_3').classList.remove('active');
//     document.querySelector('.karusel_img_4').classList.remove('active');
// }
document.querySelector('.ellipse_1').onclick = function () {
    document.querySelector('.kar_img').classList.remove('left_1440px');
    document.querySelector('.kar_img').classList.remove('left_2880px');
    document.querySelector('.kar_img').classList.remove('left_4320px');
    document.querySelector('.kar_img').classList.remove('left_5760px');
}
document.querySelector('.ellipse_2').onclick = function () {
    document.querySelector('.kar_img').classList.add('left_1440px');
    document.querySelector('.kar_img').classList.remove('left_2880px');
    document.querySelector('.kar_img').classList.remove('left_4320px');
    document.querySelector('.kar_img').classList.remove('left_5760px');
}
document.querySelector('.ellipse_3').onclick = function () {
    document.querySelector('.kar_img').classList.add('left_2880px');
    document.querySelector('.kar_img').classList.remove('left_1440px');
    document.querySelector('.kar_img').classList.remove('left_4320px');
    document.querySelector('.kar_img').classList.remove('left_5760px');
}
document.querySelector('.ellipse_4').onclick = function () {
    document.querySelector('.kar_img').classList.add('left_4320px');
    document.querySelector('.kar_img').classList.remove('left_1440px');
    document.querySelector('.kar_img').classList.remove('left_2880px');
    document.querySelector('.kar_img').classList.remove('left_5760px');
}
document.querySelector('.ellipse_5').onclick = function () {
    document.querySelector('.kar_img').classList.add('left_5760px');
    document.querySelector('.kar_img').classList.remove('left_1440px');
    document.querySelector('.kar_img').classList.remove('left_2880px');
    document.querySelector('.kar_img').classList.remove('left_4320px');
}