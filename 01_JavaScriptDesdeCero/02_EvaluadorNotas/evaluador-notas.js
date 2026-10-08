// ============================================
// EVALUADOR DE NOTAS CON MENSAJES PERSONALIZADOS
// ============================================
// Este programa evalúa la nota de un estudiante
// y genera un mensaje personalizado según el rango.
// ============================================

function evaluarNota(nota) {
    // Verificamos que la nota sea un valor válido (truthy) y esté entre 0 y 100
    if (nota && nota >= 0 && nota <= 100) {
        let mensaje;

        if (nota >= 90) {
            mensaje = "Excelente";
        } else if (nota >= 75) {
            mensaje = "Bien";
        } else if (nota >= 60) {
            mensaje = "Suficiente";
        } else {
            mensaje = "No aprueba";
        }

        console.log(`Nota: ${nota} → ${mensaje}`);
    } else {
        console.log(`Nota inválida: ${nota}. Debe ser un número entre 0 y 100.`);
    }
}

// ============================================
// PRUEBAS CON DIFERENTES VALORES
// ============================================
console.log("----- Evaluación de notas -----");
evaluarNota(95);  // Excelente
evaluarNota(90);  // Excelente
evaluarNota(85);  // Bien
evaluarNota(75);  // Bien
evaluarNota(70);  // Suficiente
evaluarNota(60);  // Suficiente
evaluarNota(45);  // No aprueba
evaluarNota(0);   // No aprueba
evaluarNota(-5);  // Nota inválida
evaluarNota(105); // Nota inválida
evaluarNota("abc"); // Nota inválida