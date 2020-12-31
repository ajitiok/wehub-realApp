# WeHubRealApp - Server

List of available endpoints:

- `POST /register`
- `POST /login`

And routes below free 
- `GET /home`

And routers below need authentication and authorization by ADMIN

- `GET /photo`
- `POST /photo`
- `PUT /photo/:id`


### POST /register

Request:

- data: 
```json
{
    "email" : "string",
    "password" : "string
}
```

Response: 

- status : 200
- body : 

```json
{
    "id" : "integer",
    "email" : "string",
    "role" : "string"
}
```

- status: 400 - Bad Request

```json
{
    "errors" : [
        "Email is required",
        "Password is required"
    ]
}
```

### POST /login

Request: 

-data: 

```json
{
    "email" : "string",
    "password" : "string"
}
```

Response: 

- status : 200
- body : 

```json
{
    "id": "integer",
    "email": "string",
    "role": "string",
    "access_token": "string"
}
```

- status: 400 - Bad Request

```json
{
    "errors": [
        "Invalid email or password"
    ]
}
```

### GET /home

Description: Get all current photo

Request:

-headers: 
    -not needed

Response:

- status : 200
- body : 

```json
[
    {
        "id": "integer",
        "title": "string",
        "description": "text",
        "photographer": "string",
        "categories": "string",
        "photoUrl": "text",
        "UserId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    },
    {
        ...
    }
]
```

- status: 500 - Internal Server Error

```json
{
    "errors": [
        "Internal server error"
    ]
}
```


### GET /photo

Description: Get all current logged in user photo

Request: 

- headers: 
    - access_token: "string"

Response: 

- status: 200
- body: 

```json
[
    {
        "id": "integer",
        "title": "string",
        "description": "text",
        "photographer": "string",
        "categories": "string",
        "photoUrl": "text",
        "UserId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    },
    {
        ...
    }
]
```

- status: 401 - Unauthorized

```json
{
    "errors": [
        "Please Login First"
    ]
}
```


### POST /photo

Description: Create New Photo

Request:

- headers:
  - access_token: "string"

- body : 
  - title : "string",
  - description : "text",
  - photographer : "string",
  - categories : "string",
  - photoUrl : "text"
  - UserId : "integer"

Response:

- status: 201 - Created
- body:
  ​

```json
{
    "id": "integer",
    "title": "string",
    "description": "text",
    "categories": "string",
    "photoUrl": "text",
    "UserId": "integer"
}
```

- status: 401 - Unauthorized
```json
{
    "errors": [
        "Please Login First"
    ]
}
```

- status: 400 - Bad Request
```json
{
    "errors": [
        "Title is required"
    ]
}
```


### PUT /photo/:id

Description: Update Photo By Id

Request:

- headers:
  - access_token: "string"

- body : 
  - title : "string",
  - description : "text",
  - photographer : "string",
  - categories : "string",
  - photoUrl : "text"

- params :
  - id : "integer"


Response:

- status: 200 - Updated
- body:
  ​

```json
[
    {
        "id": "integer",
        "title": "string",
        "description": "text",
        "categories": "string",
        "photoUrl": "text",
        "UserId": "integer"
    }
]
```

- status: 401 - Unauthorized
```json
{
    "errors": [
        "Please Login First"
    ]
}
```

- status: 400 - Bad Request
```json
{
    "errors": [
        "Title is required"
    ]
}
```
