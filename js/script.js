 let modal = document.getElementById("imageModal");
 let image = document.getElementById("modalImage");
 let desktopImage = document.getElementById("desktopImage");
 let mobileImage = document.getElementById("mobileImage");
 let closeButton = document.getElementById("closeImageButton");

 desktopImage.addEventListener("click", function() {
        image.src = desktopImage.src;
        modal.style.display = "flex";
    });

 mobileImage.addEventListener("click", function() {
        image.src = mobileImage.src;
        modal.style.display = "flex";
    });

 closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });



const burger = document.querySelector('.burger');
const navLink = document.querySelector('nav');

burger.addEventListener('click', openMenu);

function openMenu() {
    burger.classList.toggle('active');
    navLink.classList.toggle('active');
}



const bookingModal = document.getElementById("bookingModal");
const bookingForm = document.getElementById("bookingForm");
const bookingTitle = document.getElementById("bookingTitle");
const message = document.getElementById("formMessage");

document.querySelectorAll(".hero-btn, .price-btn").forEach(button => {
    button.onclick = function() {
        bookingModal.style.display = "flex";
        bookingForm.reset();
        message.textContent = ""

        if (button.classList.contains("price-btn")) {
            const card = button.closest(".card-price");
            document.getElementById("tariff").value =
                card.querySelector(".price-title").textContent.trim();
        }
        bookingTitle.textContent = "ЗАБРОНЮВАТИ ПОЛІТ";
    };
});

document.getElementById("closeModal").onclick = function() {
    bookingModal.style.display = "none";
};

bookingForm.onsubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const tariff = document.getElementById("tariff");
    const nameValue = name.value.trim();
    const phoneValue = phone.value.replace(/\D/g, "");

    const nameCorrect =
        nameValue.length >= 2 &&
        /^[А-Яа-яІіЇїЄєҐґA-Za-z\s'-]+$/.test(nameValue);

    const phoneCorrect =
        phoneValue.length === 12 &&
        phoneValue.startsWith("380");

    if (!nameCorrect || !phoneCorrect || tariff.value === "") {
        message.style.color = "red";

        if (!nameCorrect) {
            name.style.border = "1px solid red";
        } else {
            name.style.border = "";
        }

        if (!phoneCorrect) {
            phone.style.border = "1px solid red";
        } else {
            phone.style.border = "";
        }

        if (tariff.value === "") {
            tariff.style.border = "1px solid red";
        } else {
            tariff.style.border = "";
        }

        message.textContent = "Перевір правильність заповнення полів!";
    } else {
        bookingTitle.textContent = "ДЯКУЄМО!";
        message.textContent = "Твою заявку на політ до Марса прийнято!";
        message.style.color = "green";
    }
};



