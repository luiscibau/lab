// document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

// function mostrar_menu(){

//     document.querySelector(".menu").classList.toggle("mostrar_menu");
// }
/****************************** */

///data para el carousel ////

/****************************** */


document.addEventListener("DOMContentLoaded", () => {
    const carousel0 = document.querySelector(".carousel0");
    const slides = Array.from(carousel0.children);
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
  
    function moveToSlide(carousel0, currentSlide, targetSlide) {
      carousel0.style.transform = `translateX(-${targetSlide.offsetLeft}px)`;
      currentSlide.classList.remove("active");
      targetSlide.classList.add("active");
    }
  
    // Move to next slide
    function nextSlide() {
      const currentSlide = slides[currentIndex];
      currentIndex = (currentIndex + 1) % slides.length;
      const targetSlide = slides[currentIndex];
      moveToSlide(carousel0, currentSlide, targetSlide);
    }
  
    // Move to previous slide
    function prevSlide() {
      const currentSlide = slides[currentIndex];
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      const targetSlide = slides[currentIndex];
      moveToSlide(carousel0, currentSlide, targetSlide);
    }
  
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    setInterval(nextSlide, 5000); // Cambiar de slide cada 5 segundos
  });

  // Función para agregar un producto al carrito


// Función para agregar un producto al carrito



function addToCart(product, price) {
  var cartItem = document.createElement('li');
  cartItem.innerHTML = `
    <span class="product">${product}</span>
    <span class="price">$${price}</span>
    <button class="remove-button">Eliminar</button>
  `;

  var cartItems = document.getElementById('cart-items');
  cartItems.appendChild(cartItem);

  updateCartSummary(); // Actualizar el resumen del carrito

  var removeButton = cartItem.querySelector('.remove-button');
  removeButton.addEventListener('click', function () {
    cartItem.remove();
    updateCartSummary();
  });
}


// Función para actualizar el resumen del carrito
function updateCartSummary() {
  var cartItems = document.querySelectorAll('#cart-items li');
  var total = 0;
  var quantity = cartItems.length;

  cartItems.forEach(function (item) {
    var price = parseFloat(item.querySelector('.price').innerText.replace('$', ''));
    total += price;
  });

  var cartTotal = document.getElementById('cart-total');
  var cartQuantity = document.getElementById('cart-quantity');

  cartTotal.innerText = total.toFixed(2);
  cartQuantity.innerText = quantity;
}

// Obtener todos los botones de compra
var buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var product = button.previousElementSibling.previousElementSibling.innerText;
    var price = button.previousElementSibling.innerText.replace('$', '');
    addToCart(product, price);
  });
});

// Manejar el envío del formulario de finalizar compra
var checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener el valor del correo electrónico ingresado
  var emailInput = document.getElementById('email-input');
  var emailAddress = emailInput.value;

  // Mostrar mensaje emergente
  alert(`Tu compra será preparada y se enviará un resumen por correo electrónico (${emailAddress}) para que elijas la forma de pago. ¡Gracias por tu compra!`);

  // Restablecer el formulario
  checkoutForm.reset();

  
  // Limpiar el carrito y el formulario después de finalizar la compra
  var cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  emailInput.value = '';
  updateCartSummary();
});
