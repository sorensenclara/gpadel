# GPADEL – Proyecto Desarrollo Web

## Descripción del proyecto

Este repositorio corresponde al proyecto final del curso **Desarrollo Web** de **Coderhouse**.

El sitio web desarrollado representa una plataforma conceptual llamada **GPADEL**, orientada a la gestión y difusión de ligas, canchas y jugadores de pádel.  
En esta etapa del proyecto se desarrolló principalmente la rama **Jugadores**.

El objetivo principal fue aplicar los contenidos vistos durante el curso, priorizando:
- una estructura HTML clara y semántica,
- estilos consistentes,
- uso del framework Bootstrap,
- y un diseño responsive en todas las páginas.

## Tecnologías usadas

- HTML5  
- SCSS (Sass)  
- CSS (compilado desde SCSS)  
- Bootstrap 5  
- JavaScript (básico)  
- Git & GitHub  
- GitHub Pages para la publicación del proyecto  


## ¿Dónde uso Bootstrap?

Bootstrap fue utilizado de forma transversal en el proyecto, principalmente en:

- Footer de todas las páginas  
- Página **“En construcción”**, creada para la rama GPADEL Canchas y Ligas  

Además, en algunas secciones específicas —por ejemplo **Ayuda para jugadores**— se utilizó Bootstrap para organizar el contenido mediante grillas y utilidades, personalizando y sobrescribiendo los colores por defecto del framework para mantener coherencia visual con el diseño general del sitio.


## Diseño responsive

Uno de los objetivos principales del proyecto fue que todas las páginas fueran responsive, adaptándose correctamente a:

- Desktop  
- Tablet  
- Dispositivos móviles  

Si bien existen posibles mejoras futuras —como reemplazar bloques de imágenes por carruseles—, el sitio actualmente funciona de manera correcta en todos los tamaños de pantalla, cumpliendo con los requisitos del curso.


## Uso de Sass (SCSS)

Se realizó la **migración de estilos desde CSS plano a SCSS**, organizando el código en parciales para mejorar la escalabilidad y mantenimiento del proyecto.

### Instalación de Sass
```bash
npm i -D sass
