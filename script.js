/* ============================================================
   FOR AREFA — Personal Content
   ============================================================
   Hi! All the personal text you need to edit is right here
   at the top of this file. You don't need to touch anything
   below the "=== DO NOT EDIT BELOW ===" line unless you
   want to change how things work.
   ============================================================ */

const openWhenLetters = [
  {
    id: 'not-enough',
    title: 'Open when you feel like you\'re not enough',
    content: 'You are doing amazing. Between school, studying, and the pressure of 12th grade, you carry so much, but you handle it beautifully. Whenever you doubt yourself, remember how proud I am of you. You are more than enough, just as you are.'
  },
  {
    id: 'overthinking',
    title: 'Open when you\'re overthinking',
    content: 'Take a deep breath. I know the future feels overwhelming right now with exams and everything else, but we will figure it out together. You\'re smarter and stronger than you give yourself credit for. Close your eyes, let it go for a minute, and know I\'m here.'
  },
  {
    id: 'miss-me',
    title: 'Open when you miss me',
    content: 'I\'m always just a text or call away. Even when we\'re buried in assignments or can\'t see each other, you\'re always on my mind. Think of our favorite moments together, and remember that I\'m thinking of you too. I love you.'
  }
];

// ✏️ EDIT THESE: Replace with your own reasons you love her
const jarNotes = [
  'How you look when you\'re super focused on studying',
  'The way you smile when you finally understand a hard concept',
  'Our late-night calls when we should definitely be sleeping',
  'How you always know how to make me laugh after a stressful day at school',
  'Your amazing taste in music that gets me through the day',
  'The way you support me when I\'m feeling overwhelmed',
  'How passionate you get when talking about something you care about',
  'The little faces you make when you\'re concentrating',
  'How comfortable it feels just sitting in silence with you while we work',
  'Your incredible determination to do your best in everything',
  'The way you light up when you see me in the hallway',
  'How safe I feel when I\'m talking to you about the future',
  'The way you hold my hand a little tighter when you\'re nervous',
  'How you always know exactly what to say to calm me down',
  'Your laugh — the real one that you can\'t hold back'
];

// ✏️ EDIT THESE: Replace with your own reasons
const reasonsList = [
  { title: 'You make the stress melt away', detail: 'Even when 12th grade feels like too much, talking to you makes everything feel manageable again. You are my calm in the storm.' },
  { title: 'You work so incredibly hard', detail: 'I am constantly amazed by your dedication and how much effort you put into everything you do. It inspires me to be better.' },
  { title: 'You notice the small things', detail: 'You remember the tiny details about my day and my preferences. It makes me feel so seen and loved.' },
  { title: 'You\'re braver than you think you are', detail: 'I see how you face challenges head-on, even when you\'re anxious. You are so much stronger than you realize.' },
  { title: 'You love with your whole chest', detail: 'The way you care for the people in your life is beautiful. Being loved by you is the best feeling in the world.' },
  { title: 'You make ordinary days special', detail: 'Just studying together or talking about nothing turns a boring Tuesday into my favorite part of the week.' },
  { title: 'You carry so much and still show up', detail: 'Even when you are exhausted from school and life, you still find the energy to be there for me. I appreciate you so much.' },
  { title: 'You have the best sense of humor', detail: 'You know exactly how to crack me up, even when I\'m trying to be serious. I love laughing with you.' },
  { title: 'You make every room warmer', detail: 'Whenever you walk in, the energy shifts. You have this light about you that makes everyone feel comfortable.' },
  { title: 'You keep choosing me', detail: 'Through all the ups and downs of this year, you stay by my side. I am so lucky to have you.' }
];

// ✏️ EDIT THESE: Add your own captions for each photo
const memoryPhotos = [
  { filename: '0b91b9a6-cd21-46c6-8f0c-8d86eca9d7c5.JPG', caption: 'One of my favorite days with you' },
  { filename: 'A61773F3-5C55-409A-815A-36F5927E2447.PNG', caption: 'Just us being us' },
  { filename: 'IMG_1433.jpg', caption: 'I couldn\'t stop smiling here' },
  { filename: 'IMG_1466.JPG', caption: 'Such a perfect moment' },
  { filename: 'IMG_1736.JPG', caption: 'Always making me laugh' },
  { filename: 'IMG_3209.JPG', caption: 'A day I\'ll never forget' },
  { filename: 'IMG_3681.jpg', caption: 'You look so beautiful here' },
  { filename: 'IMG_3703.JPG', caption: 'My favorite person' },
  { filename: 'IMG_9956.JPG', caption: 'We were having so much fun' },
  { filename: 'ff33668d-90cc-436e-8b36-e44686562ff6.JPG', caption: 'Can\'t wait for more moments like this' }
];

