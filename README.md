# School APIs

This project contains two APIs for managing and listing schools. Below is the detailed documentation for each endpoint. This project was developed as part of an internship assignment.

## Table of Contents

- [Add School API](#add-school-api)
- [List Schools API](#list-schools-api)
- [Example Response](#example-response)
- [Usage Instructions](#usage-instructions)

---

## Add School API

**Endpoint:** `/addSchool`

**Method:** `POST`

**Description:** Adds a new school to the database after validating the provided input.

**Request Payload:**
```json
{
    "name": "Sample School",
    "address": "123 Main St, Anytown",
    "latitude": 12.345678,
    "longitude": 98.765432
}
```

**Validation:**
- `name`: Must be a non-empty string.
- `address`: Must be a non-empty string.
- `latitude`: Must be a valid decimal number.
- `longitude`: Must be a valid decimal number.

**Functionality:**
- Validates input data.
- Inserts the school record into the database.

---

## List Schools API

**Endpoint:** `/listSchools`

**Method:** `GET`

**Description:** Fetches all schools from the database and returns a list sorted by proximity to the user's location.

**Request Parameters:**
- `latitude` (required): User's current latitude.
- `longitude` (required): User's current longitude.

**Example Query:**
```
/listSchools?latitude=22.655257&longitude=75.823732
```

**Functionality:**
- Retrieves all school records from the database.
- Sorts the schools based on their geographical distance from the user's location.
- Returns the sorted list.

---

## Example Response

For `latitude = 22.655257` and `longitude = 75.823732`, the response is as follows:

```json
{
    "nearbySchools": [
        {
            "id": 2,
            "name": "IES IPS College",
            "address": "Rajendra Nagar , indore",
            "latitude": 22.6553,
            "longitude": 75.8237,
            "distance": 0.005800359502738293
        },
        {
            "id": 1,
            "name": "JNV Betul",
            "address": "Prabhat Pattan , Betul",
            "latitude": 21.66,
            "longitude": 78.2728,
            "distance": 275.41749825918697
        }
    ]
}
```

---

## Usage Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/RishiGaneshe/Soul.git
    cd Soul
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

4. Use tools like Postman to test the APIs:
    - **Add School:** Use the `POST` method with the payload as described.
    - **List Schools:** Use the `GET` method with query parameters `latitude` and `longitude`.

---

Feel free to contribute or report issues!
