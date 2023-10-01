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
    title: "Gree AC Wall Mounted Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrfCassette = [
  {
    imageUrl:
      "assets/img/product/vrf/daikin/cassette/cassette-inverter-thailand.jpg",
    title: "Daikin AC Cassette Inverter Thailand",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/daikin/cassette/cassette-kiriu-malaysia.jpg",
    title:
      "Daikin AC Surround Cassette Kiriu Skyair Smart Inverter Malaysia R32",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/daikin/cassette/cassette-malaysia-standard.jpg",
    title: "Daikin AC Cassette Standard  Malaysia",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/daikin/cassette/cassette-thailand.jpeg",
    title: "Daikin AC Cassette Standard Thailand",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrfCeilingMountedDuct = [
  {
    imageUrl:
      "assets/img/product/vrf/daikin/ducting/slim-low-static-standard.jpg",
    title: "Slim Low Static Standard",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/daikin/ducting/slim-low-static-compact.jpg",
    title: "Slim Low Static Compact",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/daikin/ducting/middle-static-pressure.jpg",
    title: "Middle Static Pressure",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/daikin/ducting/high-static-pressure.jpg",
    title: "High Static Pressure",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrfFloorStanding = [
  {
    imageUrl:
      "assets/img/product/vrf/daikin/floor-standing/daikin-floor-standing-inverter.jpg",
    title: "Floor Standing Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/daikin/floor-standing/daikin-inverter-concealed.jpg",
    title: "Floor Standing Inverter Concealed",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrfFreshAir = [
  {
    imageUrl: "assets/img/product/vrf/daikin/air-handling-unit-inverter.jpg",
    title: "Air Handling Unit Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrfVentilation = [
  {
    imageUrl:
      "assets/img/product/vrf/daikin/air-treatment/outdoor-air-processing-unit.jpg",
    title: "Outdoor Air Processing Unit",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/daikin/air-treatment/heat-reclaim-ventilator.jpg",
    title: "Heat Reclaim Ventilator",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/daikin/air-treatment/heat-reclaim-ventilator-vam.jpg",
    title: "Heat Reclaim Ventilator Vam",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrfControlIndividual = [
  {
    imageUrl:
      "assets/img/product/vrf/daikin/controller/navigation-remote-controller-wired.jpg",
    title: "Navigation Remote Controller Wired",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/daikin/controller/wireless-remote-controller.jpg",
    title: "Wireless Remote Controller",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrf/daikin/controller/simplified-remote-controller-wired.jpg",
    title: "Simplified Remote Controller Wired",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrfControlCentral = [
  {
    imageUrl:
      "assets/img/product/vrf/daikin/central-control/intelligent-touch-manager-system.jpg",
    title: "Intelligent Touch Manager System",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrf/daikin/central-control/reiri.jpg",
    title: "Reiri Controller System",
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
