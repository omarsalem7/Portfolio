const worksData = [
  {
    id: 0,
    name: 'Budget App',
    description:
      'The Budget App is a mobile-focused web application for managing your spending: you have a list of expenses connected with a category, and you can see how much money you have spent on what and which category. It also displays you which category you spend the most money in and your total monthly expenses, allowing you to make better educated financial decisions.',
    urlImage: './assests/budget.jpg',
    technologies: ['Ruby', 'Ruby on Rails', 'Rspec-rails', 'Devise'],
    liveDemo: 'https://cryptic-mesa-29074.herokuapp.com/',
    sourceLink: 'https://github.com/omarsalem7/Budget-app',
  },
  {
    id: 1,
    name: 'Business Summit 22',
    description:
      'This project about a business summit 2022 contains the program, speakers, and sponsors sections',
    urlImage: './assests/mac.png',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://omarsalem7.github.io/Portfolio/',
    sourceLink: 'https://github.com/omarsalem7/Portfolio',
  },
  {
    id: 2,
    name: 'Clothin Store',
    description:
      'This is a clothing store for displying products and have different categories',
    urlImage: './assests/cloths.png',
    technologies: ['React', 'Redux', 'Firebase', 'SCSS'],
    liveDemo: 'https://github.com/omarsalem7/clothing-store',
    sourceLink: 'https://github.com/omarsalem7/clothing-store',
  },
  {
    id: 3,
    name: 'Food-dishes',
    description:
      'This Webapp displays a list of food dishes. The user is able to like any of the meals, and also read more information about each meal once he clicks on the Comment button. Also, the user is able to leave a comment about any meal.',
    urlImage: './assests/foods.png',
    technologies: ['javaScript', 'Jest', 'CSS3', 'Webpack'],
    liveDemo: 'https://foodzz.netlify.app/',
    sourceLink: 'https://github.com/selma-belhadj/Food-dishes',
  },
];

// create works project dynamically
const worksContainer = document.querySelector('#portfolio');
worksData.forEach((work) => {
  const workProject = document.createElement('div');
  let workContent;
  if (work.id % 2 === 0) {
    workContent = ` <div class="works-project">
      <img class="works-img" src=${work.urlImage} alt="${work.name}"  draggable="false"/>
      <div>
          <h2 class="works-title">${work.name}</h2>
          <ul class="works-list-project">
              <li>CANOPY</li>
              <li>Back End Dev</li>
              <li>2015</li>
          </ul>
          <p>${work.description}</p>
          <ul class="works-list-skills">
              <li>${work.technologies[0]}</li>
              <li>${work.technologies[1]}</li>
              <li>${work.technologies[2]}</li>
          </ul>
          <button data-modal-target="#modal${work.id}" type="button">See Project</button>
      </div>
    </div>`;
  } else {
    workContent = ` <div class="works-project">
      <img class="works-img works-project-item1" src=${work.urlImage} alt="${work.name}"  draggable="false"/>
      <div class="works-project-item2">
          <h2 class="works-title">${work.name}</h2>
          <ul class="works-list-project">
              <li>CANOPY</li>
              <li>Back End Dev</li>
              <li>2015</li>
          </ul>
          <p>${work.description}</p>
          <ul class="works-list-skills">
              <li>${work.technologies[0]}</li>
              <li>${work.technologies[1]}</li>
              <li>${work.technologies[2]}</li>
          </ul>
          <button data-modal-target="#modal${work.id}" type="button">See Project</button>
      </div>
    </div>`;
  }
  workProject.innerHTML = workContent;
  worksContainer.appendChild(workProject);
});

// create a modal
worksData.forEach((work) => {
  const overlayContainer = document.createElement('div');
  overlayContainer.id = 'overlay';
  const modalContainer = document.createElement('div');
  modalContainer.id = `modal${work.id}`; //modal1
  modalContainer.classList.add('modal');
  const modalContent = `
      <div class="modal-header">
        <div class="title">${work.name}</div>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <ul class="works-list-project modal-list">
          <li>CANOPY</li>
          <li>Back End Dev</li>
          <li>2015</li>
      </ul>
      <img class="modal-img"  src=${work.urlImage} alt="${work.name}"  draggable="false" />
       <div class="modal-body">
       <div class="modal-detail">${work.description} </div>
       <div class="modal-btns">
          <ul class="works-list-skills skills-modal">
              <li>${work.technologies[0]}</li>
              <li>${work.technologies[1]}</li>
              <li>${work.technologies[2]}</li>
              <li>github</li>
              <li>ruby</li>
              <li>Bootstraps</li>
          </ul>
       <div>
          <button id="btn-modal"><a target="_blank" href=${work.liveDemo}>See live<img class="btn-img" src="./assests/btn1.svg"/></a></button>
          <button id="btn-modal"><a target="_blank" href="${work.sourceLink}">See Source <img class="btn-img" src="./assests/github-btn.svg"/></a> </button>
       </div>
       </div>
      </div>`;
  modalContainer.innerHTML = modalContent;
  document.body.appendChild(modalContainer);
  document.body.appendChild(overlayContainer);
});

// Add open and close functionality modal to works project
const modalOpenButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');
function modalOpen(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  worksContainer.classList.add('blur');
}
modalOpenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalChoose = document.querySelector(`${button.dataset.modalTarget}`);
    modalOpen(modalChoose);
  });
});

const modalCloseButtons = document.querySelectorAll('[data-close-button]');
function modalClose(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  worksContainer.classList.remove('blur');
}
modalCloseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalChoose = button.closest('.modal');
    modalClose(modalChoose);
  });
});
