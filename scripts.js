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
