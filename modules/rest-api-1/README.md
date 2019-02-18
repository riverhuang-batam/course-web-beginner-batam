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

get 1 data or many by specific table / collection

url example to get 1 data
GET `http://shopee.com/api/v2/product/{id-product}`

url example to get many datas
GET `http://shopee.com/api/v2/product/`

### PUT

replace 1 record with new all fields from front end

url example
PUT `http://shopee.com/api/v2/product/{id-product}`

### PATCH

replace only specific field from front end to back end

url example
PATCH `http://shopee.com/api/v2/product/{id-product}`

### DELETE

delete 1 record by giving id-product
url example
DELETE `http://shopee.com/api/v2/product/{id-product}`