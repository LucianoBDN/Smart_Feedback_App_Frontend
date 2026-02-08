#  Frontend – Análisis de Sentimiento

Este proyecto es un **frontend simple desarrollado en Angular** que funciona como **herramienta de prueba** para la API de análisis de sentimiento.

El objetivo de este frontend es facilitar la interacción con la API y visualizar los resultados de forma clara, sin necesidad de utilizar Postman o Swagger.

---

##  Propósito

Este frontend permite probar:

- Análisis de sentimiento de texto individual
- Análisis de sentimiento a partir de archivos CSV
- Visualización de resultados paginados

 **No es un producto final**, sino una interfaz de apoyo para validar el funcionamiento del backend.

---

##  Tecnologías utilizadas

- **Angular**
- **TypeScript**
- **HTML / CSS**
- Consumo de API REST mediante `HttpClient`

---

##  Cómo levantar el proyecto

### Instalar Angular CLI (si no lo tenés)

```bash
npm install -g @angular/cli
```

### Instalar dependencias

Desde la raíz del proyecto:

```bash
npm install
```
### Levantar el frontend en local

```bash
ng serve
```

### Por defecto, la aplicación se levanta en: 

```bash
http://localhost:4200
```
### Conexión con el backend

Este frontend consume la API que corre en local, por ejemplo:

```bash
http://127.0.0.1:8000
```
