document.querySelector('.blog_1_back').onclick = function () {
    document.querySelector('.read_more_page').classList.remove('active');
    document.querySelector('.flex_abs').classList.add('display_none')
}
document.querySelector('.read_more').onclick = function () {
    document.querySelector('.flex_abs').classList.remove('display_none')
    document.querySelector('.read_more_page').classList.add('active');
}