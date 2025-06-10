ABP-Proyecto-integrador: Explorador de productos

Aplicación web hecha en React que permite explorar productos de forma interactiva, simulando una tienda online o panel de análisis. Se puede buscar, filtrar, ordenar, comparar y exportar productos, además de visualizar estadísticas y gráficos dinámicos.

Estructura de la App

La aplicación se organiza de la siguiente forma:
Encabezado: En la parte superior, se encuentra el título "Explorador de Productos".
Estadísticas generales: Justo debajo del título, se muestran métricas como el total de productos, promedio de precios, productos con nombres largos, ratings altos, etc. También incluye estadísticas por categoría.
Gráficos dinámicos:
Gráfico de barras: Representa la cantidad de productos por categoría.
Gráfico de líneas: Simula la evolución de precios de un producto.
Gráfico de torta: Muestra la proporción de stock bajo, medio y alto.
Filtros:
Arriba de los productos, hay dos selectores para filtrar por categoría y ordenar por precio o rating.
También hay una barra de búsqueda para encontrar productos por nombre.
Listado de productos:
Cada producto se muestra con su nombre, precio y un botón “Comparar”.
Se muestran 8 productos por página. El sistema de paginación está al final del listado, con botones para avanzar, retroceder y ver la página actual.
La app tiene 13 páginas en total, con la última que muestra 4 productos.
Comparación de productos:
Al hacer clic en “Comparar” se agregan productos a un panel inferior donde se comparan sus atributos (precio, stock, rating, etc.).
Exportar CSV:
Abajo a la izquierda se encuentra el botón para descargar el listado actual de productos filtrados en formato .csv.


¿Cómo usarlo?
Clonar el repositorio.

Ejecutá:
npm install
npm run dev

Herramientas
-React + Vite
-Tailwind CSS
-Axios
-Recharts

Funcionalidades: 
Buscar y filtrar productos por nombre o categoría.
Ordenar por precio o rating.
Ver estadísticas generales.
Visualizar gráficos (barras, líneas y torta).
Comparar productos seleccionados.
Exportar listado filtrado a CSV.
Navegar por páginas de productos.

Bibliografía y recursos:
Contenidos del curso.
Documentación oficial:
React https://react.dev/
Tailwind CSS https://tailwindcss.com/
Recharts https://recharts.org/en-US/api
Axios https://axios-http.com/
DummyJSON API https://dummyjson.com/
YouTube: tutoriales de “React desde cero” y ejemplos de gráficos y filtros.
