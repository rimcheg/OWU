document.querySelector('.read_more').onclick = function() {
    document.querySelector('.blog_read').classList.add('active');
}
document.querySelector('.blog_1_back').onclick = function() {
    document.querySelector('.blog_read').classList.remove('active');
}