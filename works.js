const worksData = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    urlImage: './assests/desktop-project1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://omarsalem7.github.io/Portfolio/',
    sourceLink: 'https://github.com/omarsalem7/Portfolio',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    urlImage: './assests/desktop-project2.png',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://omarsalem7.github.io/Portfolio/',
    sourceLink: 'https://github.com/omarsalem7/Portfolio',
  },
  {
    id: 3,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    urlImage: './assests/desktop-project3.png',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://omarsalem7.github.io/Portfolio/',
    sourceLink: 'https://github.com/omarsalem7/Portfolio',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    urlImage: './assests/desktop-project4.png',
    technologies: ['html', 'css', 'javaScript'],
    liveDemo: 'https://omarsalem7.github.io/Portfolio/',
    sourceLink: 'https://github.com/omarsalem7/Portfolio',
  },
];

// create works project dynamically
const worksContainer = document.querySelector('#portfolio');
worksData.forEach((work) => {
  const workProject = document.createElement('div');
  let workContent;
  if (work.id % 2 === 0) {
    workContent = ` <div class="works-project">
      <img class="works-img" src=${work.urlImage} alt="${work.name}" />
      <div>
          <h2 class="works-title">${work.name}</h2>
          <ul class="works-list-project">
              <li>CANOPY</li>
              <li>Back End Dev</li>
              <li>2015</li>
          </ul>
          <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
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
      <img class="works-img works-project-item1" src=${work.urlImage} alt="${work.name}" />
      <div class="works-project-item2">
          <h2 class="works-title">${work.name}</h2>
          <ul class="works-list-project">
              <li>CANOPY</li>
              <li>Back End Dev</li>
              <li>2015</li>
          </ul>
          <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
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
  modalContainer.id = `modal${work.id}`;
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
      <img class="modal-img"  src=${work.urlImage} alt="${work.title}" />
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
          <button id="btn-modal">See live<img class="btn-img" src="./assests/btn1.svg"/></button>
          <button id="btn-modal">See Source <img class="btn-img" src="./assests/github-btn.svg"/> </button>
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
  worksContainer.classList.add('works-blur');
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
  worksContainer.classList.remove('works-blur');
}
modalCloseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalChoose = button.closest('.modal');
    modalClose(modalChoose);
  });
});
