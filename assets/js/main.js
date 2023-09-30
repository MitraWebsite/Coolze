/**
 * Template Name: Nova
 * Updated: Sep 18 2023 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/nova-bootstrap-business-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
document.addEventListener("DOMContentLoaded", () => {
  ("use strict");

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
      delay: 2500,
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
      delay: 2500,
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

  function toggleButtons(scrollTop, whatsappButton) {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
    whatsappButton.classList.add("active"); // Always make the WhatsApp button active
  }

  const whatsappButton = document.querySelector(".whatsapp-button");

  if (scrollTop && whatsappButton) {
    window.addEventListener("load", () =>
      toggleButtons(scrollTop, whatsappButton)
    );
    document.addEventListener("scroll", () =>
      toggleButtons(scrollTop, whatsappButton)
    );

    scrollTop.addEventListener("click", () => {
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

    // Check if the element with ID "iconSocialList" exists
    if (iconList) {
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
  }

  // Update the icon position on page load and when the window is resized
  window.addEventListener("load", updateIconPosition);
  window.addEventListener("resize", updateIconPosition);

  // Products Filter URL ======================================

  // Function to get the value of a query parameter from the URL
  // function getQueryParam(param) {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   return urlParams.get(param);
  // }

  // Check if the "filter" query parameter is present in the URL
  // const filterParam = getQueryParam("filter");

  // Check if a filter value is provided and apply it to your products
  // if (filterParam) {
  // Remove the "filter-active" class from all filter items
  // const filterItems = document.querySelectorAll(".products-flters li");
  // filterItems.forEach((item) => {
  //   item.classList.remove("filter-active");
  // });

  // Add the "filter-active" class to the corresponding filter item in your UI
  // const activeFilterItem = document.querySelector(
  //   `[data-filter=".filter-${filterParam}"]`
  // );
  // if (activeFilterItem) {
  //   activeFilterItem.classList.add("filter-active");
  // }

  // Hide products that don't match the selected filter
  //   const products = document.querySelectorAll(".products-item");
  //   products.forEach((product) => {
  //     if (!product.classList.contains(`filter-${filterParam}`)) {
  //       product.style.display = "none";
  //     }
  //   });
  // }

  // End Products Filter URL ======================================
  /**
   * Project isotope and filter
   */
  let projectnIsotope = document.querySelector(".project-isotope");

  if (projectnIsotope) {
    let projectFilter = projectnIsotope.getAttribute("data-project-filter")
      ? projectnIsotope.getAttribute("data-project-filter")
      : "*";
    let projectLayout = projectnIsotope.getAttribute("data-project-layout")
      ? projectnIsotope.getAttribute("data-project-layout")
      : "masonry";
    let projectSort = projectnIsotope.getAttribute("data-project-sort")
      ? projectnIsotope.getAttribute("data-project-sort")
      : "original-order";

    window.addEventListener("load", () => {
      let projectIsotope = new Isotope(
        document.querySelector(".project-container"),
        {
          itemSelector: ".project-item",
          layoutMode: projectLayout,
          filter: projectFilter,
          sortBy: projectSort,
        }
      );

      let menuFilters = document.querySelectorAll(
        ".project-isotope .project-flters li"
      );
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document
              .querySelector(".project-isotope .project-flters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            projectIsotope.arrange({
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
   * Cassette isotope and filter
   */
  //  let cassettenIsotope = document.querySelector(".cassette-isotope");

  //  if (cassettenIsotope) {
  //    let cassetteFilter = cassettenIsotope.getAttribute(
  //      "data-cassette-filter"
  //    )
  //      ? cassettenIsotope.getAttribute("data-cassette-filter")
  //      : "*";
  //    let cassetteLayout = cassettenIsotope.getAttribute(
  //      "data-cassette-layout"
  //    )
  //      ? cassettenIsotope.getAttribute("data-cassette-layout")
  //      : "masonry";
  //    let cassetteSort = cassettenIsotope.getAttribute("data-cassette-sort")
  //      ? cassettenIsotope.getAttribute("data-cassette-sort")
  //      : "original-order";

  //    window.addEventListener("load", () => {
  //      let cassetteIsotope = new Isotope(
  //        document.querySelector(".cassette-container"),
  //        {
  //          itemSelector: ".cassette-item",
  //          layoutMode: cassetteLayout,
  //          filter: cassetteFilter,
  //          sortBy: cassetteSort,
  //        }
  //      );

  //      let menuFilters = document.querySelectorAll(
  //        ".cassette-isotope .cassette-filters li"
  //      );
  //      menuFilters.forEach(function (el) {
  //        el.addEventListener(
  //          "click",
  //          function () {
  //            document
  //              .querySelector(
  //                ".cassette-isotope .cassette-filters .filter-active"
  //              )
  //              .classList.remove("filter-active");
  //            this.classList.add("filter-active");
  //            cassetteIsotope.arrange({
  //              filter: this.getAttribute("data-filter"),
  //            });
  //            if (typeof aos_init === "function") {
  //              aos_init();
  //            }
  //          },
  //          false
  //        );
  //      });
  //    });
  //  }

  function filterCassette(filterParam) {
    const filterItems = document.querySelectorAll(".cassette-filters li");
    filterItems.forEach((item) => {
      item.classList.remove("filter-active");
      if (item.getAttribute("data-filter") === `.filter-${filterParam}`) {
        item.classList.add("filter-active");
      }
    });

    const Cassette = document.querySelectorAll(".cassette-item");
    Cassette.forEach((product) => {
      product.style.display = "none";
    });

    if (filterParam === "*") {
      Cassette.forEach((product) => {
        product.style.display = "block";
      });
    } else {
      const filteredCassette = document.querySelectorAll(
        `.cassette-item.filter-${filterParam}`
      );
      filteredCassette.forEach((product) => {
        product.style.display = "block";
      });
    }
  }

  const cassetteItems = document.querySelectorAll(".cassette-filters li");
  cassetteItems.forEach((item) => {
    item.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter").replace(
        ".filter-",
        ""
      );
      filterCassette(filterValue);
    });
  });

  /**
   * Ductingisotope and filter
   */

  function filterDucting(filterParam) {
    const filterItems = document.querySelectorAll(".ducting-filters li");
    filterItems.forEach((item) => {
      item.classList.remove("filter-active");
      if (item.getAttribute("data-filter") === `.filter-${filterParam}`) {
        item.classList.add("filter-active");
      }
    });

    const Ducting = document.querySelectorAll(".ducting-item");
    Ducting.forEach((product) => {
      product.style.display = "none";
    });

    if (filterParam === "*") {
      Ducting.forEach((product) => {
        product.style.display = "block";
      });
    } else {
      const filteredDucting = document.querySelectorAll(
        `.ducting-item.filter-${filterParam}`
      );
      filteredDucting.forEach((product) => {
        product.style.display = "block";
      });
    }
  }

  const ductingItems = document.querySelectorAll(".ducting-filters li");
  ductingItems.forEach((item) => {
    item.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter").replace(
        ".filter-",
        ""
      );
      filterDucting(filterValue);
    });
  });

  /**
   * Products isotope and filter
   */
  // let productsnIsotope = document.querySelector(".products-isotope");

  // if (productsnIsotope) {
  //   let productsFilter = productsnIsotope.getAttribute("data-products-filter")
  //     ? productsnIsotope.getAttribute("data-products-filter")
  //     : "*";
  //   let productsLayout = productsnIsotope.getAttribute("data-products-layout")
  //     ? productsnIsotope.getAttribute("data-products-layout")
  //     : "masonry";
  //   let productsSort = productsnIsotope.getAttribute("data-products-sort")
  //     ? productsnIsotope.getAttribute("data-products-sort")
  //     : "original-order";

  //   window.addEventListener("load", () => {
  //     let productsIsotope = new Isotope(
  //       document.querySelector(".products-container"),
  //       {
  //         itemSelector: ".products-item",
  //         layoutMode: productsLayout,
  //         filter: productsFilter,
  //         sortBy: productsSort,
  //       }
  //     );

  //     let menuFilters = document.querySelectorAll(
  //       ".products-isotope .products-flters li"
  //     );
  //     menuFilters.forEach(function (el) {
  //       el.addEventListener(
  //         "click",
  //         function () {
  //           document
  //             .querySelector(
  //               ".products-isotope .products-flters .filter-active"
  //             )
  //             .classList.remove("filter-active");
  //           this.classList.add("filter-active");
  //           productsIsotope.arrange({
  //             filter: this.getAttribute("data-filter"),
  //           });
  //           if (typeof aos_init === "function") {
  //             aos_init();
  //           }
  //         },
  //         false
  //       );
  //     });
  //   });
  // }

  //Products Filter ============================================

  // Function to get the value of a query parameter from the URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Function to filter products based on the query parameter
  function filterProducts(filterParam) {
    const filterItems = document.querySelectorAll(".products-flters li");
    filterItems.forEach((item) => {
      item.classList.remove("filter-active");
      if (item.getAttribute("data-filter") === `.filter-${filterParam}`) {
        item.classList.add("filter-active");
      }
    });

    const products = document.querySelectorAll(".products-item");
    products.forEach((product) => {
      product.style.display = "none";
    });

    if (filterParam === "*") {
      products.forEach((product) => {
        product.style.display = "block";
      });
    } else {
      const filteredProducts = document.querySelectorAll(
        `.products-item.filter-${filterParam}`
      );
      filteredProducts.forEach((product) => {
        product.style.display = "block";
      });
    }
  }

  // Check if the "filter" query parameter is present in the URL
  const filterParam = getQueryParam("filter");

  // Check if a filter value is provided and apply it to your products
  if (filterParam) {
    filterProducts(filterParam);
  }

  // Event listener for filter clicks
  const filterItems = document.querySelectorAll(".products-flters li");
  filterItems.forEach((item) => {
    item.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter").replace(
        ".filter-",
        ""
      );
      filterProducts(filterValue);
    });
  });

  // End Products Filter ============================================

  // Commercial Filter Function ==============================================

  // Function to filter commercial items based on the query parameter
  function filterCommercial(filterParam) {
    const filterItems = document.querySelectorAll(".commercial-filters li");
    filterItems.forEach((item) => {
      item.classList.remove("filter-active");
      if (item.getAttribute("data-filter") === `.filter-${filterParam}`) {
        item.classList.add("filter-active");
      }
    });

    const commercialItems = document.querySelectorAll(".commercial-item");
    commercialItems.forEach((item) => {
      item.style.display = "none";
    });

    if (filterParam === "*") {
      commercialItems.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      const filteredItems = document.querySelectorAll(
        `.commercial-item.filter-${filterParam}`
      );
      filteredItems.forEach((item) => {
        item.style.display = "block";
      });
    }
  }

  // Check if the "commercial-filter" query parameter is present in the URL
  const commercialFilterParam = getQueryParam("commercial-filter");

  // Check if a filter value is provided and apply it to your commercial items
  if (commercialFilterParam) {
    filterCommercial(commercialFilterParam);
  }

  // Event listener for filter clicks in the Commercial section
  const filterCommercialItems = document.querySelectorAll(
    ".commercial-filters li"
  );
  filterCommercialItems.forEach((item) => {
    item.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter").replace(
        ".filter-",
        ""
      );
      filterCommercial(filterValue);

      // Update the URL with the filter parameter
      const url = new URL(window.location.href);
      url.searchParams.set("commercial-filter", filterValue);
      window.history.replaceState({}, "", url);
    });
  });

  // Function to filter commercial items based on the query parameter

  // End Commercial Filter Function ============================================

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

