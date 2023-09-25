/**
 * Template Name: Nova
 * Updated: Sep 18 2023 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/nova-bootstrap-business-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector("#header");
  if (selectHeader) {
    document.addEventListener("scroll", () => {
      window.scrollY > 30
        ? selectHeader.classList.add("sticked")
        : selectHeader.classList.remove("sticked");
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      mobileNavToogle();
    });
  });

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

  navDropdowns.forEach((el) => {
    el.addEventListener("click", function (event) {
      if (document.querySelector(".mobile-nav-active")) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("dropdown-active");

        let dropDownIndicator = this.querySelector(".dropdown-indicator");
        dropDownIndicator.classList.toggle("bi-chevron-up");
        dropDownIndicator.classList.toggle("bi-chevron-down");
      }
    });
  });

  /**
   * Brands Slider (similar settings with updated class names)
   */
  new Swiper(".brands-slider", {
    /* Update class name for the new "brands" section */ speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
    },
  });

  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 120,
      },
    },
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  /**
   * Scroll top and WhatsApp buttons
   */
  const whatsappButton = document.querySelector(".whatsapp-button");

  if (scrollTop && whatsappButton) {
    const toggleButtons = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
      whatsappButton.classList.add("active"); // Always make the WhatsApp button active
    };

    window.addEventListener("load", toggleButtons);
    document.addEventListener("scroll", toggleButtons);

    scrollTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper(".slides-3", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  // Function to update the position of the icon section
  function updateIconPosition() {
    const iconList = document.getElementById("iconSocialList");
    const windowHeight = window.innerHeight;
    const iconHeight = iconList.clientHeight;

    if (windowHeight > iconHeight) {
      // Icons fit within the window, position at the bottom
      iconList.style.bottom = "0";
    } else {
      // Icons exceed window height, position accordingly
      iconList.style.bottom = `${windowHeight - iconHeight}px`;
    }
  }

  // Update the icon position on page load and when the window is resized
  window.addEventListener("load", updateIconPosition);
  window.addEventListener("resize", updateIconPosition);

        // Function to get the value of a query parameter from the URL
        function getQueryParam(param) {
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.get(param);
      }

      // Check if the "filter" query parameter is present in the URL
      const filterParam = getQueryParam('filter');

      // Check if a filter value is provided and apply it to your products
      if (filterParam) {
          // Remove the "filter-active" class from all filter items
          const filterItems = document.querySelectorAll('.products-flters li');
          filterItems.forEach(item => {
              item.classList.remove('filter-active');
          });

          // Add the "filter-active" class to the corresponding filter item in your UI
          const activeFilterItem = document.querySelector(`[data-filter=".filter-${filterParam}"]`);
          if (activeFilterItem) {
              activeFilterItem.classList.add('filter-active');
          }

          // Hide products that don't match the selected filter
          const products = document.querySelectorAll('.products-item');
          products.forEach(product => {
              if (!product.classList.contains(`filter-${filterParam}`)) {
                  product.style.display = 'none';
              }
          });
      }

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector(".portfolio-isotope");

  if (portfolionIsotope) {
    let portfolioFilter = portfolionIsotope.getAttribute(
      "data-portfolio-filter"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-filter")
      : "*";
    let portfolioLayout = portfolionIsotope.getAttribute(
      "data-portfolio-layout"
    )
      ? portfolionIsotope.getAttribute("data-portfolio-layout")
      : "masonry";
    let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
      ? portfolionIsotope.getAttribute("data-portfolio-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let portfolioIsotope = new Isotope(
        document.querySelector(".portfolio-container"),
        {
          itemSelector: ".portfolio-item",
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort,
        }
      );

      let menuFilters = document.querySelectorAll(
        ".portfolio-isotope .portfolio-flters li"
      );
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document
              .querySelector(
                ".portfolio-isotope .portfolio-flters .filter-active"
              )
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aos_init === "function") {
              aos_init();
            }
          },
          false
        );
      });
    });
  }

    /**
   * Products isotope and filter
   */
    let productsnIsotope = document.querySelector(".products-isotope");

    if (productsnIsotope) {
      let productsFilter = productsnIsotope.getAttribute(
        "data-products-filter"
      )
        ? productsnIsotope.getAttribute("data-products-filter")
        : "*";
      let productsLayout = productsnIsotope.getAttribute(
        "data-products-layout"
      )
        ? productsnIsotope.getAttribute("data-products-layout")
        : "masonry";
      let productsSort = productsnIsotope.getAttribute("data-products-sort")
        ? productsnIsotope.getAttribute("data-products-sort")
        : "original-order";
  
      window.addEventListener("load", () => {
        let productsIsotope = new Isotope(
          document.querySelector(".products-container"),
          {
            itemSelector: ".products-item",
            layoutMode: productsLayout,
            filter: productsFilter,
            sortBy: productsSort,
          }
        );
  
        let menuFilters = document.querySelectorAll(
          ".products-isotope .products-flters li"
        );
        menuFilters.forEach(function (el) {
          el.addEventListener(
            "click",
            function () {
              document
                .querySelector(
                  ".products-isotope .products-flters .filter-active"
                )
                .classList.remove("filter-active");
              this.classList.add("filter-active");
              productsIsotope.arrange({
                filter: this.getAttribute("data-filter"),
              });
              if (typeof aos_init === "function") {
                aos_init();
              }
            },
            false
          );
        });
      });
    }



    // Function to get the value of a query parameter from the URL
  function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }


  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });

  // DOM Selection Function
  function select(element) {
    return document.querySelector(element);
  }

  // typing header
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
    });
  }
});

 // Get the "Product" list item and its dropdown menu
 const productDropdown = document.getElementById("product-dropdown");
 const productDropdownMenu = productDropdown.querySelector("ul");

 // Add event listeners
 productDropdown.addEventListener("mouseenter", () => {
   // Show the dropdown menu on mouse enter
   productDropdownMenu.style.display = "block";
 });

 productDropdown.addEventListener("mouseleave", () => {
   // Hide the dropdown menu on mouse leave
   productDropdownMenu.style.display = "none";
 });

 // Add a click event listener to navigate to the product page for the main "Product" link
const mainProductLink = productDropdown.querySelector("a");
mainProductLink.addEventListener("click", (e) => {
  // Prevent the default link behavior for the main "Product" link
  e.preventDefault();

  // Redirect to the product page
  window.location.href = "product.html";
});

// Update the links for nested dropdown items (VRF, Gree, Daikin)
const nestedLinks = productDropdownMenu.querySelectorAll("a");

nestedLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent the default link behavior
    e.preventDefault();

    // Redirect to the linked page
    window.location.href = link.getAttribute("href");
  });
});

