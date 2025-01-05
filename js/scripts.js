function cargarContenido(seccion) {
    let contenido = '';

    switch (seccion) {
        case 'inicio':  // Este es el nuevo caso para la página de inicio
            contenido = `
            <div class="intro-section">
            <h1><br><br>Bienvenido a Tarot Vía: Conecte con su energía interior</h1>
            <p>Lecturas de tarot personalizadas.</p>
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

            <div class="about-me-container">
            <a href="alma/about.html" class="about-me-link">
            <img src="img/ymmor.jpg" alt="Rommy - Lectora de Tarot" class="about-me-icon">
            <span class="about-me-text">Sobre mí</span></a>
            </div>

            </div>`;
        break;
        case 'mazos':
            contenido = `
            <div class="catalogo-container">
            <h1>Siempre puedes elegir el mazo con el que quieres tu lectura</h1>
            <div class="catalogo">
            <!-- Rider-Waite-Smith -->
            <div class="tirada">
            <a href="alma/rider-waite.html"><img src="img/ryder.jpg" alt="Ryder Waite"><h2>Tarot Rider Waite</h2></a>
            </div>
            <!-- Tarot de Marsella -->
            <div class="tirada">
            <a href="alma/marsella.html"><img src="img/marsella.jpg" alt="Tarot de Marsella"><h2>Tarot de Marsella</h2></a>
            </div>
            <!-- Tarot de Thoth -->
            <div class="tirada">
            <a href="alma/thoth.html"><img src="img/thoth.jpg" alt="Tarot de Thoth"><h2>Tarot de Thoth</h2></a>
            </div>
            <!-- Tarot Osho Zen -->
            <div class="tirada">
            <a href="alma/osho.html"><img src="img/osho.jpg" alt="Tarot Osho Zen"><h2>Tarot Osho Zen</h2></a>
            </div>
            <!-- Tarot de los Cuervos -->
            <div class="tirada">
            <a href="alma/cuervos.html"><img src="img/crow.jpg" alt="Tarot de los Cuervos"><h2>Tarot de los Cuervos</h2></a>
            </div>
            <!-- Tarot de los Gatos (Grimalkin) -->
            <div class="tirada">
            <a href="alma/grimalkin.html"><img src="img/grim.jpg" alt="Tarot de Grimalkin"><h2>Tarot de los Gatos (Grimalkin)</h2></a>
            </div>
            <!-- Tarot de Klimt -->
            <div class="tirada">
            <a href="alma/klimt.html"><img src="img/cuando.jpg" alt="Tarot de Klimt"><h2>Tarot de Klimt</h2></a>
            </div>
            <!-- Tarot de los Vitrales (Cloisters) -->
            <div class="tirada">
            <a href="alma/vitrales.html"><img src="img/compas.jpg" alt="Tarot de los Vitrales"><h2>Tarot de los Vitrales</h2></a>
            </div>
            </div>
            </div>`;
        break;
        case 'terapias':
            contenido = `
            <div class="catalogo-container">
            <h1>Terapias Alternativas disponibles</h1>
            <div class="catalogo">       
            <!-- Reiki a Distancia -->
            <div class="tirada">
            <a href="alma/reiki_distancia.html"><img src="img/reiki.jpg" alt="Reiki a Distancia"><h2>👐 Reiki a distancia</h2></a>
            </div>
            <!-- Aqualead -->
            <div class="tirada">
            <a href="alma/aqualead.html"><img src="img/aqui.jpg" alt="Terapia Aqualead"><h2>🌊 Aqualead</h2></a>
            </div>
            <!-- Registros Akáshicos -->
            <div class="tirada">
            <a href="alma/akashicos.html"><img src="img/akashian.jpg" alt="Lectura de Registros Akáshicos"><h2>✨ Registros Akáshicos</h2></a>
            </div>
            </div>
            </div>`;
        break;
        case 'cursos':
            contenido = `
            <div class="catalogo-container">
            <h1>Elige el curso que necesitas</h1>
            <div class="catalogo">        
            <!-- Protección contra Energías Nocturnas -->
            <div class="tirada">
            <h2>🌙 Protección contra Energías Nocturnas</h2><a href="alma/taller.html"><img src="img/dist.jpg" alt="Protección"></a>
            </div>
            <!-- Creación de Altares -->
            <div class="tirada">
            <h2>🕯️ Creación de Altares</h2>
            <a href="alma/altares.html"><img src="img/reg.jpg" alt="Altares"></a>
            </div>
            <!-- Creación de Muñecas Mágicas -->
            <div class="tirada">
            <h2>🧸 Creación de Muñecas Mágicas</h2>
            <a href="alma/spirit_doll.html"><img src="img/tar.jpg" alt="Muñeca Mágica"></a>
            </div>          
            <!-- Corte de Lazos Energéticos y Emocionales -->
            <div class="tirada">
            <h2>🌿 Corte de Lazos Energéticos</h2>
            <a href="alma/corte_lazos.html"><img src="img/aqua.jpg" alt="Corte"></a>
            </div>
            </div>
            </div>`;
        break;
        case 'tiradas':
            contenido = `
            <div class="catalogo-container">
            <h1>¿No estás seguro de qué preguntar?</h1>
            <h5>No olvides pasar tu cursor por encima o presionar desde celulares para leer el contenido</h5>
            <div id="tiradasContainer" class="catalogo">
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Cuadrado del Amor</h2>
            <div class="info"><p>Cómo me ve mi pareja.<br>Sus sentimientos.<br>Lo que interfiere.<br>Puntos fuertes de la pareja.<br>Consejo.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Sentimientos Heridos</h2>
            <div class="info"><p>Cómo amo y me amas.<br>Cómo hago daño y me defiendo.<br>Cómo el otro daña y se defiende.<br>Quién eres y hacia dónde van.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Lectura de mi Debilidad</h2>
            <div class="info"><p>Debilidad actual.<br>Qué me ayudará a superar esto.<br>Qué nueva dirección puedo tomar.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Hacia Dónde Vamos</h2>
            <div class="info"><p>Qué causa problemas.<br>Nuestras opciones.<br>Qué necesitamos expresar.<br>Hacia dónde vamos en adelante.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Lectura del Cuando</h2>
            <div class="info"><p>Pasado.<br>Presente.<br>Futuro.<br>Observación de plazo de 12 meses.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Lectura del Dinero</h2>
            <div class="info"><p>El objetivo.<br>Las obstrucciones.<br>Los sacrificios a hacerse.<br>Qué le ayudará.<br>Cómo seguirá.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>La Cruz</h2>
            <div class="info"><p>De qué se trata.<br>Lo que no debes hacer.<br>Lo que sí debes hacer.<br>Lo que te llevará a conseguir lo que quieres.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Lectura Kármica</h2>
            <div class="info"><p>Usted.<br>Lo que debe vivir y aprender.<br>Cómo se manifiesta en su vida.<br>Consejo de la divinidad.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Los Secretos</h2>
            <div class="info"><p>Los deseos y los sentimientos secretos.<br>Los miedos y odios secretos.<br>El amor y fantasías secretos.<br>Vulnerabilidad y poder secretos.<br>El mayor secreto.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>La Mancha Ciega</h2>
            <div class="info"><p>Autoconocimiento.<br>Lo que no sabes de ti.<br>Lo que los demás sí saben.<br>Cómo llegas a valorarte.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>El Compás</h2>
            <div class="info"><p>De qué se trata.<br>Así comienza.<br>Las reacciones.<br>En qué desemboca.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Tirada del Reflejo</h2>
            <div class="info"><p>Lo que siento/Lo que siente.<br>Lo que creo/Lo que cree.<br>Lo que quieres/Lo que el otro quiere.<br>Resultado.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Análisis del Amor</h2>
            <div class="info"><p>El objetivo en el amor.<br>Lo que puede ofrecer.<br>El punto central de todo.<br>Lo que puedo hacer para que mi relación funcione.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Lectura del Espejo</h2>
            <div class="info"><p>Situación actual.<br>Lo que ve, percibe y siente.<br>Cómo actúa.<br>Consejo.</p></div>
            </div>
            <div class="tirada tirada-bonita" style="background-image: url('img/deb.jpg');">
            <h2>Tu Problema, tu Conducta y tu Respuesta</h2>
            <div class="info"><p>Tu problema.<br>Cómo lo afrontas.<br>La solución.</p></div>
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
        case 'contacto':
            contenido = `
            <h1 style="margin-bottom: 20px; font-family: 'Afacad Flux', serif;">Contácteme</h1>
            <p style="font-family: 'Afacad Flux', serif; padding: 10px; margin-left: 20px; margin-right: 20px; text-align: justify;">
            Si lo que busca es una lectura personalizada desde la comodidad de donde se encuentre, puede solicitar una por $15.000 CLP. 
            La sesión dura 30 minutos, y también tiene la opción de elegir una hora por $30.000 CLP. 
            El proceso es sencillo: contácteme vía WhatsApp por escrito para coordinar el horario, realizar el pago y una vez confirmado, le llamo de manera telefónica, garantizando total privacidad y comodidad.
            </p>
            <div style="text-align: center; margin: 20px 0;">
            <a href="https://wa.me/56949378439?text=Hola,%20quiero%20una%20lectura%20de%20Tarot." 
               class="whatsapp-button" 
               style="display: inline-block; padding: 10px 20px; background-color: #25d366; color: white; border-radius: 5px; text-decoration: none;">
               Contáctame en WhatsApp
            </a>
            </div>
            <p id="respuesta" style="margin-top: 20px;"></p>
            </div>`;
        break;
        }
    document.getElementById('contenidoPrincipal').innerHTML = contenido;
}

document.addEventListener('DOMContentLoaded', function () {
    // Cargar la página de inicio por defecto
    cargarContenido('inicio');  // Aquí cambiamos 'tiradas' por 'inicio'
});

