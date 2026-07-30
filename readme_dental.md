# Sistema de Gestión de Clínica Dental

Aplicación web desarrollada para la gestión integral de una clínica dental, permitiendo el control de pacientes, historias clínicas, odontogramas interactivos, servicios y un canal de comunicación directo con los profesionales de la salud.

---

## Tecnologías Utilizadas

* **HTML5 y CSS3** para la estructura, diseño responsivo y estilos visuales modernos.
* **JavaScript (Vanilla ES6+)** para la lógica del sistema, manejo del DOM y gestión de eventos.
* **Font Awesome** para la incorporación de iconografía institucional y de interfaz.
* **LocalStorage API** para el almacenamiento local y persistencia de los datos del sistema (usuarios, pacientes, historiales y mensajes).

---

## Funcionalidades Principales

### 1. Módulo Público e Informativo
* **Página de Inicio:** Presentación de la clínica con accesos directos al panel profesional.
* **Servicios:** Listado dinámico de procedimientos (limpieza dental, tratamientos de conducto, ortodoncia, etc.) con sus tarifas asociadas mediante modales informativos.
* **Contacto y Ubicación:** Canales de comunicación directa (WhatsApp, Instagram, Email) junto a un formulario de contacto con opciones múltiples de envío y visualización de ubicación geográfica.

### 2. Panel Profesional (Acceso Médico)
* **Autenticación Segura:** Acceso exclusivo para el personal médico autorizado.
* **Gestión de Pacientes:** Permite registrar nuevos pacientes con información personal detallada (cédula, edad, fecha de nacimiento, teléfono, correo y ubicación) y realizar búsquedas rápidas por nombre o identificador.
* **Historial Clínico y Odontológico:** Registro cronológico de síntomas, diagnósticos, tratamientos aplicados, procedimientos realizados y notas adicionales por paciente.
* **Odontograma Interactivo:** Representación gráfica de los 32 dientes divididos por partes anatómicas (distal, oclusal, mesial, incisal, labial/vestibular y lingual/palatina) para registrar y limpiar patologías o tratamientos específicos por pieza dental.
* **Buzón de Mensajes:** Panel para que el profesional visualice, gestione y marque como leídas las consultas recibidas a través del formulario web.
* **Seguridad y Utilidades:** Opción para cambio de contraseña con notificación simulada, copias de seguridad automáticas/manuales, exportación/importación de datos en formato JSON y herramientas de depuración (*Debug*).
