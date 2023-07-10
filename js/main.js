console.log();
document
  .querySelector(
    "div.navbar>div:nth-of-type(3)>div.container3-nav>a.shoppingbag>svg"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.shoppingbag").classList.toggle("active-bag");
    this.classList.remove(
      "MuiSvgIcon-root MuiSvgIcon-fontSizeInherit appshell-fp-1cw4hi4"
    );
    this.classList.add("fill");
  });

document
  .querySelector(
    "div.navbar>div:nth-of-type(3)>div.container3-nav>a.shoppingbag>svg"
  )
  .addEventListener("click", function () {
    document.querySelector("div.shoppingbag").classList.remove("active-bag");
    this.classList.remove("fill");
    this.classList.add(
      "MuiSvgIcon-root MuiSvgIcon-fontSizeInherit appshell-fp-1cw4hi4"
    );
  });

document
  .querySelector("div.navbar>div>div.container1>button.cont02>span")
  .addEventListener("mouseenter", function () {
    this.classList.remove("fa-light");
    this.classList.remove("fa-user");
    this.classList.add("fa");
    this.classList.add("fa-user");
  });

document
  .querySelector("div.navbar>div>div.container1>button.cont02>span")
  .addEventListener("mouseleave", function () {
    this.classList.remove("fa");
    this.classList.remove("fa-user");
    this.classList.add("fa-light");
    this.classList.add("fa-user");
  });

document
  .querySelector(
    "div.navbar>div:nth-of-type(1)>div.container1>button.cont02>span.fa-light"
  )
  .addEventListener("click", function () {
    document.querySelector("div.login-container").classList.toggle("active");
  });
document
  .querySelector(
    "div.navbar>div:nth-of-type(1)>div.container1>div.login-container"
  )
  .addEventListener("click", function () {
    document.querySelector("div.login-container").classList.remove("active");
  });
// catalogue
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.ecatalogue>a.ecatalogue"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.ecatlogue").classList.toggle("activecat");
  });
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.ecatalogue>a.ecatalogue"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.ecatlogue").classList.remove("activecat");
  });
// inspiration
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.inspiration>a.inspiration"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.inspiration").classList.toggle("active");
  });
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.inspiration>a.inspiration"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.inspiration").classList.remove("active");
  });
// skincare
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.skincare>a.skincare"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.skincare").classList.toggle("active");
  });

document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.skincare>a.skincare"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.skincare").classList.remove("active");
  });
// make-up
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.make-up>a.make-up"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.make-up").classList.toggle("active");
  });

document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.make-up>a.make-up"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.make-up").classList.remove("active");
  });
// fragrance
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.fragrance>a.fragrance"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.fragrance").classList.toggle("active");
  });

document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.fragrance>a.fragrance"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.fragrance").classList.remove("active");
  });
// barh and body
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.bath-and-body>a.bath-and-body"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.bath-and-body").classList.toggle("active");
  });

document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.bath-and-body>a.bath-and-body"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.bath-and-body").classList.remove("active");
  });
// hair
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.hair>a.hair"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.hair").classList.toggle("active");
  });

document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.hair>a.hair"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.hair").classList.remove("active");
  });
// accessories
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.accessories>a.accessories"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.accessories").classList.toggle("active");
  });

document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.accessories>a.accessories"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.accessories").classList.remove("active");
  });
// wellness
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.wellness>a.wellness"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.wellness").classList.toggle("active");
  });

document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.wellness>a.wellness"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.wellness").classList.remove("active");
  });
// men
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.men>a.men"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.men").classList.toggle("active");
  });

document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.men>a.men"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.men").classList.remove("active");
  });
// kids and baby
document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.kids-and-baby>a.kids-and-baby"
  )
  .addEventListener("mouseenter", function () {
    document.querySelector("div.kids-and-baby").classList.toggle("active");
  });

