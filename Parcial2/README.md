# Parcial 2 - Biblioteca

## 1. Base de datos

```bash
cd __docker-pg
docker build -t imagen_admin .
docker run --name contenedor_admin -e POSTGRES_USER=root -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=admin -p 5432:5432 -d imagen_admin
```

Los valores coinciden con `.env` (`root` / `pass` / `admin` / puerto `5432`).

## 2. Generar hash (opcional)

```bash
cd __docker-pg/crear-hash
pnpm install
pnpm run generar-hash
```

## 3. Servidor

```bash
npm install
npm run dev
```

http://localhost:3000/login — usuario `admin`, contraseña `admin123`.
