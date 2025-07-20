# my-horoscope

A Node.js-based backend service that provides **personalized daily horoscopes** to users based on their **zodiac signs**. It includes secure user authentication, automatic zodiac detection from birthdate, and endpoints for fetching daily and historical horoscopes.

---


- ✅ User signup/login (JWT-based)
- ✅ Auto-detect zodiac sign using birthdate
- ✅ Get today’s horoscope
- ✅ Get last 7 days’ horoscope history
- ✅ Rate-limiting: max 5 API calls per minute per user

---

## 🚀 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yashsva/my-horoscope.git
cd my-horoscope
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/horoscope
JWT_SECRET=your_jwt_secret
```

### 4. Start the server
```bash
npm run dev
```

---

## 🔐 API Endpoints

> ⚠ All protected endpoints require an Authorization header:  
> `Authorization: Bearer <your_jwt_token>`

---

### ▶ Signup  
**Endpoint**: `POST /auth/signup`

Registers a new user and auto-detects their zodiac sign.

**Request Body:**
```json
{
  "name": "Yash",
  "email": "yash@yash.com",
  "password": "yash123",
  "birthdate": "1995-08-20"
}
```

**Response:**
```json
{
  "message": "User created",
  "zodiacSign": "Leo"
}
```

---

### ▶ Login  
**Endpoint**: `POST /auth/login`

Authenticates user and returns a JWT token.

**Request Body:**
```json
{
  "email": "yash@yash.com",
  "password": "yash123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

### ▶ Get Today’s Horoscope  
**Endpoint**: `GET /horoscope/today`  
**Protected**: Yes  
**Rate-Limited**: Yes (max 5 requests/min)

**Response:**
```json
{
  "date": "2025-07-20",
  "zodiacSign": "Leo",
  "content": "Leadership opportunities will arise."
}
```

---

### ▶ Get Horoscope History  
**Endpoint**: `GET /horoscope/history`  
**Protected**: Yes

Returns horoscopes served to the user in the last 7 days.

**Response:**
```json
[
  {
    "date": "2025-07-20",
    "zodiacSign": "Leo",
    "content": "Leadership opportunities will arise."
  },
  {
    "date": "2025-07-19",
    "zodiacSign": "Leo",
    "content": "A creative spark inspires you today."
  }
]
```

---

## 🧪 Curl Examples

### 🔸 Signup
```bash
curl -X POST http://localhost:3000/auth/signup   -H "Content-Type: application/json"   -d '{
    "name": "Yash",
    "email": "yash@yash.com",
    "password": "yash123",
    "birthdate": "1995-08-20"
  }'
```

### 🔸 Login
```bash
curl -X POST http://localhost:3000/auth/login   -H "Content-Type: application/json"   -d '{
    "email": "yash@yash.com",
    "password": "yash123"
  }'
```

### 🔸 Get Today’s Horoscope
```bash
curl -X GET http://localhost:3000/horoscope/today   -H "Authorization: Bearer <YOUR_JWT_TOKEN>"
```

### 🔸 Get Horoscope History
```bash
curl -X GET http://localhost:3000/horoscope/history   -H "Authorization: Bearer <YOUR_JWT_TOKEN>"
```

---


## ✅ Design Decisions

- **Zodiac Auto-detection**: Simplified zodiac calculation using month/day ranges on signup.
- **In-memory Horoscope Data**: Avoided DB overhead for static horoscope text.
- **Rate-Limiting Middleware**: Added in-memory limiter to block spammy usage per user.
- **JWT Authentication**: Chosen for stateless and scalable token-based auth.
- **MongoDB + Mongoose**: Quick and flexible NoSQL for prototyping, supports future schema changes.

---

## 🚀 Future Improvements

1. **Swagger/OpenAPI Documentation** for auto-generated API docs.
2. **Move Horoscope Content to Database** for admin-level horoscope updates.
3. **Email/Push Notifications** for daily horoscope delivery.
4. **Caching Layer** using Redis or in-memory LRU.
5. **Frontend Client** with React/Next.js or mobile app.

---

## ✍ Author
Yashsva Sisodiya

Feel free to reach out for improvements or contributions.

---
