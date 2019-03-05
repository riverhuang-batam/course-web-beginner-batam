# REST API 1

---

## Introduction

Standart to be used of many system to exchange data from back-end to front-end, to be simplified.

---

## Methods

### POST

save 1 record to database via back end where id attribute will be created by server

url example
POST `http://shopee.com/api/v2/product`

### GET

get 1 data by id
GET `http://shopee.com/api/v2/product/{id}`

get many datas
GET `http://shopee.com/api/v2/product/`

### PUT

replace 1 record with new all fields
PUT `http://shopee.com/api/v2/product/{id}`

### PATCH

replace only specific field

url example
PATCH `http://shopee.com/api/v2/product/{id}`

### DELETE

delete 1 record by giving product id
url example
DELETE `http://shopee.com/api/v2/product/{id}`

---

## Resume

### GET, PUT, PATCH, DELETE
http://shopee.com/api/v2/product/{id}

### POST, GET
http://shopee.com/api/v2/product