# renasar-sample

```json
{
  "swagger": "2.0",
  "info": {
    "version": "1.0.1",
    "title": "Renasar Sample API",
    "description": "A sample API that uses some minimal set of functionality to demonstrate swagger to the rest of the team",
    "termsOfService": "http://renasar.com/terms/",
    "contact": {
      "name": "Renasar Developer Support",
      "url": "http://developer.renasar.com"
    },
    "license": {
      "name": "Specific license we release under",
      "url": "http://specificlicence.com/lic/ver"
    }
  },
  "basePath": "/productrootmountpoint/v1",
  "schemes": [
    "http",
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json",
    "application/xml"
  ],
  "security": [
    {
      "renasarAccessCode": [
        "user"
      ]
    },
    {
      "internalApiKey": []
    }
  ],
  "paths": {
    "/node/{id}": {
      "get": {
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID of node to fetch",
            "required": true,
            "type": "array",
            "items": {
              "type": "string"
            },
            "collectionFormat": "csv"
          }
        ],
        "description": "Returns nodes based on ID",
        "summary": "Find nodes by ID",
        "operationId": "getNodesById",
        "security": [
          {
            "renasarAuth": [
              "user:read",
              "user:write"
            ]
          },
          {
            "internalApiKey": []
          }
        ],
        "produces": [
          "application/json",
          "text/html"
        ],
        "responses": {
          "200": {
            "description": "node response",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "Node"
              }
            }
          },
          "default": {
            "description": "error payload",
            "schema": {
              "$ref": "ErrorModel"
            }
          }
        }
      }
    }
  },
  "securityDefinitions": {
    "renasarAccessCode": {
      "type": "oauth2",
      "scopes": {
        "user": "Grants read/write access to profile info only. Note that this scope includes user:email and user:follow.",
        "user:email": "Grants read access to a user’s email addresses.",
        "user:follow": "Grants access to follow or unfollow other users."
      },
      "flow": "accessCode",
      "authorizationUrl": "https://autorization.renasar.com/login/oauth/authorize",
      "tokenUrl": "https://autorization.renasar.com/login/oauth/access_token"
    },
    "petstoreImplicit": {
      "type": "oauth2",
      "scopes": {
        "user": "Grants read/write access to profile info only. Note that this scope includes user:email and user:follow.",
        "user:email": "Grants read access to a user’s email addresses.",
        "user:follow": "Grants access to follow or unfollow other users.",
        "user:read": "Allows user to read nodes",
        "user:write": "Allows user to write nodes"
      },
      "flow": "implicit",
      "authorizationUrl": "http://autorization.renasar.com/oauth/dialog"
    },
    "internalApiKey": {
      "type": "apiKey",
      "in": "header",
      "name": "api_key"
    }
  },
  "definitions": {
    "Node": {
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "sku": {
          "type": "string"
        }
      }
    },
    "ErrorModel": {
      "required": [
        "code",
        "message"
      ],
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
}
```
