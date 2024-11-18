function cargarContenido(seccion) {
    let contenido = '';

    switch (seccion) {
        case 'inicio':  // Este es el nuevo caso para la página de inicio
            contenido = `
    <div class="intro-section">
        <h1><br><br>Bienvenido a Tarot Vía: Conecte con su energía interior</h1>
        <p>Lecturas de tarot personalizadas.</p>

        <div class="about-me">
            <h2>Sobre mí</h2>
            <p>Mi nombre es Rommy, me dedico a ofrecer orientación mediante el tarot y otras prácticas espirituales. 
                Desde hace años, soy un canal a través del cual puedes encontrar respuestas. Siempre mediante 
                consultas telefónicas para una mayor privacidad. Mi enfoque está basado en la conexión con energías y mi compromiso es 
                ser lo más descriptiva posible, con empatía en cada sesión.</p>
        </div>

        <div class="services">
            <h2>Servicios</h2>
            <ul>
                <li><strong>Lecturas de Tarot Personalizadas:</strong> Si tiene dudas, ya sea sobre amor, trabajo o 
                crecimiento personal, puede siempre agendar en el horario que prefiera y puede también realizar la misma consulta
                a través de diferentes ángulos. Estoy para escucharle.</li>
                <li><strong>Rituales de Conexión Espiritual:</strong> Ritualizaciones para manifestar deseos o 
                    liberar bloqueos energéticos que ya no le sirven.</li>
                <li><strong>Cursos y Talleres vía Zoom:</strong> Aprenda sobre el uso del tarot, rituales y 
                    talismanes para potenciar su vida diaria. Siempre puede consultar.</li>
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
        <div class="tirada">
            <img src="img/cuando.jpg" alt="Klimt">
            <h2>Tarot de Klimt</h2>
            <div class="info">
                <p>Cada carta del Tarot de Klimt es una obra maestra que ofrece una conexión única con el arte y el misticismo, ideal para quienes buscan explorar el tarot desde una perspectiva artística y espiritual.</p>
            </div>
        </div>
        <div class="tirada">
            <img src="img/compas.jpg" alt="Cloisters">
            <h2>Tarot de los Vitrales</h2>
            <div class="info">
                <p>Cada carta refleja un detallado trabajo artístico que evoca espiritualidad y claridad. Esta baraja es ideal para quienes buscan una experiencia visual y meditativa en sus lecturas de tarot.</p>
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
                        <div class="tirada">
                            <img src="img/dist.jpg" alt="Reiki">
                            <h2>Reiki a distancia</h2>
                            <div class="info">
                                <p>El Reiki es una técnica de sanación energética donde un emisor canaliza energía vital hacia un receptor, ya sea una persona, animal, planta o situación. La energía puede ser transmitida a distancia, y su objetivo es aliviar molestias y apoyar la recuperación de la salud al desbloquear el flujo de energía en los chakras.<span class="price-info"><br><br>Precio: $25,000 CLP la sesión. Paquete de 3 sesiones en 1 semana por $45,000 CLP.</span></p>
                            </div>
                        </div>
            
                        <!-- Aqualead -->
                        <div class="tirada">
                            <img src="img/aqua.jpg" alt="Aqualead">
                            <h2>Aqualead</h2>
                            <div class="info">
                                <p>Aqualead es una técnica de sanación que canaliza la energía del agua para la sanación y limpieza de cuerpos y energías. Es especialmente útil para trabajar con la sanación emocional y la regeneración energética, apoyando a personas, animales y plantas.<span class="price-info"><br><br>Precio: $15,000 CLP la sesión. Paquete de 3 sesiones por $30,000 CLP.</span></p>
                            </div>
                        </div>

                        <div class="tirada">
                            <img src="img/mancha.jpg" alt="Extracción">
                            <h2>Extracción de larvas y parásitos</h2>
                            <div class="info">
                                <p>Ofrezco limpiezas energéticas especializadas para la extracción de larvas y parásitos energéticos, ayudando a restaurar tu bienestar y equilibrio. Sesiones personalizadas, enfocadas en liberar bloqueos y renovar tu energía vital.<span class="price-info"><br><br>Precio: Puede variar. Requerirá primero de una tirada de tarot para definir lo necesario.</span></p>
                            </div>
                        </div>
            
                        <div class="tirada">
                            <img src="img/akashian.jpg" alt="Registros Akashicos">
                            <h2>Registros Akashicos</h2>
                            <div class="info">
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
                    <img src="img/aqua.jpg" alt="Aqualead">
                    <h2>Aprende Aqualead</h2>
                </div>
                </div>`;
            break;
        case 'tiradas':
            contenido = `
                <div class="catalogo-container">
                <h1>¿No estás seguro de qué preguntar?<br></h1><h5>No olvides pasar tu cursor por encima o presionar desde celulares para leer el contenido<br></h5>
                <div id="tiradasContainer" class="catalogo">
                <div class="tirada tirada-bonita">
                    <h2>Cuadrado del Amor</h2>
                     <div class="info">
                <p>Cómo me ve mi pareja.<br>Sus sentimientos.<br>Lo que interfiere.<br>Puntos fuertes de la pareja.<br>Consejo.</p>
            </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Sentimientos Heridos</h2>
                    <div class="info">
                    <p>Cómo amo y me amas.<br>Cómo hago daño y me defiendo.<br>Cómo el otro daña y se defiende.<br>Quien eres y hacia dónde van.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Lectura de mi Debilidad</h2>
                    <div class="info">
                    <p>Debilidad actual.<br>Qué me ayudará a superar esto.<br>Qué nueva dirección puedo tomar.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Hacia Donde Vamos</h2>
                    <div class="info">
                    <p>Qué causa problemas.<br>Nuestras opciones.<br>Qué necesitamos expresar.<br>Hacia donde vamos en adelante.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Lectura del Cuando</h2>
                    <div class="info">
                    <p>Pasado.<br>Presente.<br>Futuro.<br>Observación de plazo de 12 meses.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Lectura del Dinero</h2>
                    <div class="info">
                    <p>El objetivo.<br>Las obstrucciones.<br>Los sacrificios a hacerse.<br>Qué le ayudará.<br>Cómo seguirá.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>La Cruz</h2>
                    <div class="info">
                    <p>De qué se trata.<br>Lo que no debes hacer<br>Lo que si debes hacer.<br>Lo que te llevará a conseguir lo que quieres.<br>
                    </div>    
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Lectura Kármica</h2>
                    <div class="info">
                    <p>Usted.<br>Lo que debe vivir y aprender.<br>Cómo se manifiesta en su vida.<br>Consejo de la divinidad.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Los Secretos</h2>
                    <div class="info">
                    <p>Los deseos y los sentimientos secretos.<br>Los miedos y odios secretos<br>El amor y fantasías secretos.<br>Vulnerabilidad y poder secretos.<br>El mayor secreto.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>La Mancha Ciega</h2>
                    <div class="info">
                    <p>Autoconocimiento.<br>Lo que no sabes de ti.<br>Lo que los demás si saben.<br>Cómo llegas a valorarte.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>El Compás</h2>
                    <div class="info">
                    <p>De qué se trata.<br>Así comienza<br>Las reacciones.<br>En qué desemboca.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Tirada del Reflejo</h2>
                    <div class="info">
                    <p>Lo que siento/Lo que siente.<br>Lo que creo/Lo que cree.<br>Lo que quieres/Lo que el otro quiere.<br>Resultado.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Análisis del Amor</h2>
                    <div class="info">
                    <p>El objetivo en el amor.<br>Lo que puede ofrecer<br>El punto central de todo.<br>Lo que puedo hacer para que mi relación funcione.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Lectura del Espejo</h2>
                    <div class="info">
                    <p>Situación actual.<br>Lo que ve, percibe y siente.<br>Cómo actúa.<br>Consejo.<br>
                    </div>
                </div>
                <div class="tirada tirada-bonita">
                    <h2>Tu Problema, tu Conducta y tu Respuesta</h2>
                    <div class="info">
                    <p>Tu problema.<br>Como lo afrontas.<br>La solución.<br>
                    </div>
                </div>
               <div class="tirada tirada-bonita">
                    <h2>Lectura de la Convivencia de Pareja</h2>
                    <div class="info">
                    <p>Compatibilidad de pareja.<br>Resultados a través del tiempo.<br>Qué traen del pasado.<br>Qué aprenderán el uno del otro.<br>
                    </div>
                </div>
            </div>
            </div>`;
            break;
        case 'disponibilidad':
            contenido = `
    <div class="disponibilidad-container">
        <h1>Consulta por tu horario disponible</h1>
        <div id="lecturas">
            <div id="lunes" class="day">
                <h2>Lunes:</h2>
                <p>Mañana: 10:00, 11:00, 12:00</p>
                <p>Noche: 22:00, 23:00, 24:00</p>
            </div>
            <div id="martes" class="day">
                <h2>Martes:</h2>
                <p>Mañana: 10:00, 11:00, 12:00</p>
                <p>Tarde: 15:00, 16:00, 17:00</p>
                <p>Noche: 22:00, 23:00, 24:00</p>
            </div>
            <div id="miercoles" class="day">
                <h2>Miércoles:</h2>
                <p>Mañana: 10:00, 11:00, 12:00</p>
                <p>Tarde: 15:00, 16:00</p>
                <p>Noche: 22:00, 23:00, 24:00</p>
            </div>
            <div id="jueves" class="day">
                <h2>Jueves y Viernes:</h2>
                <p>Mañana: 10:00, 11:00, 12:00</p>
                <p>Noche: 22:00, 23:00, 24:00</p>
            </div>
            <div id="sabado" class="day">
                <h2>Sábados y Domingos:</h2>
                <p>Mañana: 10:00, 11:00, 12:00</p>
                <p>Tarde: 15:00 - 23:00</p>
            </div>
        </div>
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
