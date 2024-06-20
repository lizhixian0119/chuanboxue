<script>
      document.addEventListener("DOMContentLoaded", function() {
        var slides = document.querySelector(".slides");
        var indicators = document.querySelectorAll(".indicators span");
        var slideWidth = slides.children[0].clientWidth;
        slides.style.transform = `translateX(0)`;
        slides.style.transition = "transform 0.5s ease-in-out";
    
        indicators.forEach((indicator, index) => {
          indicator.addEventListener("click", () => {
            goSlide(index);
          });
        });
    
        function goSlide(index) {
          var newTransform = -index * slideWidth;
          slides.style.transform = `translateX(${newTransform}px)`;
          updateIndicators(index);
        }
    
        function autoSlide() {
          var index = indicators.indexOf(document.querySelector(".active")) + 1;
          if (index > indicators.length - 1) index = 0;
          goSlide(index);
          setTimeout(autoSlide, 3000); // 自动切换到下一张图片，3秒间隔
        }
    
        function updateIndicators(index) {
          indicators.forEach((indicator, i) => {
            indicator.classList.remove("active");
            if (i === index) indicator.classList.add("active");
          });
        }
    
        autoSlide(); // 启动自动播放
      });
    </script>