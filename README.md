# Development notes

## Backend

## making changes to the schema

If you made changes to the schema.prisma file make sure to delete the migrations folder and database.sqlite file then run "npx prisma migrate dev --name init"

This keeps the migration history not jumbled but will definitely need a new approach when we start having active users.

If you then need to reseed, run "npm run seed"

## switching between production db and local db

If you are working in local and want to start intercating with the production (PostgreSQL) database i created a script that will do all of the required actions. Just run npm run postgresql

If you are intercating with production and want to switch to local db run npm run sqlite

# API Documentation

## USER AUTHENTICATION/AUTHORIZATION

## All endpoints that require authentication----

All endpoints that require a current user to be logged in.

- Request: endpoints that require authentication
- Error Response: Require authentication

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Authentication required"
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

- Request: endpoints that require proper authorization
- Error Response: Require proper authorization

  - Status Code: 403
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Forbidden"
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

- Require Authentication: false
- Request

  - Method: GET
  - Route path: /api/session
  - Body: none

- Successful Response when there is a logged in user

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "id": "somerandomuuid",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "createdAt": "2021-11-19 20:39:36"
    }
    ```

- Successful Response when there is no logged in user

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user": null
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

- Require Authentication: false
- Request

  - Method: POST
  - Route path: /api/session/login
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user": {
        "id": "somerandomuuid",
        "email": "john.smith@gmail.com",
        "username": "JohnSmith",
        "createdAt": "2021-11-19 20:39:36"
      }
    }
    ```

- Error Response: Invalid credentials

  - Status Code: 401
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "error": "invalid email or password"
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```

### Log out a User

Logs out a user and clears the token cookie

- Require Authentication: false
- Request

  - Method: DELETE
  - Route path: /api/session

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "success"
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

- Require Authentication: false
- Request

  - Method: POST
  - Route path: /api/users
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "password": "secret password"
    }
    ```

- Successful Response

  - Status Code: 201
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "user": {
        "id": "somerandomuuid",
        "email": "john.smith@gmail.com",
        "username": "JohnSmith",
        "createdAt": "2021-11-19 20:39:36"
      }
    }
    ```

- Error response: User already exists with the specified email or username

  - Status Code: 500
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "error": "email already registered"
    }
    ```

- Error response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "email": "Invalid email",
        "username": "Username must be between 3 and 20 character",
        "password": "Password is required"
      }
    }
    ```

## SCREENINGS

### Get current user's screenings

- Require Authentication: true
- Request

  - Method: GET
  - Route path: /api//screenings/current
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Screenings": {
        "finished": [
          {
            "id": "8b1e9af8-1c61-40ab-9a75-b239ef587761",
            "userId": "6d518692-1c19-4deb-8cc0-81506c5d325d",
            "dueDate": "2026-11-20T01:39:36.000Z",
            "startDate": "2026-11-20T01:39:36.000Z",
            "companyName": "Mayqo Inc.",
            "name": "screening for fullstack III position",
            "position": "Full Stack Engineer III",
            "reviewed": false,
            "candidates": [
              {
                "id": "9c3d17b9-610b-4d04-845f-16a6e73d6600",
                "name": null,
                "email": "johndoe@gmail.com",
                "githubUrl": null,
                "isComplete": false,
                "videoName": null,
                "videoUrl": null,
                "accepted": null,
                "screeningId": "8b1e9af8-1c61-40ab-9a75-b239ef587761"
              }
            ]
          }
        ],
        "ongoing": [
          {
            "id": "8b1e9af8-1c61-40ab-9a75-b239ef587761",
            "userId": "6d518692-1c19-4deb-8cc0-81506c5d325d",
            "dueDate": "2026-11-20T01:39:36.000Z",
            "startDate": "2026-11-20T01:39:36.000Z",
            "companyName": "Mayqo Inc.",
            "name": "screening for fullstack III position",
            "position": "Full Stack Engineer III",
            "reviewed": false,
            "candidates": [
              {
                "id": "9c3d17b9-610b-4d04-845f-16a6e73d6600",
                "name": null,
                "email": "johndoe@gmail.com",
                "githubUrl": null,
                "isComplete": false,
                "videoName": null,
                "videoUrl": null,
                "accepted": null,
                "screeningId": "8b1e9af8-1c61-40ab-9a75-b239ef587761"
              }
            ]
          }
        ],
        "readyForReview": [
          {
            "id": "8b1e9af8-1c61-40ab-9a75-b239ef587761",
            "userId": "6d518692-1c19-4deb-8cc0-81506c5d325d",
            "dueDate": "2026-11-20T01:39:36.000Z",
            "startDate": "2026-11-20T01:39:36.000Z",
            "companyName": "Mayqo Inc.",
            "name": "screening for fullstack III position",
            "position": "Full Stack Engineer III",
            "reviewed": false,
            "candidates": [
              {
                "id": "9c3d17b9-610b-4d04-845f-16a6e73d6600",
                "name": null,
                "email": "johndoe@gmail.com",
                "githubUrl": null,
                "isComplete": false,
                "videoName": null,
                "videoUrl": null,
                "accepted": null,
                "screeningId": "8b1e9af8-1c61-40ab-9a75-b239ef587761"
              }
            ]
          }
        ]
      }
    }
    ```

