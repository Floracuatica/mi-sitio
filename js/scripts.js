function cargarContenido(seccion) {
    let contenido = '';

    switch (seccion) {
        case 'inicio':  // Este es el nuevo caso para la página de inicio
            contenido = `
    <div class="intro-section">
        <h1><br><br>Bienvenido a Tarot Vía: Conecte con su energía interior</h1>
        <p>Transforme sus inquietudes en claridad a través de lecturas de tarot personalizadas.</p>

        <div class="about-me">
            <h2>Sobre mí</h2>
            <p>Mi nombre es Rommy, y me dedico a ofrecer orientación mediante el tarot y otras prácticas espirituales. 
                Desde hace años, soy un canal a través del cual muchas personas han encontrado respuestas y claridad 
                mediante consultas telefónicas. Mi enfoque está basado en la conexión con energías y mi compromiso es 
                acompañarlo con profesionalismo y empatía en cada sesión.</p>
        </div>

        <div class="services">
            <h2>Servicios</h2>
            <ul>
                <li><strong>Lecturas de Tarot Personalizadas:</strong> Asesoramiento para decisiones importantes a 
                    través de tiradas de tarot específicas sobre amor, trabajo o crecimiento personal, realizadas 
                    por teléfono.</li>
                <li><strong>Rituales de Conexión Espiritual:</strong> Ritualizaciones para manifestar deseos o 
                    liberar bloqueos energéticos que ya no le sirven.</li>
                <li><strong>Cursos y Talleres vía Zoom:</strong> Aprenda sobre el uso del tarot, rituales y 
                    talismanes para potenciar su vida diaria.</li>
            </ul>
        </div>

        <!-- Sección de 4 íconos con palabras debajo -->
        <div class="icon-bar">
            <div class="icon-item">
                <img src="img/integ.jpg" alt="Integridad" class="icon-circle">
                <p>Integridad</p>
            </div>
            <div class="icon-item">
                <img src="img/sinceri.jpg" alt="Sinceridad" class="icon-circle">
                <p>Sinceridad</p>
            </div>
            <div class="icon-item">
                <img src="img/trust.jpg" alt="Confianza" class="icon-circle">
                <p>Confianza</p>
            </div>
            <div class="icon-item">
                <img src="img/commitment.jpg" alt="Compromiso" class="icon-circle">
                <p>Compromiso</p>
            </div>
        </div>

    </div>`;
            break;
        case 'mazos':
            contenido = `
            <div class="catalogo-container">
    <h1>Elige el mazo con el que quieres tu lectura</h1>
    <div class="catalogo">
        <div class="tirada">
            <img src="img/ryder.jpg" alt="Ryder Waite">
            <h2>Tarot Ryder Waite</h2>
            <div class="info">
                <p>El mazo Ryder Waite es uno de los más populares y fue creado en 1909. Su simbolismo es claro y detallado, ideal tanto para principiantes como para lectores avanzados.</p>
            </div>
        </div>
        
        <div class="tirada">
            <img src="img/marsella.jpg" alt="Marsella">
            <h2>Tarot de Marsella</h2>
            <div class="info">
                <p>El Tarot de Marsella es uno de los mazos más antiguos y tradicionales. Sus imágenes medievales simples conectan con los significados tradicionales del tarot.</p>
            </div>
        </div>

        <div class="tirada">
            <img src="img/thoth.jpg" alt="Thoth">
            <h2>Tarot de Thoth</h2>
            <div class="info">
                <p>El Tarot de Thoth, creado por Aleister Crowley, está lleno de complejos símbolos esotéricos. Ideal para quienes buscan profundizar en lo metafísico y lo oculto.</p>
            </div>
        </div>

        <div class="tirada">
            <img src="img/osho.jpg" alt="Osho Zen">
            <h2>Tarot Osho Zen</h2>
            <div class="info">
                <p>El Tarot Osho Zen se centra en la meditación y la reflexión personal. Sus cartas invitan a una mirada espiritual más que predictiva.</p>
            </div>
        </div>

        <div class="tirada">
            <img src="img/crow.jpg" alt="Tarot de los Cuervos">
            <h2>Tarot de los Cuervos</h2>
            <div class="info">
                <p>El Tarot de los Cuervos evoca una energía oscura y espiritual. Sus cartas ofrecen una conexión profunda con lo oculto y el misterio.</p>
            </div>
        </div>

        <div class="tirada">
            <img src="img/grim.jpg" alt="Tarot de Grimalkin">
            <h2>Tarot de los Gatos (Grimalkin)</h2>
            <div class="info">
                <p>El Tarot Grimalkin se inspira en la magia de los gatos. Con ilustraciones de felinos, este mazo tiene un toque encantador y místico.</p>
            </div>
        </div>
    </div>
</div>

            </div>`;
            break;
        case 'terapias':
            contenido = `
                <div class="catalogo-container">
                    <h1>Terapias Alternativas disponibles</h1>
                    <div class="catalogo">
                        
                        <!-- Reiki a distancia -->
                        <div class="tirada reiki-box">
                            <img src="img/dist.jpg" alt="Reiki">
                            <h2>Reiki a distancia</h2>
                            <div class="reiki-info">
                                <p>El Reiki es una técnica de sanación energética donde un emisor canaliza energía vital hacia un receptor, ya sea una persona, animal, planta o situación. La energía puede ser transmitida a distancia, y su objetivo es aliviar molestias y apoyar la recuperación de la salud al desbloquear el flujo de energía en los chakras.<span class="price-info"><br><br>Precio: $25,000 CLP la sesión. Paquete de 3 sesiones en 1 semana por $45,000 CLP.</span></p>
                            </div>
                        </div>
            
                        <!-- Aqualead -->
                        <div class="tirada aqualead-box">
                            <img src="img/aqua.jpg" alt="Aqualead">
                            <h2>Aqualead</h2>
                            <div class="aqualead-info">
                                <p>Aqualead es una técnica de sanación que canaliza la energía del agua para la sanación y limpieza de cuerpos y energías. Es especialmente útil para trabajar con la sanación emocional y la regeneración energética, apoyando a personas, animales y plantas.<span class="price-info"><br><br>Precio: $15,000 CLP la sesión. Paquete de 3 sesiones por $30,000 CLP.</span></p>
                            </div>
                        </div>
            
                        <div class="tirada akashic-box">
                <img src="img/akashian.jpg" alt="Registros Akashicos">
                <h2>Registros Akashicos</h2>
                <div class="akashic-info">
                    <p>Los Registros Akáshicos son un acceso a la memoria del alma, donde se guarda toda la información de vidas pasadas, presentes y futuras. Esta técnica permite recibir guía y respuestas a las preguntas más profundas de la vida a través de un canal espiritual.<span class="price-info"><br><br>Precio: $30,000 CLP.</span></p>
                </div>
            </div>
            
                    </div>
                </div>`;
            break;

        case 'cursos':
            contenido = `
            <div class="catalogo-container">
                <h1>Elige el curso que necesitas</h1>
            <div class="catalogo">
                <div class="tirada">
                    <img src="img/reiki.jpg" alt="Reiki">
                    <h2>Aprende Reiki</h2>
                </div>
                <div class="tirada">
                    <img src="img/reg.jpg" alt="Registros Akashicos">
                    <h2>Aprende Registros Akashicos</h2>
                </div>
                <div class="tirada">
                    <img src="img/tar.jpg" alt="Tarot">
                    <h2>Aprende Tarot</h2>
                </div>
                <div class="tirada">
                    <img src="img/adv.jpg" alt="Tarot Terapéutico">
                    <h2>Aprende Tarot Terapéutico</h2>
                </div>
                <div class="tirada">
                    <img src="img/aqua.jpg" alt="Aqualead">
                    <h2>Aprende Aqualead</h2>
                </div>
                <div class="tirada">
                    <img src="img/noc8.jpg" alt="Protección Nocturna">
                    <h2>Aprende Protección Nocturna</h2>
                </div>
                </div>`;
            break;
        case 'talismanes':
            contenido = `
            <div class="catalogo-container">
            <h1>Elige el talismán que necesitas</h1>
            <div class="catalogo">
                <div class="tirada">
                    <img src="img/sach.jpg" alt="Talismán del Dinero">
                    <h2>Talismán del Dinero</h2>
                </div>
                <div class="tirada">
                    <img src="img/Han.jpg" alt="Talismán de Amor">
                    <h2>Talismán de Amor</h2>
                </div>
                <div class="tirada">
                    <img src="img/Mich.jpg" alt="Talismán de Protección">
                    <h2>Talismán de Protección y Luz</h2>
                </div>
                </div>`;
            break;
        case 'tiradas':
            contenido = `
                <div class="catalogo-container">
                <h1>¿No estás seguro de qué preguntar?</h1>
                <div id="tiradasContainer" class="catalogo">
                <div class="tirada">
                    <img src="img/cuadrado.jpg" alt="El Cuadrado del Amor">
                    <h2>El Cuadrado del Amor</h2>
                </div>
                <div class="tirada">
                    <img src="img/compas.jpg" alt="El Compás">
                    <h2>El Compás</h2>
                </div>
                <div class="tirada">
                    <img src="img/cuando.jpg" alt="Lectura del Cuando">
                    <h2>Lectura del Cuando</h2>
                </div>
                <div class="tirada">
                    <img src="img/cruz1.jpg" alt="La Cruz">
                    <h2>La Cruz</h2>    
                </div>
                <div class="tirada">
                    <img src="img/convi.jpg" alt="Lectura de la Convivencia de Pareja">
                    <h2>Lectura de la Convivencia de Pareja</h2>
                </div>
                <div class="tirada">
                    <img src="img/secretos.jpg" alt="Los Secretos">
                    <h2>Los Secretos</h2>
                </div>
                <div class="tirada">
                    <img src="img/mancha.jpg" alt="La Mancha Ciega">
                    <h2>La Mancha Ciega</h2>
                </div>
                <div class="tirada">
                    <img src="img/herido.jpg" alt="Sentimientos Heridos">
                    <h2>Sentimientos Heridos</h2>
                </div>
                <div class="tirada">
                    <img src="img/deb.jpg" alt="Lectura de mi Debilidad">
                    <h2>Lectura de mi Debilidad</h2>
                </div>
                <div class="tirada">
                    <img src="img/reflejo.jpg" alt="Tirada del Reflejo">
                    <h2>Tirada del Reflejo</h2>
                </div>
                <div class="tirada">
                    <img src="img/cuad.jpg" alt="Análisis del Amor">
                    <h2>Análisis del Amor</h2>
                </div>
                <div class="tirada">
                    <img src="img/dinero.jpg" alt="Lectura del Dinero">
                    <h2>Lectura del Dinero</h2>
                </div>
                <div class="tirada">
                    <img src="img/sgte.jpg" alt="El Paso Siguiente">
                    <h2>El Paso Siguiente</h2>
                </div>
                <div class="tirada">
                    <img src="img/vamis.jpg" alt="Hacia Donde Vamos">
                    <h2>Hacia Donde Vamos</h2>
                </div>
                <div class="tirada">
                    <img src="img/karmic.jpg" alt="Lectura Kármica">
                    <h2>Lectura Kármica</h2>
                </div>
                <div class="tirada">
                    <img src="img/procore.jpg" alt="Tu Problema, tu Conducta y tu Respuesta">
                    <h2>Tu Problema, tu Conducta y tu Respuesta</h2>
                </div>
                <div class="tirada">
                    <img src="img/espejo.jpg" alt="Lectura del Espejo">
                    <h2>Lectura del Espejo</h2>
                </div>
            </div>
            <a href="#" onclick="cargarContenido('inicio')" class="btn-volver">Volver a Inicio</a>
            </div>`;
            break;
        case 'contacteme':
            contenido = `
                    <h1 style="margin-bottom: 20px; font-family: 'Afacad Flux', serif;">Contácteme</h1>
                    <p style="font-family: 'Afacad Flux', serif; padding: 10px; margin-left: 20px; margin-right: 20px; text-align: justify;">
                    Si lo que busca es una lectura personalizada desde la comodidad de donde se encuentre, puede solicitar una por $15.000 CLP. 
                    La sesión dura 30 minutos, y también tiene la opción de elegir una hora por $30.000 CLP. 
                    El proceso es sencillo: contácteme vía WhatsApp por escrito para coordinar el horario, realizar el pago y una vez confirmado, le llamo de manera telefónica, garantizando total privacidad y comodidad.
                    </p>
                    <!-- Contenedor para centrar el botón -->
            <div style="text-align: center; margin: 20px 0;">
            <a href="https://wa.me/56949378439?text=Hola,%20quiero%20una%20lectura%20de%20Tarot." 
            class="whatsapp-button" 
            style="display: inline-block; padding: 10px 20px; background-color: #25d366; color: white; border-radius: 5px; text-decoration: none;">
            Contáctame en WhatsApp
            </a>
        </div>
            
                    <p id="respuesta" style="margin-top: 20px;"></p>
                `;

            // Mostrar el contenido primero
            document.getElementById('contenidoPrincipal').innerHTML = contenido;

            // Escuchar el evento submit del formulario
            document.getElementById('formContacto').addEventListener('submit', function (event) {
                event.preventDefault(); // Detener la acción predeterminada del formulario
                document.getElementById('respuesta').textContent = "Enviando...";
            });
            break;


    }
    document.getElementById('contenidoPrincipal').innerHTML = contenido;
}

  
document.addEventListener('DOMContentLoaded', function () {
    // Cargar la página de inicio por defecto
    cargarContenido('inicio');  // Aquí cambiamos 'tiradas' por 'inicio'
});
