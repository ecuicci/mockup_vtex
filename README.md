# Mockup express

## Descripción 
Ante la necesidad de exponer un servicio pequeño que este expuesto a internet el presente proyecto tiene como finalidad esa agilidad.

## Descripción tecnica
Desarrollado con:
- Node js
- Express js

>Importante: Como indica la necesidad principal que es tener una app expuesta a internet por ahora no se puede publicar desde gitlab, es necesario pasar a **github** para su posterior despliegue a **Vercel**

## Pasos hacia github 
Una vez clonado el proyecto **boilerplate_mockup** seguir los siguientes pasos para pasar a github. 
- Tener una cuenta en github 👀
- Borrar la carpeta .git 
- Inicializar un proyecto en **github**

```bash
echo "# new" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:USUARIO/PROYECTO.git
git push -u origin main
```


# Instalacion ambiente Local
Una ves que tengamos el proyecto en github procedemos a instalarlo localmente.

- Instalamos las dependencias.

```
npm install

```
- Iniciamos el proyecto.

```
npm run dev

```

## Si nunca usaste node con express
- Rutas/endpoints: src/api/index.js
> Desde ese archivo podes crear tus endpoints y asociarlo a tus controladores
- Controladores: src/Controllers
> Crear un controlador asociado a la logica de tu mockup


## Deploy de aplicacion en Vercel
Deploy en vercel:
- Crear una cuenta en Vercel
- Importar proyecto desde gitgub
- 🎉 Felicitanes tenes tu app en vercel 🎉

https://vercel.com/docs/deployments/git/vercel-for-github



# mockup_vtex
