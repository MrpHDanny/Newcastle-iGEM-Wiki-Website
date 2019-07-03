$(document).scroll(function () {
        var $navHeight = $("nav#mainNav");
        var $nav = $("#mainNav");
        var $dropdown = $(".dropdown-menu");
        var $dropdownitem = $(".navbar-dark .navbar-nav .nav-link.nav-link");
        var $navbaritems = $(".navbar-nav");
        $navHeight.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $dropdown.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $dropdownitem.toggleClass("scrolleditem", $(this).scrollTop() > $nav.height());
        $navbaritems.toggleClass("moveright", $(this).scrollTop() > $nav.height());
      })