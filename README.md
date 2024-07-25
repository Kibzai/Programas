---
layout: info
title: Léeme!
description: Acerca de cómo comenzar tu propio proyecto.
longDescription: 
date: 2024-07-20
type: 
permalink: /readme/
cover: cover
class: extra-cover
tags: [configuraciones, herramientas, programas]
author:
  name: Kib
  email: kib@kibsaim.life
nested_data:
  key1: value1
  key2: value2
array_of_hashes:
  - name: Herramienta1
    description: Una herramienta útil
  - name: Herramienta2
    description: Otra herramienta útil
json_data: |
  {
    "key1": "value1",
    "key2": "value2",
    "array": [
      "element1",
      "element2"
    ]
  }
---
# Protocolos
<p><time datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: "%B %d, %Y" }}</time></p>
Instrucciones y Scripts para correr el repositorio de Programas &amp; Herramientas útiles para proyectos de computación.

## Inicio

Asegúrate de que te encuentras en el ambiente correcto: **Desarrollo** o **Producción**.

- [Ambiente de **Desarrollo**](/)
- [Ambiente de **Producción**](https://kibzai.github.io/Programas/)

``` sh
# Internet: [(< "@http(s)://\\ `%20`  para escribir espacios en direcciones." >)]
```
## Estructura de Archivos y Configuraciones

Este es un sitio Jekyll simple configurado para manejar diferentes entornos (desarrollo y producción) utilizando npm y scripts de shell.

## Configuración Inicial

1. **Crear un `Gemfile`** en la raíz del proyecto:

    ```ruby
    source "https://rubygems.org"
    gem "jekyll", "~> 4.2.0"
    gem "webrick", "~> 1.7"
    gem "jekyll-sass-converter", "~> 2.0"
    ```

2. **Instalar Bundler**:

    ```bash
    gem install bundler
    ```

3. **Instalar las gemas**:

    ```bash
    bundle install
    ```

4. **k**:

    - **x** (`scripts/install.sh`)

5. **Crear Scripts de Shell para Entornos Específicos**:

    - **Script de Desarrollo** (`scripts/dev.sh`)
    - **Script de Producción** (`scripts/build.sh`)

6. **Hacer los Scripts Ejecutables**:
dentro de `scripts/`
    ```bash
    chmod +x scripts/dev.sh
    chmod +x scripts/build.sh
    ```

## Comandos Adicionales

- **Construir el sitio sin servirlo**:
```bash
bundle exec jekyll build
```

- **Limpiar el sitio** (elimina el directorio `_site`):
```bash
bundle exec jekyll clean
```

Love!
<!-- 
## Uso de Scripts con npm

- **Para desarrollo**:
```bash
npm run dev
```

- **Para construir el sitio para producción**:
```bash
npm run build
```

Para borrar `node_modules` y `package-lock.json` y reinstalar dependencias:
```bash
rm -rf node_modules/ && rm -rf package-lock.json
npm install --force
```

## Diversión Extra
```bash
sh diversion.sh
```
-->
