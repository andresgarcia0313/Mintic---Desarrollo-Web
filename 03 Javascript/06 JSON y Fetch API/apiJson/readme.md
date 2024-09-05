
---

### Iniciar un Proyecto Node.js con `npm`

**1. Inicialización del Proyecto**

Para empezar un proyecto en Node.js, primero necesitas inicializarlo con `npm`, el gestor de paquetes de Node.js. Abre tu terminal y navega hasta el directorio donde deseas crear tu proyecto. Luego, ejecuta el siguiente comando:

```bash
npm init -y
```

Este comando crea un archivo llamado `package.json` en tu directorio. El `-y` es una opción que acepta todos los valores predeterminados, creando un archivo `package.json` con configuraciones básicas. Si prefieres personalizar estas configuraciones, puedes usar `npm init` sin el `-y`, lo cual te pedirá que ingreses información como el nombre del proyecto, la versión, la descripción, el punto de entrada, etc.

**2. Instalación de Paquetes**

Una vez que tienes el archivo `package.json`, puedes instalar paquetes y bibliotecas necesarias para tu proyecto. Los paquetes se pueden instalar de manera global o local.

- **Instalación Local:** Los paquetes se guardan en el directorio `node_modules` dentro de tu proyecto y se registran en el archivo `package.json`. Por ejemplo, para instalar `express`, un popular framework para servidores en Node.js, puedes usar:

  ```bash
  npm install express
  ```

- **Instalación Global:** Los paquetes se instalan globalmente en tu sistema, permitiendo que se utilicen en cualquier proyecto. Para instalar un paquete globalmente, añade la opción `-g`. Por ejemplo, para instalar el CLI de `nodemon` globalmente:

  ```bash
  npm install -g nodemon
  ```

**3. Configuración de Scripts**

En el archivo `package.json`, puedes definir scripts personalizados que faciliten la ejecución de comandos frecuentes. Por ejemplo, puedes agregar un script para iniciar tu aplicación usando `nodemon` (una herramienta que reinicia automáticamente tu aplicación cuando detecta cambios en los archivos). Modifica la sección `scripts` de `package.json` para incluir:

```json
"scripts": {
  "start": "nodemon index.js"
}
```

Esto permite que ejecutes `npm start` en la terminal para iniciar tu aplicación con `nodemon`.

**4. Inicio del Proyecto**

Para iniciar tu proyecto, asegúrate de que todos los paquetes necesarios están instalados. Puedes hacer esto ejecutando:

```bash
npm install
```

Luego, puedes usar el script definido en `package.json` para iniciar tu aplicación. Si seguiste el ejemplo anterior, simplemente ejecuta:

```bash
npm start
```

Este comando ejecutará `nodemon index.js`, iniciando tu servidor y observando cambios en el archivo `index.js` para reiniciar automáticamente.

---
