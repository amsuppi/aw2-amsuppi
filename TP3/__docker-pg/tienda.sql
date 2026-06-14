-- Conectar a la base de datos 'tienda'
\c tienda;

-- Crear la tabla 'productos'
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price NUMERIC(10, 2),
    category VARCHAR(100),
    size VARCHAR(100)[],
    stock INT,
    image VARCHAR(100)
);

-- Insertar 10 productos deportivos
INSERT INTO productos (name, price, category, size, stock, image) VALUES
    ('Remera running', 2500.99, 'remera', ARRAY['S', 'M', 'L'], 10, 'RemeraRunning'),
    ('Remera polo', 2500.99, 'remera', ARRAY['S', 'M', 'L'], 10, 'RemeraPolo'),
    ('Remera camiseta', 2500.99, 'remera', ARRAY['S', 'M', 'L'], 10, 'RemeraCamiseta'),
    ('Remera tank top', 2500.99, 'remera', ARRAY['S', 'M', 'L'], 10, 'RemeraTankTop'),
    ('Remera camiseta', 2500.99, 'remera', ARRAY['S', 'M', 'L'], 10, 'RemeraCamiseta'),
    ('Remera manga larga', 2500.99, 'remera', ARRAY['S', 'M', 'L'], 10, 'RemeraMangaLarga'),
    ('Remera manga corta', 2500.99, 'remera', ARRAY['S', 'M', 'L'], 10, 'RemeraMangaCorta'),
    ('Pantalon running', 2500.99, 'pantalon', ARRAY['S', 'M', 'L'], 10, 'PantalonRunning'),
    ('Pantalon polo', 2500.99, 'pantalon', ARRAY['S', 'M', 'L'], 10, 'PantalonPolo'),
    ('Pantalon camiseta', 2500.99, 'pantalon', ARRAY['S', 'M', 'L'], 10, 'PantalonCamiseta'),
    ('Pantalon tank top', 2500.99, 'pantalon', ARRAY['S', 'M', 'L'], 10, 'PantalonTankTop'),
    ('Pantalon camiseta', 2500.99, 'pantalon', ARRAY['S', 'M', 'L'], 10, 'PantalonCamiseta'),
    ('Pantalon manga larga', 2500.99, 'pantalon', ARRAY['S', 'M', 'L'], 10, 'PantalonMangaLarga'),
    ('Pantalon manga corta', 2500.99, 'pantalon', ARRAY['S', 'M', 'L'], 10, 'PantalonMangaCorta'),
    ('Buzo running', 2500.99, 'superior', ARRAY['S', 'M', 'L'], 10, 'BuzoRunning'),
    ('Buzo polo', 2500.99, 'superior', ARRAY['S', 'M', 'L'], 10, 'BuzoPolo'),
    ('Buzo camiseta', 2500.99, 'superior', ARRAY['S', 'M', 'L'], 10, 'BuzoRunning'),
    ('Buzo tank top', 2500.99, 'superior', ARRAY['S', 'M', 'L'], 10, 'BuzoTankTop'),
    ('Buzo camiseta', 2500.99, 'superior', ARRAY['S', 'M', 'L'], 10, 'BuzoCamiseta'),
    ('Buzo camiseta', 2500.99, 'superior', ARRAY['S', 'M', 'L'], 10, 'BuzoCamiseta'),
    ('Shorts running', 2500.99, 'inferior', ARRAY['S', 'M', 'L'], 10, 'ShortsRunning'),
    ('Shorts polo', 2500.99, 'inferior', ARRAY['S', 'M', 'L'], 10, 'ShortsPolo'),
    ('Shorts camiseta', 2500.99, 'inferior', ARRAY['S', 'M', 'L'], 10, 'ShortsCamiseta'),
    ('Shorts tank top', 2500.99, 'inferior', ARRAY['S', 'M', 'L'], 10, 'ShortsTankTop'),
    ('Shorts camiseta', 2500.99, 'inferior', ARRAY['S', 'M', 'L'], 10, 'ShortsCamiseta'),
    ('Shorts camiseta', 2500.99, 'inferior', ARRAY['S', 'M', 'L'], 10, 'ShortsCamiseta');
-- CREATE TABLE Categories (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100)
-- );

-- INSERT INTO Categories (name) VALUES
--     ('remera'),
--     ('pantalon'),
--     ('superior'),
--     ('inferior');
