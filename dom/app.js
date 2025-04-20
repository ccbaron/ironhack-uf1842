// ¿En tu páis de origen es normal dejar propina?

// Paso 1: Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {

    // Paso 2: Obtener los elementos que necesitamos del DOM
    const calculateButton = document.getElementById('calculate');
    const billAmountInput = document.getElementById('bill-amount');
    const percentageTipInput = document.getElementById('percentage-tip');
    const tipAmountInput = document.getElementById('tip-amount');
    const totalInput = document.getElementById('total');

    // Paso 3: Añadimos el evento click al botón
    calculateButton.addEventListener('click', function () {

        // Paso 4: Obtenemos los valores de los inputs que escribió el usuario
        const billAmount = billAmountInput.value;
        const percentageTip = percentageTipInput.value;

        console.log('Bill Amount:', billAmount); // Verificamos en consola
        console.log('Percentage Tip:', percentageTip); // Verificamos en consola

        // Paso 5: Convertimos los valores a números para poder hacer la operación
        const bill = parseFloat(billAmount);
        const percentage = parseFloat(percentageTip);

        console.log('Bill (number):', bill); // Verificación
        console.log('Percentage (number):', percentage); // Verificación

        // Paso 6: Calculamos la propina y el total
        const tipAmount = bill * (percentage / 100);
        const total = bill + tipAmount;

        console.log('Tip Amount:', tipAmount); // Verificación
        console.log('Total:', total); // Verificación

        // Paso 7: Asignamos los valores a los campos correspondientes en el DOM
        tipAmountInput.value = tipAmount.toFixed(2); // 2 decimales
        totalInput.value = total.toFixed(2); // 2 decimales
    });
});