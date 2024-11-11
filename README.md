# 📦 Guía para Configurar un Proyecto con React y Vite

## Clonando el Proyecto

    1.	Clona el repositorio del proyecto.
    2.	En la raíz del proyecto, ejecuta npm i para instalar las dependencias.
    3.	Crea dos archivos en la raíz llamados .env y .env.dev.
    4.	Copia los valores del archivo .env.reference.dev en estos archivos.
    5.	Inicia el proyecto con npm run dev.

# Crear un Proyecto Nuevo con React y Vite

## Pre-requisitos

    •	Instala Node.js usando un manejador de versiones como NVM o ASDF (recomendado usar Bash & Homebrew o ZSH & Homebrew).

## Pasos para Crear el Proyecto

    1.	Abre una terminal.
    •	Cómo abrir una terminal en macOS: Presiona Command (⌘) + Espacio para abrir Spotlight, luego escribe “Terminal” y presiona Enter.
    2.	Crea una carpeta para alojar el proyecto: mkdir proyectos_react.
    3.	Entra en la carpeta creada: cd proyectos_react.
    4.	Ejecuta el siguiente comando para crear un proyecto Vite:

<code> npm create vite@latest {{project-name}} </code>

    • Reemplaza {{project-name}} con el nombre de tu proyecto, por ejemplo, vite-react-doc.

    5.	Selecciona React como framework y TypeScript swc como la variante.
    6.	Sigue las instrucciones de la consola para completar la creación del proyecto.

## Inicialización del Proyecto Nuevo

    1.	Dirígete al proyecto creado: cd vite-react-doc.
    2.	Instala las dependencias:

<code> npm install </code>

    3.	Inicia el proyecto:

<code> npm run dev </code>

## Configuración Básica del Proyecto

### Dependencias Necesarias

#### Instalación de dependencias generales

```json
npm i vite-tsconfig-paths
npm i react-router-dom
npm i formik --save
npm i yup
npm i react-imask
npm i @tanstack/react-query
npm i react-i18next i18next --save
npm i -g nextui-cli
npm i iconoir
```

#### Instalación de dependencias de desarrollo

```json
npm i -D vitest
npm i -D happy-dom
npm i -D @vitest/coverage-v8
npm i -D @testing-library/react @testing-library/dom
npm i -D @testing-library/user-event
npm i -D @types/node
npm i -D @vitest/ui
npm i -D @vitest/coverage-istanbul
npm i -D autoprefixer
npm i -D tailwindcss
npm install --save-dev --save-exact prettier
npm i -D rollup-plugin-visualizer
npm install -D sass-embedded
```

## Configuración de package.json

```json
"scripts": {
    "co:login:dev": "aws codeartifact login --tool npm --repository frontend --domain capmotion --domain-owner {{domain-owner}} --profile dev --region us-east-1",
    "dev": "vite --mode development",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite --mode prod",
    "test": "vitest",
    "test-ui": "vitest --ui",
    "coverage": "vitest run --coverage",
    "format": "prettier --write ."
},
```

## Configuración de Vite

### vite.config.ts

Configura Vite para usar React con el compilador swc y rutas de TypeScript:

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    base: '/'
});
```

### vitest.config.ts

```ts
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            reporters: ['verbose', 'html'],
            name: 'happy-dom',
            environment: 'happy-dom',
            setupFiles: './test/setupTests.js',
            coverage: {
                provider: 'istanbul',
                enabled: true,
                reportsDirectory: '../coverage',
                reporter: ['text', 'html', 'json'],
                all: true,
                include: ['src/**/*.{js,jsx,ts,tsx}'],
                exclude: [
                    'node_modules/**',
                    'test/**',
                    'coverage/**',
                    'src/routes'
                ]
            }
        }
    })
);
```

## Configuración de TypeScript

### tsconfig.app.json

Define rutas y opciones de compilación en TypeScript:

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "src/*": ["./src/*"],
            "@views/*": ["./src/views/*"],
            "@components/*": ["./src/components/*"],
            "@routes/*": ["./src/routes/*"]
        },
        "target": "ES2020",
        "module": "ESNext",
        "lib": ["ES2020", "DOM", "DOM.Iterable", "WebWorker"],
        "moduleResolution": "bundler",
        "skipLibCheck": true,
        "resolveJsonModule": true,
        "noEmit": true,
        "jsx": "react-jsx",
        "types": ["vitest"],
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true
    },
    "include": ["src", "src/vite-env.d.ts", "test"]
}
```

