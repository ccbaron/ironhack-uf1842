// ¿En tu páis de origen es normal dejar propina?

    // Paso 1: Obtener los elementos que necesitamos del DOM
    const calculateButton = document.getElementById('calculate');
    const billAmountInput = document.getElementById('bill-amount');
    const percentageTipInput = document.getElementById('percentage-tip');
    const tipAmountInput = document.getElementById('tip-amount');
    const totalInput = document.getElementById('total');

    // Paso 2: Añadimos el evento click al botón
    calculateButton.addEventListener('click', function () {

        // Paso 3: Obtenemos los valores de los inputs que escribió el usuario
        const billAmount = billAmountInput.value;
        const percentageTip = percentageTipInput.value;

        console.log('Bill Amount:', billAmount); // Verificamos en consola
        console.log('Percentage Tip:', percentageTip); // Verificamos en consola

        // Paso 4: Convertimos los valores a números para poder hacer la operación
        const bill = parseFloat(billAmount);
        const percentage = parseFloat(percentageTip);

        console.log('Bill (number):', bill); // Verificación
        console.log('Percentage (number):', percentage); // Verificación

        // Paso 5: Calculamos la propina y el total
        const tipAmount = bill * (percentage / 100);
        const total = bill + tipAmount;

        console.log('Tip Amount:', tipAmount); // Verificación
        console.log('Total:', total); // Verificación

        // Paso 6: Asignamos los valores a los campos correspondientes en el DOM
        tipAmountInput.value = tipAmount.toFixed(2); // 2 decimales
        totalInput.value = total.toFixed(2); // 2 decimales
    });