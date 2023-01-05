// mobile menu

const menuContainer = document.getElementById('toolbar');
const iconImage = menuContainer.querySelector('img');

let controller = false;
menuContainer.addEventListener('click', () => {
  if (!controller) {
    document.querySelector('.desk').style.display = 'flex';
    document.querySelector('.desk').style.background = 'rgb(255, 255, 255, 0.95)';
    document.querySelector('.desk').style.position = 'absolute';
    document.querySelector('.desk').style.width = '100%';
    document.querySelector('.desk').style.height = '100vh';
    document.querySelector('.desk').style.top = '0px';
    document.querySelector('.desk').style.position = 'fixed';

    document.getElementById('toolbar').style.zIndex = '2';

    document.querySelector('.desk ul').style.listStyle = 'none';
    document.querySelector('.desk ul').style.display = 'flex';
    document.querySelector('.desk ul').style.flexDirection = 'column';
    document.querySelector('.desk ul').style.alignItems = 'center';
    document.querySelectorAll('.menu a').forEach((item) => {
      item.style.textDecoration = 'none';
      item.style.color = 'black';
      item.style.fontWeight = '400px';
      item.style.size = '16px';
      item.style.fontFamily = 'Lato';
      item.style.justifyself = 'center';
    });

    document.querySelectorAll('.menu li').forEach((item) => {
      item.style.marginBottom = '30px';
    });

    document.querySelector('.desk').style.paddingTop = '50%';
    document.querySelector('.desk').style.justifyContent = 'center';
    iconImage.src = 'images/cancel.jpg';

    controller = true;
  } else {
    iconImage.src = 'images/ic_menu.svg';
    document.querySelector('.desk').style.display = 'none';
    controller = false;
  }
});

const cancel = document.querySelector('.menu');
const cancela = cancel.querySelectorAll('a');

cancela.forEach((a) => {
  a.addEventListener('click', () => {
    controller = false;
    document.querySelector('.desk').style.display = 'none';
    iconImage.src = 'images/ic_menu.svg';
  });
});

// array for projects information

const projectInfo = [
  {
    id: 1,
    name: 'Yochai Benkler',
    cv: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: './images/speakers/speaker_01 1.png',
    alt: 'speaker 1 photo',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript',
    ],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Kilnam Chon',
    cv: '',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    image: './images/speakers/speaker_01 1-1.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'SohYeong Noh',
    cv: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: './images/speakers/speaker_01 1-2.png',
    alt: 'laptop',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Julia Leda',
    cv: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    image: './images/speakers/speaker_01 1-3.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Lila tretikov',
    cv: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    image: './images/speakers/speaker_01 1-4.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    cv: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    image: './images/speakers/speaker_01 1-5.png',
    alt: 'laptop',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'Javascript'],
    liveVersion: '#',
    source: '#',
  },
];

// project seccion dynamic Html

const showModal = (projectInfo) => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'flex';
  const modalBody = `<div class="modal-content">
  <button id="closemodalX" class="close-modal close">&times</button>
  <h3 class="project-title-modal">${projectInfo.name}</h3>
  <ul class="card-tech-modal">
      <li>${projectInfo.technologies[0]}</li>
      <li>${projectInfo.technologies[1]}</li>
      <li>${projectInfo.technologies[2]}</li>
  </ul>
  <img class="project-image modal-img" src="${projectInfo.image}" alt="${projectInfo.alt}">
  <p class="project-description">${projectInfo.description}</p>
  <div class="btns-modal">
      <button class="btn-modal seeLive">See live
          <img class="iconModal" src="./images/Union (8).png">
      </button>
      <button class="btn-modal seeSource">See source
          <img class="iconModal" src="./images/redes sociales/Vector (8).png">
      </button>
  </div>
  <div class="next-prev-proj">
      <button class="prev-btn"> &larr; Previous project</button>
      <button class="prev-btn">Next Project &rarr;</button>
  </div>
</div>`;
  myModal.innerHTML = modalBody;
};

const gall = document.querySelector('.gallery');

const closeModal = () => {
  const myModal = document.getElementById('myMOdal');
  myModal.style.display = 'none';
};

projectInfo.forEach((project, index) => {
  const projectId = project.id;
  const projectName = project.name;
  const projectImage = project.image;
  const projectImgAlt = project.alt;
  const projectCV = project.cv;
  const projectDescription = project.description;

  const soloArticle = document.createElement('article');
  soloArticle.classList.add('card', `card${index + 2}`);

  const cardContainer = `<img class="imgp" src="${projectImage}" alt="${projectImgAlt}"">
<div class="pData">
    <h3>${projectName}</h3>
    <ul class="projectUl">
       <p class="orange">${projectCV}</p>  
       <p class="lineGray"></p>
       <p class="black">${projectDescription}</p>      
    </ul>
    <button class="see myBtn" id="btn${projectId}">
    </button>
</div>
</article>`;
  soloArticle.innerHTML = `${cardContainer} <div class="card card-back${index + 2}"></div>`;
  gall.appendChild(soloArticle);
  const button = document.getElementById(`btn${projectId}`);
  button.addEventListener('click', () => {
    showModal(project);
    const closemodalX = document.getElementById('closemodalX');
    closemodalX.addEventListener('click', () => {
      closeModal();
    });
  });
});

// form validation

const errorMessage = document.querySelector('.error-message');
const form = document.getElementById('contact');
const email = document.getElementById('email');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    errorMessage.style.display = 'block';
    email.style.border = '#dd5353 2px solid';
  }
});
// local storage

let localData = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('textform');

function dataLocalStore() {
  localStorage.setItem('name', JSON.stringify(localData));
}

form.addEventListener('change', () => {
  localData.name = nameInput.value;
  localData.email = emailInput.value;
  localData.message = messageInput.value;
  dataLocalStore();
});

if (JSON.parse(localStorage.getItem('name')) !== null) {
  localData = JSON.parse(localStorage.getItem('name'));
  nameInput.setAttribute('value', localData.name);
  emailInput.setAttribute('value', localData.email);
  messageInput.value = localData.message;
}
