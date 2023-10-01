// VRF Products ==============================================

function renderVrfSection(products, sectionId) {
  const productContainer = document.getElementById(sectionId);
  let productHTML = "";

  function initializeSwiper() {
    // Initialize Swiper
    new Swiper(`#${sectionId} .vrf-slider`, {
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
          <div class="vrf-item">
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrfs-info">
              <h6 style="text-align: center">${product.title}</h6>
            </div>
          </div>
        </div>`;
        }

        productContainer.innerHTML = `
      <div class="vrf-slider swiper mt-4">
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
          <div class="vrf-item">
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrfs-info">
              <h6 style="text-align: center">${product.title}</h6>
            </div>
          </div>
        </div>`;
        }

        productContainer.innerHTML = `
      <div class="vrf-slider swiper mt-4">
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
        <div class="vrf-item">
          <div class="vrf-sh">
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrfs-info">
              <h6 style="text-align: center">${product.title}</h6>
            </div>
          </div>
        </div>`;
        }
        productContainer.innerHTML = `
      <div class="vrf-item-container">
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
          <div class="vrf-item">
            <div>
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrfs-info">
              <h6 style="text-align: center">${product.title}</h6>
            </div>
          </div>
        </div>`;
        }

        productContainer.innerHTML = `
      <div class="vrf-slider swiper mt-4">
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
          <div class="vrf-item">
            <div>
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrfs-info">
              <h6 style="text-align: center">${product.title}</h6>
            </div>
          </div>
        </div>`;
        }

        productContainer.innerHTML = `
      <div class="vrf-slider swiper mt-4">
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
        <div class="vrf-item">
          <div class="vrf-sh">
            <div>
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrfs-info">
              <h6 style="text-align: center">${product.title}</h6>
            </div>
          </div>
        </div>`;
        }
        productContainer.innerHTML = `
      <div class="vrf-item-container">
        ${productHTML}
      </div>`;
      }
    });
  } else {
    for (const product of products) {
      productHTML += `
        <div class="swiper-slide">
          <div class="vrf-item">
            <div>
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrfs-info">
              <h6 style="text-align: center">${product.title}</h6>
            </div>
          </div>
        </div>`;
    }

    productContainer.innerHTML = `
      <div class="vrf-slider swiper mt-4">
        <div class="swiper-wrapper align-items-center">
          ${productHTML}
        </div>
        <div class="swiper-pagination"></div>
      </div>`;

    // Initialize Swiper
    initializeSwiper();
  }
}

const vrfWallMounted = [
  {
    imageUrl: "assets/img/product/vrf/wall-mounted-inverter.jpg",
    title: "Wall Mounted Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrfCassette = [
  {
    imageUrl: "assets/img/product/vrf/cassette/inverter-1-way.jpg",
    title: "Cassette Inverter 1 Way",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/cassette/inverter-2-way.jpg",
    title: "Cassette Inverter 2 Way",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/cassette/inverter-4-way.jpg",
    title: "Cassette Inverter 4 Way",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/cassette/inverter-4-way-compact.jpg",
    title: "Cassette Inverter 4 Way Compact",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/cassette/inverter-360.jpg",
    title: "Cassette Inverter 360",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/cassette/inverter-360-compact.jpg",
    title: "Cassette Inverter 360 Compact",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrfCeilingMountedDuct = [
  {
    imageUrl: "assets/img/product/vrf/ducting/low-static.jpg",
    title: "Low Static Standard",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/ducting/high-static.jpg",
    title: "High Static",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrfFloorStanding = [
  {
    imageUrl: "assets/img/product/vrf/floor-standing/inverter.jpg",
    title: "Floor Standing Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/floor-standing/inverter-ceiling.jpg",
    title: "Floor Standing Inverter Ceiling",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrfFreshAir = [
  {
    imageUrl: "assets/img/product/vrf/fresh-air/inverter.jpg",
    title: "Fresh Air Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrfVentilation = [
  {
    imageUrl: "assets/img/product/vrf/ventilation/erv-standard.jpg",
    title: "ERV Standard",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/ventilation/erv-dx-coil.jpg",
    title: "ERV DX Coil",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrfControlIndividual = [
  {
    imageUrl:
      "assets/img/product/vrf/individual-controllers/wired-control-xk46.png",
    title: "Wired Control XK46",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/individual-controllers/wireless-controller.jpg",
    title: "Wireless Remote Controller",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/individual-controllers/wired-control-xk55.jpg",
    title: "Wired Control XK55",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/individual-controllers/wired-control-xk79.jpg",
    title: "Wired Control XK79 (Hotel)",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrfControlCentral = [
  {
    imageUrl: "assets/img/product/vrf/central-control/smart-zone.png",
    title: "Smart Zone Conroller System",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/central-control/Esmart-zone.jpg",
    title: "Esmart Zone Conroller System",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

renderVrfSection(vrfWallMounted, "vrfWallMounted");
renderVrfSection(vrfCassette, "vrfCassette");
renderVrfSection(vrfCeilingMountedDuct, "vrfCeilingMountedDuct");
renderVrfSection(vrfFloorStanding, "vrfFloorStanding");
renderVrfSection(vrfFreshAir, "vrfFreshAir");
renderVrfSection(vrfVentilation, "vrfVentilation");
renderVrfSection(vrfControlCentral, "vrfControlCentral");
renderVrfSection(vrfControlIndividual, "vrfControlIndividual");
