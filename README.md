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


## Mejora de velocidad de carga y SEO

- Durante el desarrollo del proyecto se realizaron optimizaciones orientadas a mejorar el rendimiento, la experiencia de usuario y las buenas prácticas de SEO y accesibilidad, entre ellas:
- Conversión de imágenes a formatos más livianos (WebP) y ajuste de tamaños según su uso real en pantalla.
- Optimización del hero principal reemplazando el fondo definido por CSS por una imagen de fondo real en HTML, lo que mejora el indicador LCP (Largest Contentful Paint).
- Uso correcto del atributo alt:
    - Las imágenes decorativas (fondos) se dejaron con alt="" y aria-hidden="true", ya que no aportan información relevante y no deben ser leídas por lectores de pantalla.
    - Las imágenes con contenido informativo sí cuentan con textos alternativos descriptivos.
- Aplicación de atributos de performance en imágenes:
    - fetchpriority="high" para indicar al navegador que la imagen principal del hero es crítica y debe descargarse con mayor prioridad.
    - decoding="async" para permitir que la decodificación de imágenes se realice de forma asíncrona, evitando bloquear el renderizado inicial de la página.
    - loading="lazy" en imágenes secundarias para retrasar su carga hasta que sean necesarias.
- Estas mejoras contribuyen a una carga más rápida del sitio, una mejor puntuación en herramientas como PageSpeed / Lighthouse, y una experiencia más accesible para todos los usuarios.
- Revisé los íconos del sitio y agregué aria-label solo en enlaces que contienen íconos sin texto o con links, y aria-hidden="true" en íconos decorativos para mejorar la accesibilidad.