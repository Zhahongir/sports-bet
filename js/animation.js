// Animation
(function () {
    var titleMainOne = document.querySelector('.bookmakers__title');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('bookmakers__title-anim');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();


// Animation Book Item
(function () {
    var titleMainOne = document.querySelector('.book-item-one');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('book-item-one-anim');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();



// Animation Book Item
(function () {
    var titleMainOne = document.querySelector('.book-item-two');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('book-item-two-anim');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();


// Animation Book Item
(function () {
    var titleMainOne = document.querySelector('.book-item-three');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('book-item-three-anim');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();




// Animation Intruction Title
(function () {
    var titleMainOne = document.querySelector('.instruction__title');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('bookmakers__title-anim');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();


// Animation Intruction Text
(function () {
    var titleMainOne = document.querySelector('.instruction__text');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-item');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();



// Instruction Item
(function () {
    var titleMainOne = document.querySelector('.instruction-item-one');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('book-item-one-anim');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();


// Instruction Item
(function () {
    var titleMainOne = document.querySelector('.instruction-item-two');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('book-item-two-anim');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();


// Instruction Item
(function () {
    var titleMainOne = document.querySelector('.instruction-item-three');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('book-item-three-anim');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();


// Animation Intruction Btn
(function () {
    var titleMainOne = document.querySelector('.instruction__btn');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-item');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();

// Animation Intruction Btn
(function () {
  var titleMainOne = document.querySelector('.betboom-btn');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-item');
      }
    });
  });

  observer.observe(titleMainOne);
})
();

// Animation Intruction Btn
(function () {
  var titleMainOne = document.querySelector('.pari-btn');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-item');
      }
    });
  });

  observer.observe(titleMainOne);
})
();

// Animation Intruction Btn
(function () {
  var titleMainOne = document.querySelector('.winline-btn');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-item');
      }
    });
  });

  observer.observe(titleMainOne);
})
();