// ✏️ EDIT THESE: Add your own love coupons
const loveCoupons = [
  'Redeemable for one late-night study break, no questions asked',
  'Good for one big hug after a stressful day',
  'Valid for me getting you your favorite snack',
  'Entitles bearer to one cozy movie night, you pick the movie!'
];

/* ============================================================
   === DO NOT EDIT BELOW THIS LINE ===
   (unless you want to change how things work)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  initOpenWhenLetters();
  initJar();
  initReasons();
  initMemoryLane();
  initLightbox();
  initMusicPlayer();
  initSecretButton();
});

/* ------------------------------------------------------------
   Floating Hearts Animation
   ------------------------------------------------------------ */
function createFloatingHearts() {
  const container = document.createElement('div');
  container.className = 'floating-hearts-container';
  document.body.appendChild(container);

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = i % 2 === 0 ? '♥' : '❤';

    const left = Math.random() * 100;
    const fontSize = 10 + Math.random() * 20;
    const duration = 8 + Math.random() * 7;
    const delay = Math.random() * 10;
    const opacity = 0.08 + Math.random() * 0.12;
    const sway = -30 + Math.random() * 60;

    heart.style.left = `${left}%`;
    heart.style.fontSize = `${fontSize}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    heart.style.setProperty('--heart-opacity', opacity);
    heart.style.setProperty('--heart-sway', `${sway}px`);

    container.appendChild(heart);
  }
}

/* ------------------------------------------------------------
   Open When Letters
   ------------------------------------------------------------ */
function initOpenWhenLetters() {
  const container = document.querySelector('.envelopes-container');
  if (!container) return;

  openWhenLetters.forEach(letter => {
    const card = document.createElement('div');
    card.className = 'envelope-card';
    card.dataset.id = letter.id;

    card.innerHTML = `
      <div class="envelope-flap"></div>
      <div class="envelope-body">
        <p class="envelope-label">${letter.title}</p>
        <div class="envelope-letter">
          <p>${letter.content}</p>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      const isAlreadyOpen = card.classList.contains('opened');
      
      // Close other open cards
      const openCards = container.querySelectorAll('.envelope-card.opened');
      openCards.forEach(c => {
        if (c !== card) c.classList.remove('opened');
      });

      if (!isAlreadyOpen) {
        card.classList.add('opened');
      } else {
        card.classList.remove('opened');
      }
    });

    container.appendChild(card);
  });
}

/* ------------------------------------------------------------
   Note Jar
   ------------------------------------------------------------ */
function initJar() {
  const jarBtn = document.getElementById('jarBtn');
  const jarNote = document.getElementById('jarNote');
  
  if (!jarBtn || !jarNote) return;

  let availableNotes = [...jarNotes];

  jarBtn.addEventListener('click', () => {
    if (availableNotes.length === 0) {
      availableNotes = [...jarNotes]; // Reset when all shown
    }

    const randomIndex = Math.floor(Math.random() * availableNotes.length);
    const selectedNote = availableNotes[randomIndex];
    
    // Remove from available notes
    availableNotes.splice(randomIndex, 1);

    jarNote.textContent = selectedNote;
    jarNote.style.display = 'block';

    // Reset animation
    jarNote.classList.remove('pop-in');
    void jarNote.offsetWidth; // Trigger reflow
    jarNote.classList.add('pop-in');

    const rotation = -5 + Math.random() * 10;
    jarNote.style.setProperty('--note-rotation', `${rotation}deg`);
  });
}

/* ------------------------------------------------------------
   Reasons List
   ------------------------------------------------------------ */
function initReasons() {
  const container = document.getElementById('reasonsList');
  if (!container) return;

  reasonsList.forEach(reason => {
    const item = document.createElement('div');
    item.className = 'reason-item';

    item.innerHTML = `
      <div class="reason-header">
        <span>${reason.title}</span>
        <span class="reason-icon">+</span>
      </div>
      <div class="reason-content">
        <p>${reason.detail}</p>
      </div>
    `;

    const header = item.querySelector('.reason-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close others
      const activeItems = container.querySelectorAll('.reason-item.active');
      activeItems.forEach(activeItem => {
        if (activeItem !== item) {
          activeItem.classList.remove('active');
          activeItem.querySelector('.reason-icon').textContent = '+';
        }
      });

      if (isActive) {
        item.classList.remove('active');
        item.querySelector('.reason-icon').textContent = '+';
      } else {
        item.classList.add('active');
        item.querySelector('.reason-icon').textContent = '−';
      }
    });

    container.appendChild(item);
  });
}

