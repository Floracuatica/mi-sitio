function cargarContenido(seccion) {
    let contenido = '';

    switch (seccion) {
        case 'inicio':  // Este es el nuevo caso para la página de inicio
            contenido = `
            <div class="intro-section">
            <h1>Te doy la bienvenida a Tarot Vía: Conecta con tu energía interior</h1>
            <p>Transforma tus dudas en claridad con mis lecturas personalizadas de tarot.</p>

            <div class="about-me">
                <h2>Sobre mí</h2>
                <p>Mi nombre es Rommy, y puedes siempre encontrarme cuando requieres de una lectura de tarot,
                        consultar por rituales que abran tus caminos y terapias alternativas. Ahora todos mis
                        servicios también los puedes encontrar por aquí. Desde hace años, he sido un canal, en el
                        proceso de ayudar a las personas a encontrar respuestas y claridad mediante las lecturas de
                        tarot telefónicas. Mi enfoque se basa en la conexión con energías. Estoy aquí para
                        escucharte y acompañarte en tu camino si así lo decides.</p>
                </div>

                <div class="services">
                    <h2>Mis Servicios</h2>
                    <ul>
                        <li><strong>Lecturas de Tarot Personalizadas:</strong> Acompañamiento en decisiones
                            importantes con tiradas de tarot específicas para el amor, el trabajo, o el crecimiento
                            personal vía telefónica. </li>
                        <li><strong>Rituales de Conexión Espiritual:</strong> Rituales diseñados para ayudarte a
                            manifestar lo que deseas o a dejar ir lo que ya no necesitas.</li>
                        <li><strong>Cursos y Talleres vía Zoom:</strong> Aprende a usar el tarot, rituales y
                            talismanes para mejorar tu vida diaria. </li>
                    </ul>
                </div>

                <div class="cta">
                    <h2>¿Listo para descubrir lo que las cartas tienen para decirte?</h2>
                    <p><a href="https://wa.me/56949378439?text=Hola,%20quiero%20agendar%20una%20consulta%20de%20Tarot." style="color: #52be80; text-decoration: none;">Agenda tu consulta por esta vía.</a></p>
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
                </div>
                <div class="tirada">
                    <img src="img/marsella.jpg" alt="Marsella">
                    <h2>Tarot de Marsella</h2>
                </div>
                <div class="tirada">
                    <img src="img/thoth.jpg" alt="Thoth">
                    <h2>Tarot de Thoth</h2>
                </div>
                <div class="tirada">
                    <img src="img/osho.jpg" alt="Osho Zen">
                    <h2>Tarot Osho Zen</h2>
                </div>
                <div class="tirada">
                    <img src="img/crow.jpg" alt="Tarot de los Cuervos">
                    <h2>Tarot de los Cuervos</h2>
                </div>
                <div class="tirada">
                    <img src="img/grim.jpg" alt="Tarot de los gatos">
                    <h2>Tarot de los gatos</h2>
                </div>
            </div>
            </div>`;
            break;
        case 'terapias':
            contenido = `
            <div class="catalogo-container">
            <h1>Terapias Alternativas disponibles</h1>
            <div class="catalogo">
                <div class="tirada">
                    <img src="img/dist.jpg" alt="Reiki">
                    <h2>Reiki a distancia</h2>
                </div>
                <div class="tirada">
                    <img src="img/aqui.jpg" alt="Aqualead">
                    <h2>Aqualead</h2>
                </div>
                <div class="tirada">
                    <img src="img/akashian.jpg" alt="Registros Akashicos">
                    <h2>Registros Akashicos</h2>
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
                    <img src="img/sigil.jpg" alt="Talismanes y Sigilos">
                    <h2>Aprende de Talismanes y Sigilos</h2>
                </div>
                <div class="tirada">
                    <img src="img/noc8.jpg" alt="Protección Nocturna">
                    <h2>Aprende Protección Nocturna</h2>
                </div>
                <div class="tirada">
                    <img src="img/altar.jpg" alt="Creación de Altares">
                    <h2>Aprende a Crear tu Altar</h2>
                </div>
                <div class="tirada">
                    <img src="img/cromo.jpg" alt="Cromoterapia">
                    <h2>Aprende Cromoterapia</h2>                        </div>
                </div>
                <a href="#" onclick="cargarContenido('inicio')" class="btn-volver">Volver a Inicio</a>
                </div>`;
            break;
        case 'talismanes':
            contenido = `
            <div class="catalogo-container">
            <h1>Elige el talismán que necesitas</h1>
            <div class="catalogo">
                <div class="tirada">
                    <img src="img/tarot1.png" alt="Talismán de Arcángel Gabriel">
                    <h2>Talismán del Arcángel Gabriel</h2>
                </div>
                <div class="tirada">
                    <img src="img/tarot1.png" alt="Talismán del Arcángel Samael">
                    <h2>Talismán del Arcángel Samael</h2>
                </div>
                <div class="tirada">
                    <img src="img/tarot1.png" alt="Talismán de Arcángel Rafael">
                    <h2>Talismán del Arcángel Rafael</h2>
                </div>
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
                <div class="tirada">
                    <img src="img/just.jpg" alt="Talismán de la justicia">
                    <h2>Talismán de la justicia</h2>
                </div>
                <div class="tirada">
                    <img src="img/prot.jpg" alt="Talismán escudo de Ángel">
                    <h2>Talismán escudo de Ángel</h2>
                </div>
                <div class="tirada">
                    <img src="img/bendi.jpg" alt="Talismán de Bendiciones">
                    <h2>Talismán de Bendiciones al Hogar</h2>
                </div>
                </div>
                <a href="#" onclick="cargarContenido('inicio')" class="btn-volver">Volver a Inicio</a>
                </div>`;
            break;
        case 'rituales':
            contenido = `
            <h1>Rituales</h1>
            <p>Aprende sobre rituales místicos para la conexión espiritual.</p>`;
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
                    <h1 style="margin-bottom: 20px;">Contácteme</h1>
                    <p>Si quieres agendar una lectura, no dudes en contactarme vía WhatsApp, siempre estaré para contestar tu mensaje.</p>
            
                    <!-- Contenedor para centrar el botón -->
                    <div style="text-align: center; margin: 20px 0;">
                        <a href="https://wa.me/56949378439?text=Hola,%20quiero%20una%20lectura%20de%20Tarot." 
                        class="whatsapp-button" 
                        style="display: inline-block; padding: 10px 20px; background-color: #25d366; color: white; border-radius: 5px; text-decoration: none;">
                        Contáctame en WhatsApp
                        </a>
                    </div>
            
                    <p>Si prefieres escribirlo por aquí también estará bien:</p>
                    
                    <form id="formContacto" style="margin-bottom: 20px;">
                        <div style="margin-bottom: 10px;">
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <label for="mensaje">Mensaje:</label>
                            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                        </div>
                        <div style="margin-top: 10px;">
                            <button type="submit">Enviar Mensaje</button>
                        </div>
                    </form>
                    <p id="respuesta" style="margin-top: 20px;"></p>
                `;

            // Mostrar el contenido primero
            document.getElementById('contenidoPrincipal').innerHTML = contenido;

            // Luego inicializar EmailJS y el event listener después de cargar el contenido
            (function () {
                emailjs.init("_z9agavXauiDuZ2KL"); // Reemplaza _z9agavXauiDuZ2KL con tu Public Key
            })();

            // Escuchar el evento submit del formulario
            document.getElementById('formContacto').addEventListener('submit', function (event) {
                event.preventDefault(); // Detener la acción predeterminada del formulario
                document.getElementById('respuesta').textContent = "Enviando...";

                // Enviar el formulario a través de EmailJS usando sendForm
                emailjs.sendForm('service_wdg2thv', 'template_hacs60q', this)
                    .then(function () {
                        document.getElementById('respuesta').textContent = '¡El mensaje ha sido enviado con éxito!';
                    }, function (error) {
                        document.getElementById('respuesta').textContent = 'Ocurrió un problema al enviar el mensaje, por favor intenta nuevamente.';
                    });
            });
            break;

    }
    document.getElementById('contenidoPrincipal').innerHTML = contenido;
}

document.addEventListener('DOMContentLoaded', function () {
    // Cargar la página de inicio por defecto
    cargarContenido('inicio');  // Aquí cambiamos 'tiradas' por 'inicio'
});