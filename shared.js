var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var SelectPlanButtons = document.querySelectorAll('.plan .button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i= 0; i < SelectPlanButtons.length; i++) {
    SelectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    }); 
}

backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    closeModal();
}
);

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}



function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "none";
}

toggleButton.addEventListener("click", openMobileNav);
function openMobileNav() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
}

