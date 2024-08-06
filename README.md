---
layout: default
title: ¡Léeme!
description: Tutoriales de cómo comenzar tus propios proyectos.
longDescription: 
date: 2024-08-1
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
# 📰 Léeme
<p><time datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: "%B %d, %Y" }}</time></p>

## Programas y su web hecho en Jekyll con JavaScript



Plantilla de Blog Estático con SvelteKit

Una plantilla ligera y personalizable para blogs y sitios web de portafolios, construida con SvelteKit.
Fue construida con varios objetivos en mente:

- Diseño responsivo: el sitio web se ve y se comporta bien en pantallas de todos los tamaños.
- Rápido: solo carga lo necesario para que funcione.
- Adaptativo: soporta el modo oscuro en la mayoría de los sistemas operativos por defecto (escritorio y móvil).
- Atractivo: tiene un diseño agradable que es tanto accesible como visualmente placentero.

TL;DR: Tutoriales para scripts, proyectos personalizables de programas, herramientas y sitios web.

<img src="{{ '/assets/img/cover-3.jpg' | relative_url }}" alt="Captura de pantalla" style="max-width: 300px"/>

# Scripts

<div>
  <iframe src="{{ '/scripts/programar-web.txt' | relative_url }}" style="width:100%; min-height:50px; border:none; background-color: chartreuse; color-scheme: normal"></iframe>
</div>

Love!
```bash
# ``` Cómo hacer links en Github Pages (README.md) ```
# [URL-Readme](https://kibzai.github.io/Programas/readme/)
# Símbolos: [(<"@http(s)://\\">)] `%20` para escribir espacios en direcciones.
```
# Protocols
- Create and Run script.sh
## Create and Run script.sh
- **Correr un `Bash|sh|shell`** en la raíz del proyecto:
```sh
wget -O setup.sh https://kibzai.github.io/Programas/scripts/script.txt
mv script.txt script.sh
chmod +x script.sh
sh script.sh
```

## Website
- [Kibzai: Programas - Github Pages Website](https://kibzai.github.io/Programas/): Public Site.
- [Programas: Repository - Github Source Code](https://github.com/Kibzai/Programas/): Public Repository.

Command Prompt
``` bash
start https://kibzai.github.io/Programas/
``` 
PowerShell
``` powershell
Start-Process "https://kibzai.github.io/Programas/"
```
## Help
Ping? Internet?
``` bash
ping -n 4 kibzai.github.io
```
Check?
``` bash
help dir
help cd
ping /?
```
