// Open/close mobile menu

function openMenu() {
    var header = document.getElementById('header');
    var mbMenu = document.getElementById('mb-menu');
    var headerHeight = header.clientHeight;
    mbMenu.onclick = function() {
        var isClose = header.clientHeight === headerHeight;
        if (isClose) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    }
    var menuItems = document.querySelectorAll('.header__navbar--item a[href*="#"]');
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        menuItem.onclick = function(event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if (!isParentMenu) {
                header.style.height = null;
            } else {
                event.preventDefault();
            }
        }
    }

}


// End Open/close mobile menu