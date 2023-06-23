
const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 50;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);




//   galary image 

// Get the content element


// // Get a reference to the container element
// const container = document.getElementById('main-gallery');

// // const container = document.querySelectorAll('main-gallery');

// const sayHello = () => {

//     const computedStyle = window.getComputedStyle(container)
//     const leftValue = computedStyle.getPropertyValue('margin-left')

//     console.log('marginLeft =', leftValue)
//     console.log('interval running')
//     container.style.marginLeft = "-100%"
// }

// setInterval(sayHello, 1000);


// const container = document.getElementById('main-gallery');
// const containerWidth = container.offsetWidth;
// let scrollAmount = 100;
// const step = 10; // Adjust this value to control the scroll speed
// let isMouseOverContainer = false;


// const scrollContainer = () => {
//   scrollAmount += step;
//   container.style.marginLeft = `-${scrollAmount}%`;

  

//   if (scrollAmount >= 100) {
//     // Scroll completed, reset scrollAmount to 0
//     scrollAmount = 0;
//   }
// };

// setInterval(scrollContainer, 1000);


const container = document.getElementById('main-gallery');
const containerWidth = container.offsetWidth;
let scrollAmount = 0;
const step = 10; // Adjust this value to control the scroll speed
let isMouseOverContainer = false;

const scrollContainer = () => {
  if (isMouseOverContainer) {
    return; // Stop scrolling if mouse is over the container
  }

  scrollAmount += step;
  container.style.marginLeft = `-${scrollAmount}%`;

  if (scrollAmount >= 100) {
    // Scroll completed, reset scrollAmount to 0
    scrollAmount = 0;
  }
};

container.addEventListener('mouseenter', () => {
  isMouseOverContainer = true;
});

container.addEventListener('mouseleave', () => {
  isMouseOverContainer = false;
});

setInterval(scrollContainer, 1000);

