// ============================================
// RETO 01 (Módulo 03): SIMULADOR DE PEDIDOS
// Event Loop y asincronicidad con setTimeout,
// Promises y async/await
// ============================================

// ========== SELECTORES ==========
const orderList = document.getElementById("orderList");
const addOrderBtn = document.getElementById("addOrderBtn");
const clearOrdersBtn = document.getElementById("clearOrdersBtn");
const emptyMessage = document.getElementById("emptyMessage");
const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

// ========== ESTADO ==========
let orderId = 1;
let totalPedidos = 0;
let pedidosEnProceso = 0;
let pedidosCompletados = 0;
let pedidos = []; // Para poder limpiar

// ========== UTILIDADES ==========

// Función: formatearHora()
const formatearHora = () => {
    return new Date().toLocaleTimeString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
};

// Función: tiempoAleatorio()
// Devuelve un tiempo entre 2000 y 5000 ms (2-5 segundos)
const tiempoAleatorio = () => Math.floor(Math.random() * 3000) + 2000;

// ========== ACTUALIZAR ESTADÍSTICAS ==========
const actualizarEstadisticas = () => {
    totalCount.textContent = totalPedidos;
    pendingCount.textContent = pedidosEnProceso;
    completedCount.textContent = pedidosCompletados;

    // Mostrar u ocultar el mensaje vacío
    if (totalPedidos === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }
};

// ========== CREAR PEDIDO EN EL DOM ==========
const addOrder = (order) => {
    const listItem = document.createElement("li");
    listItem.id = `order-${order.id}`;
    listItem.classList.add("order-item", "en-proceso");

    listItem.innerHTML = `
        <div class="order-info">
            <span class="order-id">Pedido #${order.id}</span>
            <span class="order-status">⏳ En Proceso</span>
            <span class="order-time">Creado: ${formatearHora()}</span>
        </div>
        <div class="spinner"></div>
    `;

    orderList.appendChild(listItem);
};

// ========== ACTUALIZAR ESTADO DEL PEDIDO ==========
const updateOrderStatus = (order, status) => {
    const listItem = document.getElementById(`order-${order.id}`);
    if (!listItem) return;

    listItem.classList.remove("en-proceso");
    listItem.classList.add("completado");

    listItem.innerHTML = `
        <div class="order-info">
            <span class="order-id">Pedido #${order.id}</span>
            <span class="order-status">✅ Completado</span>
            <span class="order-time">Listo: ${formatearHora()}</span>
        </div>
        <span class="check-icon">☕</span>
    `;
};

// ========== SIMULAR PREPARACIÓN DEL PEDIDO ==========
// Usa setTimeout + Promise + async/await
const processOrder = (order) => {
    return new Promise((resolve) => {
        const tiempoPreparacion = tiempoAleatorio();

        // Simulamos el tiempo de preparación con setTimeout
        setTimeout(() => {
            resolve(tiempoPreparacion);
        }, tiempoPreparacion);
    });
};

// ========== MANEJAR CLIC EN "AGREGAR PEDIDO" ==========
addOrderBtn.addEventListener("click", async () => {
    // 1. Crear el pedido con ID único
    const order = {
        id: orderId++,
        status: "En Proceso",
        timestamp: new Date().toISOString(),
    };

    // 2. Actualizar contadores y array
    totalPedidos++;
    pedidosEnProceso++;
    pedidos.push(order);
    actualizarEstadisticas();

    // 3. Agregar el pedido a la interfaz con estado "En Proceso"
    addOrder(order);

    // 4. Procesar el pedido de forma asincrónica
    try {
        // Usamos await para esperar a que termine la preparación
        await processOrder(order);

        // 5. Actualizar el estado a "Completado"
        pedidosEnProceso--;
        pedidosCompletados++;
        actualizarEstadisticas();
        updateOrderStatus(order, "Completado");

        console.log(`✅ Pedido #${order.id} completado`);
    } catch (error) {
        console.error(`❌ Error al procesar el pedido #${order.id}:`, error);
    }
});

// ========== LIMPIAR PEDIDOS ==========
clearOrdersBtn.addEventListener("click", () => {
    if (pedidos.length === 0) return;

    if (confirm("¿Estás seguro de que quieres limpiar todos los pedidos?")) {
        orderList.innerHTML = "";
        pedidos = [];
        totalPedidos = 0;
        pedidosEnProceso = 0;
        pedidosCompletados = 0;
        orderId = 1;
        actualizarEstadisticas();
    }
});

// ========== INICIALIZACIÓN ==========
console.log("☕ Simulador de Pedidos iniciado");
console.log("   Haz clic en 'Agregar Pedido' para comenzar");
actualizarEstadisticas();

// ========== DEMOSTRACIÓN DEL EVENT LOOP ==========
// Este log se ejecuta ANTES de que se completen los pedidos,
// demostrando que el código principal no se bloquea
console.log("⏱️  El Event Loop sigue funcionando mientras se preparan los pedidos...");