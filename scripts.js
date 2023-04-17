const collapsibles = document.querySelectorAll(".collapsible");
let timer;

collapsibles.forEach((collapsible) => {
  collapsible.addEventListener("mouseover", function () {
    timer = setTimeout(() => {
      this.classList.add("active");
      const content = this.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";
    }, 200); // 0.5초 이상 기다리도록 설정
  });

  collapsible.addEventListener("mouseout", function () {
    clearTimeout(timer);
  });

  collapsible.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

function smoothScroll(element, target, duration) {
  const startPosition = element.scrollLeft;
  const distance = target - startPosition;
  const startTime = performance.now();
  const maxSpeed = 200; // 최대 스크롤 속도를 조절합니다.

  function animation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = elapsed / duration;

    // maxSpeed를 초과하지 않도록 속도를 제한합니다.
    const speed = Math.min(maxSpeed, distance * progress);
    element.scrollLeft = startPosition + speed;

    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".column");

  columns.forEach((column, index) => {
    column.addEventListener("mouseover", () => {
      const parent = column.parentElement;
      const columnWidth = column.clientWidth;
      const parentWidth = parent.clientWidth;
      const columnLeft = column.offsetLeft;
      let newScrollLeft;

      if (index === 0) {
        newScrollLeft = 0;
      } else {
        newScrollLeft = columnLeft - (parentWidth - columnWidth) / 2;
      }

      smoothScroll(parent, newScrollLeft, 300);
    });
  });
});



function showContent(month) {
  const contents = document.querySelectorAll('.month-content');
  contents.forEach(content => {
    content.style.display = 'none';
  });

  const contentElement = document.getElementById(`content-${month}`);
  if (contentElement) {
    contentElement.style.display = 'block';
  }
}

document.querySelectorAll('.month').forEach((monthElement, index) => {
  monthElement.addEventListener('click', () => {
    showContent(index + 1);
  });
});


//gallary
// 갤러리 이미지 요소들을 가져와서 변수에 저장합니다.
const images = document.querySelectorAll('.gallery img');

// 모달 요소를 만들어서 body에 추가합니다.
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// 모달 내용 요소를 만들어서 모달에 추가합니다.
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);

// 모달 닫기 버튼을 만들어서 모달 내용에 추가합니다.
const modalClose = document.createElement('span');
modalClose.classList.add('modal-close');
modalClose.innerHTML = '&times;';
modalContent.appendChild(modalClose);

// 모달 이미지 요소를 만들어서 모달 내용에 추가합니다.
const modalImg = document.createElement('img');
modalImg.classList.add('modal-img');
modalContent.appendChild(modalImg);

// 모달 캡션 요소를 만들어서 모달 내용에 추가합니다.
const modalCaption = document.createElement('div');
modalCaption.classList.add('modal-caption');
modalContent.appendChild(modalCaption);

// 갤러리 이미지 요소들에 클릭 이벤트 리스너를 추가합니다.
images.forEach((image) => {
  image.addEventListener('click', function () {
    // 클릭한 이미지의 src와 alt 속성값을 가져와서 모달 이미지와 캡션에 설정합니다.
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    modalCaption.textContent = this.alt;

    // 모달을 보이게 설정합니다.
    modal.style.display = 'block';
  });
});

// 모달 닫기 버튼과 모달 배경을 클릭하면 모달이 닫히도록 합니다.
modalClose.addEventListener('click', function () {
  modal.style.display = 'none';
});


///////
// 갤러리 이미지 요소들을 가져와서 변수에 저장합니다.
const images = document.querySelectorAll('.gallery img');

// 모달 요소를 만들어서 body에 추가합니다.
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// 모달 내용 요소를 만들어서 모달에 추가합니다.
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);

// 모달 닫기 버튼을 만들어서 모달 내용에 추가합니다.
const modalClose = document.createElement('span');
modalClose.classList.add('modal-close');
modalClose.innerHTML = '&times;';
modalContent.appendChild(modalClose);

// 모달 이미지 요소를 만들어서 모달 내용에 추가합니다.
const modalImg = document.createElement('img');
modalImg.classList.add('modal-img');
modalContent.appendChild(modalImg);

// 모달 캡션 요소를 만들어서 모달 내용에 추가합니다.
const modalCaption = document.createElement('div');
modalCaption.classList.add('modal-caption');
modalContent.appendChild(modalCaption);

// 갤러리 이미지 요소들에 클릭 이벤트 리스너를 추가합니다.
images.forEach((image) => {
  image.addEventListener('click', function () {
    // 클릭한 이미지의 src와 alt 속성값을 가져와서 모달 이미지와 캡션에 설정합니다.
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    modalCaption.textContent = this.alt;

    // 모달을 보이게 설정합니다.
    modal.style.display = 'block';

    // 나머지 이미지에 블러 처리합니다.
    images.forEach((otherImage) => {
      if (otherImage !== image) {
        otherImage.style.filter = 'blur(5px)';
      }
    });
  });
});

// 모달 닫기 버튼과 모달 배경을 클릭하면 모달이 닫히도록 합니다.
modalClose.addEventListener('click', function () {
  modal.style.display = 'none';

  // 나머지 이미지의 블러 처리를 제거합니다.
  images.forEach((image) => {
    image.style.filter = 'none';
  });
});

modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';

    // 나머지 이미지의 블러 처리를 제거합니다.
    images.forEach((image) => {
      image.style.filter = 'none';
    });
  }
});