document
  .querySelector(
    "div.navbar>div.fullmenu>div.inner-fullmenu>ul.fullmenu>li.kids-and-baby>a.kids-and-baby"
  )
  .addEventListener("mouseleave", function () {
    document.querySelector("div.kids-and-baby").classList.remove("active");
  });
// fillmenu-click-open
document
  .querySelector(
    "div.navbar>div>div.container1>div.container01>button.btn-contain"
  )
  .addEventListener("click", function () {
    document.querySelector("div.fullmenu").classList.toggle("active");
  });

// responsive-searchbox-clicked
document
  .querySelector(
    "div.navbar>div>div.container3-nav>div.container3-input>div.input-search>svg.MuiSvgIcon-root"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.responsive-searchbox-clicked")
      .classList.toggle("active-serachbox-responsive");
  });
document
  .querySelector(
    "div.responsive-searchbox-clicked>div.responsive-searchbox-input-container>button.responsive-searchbox-closed"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.responsive-searchbox-clicked")
      .classList.remove("active-serachbox-responsive");
  });

// responsive-menu-click-open ecatalogue
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-ecatalogue>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.catalogue-menu")
      .classList.remove("responsive-ecatalogue-hider");
      
  });
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-ecatalogue>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.responsive-menu-icon-presenter-svg")
      .classList.toggle("icon-presenter-rotate");
  });

// inspiration
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-inspiration>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.inspiration")
      .classList.toggle("icon-presenter-rotate");
  });
  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-inspiration>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.inspiration-menu")
      .classList.toggle("activedorost");
  });

// skincare
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-skincare>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.skincare")
      .classList.toggle("icon-presenter-rotate");
  });


  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-skincare>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.skincare-menu")
      .classList.toggle("activedorost");
  });
// make-up
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-make-up>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.make-up")
      .classList.toggle("icon-presenter-rotate");
  });




  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-make-up>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.make-up-menu")
      .classList.toggle("activedorost");
  });
// fragrance
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-fragrance>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.fragrance")
      .classList.toggle("icon-presenter-rotate");
  });

  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-fragrance>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.fragrance-menu")
      .classList.toggle("activedorost");
  });
// bath and body
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-bath-and-body>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.bath-and-body")
      .classList.toggle("icon-presenter-rotate");
  });
  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-bath-and-body>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.bath-and-body-menu")
      .classList.toggle("activedorost");
  });
// hair
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-hair>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.hair")
      .classList.toggle("icon-presenter-rotate");
  });
  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-hair>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.hair-menu")
      .classList.toggle("activedorost");
  });
// accessories
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-accessories>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.accessories")
      .classList.toggle("icon-presenter-rotate");
  });
  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-accessories>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.accessories-menu")
      .classList.toggle("activedorost");
  });
// wellness
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-wellness>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.wellness")
      .classList.toggle("icon-presenter-rotate");
  });
  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-wellness>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.wellness-menu")
      .classList.toggle("activedorost");
  });
// men
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-men>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document.querySelector("svg.men").classList.toggle("icon-presenter-rotate");
  });
  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-men>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document.querySelector("div.men-menu").classList.toggle("activedorost");
  });
// kids and baby
document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-kids-and-baby>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.kids-and-baby")
      .classList.toggle("icon-presenter-rotate");
  });

  document
  .querySelector(
    "div.responsive-fullmenu>aside>ul.responsive-menu-container>li.responsive-kids-and-baby>div.responsive-inner-li"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.kids-and-baby-menu")
      .classList.toggle("activedorost");
  });


  // responsive-fullmenu-clicked
  document
  .querySelector(
    "div.navbar>div>div.container1>div.container01>button.btn-contain>div.bar"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.responsive-fullmenu")
      .classList.toggle("responsive-fullmenu-activation");
  });


  document
  .querySelector(
    "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-menu-btn>div.responsive-burgur-icon-container>svg.responsive-burgur-icon"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.responsive-fullmenu")
      .classList.remove("responsive-fullmenu-activation");
  });
  document
  .querySelector(
    "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-menu-btn>div.responsive-burgur-icon-container>svg.responsive-burgur-icon"
  )
  .addEventListener("click", function () {
    document
      .querySelector("aside")
      .classList.toggle("aside-activation");
  });

