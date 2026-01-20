DESCRIPCION DEL PROYECTO

Este repositorio corresponde al proyecto final del curso Desarrollo Web de Coderhouse.
El sitio web desarrollado representa una plataforma conceptual llamada GPADEL, orientada a la gestión y difusión de ligas, canchas y jugadores de pádel. Inicialmente solo desarrollé la rama de JUGADORES.

El objetivo principal fue aplicar los contenidos vistos durante el curso, priorizando una estructura HTML clara, estilos consistentes, uso de Bootstrap, y un diseño responsive en todas las páginas.

TECNOLOGIAS USADAS
- HTML5
- CSS
- Bootstrap 5
- JavaScript (básico)
- Git & GitHub
- GitHub Pages para la publicación del proyecto

¿DONDE USO Bootstrap?
-Bootstrap fue utilizado de forma transversal en el proyecto, principalmente en:
-Footer de todas las páginas
-Página “En construcción”, creada para la rama GPADEL Canchas y Ligas

Además, en algunas secciones específicas —por ejemplo Ayuda para jugadores— utilicé Bootstrap para mostrar contenido de manera ordenada, personalizando y sobrescribiendo los colores por defecto del framework para mantener coherencia visual con el diseño general del sitio.

DISEÑO RESPONSIVE

Uno de los objetivos principales del proyecto fue que todas las páginas fueran responsive, adaptándose correctamente a:
-Desktop
-Tablet
-Dispositivos móviles

Si bien existen posibles mejoras futuras —como reemplazar bloques de imágenes por carruseles para optimizar la experiencia visual—, el sitio actualmente funciona de manera correcta en todos los tamaños de pantalla, cumpliendo con los requisitos del curso.

PUBLICACIÓN 
El proyecto fue publicado utilizando GitHub Pages, permitiendo su visualización online y facilitando la entrega y evaluación.

URL del proyecto:
https://sorensenclara.github.io/gpadel/


TP2 - 2da entrega
Realicé además la migración dese style.css a GPADEL SCSS
## instale con
- bash
- npm i -D sass
## compliación
- bash 
- npx sass scss/style.scss css/style.css --watch
## estructura que arme
- `scss/base/` variables, mixins, reset, helpers
- `scss/layout/` header/footer
- `scss/components/` botones, search
- `scss/pages/` páginas

Sumé animaciones a botones, auspiciantes y cards.