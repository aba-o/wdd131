let btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');
const heroImage = document.querySelector('.hero-image');
const modal = document.querySelector('.hero-modal');
const modalImage = modal.querySelector('.modal-image');
const closeButton = modal.querySelector('.close-viewer');
const servicesContainer = document.querySelector(".services");
const serviceForm = document.querySelector(".search-bar2");
const serviceInput = document.querySelector(".search-input2");

btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}

const services = [
    {
        title: "High Nutrient Kenkey",
        duration: "⏱ Ongoing Program",
        image: "images/HNkenkey.jpg",
        alt: "High nutrient kenkey meal prepared for school children",
        description: "Although the project timeline only allowed the children to begin receiving the improved dumpling toward the last phase, we did see a noticeable difference."
    },
    {
        title: "School Feeding Support",
        duration: "⏱ Seasonal Program",
        image: "images/about-us.jpg",
        alt: "Children receiving nutritious meals at school",
        description: "Providing nutritious meals to children to support learning, concentration, and overall wellbeing in school."
    },
    {
        title: "Community Nutrition Education",
        duration: "⏱ Ongoing Program",
        image: "images/photo.png",
        alt: "Community members learning about balanced nutrition",
        description: "Educating parents and caregivers on affordable, nutritious meals using locally available foods."
    },
    {
        title: "Moringa Supplement Program",
        duration: "⏱ Pilot Program",
        image: "images/3.png",
        alt: "Moringa leaves being prepared as a nutritional supplement",
        description: "Introducing moringa as a natural vitamin and mineral supplement to improve children’s diets."
    },
    {
        title: "Women Food Vendors Training",
        duration: "⏱ Ongoing Program",
        image: "images/4.png",
        alt: "Women learning improved food preparation techniques",
        description: "Training local women in safe, nutritious, and sustainable food preparation methods."
    },
    {
        title: "Early Childhood Nutrition Support",
        duration: "⏱ Ongoing Program",
        image: "images/5.png",
        alt: "Young children receiving nutritious meals",
        description: "Supporting proper nutrition during early childhood to promote healthy growth and development."
    },
    {
        title: "Local Food Innovation Project",
        duration: "⏱ Research Program",
        image: "images/NGO-hands.png",
        alt: "Local foods being tested for improved nutritional value",
        description: "Exploring innovative ways to improve traditional foods while maintaining cultural relevance."
    },
    {
        title: "School Garden Initiative",
        duration: "⏱ Seasonal Program",
        image: "images/eduma.jpeg",
        alt: "Students working in a school vegetable garden",
        description: "Establishing school gardens to provide fresh produce and teach children about food systems."
    },
    {
        title: "Nutrition Monitoring & Evaluation",
        duration: "⏱ Ongoing Program",
        image: "images/edumaaa.jpeg",
        alt: "Health workers recording children's nutrition data",
        description: "Tracking nutrition outcomes to assess impact and improve future program effectiveness."
    },
    {
        title: "Community Feeding Outreach",
        duration: "⏱ Monthly Program",
        image: "images/Africa.png",
        alt: "Volunteers serving food to community members",
        description: "Organizing monthly feeding outreaches to support vulnerable children and families."
    }
];


heroImage.addEventListener('click', openModal);

function openModal(e) {
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    modalImage.src = "images/about-us.jpg";
    modalImage.alt = "Founders of The Duala Foundation";

    modal.showModal();
}

// Close modal button
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close when clicking outside content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});



function renderService(service) {
    const article = document.createElement("article");
    article.classList.add("service-item");

    article.innerHTML = `
        <img class="service-img" src="${service.image}" alt="${service.alt}">
        <div class="service-content">
            <h4>${service.title}</h4>
            <p class="service-duration">${service.duration}</p>
            <p class="description">${service.description}</p>
            <a href="#" class="service-btn">Support this Program</a>
        </div>
    `;

    servicesContainer.appendChild(article);
}

function renderAllServices() {
    servicesContainer.innerHTML = "";
    services.forEach(renderService);
}
renderAllServices();


serviceForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchServices();
});

function searchServices() {
    const query = serviceInput.value.toLowerCase();

    const filteredServices = services.filter(service => {
        return (
            service.title.toLowerCase().includes(query) ||
            service.duration.toLowerCase().includes(query) ||
            service.description.toLowerCase().includes(query)
        );
    });

    servicesContainer.innerHTML = "";

    if (filteredServices.length === 0) {
        servicesContainer.innerHTML = `<p>No services found.</p>`;
        return;
    }

    filteredServices.forEach(renderService);
}
