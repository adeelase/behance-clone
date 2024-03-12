document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.querySelector('.navbar-custom').classList.add('scrolled');
        } else {
          document.querySelector('.navbar-custom').classList.remove('scrolled');
        }
    });


    function likeImage(element) {
        let likesCountSpan = element.querySelector('span');
        let currentLikes = parseInt(likesCountSpan.textContent.replace('k', '000').replace('.', '')); // Convert '1.3k' to 1300
        likesCountSpan.textContent = currentLikes + 1; 
      }
      
     
      document.addEventListener('click', function (event) {
        if (event.target.classList.contains('card-img-top')) {
          let modalImage = document.getElementById('modalImage');
          modalImage.src = event.target.src; 
        }
      }, false);
  });


