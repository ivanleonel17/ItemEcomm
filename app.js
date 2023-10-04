// cambiar la imagen principal al hacer clic en una miniatura
const thumbnailImages = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');
const colorCircles = document.querySelectorAll('.color-circle');

thumbnailImages.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Obtén la ruta de la nueva imagen desde el atributo data-image
        const newImageSrc = thumbnail.getAttribute('data-image');
        
        // Cambia la imagen principal
        mainImage.src = newImageSrc;

        // Elimina la clase "active" de todas las miniaturas
        thumbnailImages.forEach(thumb => {
            thumb.classList.remove('active');
        });

        // Agrega la clase "active" a la miniatura seleccionada
        thumbnail.classList.add('active');
    });
});

//  cambiar la imagen principal al hacer clic en un círculo de color
colorCircles.forEach(circle => {
    circle.addEventListener('click', function() {
        // Obtén la ruta de la nueva imagen desde el atributo data-image
        const newImageSrc = circle.getAttribute('data-image');
        
        // Cambia la imagen principal
        mainImage.src = newImageSrc;

        // Elimina la clase "active" de todos los círculos de color
        colorCircles.forEach(c => {
            c.classList.remove('active');
        });

        // Agrega la clase "active" al círculo de color seleccionado
        circle.classList.add('active');
    });
});




//  gestionar la cantidad de productos
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const quantityElement = document.getElementById('quantity');

decrementButton.addEventListener('click', function() {
    let quantity = parseInt(quantityElement.value);
    if (quantity > 1) {
        quantity--;
        quantityElement.value = quantity;
    }
});

incrementButton.addEventListener('click', function() {
    let quantity = parseInt(quantityElement.value);
    // Aquí puedes definir el stock máximo permitido (por ejemplo, 10)
    const stockMaximo = 10;
    if (quantity < stockMaximo) {
        quantity++;
        quantityElement.value = quantity;
    }
});


