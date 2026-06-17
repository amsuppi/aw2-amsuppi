-- Conectar a la base de datos
\c admin;

-- Crear la tabla
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    username VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos
-- Usuario: admin | Contraseña: admin123 (hash generado con bcrypt)
INSERT INTO usuarios (username, password_hash) VALUES
('admin', '$2b$10$ZIUfaH2f6b5l.p1MV/8T9eeV2mM5C7KSpj3uMidsJ2GDtlHm6iBz.');