// VRV Products ==============================================

function renderVrvSection(products, sectionId) {
  const productContainer = document.getElementById(sectionId);
  let productHTML = "";

  function initializeSwiper() {
    // Initialize Swiper
    new Swiper(`#${sectionId} .vrv-slider`, {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: `#${sectionId} .swiper-pagination`,
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 100,
        },
      },
    });
  }

  // const screenWidth = window.innerWidth;

  if (products.length < 5) {
    window.addEventListener("load", () => {
      const screenWidth = window.innerWidth;
      productHTML = "";
      if (screenWidth < 991.9 && products.length > 3) {
        for (const product of products) {
          productHTML += `
        <div class="swiper-slide">
          <div class="vrv-item">
            <a href="${product.imageUrl}" data-gallery="products-gallery-app" class="glightbox">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </a>
            <div class="vrvs-info">
              <h6 style="font-weight: bolder">${product.title}</h6>
              <p>${product.description}</p>
            </div>
          </div>
        </div>`;
        }

        productContainer.innerHTML = `
      <div class="vrv-slider swiper mt-4">
        <div class="swiper-wrapper align-items-center">
          ${productHTML}
        </div>
        <div class="swiper-pagination"></div>
      </div>`;

        // Initialize Swiper
        initializeSwiper();
      } else if (screenWidth < 766 && products.length > 2) {
        for (const product of products) {
          productHTML += `
        <div class="swiper-slide">
          <div class="vrv-item">
            <a href="${product.imageUrl}" data-gallery="products-gallery-app" class="glightbox">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </a>
            <div class="vrvs-info">
              <h6 style="font-weight: bolder">${product.title}</h6>
              <p>${product.description}</p>
            </div>
          </div>
        </div>`;
        }

        productContainer.innerHTML = `
      <div class="vrv-slider swiper mt-4">
        <div class="swiper-wrapper align-items-center">
          ${productHTML}
        </div>
        <div class="swiper-pagination"></div>
      </div>`;

        // Initialize Swiper
        initializeSwiper();
      } else {
        for (const product of products) {
          productHTML += `
        <div class="vrv-item">
          <div class="vrv-sh">
            <a href="${product.imageUrl}" data-gallery="vrvs-gallery-app" class="glightbox">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </a>
            <div class="vrvs-info">
              <h6 style="font-weight: bolder">${product.title}</h6>
              <p>${product.description}</p>
            </div>
          </div>
        </div>`;
        }
        productContainer.innerHTML = `
      <div class="vrv-item-container">
        ${productHTML}
      </div>`;
      }
    });
    window.addEventListener("resize", () => {
      const screenWidth = window.innerWidth;
      productHTML = "";
      if (screenWidth < 991.9 && products.length > 3) {
        for (const product of products) {
          productHTML += `
        <div class="swiper-slide">
          <div class="vrv-item">
            <a href="${product.imageUrl}" data-gallery="products-gallery-app" class="glightbox">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </a>
            <div class="vrvs-info">
              <h6 style="font-weight: bolder">${product.title}</h6>
              <p>${product.description}</p>
            </div>
          </div>
        </div>`;
        }

        productContainer.innerHTML = `
      <div class="vrv-slider swiper mt-4">
        <div class="swiper-wrapper align-items-center">
          ${productHTML}
        </div>
        <div class="swiper-pagination"></div>
      </div>`;

        // Initialize Swiper
        initializeSwiper();
      } else if (screenWidth < 766 && products.length > 2) {
        for (const product of products) {
          productHTML += `
        <div class="swiper-slide">
          <div class="vrv-item">
            <a href="${product.imageUrl}" data-gallery="products-gallery-app" class="glightbox">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </a>
            <div class="vrvs-info">
              <h6 style="font-weight: bolder">${product.title}</h6>
              <p>${product.description}</p>
            </div>
          </div>
        </div>`;
        }

        productContainer.innerHTML = `
      <div class="vrv-slider swiper mt-4">
        <div class="swiper-wrapper align-items-center">
          ${productHTML}
        </div>
        <div class="swiper-pagination"></div>
      </div>`;

        // Initialize Swiper
        initializeSwiper();
      } else {
        for (const product of products) {
          productHTML += `
        <div class="vrv-item">
          <div class="vrv-sh">
            <a href="${product.imageUrl}" data-gallery="vrvs-gallery-app" class="glightbox">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </a>
            <div class="vrvs-info">
              <h6 style="font-weight: bolder">${product.title}</h6>
              <p>${product.description}</p>
            </div>
          </div>
        </div>`;
        }
        productContainer.innerHTML = `
      <div class="vrv-item-container">
        ${productHTML}
      </div>`;
      }
    });
  } else {
    for (const product of products) {
      productHTML += `
        <div class="swiper-slide">
          <div class="vrv-item">
            <a href="${product.imageUrl}" data-gallery="products-gallery-app" class="glightbox">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </a>
            <div class="vrvs-info">
              <h6 style="font-weight: bolder">${product.title}</h6>
              <p>${product.description}</p>
            </div>
          </div>
        </div>`;
    }

    productContainer.innerHTML = `
      <div class="vrv-slider swiper mt-4">
        <div class="swiper-wrapper align-items-center">
          ${productHTML}
        </div>
        <div class="swiper-pagination"></div>
      </div>`;

    // Initialize Swiper
    initializeSwiper();
  }
}

const vrvWallMounted = [
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "F2 Inverter Series",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "F2 Inverter Series",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "F2 Inverter Series",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrvCassette = [
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product 1",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product 2",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product 3",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product 4",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrvCeilingMountedDuct = [
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/split-wall/gree/f1s-inverter-series3.jpg",
    title: "Another Product",
    description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

renderVrvSection(vrvWallMounted, "vrvWallMounted");
renderVrvSection(vrvCassette, "vrvCassette");
renderVrvSection(vrvCeilingMountedDuct, "vrvCeilingMountedDuct");
