M.AutoInit();
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
    });
});
const copyCB = (str) => {
    navigator.clipboard.writeText(str);
    M.toast({
        html: 'クリップボードにコピーしました！',
        classes: 'rounded'
    });
};

const content_copy = document.getElementById('content-copy');
const pagetop = document.getElementById('pagetop');
const d_discord = document.getElementById('dropdown-discord');


content_copy.addEventListener('click', () => copyCB('https://nich87.github.io/'));
d_discord.addEventListener('click', () => copyCB('あると#3037'));
pagetop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

