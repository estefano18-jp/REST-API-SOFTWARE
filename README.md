# Procedimientos para implementacion

1. Clonar repositorio
```
git clone https://github.com/estefano18-jp/REST-API-SOFTWARE.git
```
2. Recontruir node_modules
```
npm install
```

3. Construir el archivo .env
```
DB_HOST=localhost
DB_PORT=3306
DB_PASSWORD=
DB_USER=root
DB_DATABASE=appstore
```

4. Restaure la BD (db > database.sql)
```sql
CREATE DATABASE appstore;
USE appstore;
CREATE TABLE softwares
(
  id              INT AUTO_INCREMENT PRIMARY KEY,
  nombre          VARCHAR(40)         NOT NULL,
  espaciomb       SMALLINT            NOT NULL,
  versionsoft     VARCHAR(20)         NOT NULL,
  precio          DECIMAL(7,2)        NOT NULL 
)ENGINE = INNODB;
```

5. Ejecute el proyecto:
```
npm run dev
```