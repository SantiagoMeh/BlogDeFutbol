// Configuración de partículas
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Partículas cargadas');
});

// Menú desplegable
document.getElementById("menu-btn").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
});

// Datos para el test de personalidad
const testPreguntas = [
    "¿Prefieres dar la asistencia o marcar el gol?",
    "¿Te gusta jugar en equipo o destacar individualmente?",
    "¿Eres más rápido o más técnico?"
];

const testResultados = {
    messi: {
        nombre: "Lionel Messi",
        foto: "https://example.com/messi.jpg",
        descripcion: "Eres un jugador técnico y visionario, como Messi."
    },
    ronaldo: {
        nombre: "Cristiano Ronaldo",
        foto: "https://example.com/ronaldo.jpg",
        descripcion: "Eres un goleador nato, como CR7."
    },
    neymar: {
        nombre: "Neymar Jr",
        foto: "https://example.com/neymar.jpg",
        descripcion: "Eres creativo y divertido, como Neymar."
    }
};

// Función para el test de personalidad
document.getElementById("iniciarTest").addEventListener("click", () => {
    const resultado = testResultados.messi; // Simulamos un resultado
    document.getElementById("jugadorResultado").textContent = resultado.nombre;
    document.getElementById("fotoJugadorResultado").src = resultado.foto;
    document.getElementById("descripcionJugadorResultado").textContent = resultado.descripcion;
    document.getElementById("resultadoTest").classList.remove("hidden");
});

// Función para el generador de equipos
document.getElementById("generarEquipo").addEventListener("click", () => {
    const equipo = ["Messi", "Ronaldo", "Neymar", "Mbappé"]; // Simulamos un equipo
    const listaEquipo = document.getElementById("listaEquipo");
    listaEquipo.innerHTML = equipo.map(jugador => `<li>${jugador}</li>`).join("");
    document.getElementById("equipoGenerado").classList.remove("hidden");
});

// Función para el juego Adivina el Jugador
const pistasJuego = [
    { pista: "Jugó en el Barcelona y el PSG.", respuesta: "Messi" },
    { pista: "Ganó 5 Balones de Oro.", respuesta: "Cristiano Ronaldo" }
];

document.getElementById("iniciarJuego").addEventListener("click", () => {
    const pistaActual = pistasJuego[0]; // Simulamos una pista
    document.getElementById("pistaJuego").textContent = pistaActual.pista;
    document.getElementById("juegoAdivina").classList.remove("hidden");
});

document.getElementById("enviarRespuesta").addEventListener("click", () => {
    const respuesta = document.getElementById("respuestaJuego").value;
    const pistaActual = pistasJuego[0];
    if (respuesta.toLowerCase() === pistaActual.respuesta.toLowerCase()) {
        document.getElementById("resultadoJuego").textContent = "¡Correcto!";
    } else {
        document.getElementById("resultadoJuego").textContent = "Incorrecto. Intenta de nuevo.";
    }
});