### View screening by ID

Returns the screening associated with that id.

- Require Authentication: true
- Request

  - Method: GET
  - Route path: /api/screenings/screeninguuid
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Screening": [
        {
          "id": "somerandomuuid",
          "userId": "foreingkeyuuid",
          "position": "Full Stack Engineer II",
          "companyName": "Mayqo Inc.",
          "name": "screening for fullstack position",
          "dueDate": "2021-11-19 20:39:36",
          "startDate": "2021-11-19 20:39:36",
          "reviewed": false,
          "starterGithubRepo": "https://github.com/QuentinPace/Mayqo",
          "candidates": [
            {
              "id": "uuidstring",
              "email": "johnsmith@gmail.com",
              "isComplete": false,
              "accepted": null
            },
            {
              "id": "uuidstring",
              "email": "johnsmith2@gmail.com",
              "isComplete": true,
              "accepted": null
            },
            {
              "id": "uuidstring",
              "email": "johnsmith3@gmail.com",
              "isComplete": false,
              "accepted": null
            },
            {
              "id": "uuidstring",
              "email": "johnsmith4@gmail.com",
              "isComplete": true,
              "accepted": null
            }
          ]
        }
      ]
    }
    ```

### Get candidate by screening and candidate ID

Returns the details of a spot specified by its id.

- Require Authentication: false
- Request

  - Method: GET
  - Route path: /api/screenings/screeninguuid/candidates/candidateuuid
  - Body: none

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "candidate": {
        "id": "uuidstring",
        "videoUrl": "https://videolinbdc34igf7i34bv3.com",
        "videoName": "bvekrbvoevbei459g4name",
        "email": "johnsmith@gmail.com",
        "name": "John Smith",
        "githubLink": "https://github.com/QuentinPace/Mayqo",
        "name": "John Smith"
      }
    }
    ```

- Error response: Couldn't find a Candidate with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Candidate couldn't be found"
    }
    ```

### Edit a candidate

Edits a candidate and returns a message.

- Require Authentication: true
- Request

  - Method: PUT
  - Route path: /api/screenings/screeninguuid/candidates/candidateuuid
  - Headers:
    - Content-Type: multipart/formData
  - Body:

    ```json
    {
      "name": "John Smith",
      "githubLink": "https://github.com/JohnSmith/project",
      "video": {video upload }
    }
    ```

- Successful Response

  - Status Code: 201
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Candidate submitted succesfully."
    }
    ```

- Error Response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "name": "Name is required",
        "githubLink": "Github link is required",
        "video": "Video is required"
      }
    }
    ```

### Create a screening

Create and return a screening.

- Require Authentication: true
- Request

  - Method: POST
  - Route path: /api/screenings
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "companyName": "Mayqo Inc.",
      "name": "screening for fullstack position",
      "dueDate": "2021-11-19 20:39:36",
      "startDate": "2021-11-19 20:39:36",
      "position": "Full Stack Engineer II",
      "starterGithubRepo": "https://github.com/QuentinPace/Mayqo",
      "candidates": [
        "johndoe@gmail.com",
        "mikesmith@gmail.com",
        "quentinpace@gmail.com",
        "larrywheels@gmail.com",
        "chrisbumstead@gmail.com",
        "kevinlevrone@gmail.com"
      ]
    }
    ```

