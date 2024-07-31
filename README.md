---
layout: default
title: Léeme!
description: Tutoriales de cómo comenzar tus propios proyectos.
longDescription: 
date: 2024-07-29
type: site-info
permalink: /readme/
cover: bg
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

Asegúrate de que te encuentras en el ambiente correcto: **App** o **Repositorio**.

- [**Programas** - Aplicaciones (Github Pages): https://kibzai.github.io/Programas/](https://kibzai.github.io/Programas/)

- [**Tutoriales** - Código fuente del **Proyecto**: https://github.com/Kibzai/Programas](https://github.com/Kibzai/Programas)

Code Block:

```bash
# ``` Cómo hacer links en Github Pages (README.md) ```
# [URL-Readme](https://kibzai.github.io/Programas/readme/)
# Símbolos: [(<"@http(s)://\\">)]
# `%20` para escribir espacios en direcciones.
```
## Estructura de Archivos y Configuraciones

Este es un sitio Jekyll simple configurado para x con scripts de shell.

Cuidado!

Vamos a correr algo pesado:

Aqui en texto

<div>
  <iframe src="{{ '/scripts/script.txt' | relative_url }}" style="width:100%; min-height:50px; border:none; background-color: chartreuse; color-scheme: normal"></iframe>
</div>

Vamos a comenzar

## Configuración Inicial

- **Correr un `Bash|sh|shell`** en la raíz del proyecto:
```sh
cd scripts
mv script.txt script.sh
chmod +x script.sh
sh script.sh
```

Love!