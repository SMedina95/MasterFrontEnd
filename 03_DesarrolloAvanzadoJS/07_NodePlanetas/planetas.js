// ============================================
// RETO 07 (Módulo 03): LISTA DE PLANETAS FAVORITOS
// ============================================
// Este módulo exporta un arreglo de planetas
// con información de cada uno.
// ============================================

const planetas = [
    {
        nombre: "Marte",
        descripcion: "El planeta rojo, conocido por su color característico debido al óxido de hierro.",
        descubiertoEn: "Antigüedad (visible a simple vista)",
        distanciaTierra: "225 millones de km",
        tipo: "Rocoso"
    },
    {
        nombre: "Júpiter",
        descripcion: "El gigante gaseoso más grande del sistema solar, con su famosa Gran Mancha Roja.",
        descubiertoEn: "Antigüedad (visible a simple vista)",
        distanciaTierra: "778 millones de km",
        tipo: "Gaseoso"
    },
    {
        nombre: "Saturno",
        descripcion: "Famoso por sus hermosos anillos de hielo y roca.",
        descubiertoEn: "Antigüedad (visible a simple vista)",
        distanciaTierra: "1,430 millones de km",
        tipo: "Gaseoso"
    },
    {
        nombre: "Neptuno",
        descripcion: "El planeta más lejano del sistema solar, de color azul intenso por el metano.",
        descubiertoEn: "1846 por Johann Galle",
        distanciaTierra: "4,500 millones de km",
        tipo: "Gaseoso"
    },
    {
        nombre: "Kepler-452b",
        descripcion: "Un exoplaneta conocido como 'la Tierra 2.0' por su similitud con nuestro planeta.",
        descubiertoEn: "2015 por la misión Kepler de la NASA",
        distanciaTierra: "1,400 años luz",
        tipo: "Super-Tierra"
    },
    {
        nombre: "Proxima Centauri b",
        descripcion: "El exoplaneta más cercano a nuestro sistema solar, en la zona habitable de su estrella.",
        descubiertoEn: "2016 por el Observatorio Europeo Austral",
        distanciaTierra: "4.24 años luz",
        tipo: "Rocoso"
    }
];

// Exportamos el arreglo para que pueda ser usado desde otros archivos
module.exports = planetas;