- Successful Response

  - Status Code: 201
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Screening": [
        {
          "id": "somerandomuuid",
          "userId": "foreingkeyuuid",
          "position": "Full Stack Engineer II",
          "companyName": "Mayqo Inc.",
          "name": "screening for fullstack position",
          "reviewed": false,
          "dueDate": "2021-11-19 20:39:36",
          "startDate": "2021-11-19 20:39:36",
          "starterGithubRepo": "https://github.com/QuentinPace/Mayqo",
          "candidates": [
            {
              "id": "uuidstring",
              "email": "johnsmith@gmail.com",
              "isComplete": false,
              "accepted": null
            },
            {
              "id": "uuidstring",
              "email": "johnsmith2@gmail.com",
              "isComplete": false,
              "accepted": null
            },
            {
              "id": "uuidstring",
              "email": "johnsmith3@gmail.com",
              "isComplete": false,
              "accepted": null
            },
            {
              "id": "uuidstring",
              "email": "johnsmith4@gmail.com",
              "isComplete": false,
              "accepted": null
            }
          ]
        }
      ]
    }
    ```

- Error response: validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "name": "Name is required",
        "position": "Positiion is required.",
        "companyName": "Comapny name is required.",
        "dueDate": "Due date is required.",
        "starterGithubRepo": "Starter Github repository is requiored."
      }
    }
    ```

### Edit/Finish reviewing candidates by screening id

Updates and returns an existing screening, updating the candidates as well.

- Require Authentication: true
- Require proper authorization: Screening must belong to the current user
- Request

  - Method: PUT
  - Route path: /api/screening/screeninguuid/candidates
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "candidates": [
        {
          "id": "candidateuuid1",
          "accepted": false
        },
        {
          "id": "candidateuuid2",
          "accepted": true
        },
        {
          "id": "candidateuuid3",
          "accepted": false
        },
        {
          "id": "candidateuuid4",
          "accepted": true
        },
        {
          "id": "candidateuuid5",
          "accepted": false
        },
        {
          "id": "candidateuuid6",
          "accepted": false
        }
      ]
    }
    ```

- Successful Response

  - Status Code: 200
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "Screening": [
        {
          "id": "somerandomuuid",
          "userId": "foreingkeyuuid",
          "position": "Full Stack Engineer II",
          "companyName": "Mayqo Inc.",
          "name": "screening for fullstack position",
          "dueDate": "2021-11-19 20:39:36",
          "startDate": "2021-11-19 20:39:36",
          "reviewed": true,
          "starterGithubRepo": "https://github.com/QuentinPace/Mayqo",
          "candidates": [
            {
              "id": "uuidstring",
              "email": "johnsmith@gmail.com",
              "isComplete": false,
              "accepted": false
            },
            {
              "id": "uuidstring",
              "email": "johnsmith2@gmail.com",
              "isComplete": true,
              "accepted": true
            },
            {
              "id": "uuidstring",
              "email": "johnsmith3@gmail.com",
              "isComplete": false,
              "accepted": false
            },
            {
              "id": "uuidstring",
              "email": "johnsmith4@gmail.com",
              "isComplete": true,
              "accepted": false
            }
          ]
        }
      ]
    }
    ```

- Error Response: Body validation errors

  - Status Code: 400
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Bad Request",
      "errors": {
        "dueDate": "Screening needs to be past the due date to screen candidates",
        "candidates": "Not all candidates have been accepted or rejected."
      }
    }
    ```

- Error response: Couldn't find a Screening with the specified id

  - Status Code: 404
  - Headers:
    - Content-Type: application/json
  - Body:

    ```json
    {
      "message": "Screening couldn't be found"
    }
    ```
#   W a r s a w - C h e m i c a l - M a i n - W e b s i t e  
 