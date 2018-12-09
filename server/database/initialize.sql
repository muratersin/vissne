

CREATE TABLE pet_friend (
    id INTEGER UNIQUE NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    fist_name VARCHAR(80) NOT NULL,
    last_name VARCHAR(80) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE pet (
    id INTEGER UNIQUE NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    pet_name VARCHAR(80) NOT NULL,
);

CREATE TABLE kind (
    id INTEGER UNIQUE NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    kind_name VARCHAR(80) NOT NULL
);

CREATE TABLE address (
    id INTEGER UNIQUE NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    address_text VARCHAR(200) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    postal_code VARCHAR(5) NOT NULL,
    fax VARCHAR(10)
);

CREATE TABLE city (
    id INTEGER UNIQUE NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    city_name VARCHAR(80) NOT NULL,
    plate_number VARCHAR(3) NOT NULL,
    phone_code int NOT NULL
);

CREATE TABLE county (
    id INTEGER UNIQUE NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    county_name VARCHAR(80) NOT NULL
);

CREATE TABLE tax_office (
    id INTEGER UNIQUE NOT NULL,
    created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
    office_name VARCHAR(90) NOT NULL
);
