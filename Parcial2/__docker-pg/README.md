# PostgreSQL — Parcial 2

## Docker

```bash
docker build -t imagen_admin .
docker run --name contenedor_admin -e POSTGRES_USER=root -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=admin -p 5432:5432 -d imagen_admin
```

## Archivos

| Archivo | Uso |
|---------|-----|
| `admin.sql` | Script que usa el Dockerfile al crear el contenedor |
| `sql/admin.sql` | Mismo script para ejecutar manualmente en psql |
| `crear-hash/` | Genera un hash bcrypt para actualizar el INSERT |

## Generar hash de contraseña

```bash
cd crear-hash
pnpm install
pnpm run generar-hash
```

Copiar el hash en `admin.sql` y `sql/admin.sql`.
