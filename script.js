$(document).ready(function() {
    $('#calcular').click(function() {
        // Obtener el valor de cada producto
        var producto1 = parseFloat($('#producto1').val());
        var producto2 = parseFloat($('#producto2').val());
        var producto3 = parseFloat($('#producto3').val());
        var producto4 = parseFloat($('#producto4').val());
        var producto5 = parseFloat($('#producto5').val());

        // Validar que los campos no estén vacíos o no sean números
        if (isNaN(producto1) || isNaN(producto2) || isNaN(producto3) || isNaN(producto4) || isNaN(producto5)) {
            Swal.fire('Error', 'Ingrese solo números en los campos de productos', 'error');
            return;
        }

        // Calcular el subtotal
        var subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
        $('#subtotal').val(subtotal.toFixed(2));

        // Calcular el descuento en base al subtotal
        var descuento = '';
        if (subtotal >= 0 && subtotal <= 999.99) {
            descuento = 'No aplica descuento';
        } else if (subtotal >= 1000 && subtotal <= 4999.99) {
            descuento = 'Descuento 10%';
        } else if (subtotal >= 5000 && subtotal <= 8999.99) {
            descuento = 'Descuento 20%';
        } else if (subtotal >= 9000 && subtotal <= 12999.99) {
            descuento = 'Descuento 30%';
        } else {
            descuento = 'Descuento 40%';
        }
        $('#descuento').val(descuento);

        // Calcular el total a pagar luego de aplicar el descuento
        var total = subtotal;
        if (descuento !== 'No aplica descuento') {
            var porcentaje = parseInt(descuento.split(' ')[1]); // Obtener el porcentaje de descuento
            total -= (total * (porcentaje / 100));
        }
        $('#total').val(total.toFixed(2));
    });

    $('#limpiar').click(function() {
        $('input').val('');
        $('#subtotal').val('');
        $('#descuento').val('Descuento 0%');
        $('#total').val('');
    });
});

  