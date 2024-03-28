const toggleBtn = document.querySelector('.toggle');
        const toggleBtnIcon = document.querySelector('.toggle i');
        const dropDownMenu = document.querySelector('.dropdown_menu');

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');

            toggleBtnIcon.classlist = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
        }