/* ------------------------------------------------------------
   Memory Lane (Photos)
   ------------------------------------------------------------ */
function initMemoryLane() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  
  if (!track || !prevBtn || !nextBtn) return;

  // Render slides
  memoryPhotos.forEach((photo, index) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    if (index === 0) slide.classList.add('active');
    else if (index === 1) slide.classList.add('next');
    else if (index === memoryPhotos.length - 1) slide.classList.add('prev');
    else slide.classList.add('hidden');

    const img = document.createElement('img');
    img.src = `pictures/${photo.filename}`;
    img.alt = 'Memory photo';
    img.loading = 'lazy';
    
    img.addEventListener('click', () => {
      // Only open lightbox if it's the active center image
      if (slide.classList.contains('active') && typeof window.openLightbox === 'function') {
        window.openLightbox(img.src);
      } else {
        // Otherwise, navigate to it
        moveToSlide(index);
      }
    });

    const caption = document.createElement('p');
    caption.className = 'memory-caption';
    caption.textContent = photo.caption;

    slide.appendChild(img);
    slide.appendChild(caption);
    track.appendChild(slide);
  });

  let currentIndex = 0;
  const slides = track.querySelectorAll('.carousel-slide');

  function moveToSlide(index) {
    if (slides.length === 0) return;
    
    currentIndex = index;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;

    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev', 'next', 'hidden');
      
      if (i === currentIndex) {
        slide.classList.add('active');
      } else if (i === (currentIndex - 1 + slides.length) % slides.length) {
        slide.classList.add('prev');
      } else if (i === (currentIndex + 1) % slides.length) {
        slide.classList.add('next');
      } else {
        slide.classList.add('hidden');
      }
    });
  }

  prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
}

/* ------------------------------------------------------------
   Lightbox
   ------------------------------------------------------------ */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg || !lightboxClose) return;

  window.openLightbox = (src) => {
    lightboxImg.src = src;
    lightbox.classList.add('active');
  };

  const closeLightbox = () => lightbox.classList.remove('active');

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* ------------------------------------------------------------
   Music Player
   ------------------------------------------------------------ */
function initMusicPlayer() {
  const bgMusic = document.getElementById('bgMusic');
  const playBtn = document.getElementById('playBtn');
  const volumeBtn = document.getElementById('volumeBtn');
  const musicPlayer = document.getElementById('musicPlayer');

  if (!bgMusic || !playBtn || !volumeBtn || !musicPlayer) return;

  let isPlaying = false;
  let isMuted = false;

  bgMusic.volume = 0.3;

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      playBtn.textContent = '▶';
      musicPlayer.classList.remove('playing');
    } else {
      bgMusic.play().catch(e => console.error("Audio playback failed", e));
      playBtn.textContent = '⏸';
      musicPlayer.classList.add('playing');
    }
    isPlaying = !isPlaying;
  });

  volumeBtn.addEventListener('click', () => {
    if (isMuted) {
      bgMusic.muted = false;
      volumeBtn.textContent = '🔊';
    } else {
      bgMusic.muted = true;
      volumeBtn.textContent = '🔇';
    }
    isMuted = !isMuted;
  });
}

/* ------------------------------------------------------------
   Secret Button & Confetti
   ------------------------------------------------------------ */
function initSecretButton() {
  const secretBtn = document.getElementById('secretBtn');
  const secretModal = document.getElementById('secretModal');
  const secretModalClose = document.getElementById('secretModalClose');
  const couponText = document.getElementById('couponText');

  if (!secretBtn || !secretModal || !secretModalClose || !couponText) return;

  const closeSecret = () => secretModal.classList.remove('active');

  secretBtn.addEventListener('click', () => {
    createConfetti();
    
    const randomIndex = Math.floor(Math.random() * loveCoupons.length);
    couponText.textContent = loveCoupons[randomIndex];
    
    secretModal.classList.add('active');
  });

  secretModalClose.addEventListener('click', closeSecret);

  const overlay = secretModal.querySelector('.secret-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeSecret);
  }
}

function createConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#FADADD', '#FFF3B0', '#E4D9F5', '#FFB7C5', '#B5EAD7'];

  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';

    const left = Math.random() * 100;
    const duration = 1 + Math.random() * 2;
    const delay = Math.random() * 1;
    const size = 6 + Math.random() * 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isCircle = Math.random() > 0.5;

    confetti.style.left = `${left}%`;
    confetti.style.animationDuration = `${duration}s`;
    confetti.style.animationDelay = `${delay}s`;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.borderRadius = isCircle ? '50%' : '2px';

    container.appendChild(confetti);
  }

  setTimeout(() => {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }, 4000);
}
