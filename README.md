# 🚀 Primer desafio entregable
Author: Ivan Talijancic

# Contenido del repositorio
En este repositorio se entrega el código correspondiente a la resolución del 1er desafón entregable del curso de BackEnd de coderhouse.

## 📋 Consignas
- Realizar una clase *"ProductManager"* que gestione un conjunto de productos

### ✅ Aspectos a incluir
- Debe crearse desde su constructor con el elemento products, él cuál será un arreglo vacío.
- Cada producto que gestione debe contar con las siguientes propiedades:
    - title (nombre del porducto)
    - description (descripción del producto)
    - price (precion)
    - thumbnail (ruta de imagen)
    - code (código de identificación)
    - stock (número de piezas disponibles)
- Debe contar con un método `addProduct()` él cuál agregará un producto al arreglo de productos incial, validando:
    - Que no se repita el campo `code`
    - Que todos los argumentos del método sean no nulos, es decir, son todos obligatorios
    - Al agregar cad aproducto, se debe autogenerar un `id` incremental
- Debe contar con un método `getProducts()` el cuál debe devolver el arreglo con todos los productos creados hasta ese momento.
- Debe contar con un método `getProductById(productId)` él cuál debe buscar en el arreglo productos, el producto que coincida con el id.
    - En caso de no encontrar ninguna coincidencia, mostrar en consola un error `'Not found'`.

