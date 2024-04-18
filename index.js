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

        function validate() {
            let name = document.getElementById('name').value;
            let number = document.getElementById('number').value;
            let address = document.getElementById('address').value;
            let enquiry = document.getElementById('enquiry').value;
            if (name == ""||
                number == ""||
                address ==""||
                enquiry == "") {
                alert("Field are mandatory")
                return false;
            }
            else if (isNaN(number)) {
                alert("Enter a number")
                return false;
            }
            else if(number.length!=10){
                alert("Enter Valid Number")
                return false;
            }
            else{
                true;
            }

        }