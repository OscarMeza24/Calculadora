function realizarOperaciones() {
    // Obtener los valores ingresados por el usuario
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Verificar si los números son válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa dos números válidos.");
        return;
    }

    // Realizar las operaciones en 5 iteraciones
    let resultados = "";
    for (let i = 1; i <= 5; i++) {
        switch (i) {
            case 1:
                resultados += `<span>Iteración ${i}: La suma es ${num1 + num2}</span>`;
                break;
            case 2:
                resultados += `<span>Iteración ${i}: La resta es ${num1 - num2}</span>`;
                break;
            case 3:
                resultados += `<span>Iteración ${i}: La multiplicación es ${num1 * num2}</span>`;
                break;
            case 4:
                if (num2 === 0) {
                    resultados += `<span>Iteración ${i}: División por cero no es posible</span>`;
                } else {
                    resultados += `<span>Iteración ${i}: La división es ${num1 / num2}</span>`;
                }
                break;
            case 5:
                if (num2 === 0) {
                    resultados += `<span>Iteración ${i}: Modulo por cero no es posible</span>`;
                } else {
                    resultados += `<span>Iteración ${i}: El módulo es ${num1 % num2}</span>`;
                }
                break;
        }
    }

    // Mostrar los resultados
    document.getElementById("resultados").innerHTML = resultados;
}
