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
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrvs-info">
              <h6 style="text-align: center">${product.title}</h6>
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
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrvs-info">
              <h6 style="text-align: center">${product.title}</h6>
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
      } else if (screenWidth < 480 && products.length > 1) {
        for (const product of products) {
          productHTML += `
        <div class="swiper-slide">
          <div class="vrv-item">
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrvs-info">
              <h6 style="text-align: center">${product.title}</h6>
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
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrvs-info">
              <h6 style="text-align: center">${product.title}</h6>
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
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrvs-info">
              <h6 style="text-align: center">${product.title}</h6>
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
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrvs-info">
              <h6 style="text-align: center">${product.title}</h6>
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
      } else if (screenWidth < 480 && products.length > 1) {
        for (const product of products) {
          productHTML += `
        <div class="swiper-slide">
          <div class="vrv-item">
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrvs-info">
              <h6 style="text-align: center">${product.title}</h6>
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
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrvs-info">
              <h6 style="text-align: center">${product.title}</h6>
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
            <div style="text-align: center">
              <img src="${product.imageUrl}" class="img-fluid" alt="" />
            </div>
            <div class="vrvs-info">
              <h6 style="text-align: center">${product.title}</h6>
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
    imageUrl: "assets/img/product/vrv/daikin/wall-mounted-inverter.jpg",
    title: "Daikin AC Wall Mounted Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrvCassette = [
  {
    imageUrl:
      "assets/img/product/vrv/daikin/cassette/cassette-inverter-thailand.jpg",
    title: "Daikin AC Cassette Inverter Thailand",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrv/daikin/cassette/cassette-kiriu-malaysia.jpg",
    title:
      "Daikin AC Surround Cassette Kiriu Skyair Smart Inverter Malaysia R32",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrv/daikin/cassette/cassette-malaysia-standard.jpg",
    title: "Daikin AC Cassette Standard  Malaysia",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrv/daikin/cassette/cassette-thailand.jpeg",
    title: "Daikin AC Cassette Standard Thailand",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrvCeilingMountedDuct = [
  {
    imageUrl:
      "assets/img/product/vrv/daikin/ducting/slim-low-static-standard.png",
    title: "Slim Low Static Standard",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrv/daikin/ducting/slim-low-static-compact.jpg",
    title: "Slim Low Static Compact",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrv/daikin/ducting/middle-static-pressure.jpg",
    title: "Middle Static Pressure",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrv/daikin/ducting/high-static-pressure.jpg",
    title: "High Static Pressure",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrvCeilingSuspended = [
  {
    imageUrl: "assets/img/product/vrv/daikin/ceiling-suspended.jpg",
    title: "Ceiling Suspended",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrvFloorStanding = [
  {
    imageUrl:
      "assets/img/product/vrv/daikin/floor-standing/daikin-floor-standing-inverter.jpg",
    title: "Floor Standing Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrv/daikin/floor-standing/daikin-inverter-concealed.jpg",
    title: "Floor Standing Inverter Concealed",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrvFloorStandingDuct = [
  {
    imageUrl: "assets/img/product/vrv/daikin/floor-standing-duct-inverter.jpg",
    title: "Floor Standing Duct Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrvAirHandlingUnit = [
  {
    imageUrl: "assets/img/product/vrv/daikin/air-handling-unit-inverter.jpg",
    title: "Air Handling Unit Inverter",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrvAirTreatment = [
  {
    imageUrl:
      "assets/img/product/vrv/daikin/air-treatment/outdoor-air-processing-unit.jpg",
    title: "Outdoor Air Processing Unit",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrv/daikin/air-treatment/heat-reclaim-ventilator.jpg",
    title: "Heat Reclaim Ventilator",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrv/daikin/air-treatment/heat-reclaim-ventilator-vam.jpg",
    title: "Heat Reclaim Ventilator Vam",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

const vrvControlIndividual = [
  {
    imageUrl:
      "assets/img/product/vrv/daikin/controller/navigation-remote-controller-wired.jpg",
    title: "Navigation Remote Controller Wired",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrv/daikin/controller/wireless-remote-controller.jpg",
    title: "Wireless Remote Controller",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl:
      "assets/img/product/vrv/daikin/controller/simplified-remote-controller-wired.jpg",
    title: "Simplified Remote Controller Wired",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];
const vrvControlCentral = [
  {
    imageUrl:
      "assets/img/product/vrv/daikin/central-control/intelligent-touch-manager-system.jpg",
    title: "Intelligent Touch Manager System",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "assets/img/product/vrv/daikin/central-control/reiri.jpg",
    title: "Reiri Controller System",
    //description: "Lorem ipsum, dolor sit amet consectetur",
  },
];

renderVrvSection(vrvWallMounted, "vrvWallMounted");
renderVrvSection(vrvCassette, "vrvCassette");
renderVrvSection(vrvCeilingMountedDuct, "vrvCeilingMountedDuct");
renderVrvSection(vrvCeilingSuspended, "vrvCeilingSuspended");
renderVrvSection(vrvFloorStanding, "vrvFloorStanding");
renderVrvSection(vrvFloorStandingDuct, "vrvFloorStandingDuct");
renderVrvSection(vrvAirHandlingUnit, "vrvAirHandlingUnit");
renderVrvSection(vrvAirTreatment, "vrvAirTreatment");
renderVrvSection(vrvControlCentral, "vrvControlCentral");
renderVrvSection(vrvControlIndividual, "vrvControlIndividual");