// product button prseneter
document
.querySelector(
  "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-menu-btn"
)
.addEventListener("click", function () {
  document
    .querySelector("ul.responsive-menu-container")
    .classList.toggle("active-responsive-ul");
});
document
.querySelector(
  "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-menu-btn"
)
.addEventListener("click", function () {
  document
    .querySelector("button.responsive-register-btn")
    .classList.remove("responsive-register-background");
});
document
.querySelector(
  "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-menu-btn"
)
.addEventListener("click", function () {
  document
    .querySelector("button.responsive-menu-btn")
    .classList.remove("responsive-menu-background");
});
document
.querySelector(
  "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-menu-btn"
)
.addEventListener("click", function () {
  document
    .querySelector("div.responsive-register")
    .classList.remove("responsive-register-activation");
});
document
.querySelector(
  "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-menu-btn"
)
.addEventListener("click", function () {
  document
    .querySelector("ul.responsive-menu-container")
    .classList.remove("ul-hider");
});




// sign/in regidter presenter
document
.querySelector(
  "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-register-btn"
)
.addEventListener("click", function () {
  document
    .querySelector("div.responsive-register")
    .classList.add("responsive-register-activation");
});
document
.querySelector(
  "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-register-btn"
)
.addEventListener("click", function () {
  document
    .querySelector("button.responsive-register-btn")
    .classList.add("responsive-register-background");
});
document
.querySelector(
  "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-register-btn"
)
.addEventListener("click", function () {
  document
    .querySelector("button.responsive-menu-btn")
    .classList.add("responsive-menu-background");
});
document
.querySelector(
  "div.responsive-fullmenu>aside>div.responsive-items-conainer>button.responsive-register-btn"
)
.addEventListener("click", function () {
  document
    .querySelector("ul.responsive-menu-container")
    .classList.add("ul-hider");
});

// responsive footer menu activation
// support and help
document
  .querySelector(
    "div.responsive-footer-info-main-container>div.responsive-footer-menu-info-container>div.responsive-footer-menu-info-inner-container>div.responsive-footer-menu-info-header>div.support-and-help"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.responsive-footer-menu-svg")
      .classList.toggle("icon-presenter-rotate");
  });
  document
  .querySelector(
    "div.responsive-footer-info-main-container>div.responsive-footer-menu-info-container>div.responsive-footer-menu-info-inner-container>div.responsive-footer-menu-info-header>div.support-and-help"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.support-and-help-items")
      .classList.toggle("activedorost");
  });

// corporate info
document
  .querySelector(
    "div.responsive-footer-info-main-container>div.responsive-footer-menu-info-container>div.responsive-footer-menu-info-inner-container>div.responsive-footer-menu-info-header>div.corporate-info"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.corporate")
      .classList.toggle("icon-presenter-rotate");
  });
  document
  .querySelector(
    "div.responsive-footer-info-main-container>div.responsive-footer-menu-info-container>div.responsive-footer-menu-info-inner-container>div.responsive-footer-menu-info-header>div.corporate-info"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.corporate-info-items")
      .classList.toggle("activedorost");
  });
// discover
document
  .querySelector(
    "div.responsive-footer-info-main-container>div.responsive-footer-menu-info-container>div.responsive-footer-menu-info-inner-container>div.responsive-footer-menu-info-header>div.discover"
  )
  .addEventListener("click", function () {
    document
      .querySelector("svg.discover")
      .classList.toggle("icon-presenter-rotate");
  });
  document
  .querySelector(
    "div.responsive-footer-info-main-container>div.responsive-footer-menu-info-container>div.responsive-footer-menu-info-inner-container>div.responsive-footer-menu-info-header>div.discover"
  )
  .addEventListener("click", function () {
    document
      .querySelector("div.discover-items")
      .classList.toggle("activedorost");
  });