## Archivos de Entorno (ENV)

Nombra los archivos de entorno como .env, .env.development etc., y asegúrate de que las variables comiencen con VITE_APP:

```bash
VITE_APP_NAME=TEST_APP_DEV
```

## vite-env.d.ts

Este archivo ayuda a TypeScript a reconocer las variables de entorno de Vite:

```ts
/// <reference types="vite/client" />
/// <reference types="vitest" />
interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
```

# Documentación de Componentes de Ejemplo

-   Este proyecto contiene varios componentes funcionales que se encargan de gestionar datos y presentarlos en la interfaz de usuario. A continuación se describe el propósito y uso de cada uno de ellos.

### 1. ExampleView

ExampleView es un componente de vista principal que renderiza la aplicación y utiliza otros componentes para construir la interfaz. Este componente hace uso del hook useExample para obtener datos de usuario y manejar el estado de carga. Cuando los datos están en proceso de carga, muestra un mensaje de “Loading…”.

```tsx
import { ExampleComponent } from '@components/ExampleComponent';
import { useExample } from '@hooks/useExample';
import { LanguageSelector } from '@components/LanguageSelector';
import { App } from 'nucleus-commons-ui';

export const ExampleView = () => {
    const { data, isLoading } = useExample();

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <>
            <App />
            <LanguageSelector />
            <ExampleComponent data={data?.data} />
        </>
    );
};
```

Props

-   data: Los datos obtenidos por el hook useExample, que serán pasados a ExampleComponent.
-   isLoading: Estado de carga del hook useExample, utilizado para mostrar el mensaje de “Loading…” hasta que los datos estén disponibles.

### 2. useExample

useExample es un hook personalizado que utiliza useQuery de @tanstack/react-query para realizar una solicitud de datos a un servicio externo. Este hook se utiliza para obtener información de usuario y manejar el estado de la solicitud.

```tsx
import { useQuery } from '@tanstack/react-query';
import { HttpResponse } from 'nucleus-commons-ui';
import { IResult } from 'src/models/exampleInterface';
import { fetchUser } from 'src/services/ExampleService';

export const useExample = () => {
    const queryUsers = useQuery<HttpResponse<IResult[]>>({
        queryKey: ['users'],
        queryFn: () => fetchUser()
    });
    return queryUsers;
};
```

Props

-   queryKey: Llave única de la consulta (['users']), usada para almacenar en caché la consulta en react-query.
-   queryFn: Función que realiza la solicitud de datos, utilizando fetchUser() del servicio ExampleService.

### 3. fetchUser (Servicio)

fetchUser es una función que realiza una solicitud HTTP por medio de la libreria nucleus-commons-ui la cual tiene la implementacion de los diferentes metodos HTTP para obtener datos de usuario. Es llamada por el hook useExample para obtener la información necesaria.

```tsx
import { HttpService, HttpResponse } from 'nucleus-commons-ui';
import { IResult } from 'src/models/exampleInterface';

export const fetchUser = async (): Promise<HttpResponse<IResult[]>> => {
    const httpService = new HttpService();
    const url =
        'https://test-translate-dfzo.s3.us-east-1.amazonaws.com/api-users/users.json';
    const data = await httpService.get<IResult[]>(url);
    return data;
};
```

# Cambia el Nombre del proyecto

### 1. Cambiar el nombre de la carpeta de tu proyecto

-   Renombra la carpeta de tu proyecto en tu sistema de archivos, si quieres cambiar el nombre de la carpeta de react-launchpad a new-project, simplemente renómbrala desde el explorador de archivos.

### 2. Cambiar el nombre del proyecto en el archivo package.json

-   Abre el archivo package.json y cambia el nombre de la propiedad "name" de "react-launchpad" a "new-project".

```json
{
    "name": "new-project",
    "version": "1.0.0",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    }
    // otras configuraciones
}
```
