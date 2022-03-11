M.AutoInit();
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
    });
});
const copyURL = () => {
    navigator.clipboard.writeText("https://nich87.github.io/");
    M.toast({
        html: 'URLをコピーしました！',
        classes: 'rounded'
    });
};

const content_copy = document.getElementById('content-copy');
const pagetop = document.getElementById('pagetop');


content_copy.addEventListener('click', () => copyURL());
pagetop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

