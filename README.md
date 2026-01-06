🔗 MERN URL Shortener

A full-stack URL Shortener application built using the MERN stack.
It allows users to shorten long URLs, redirect using short links, track click counts, and manage URLs through a clean dashboard.

🚀 Features

✂️ Convert long URLs into short links

🔁 Redirect short URLs to original URLs

📊 Track number of clicks for each short URL

📋 Copy short URLs with one click

🗑️ Delete URLs from dashboard

📑 Display all URLs in a sortable table (latest first)

🎨 Clean and responsive UI

🛠️ Tech Stack
Frontend (client)

React

TypeScript

Vite

Tailwind CSS

Axios

Backend (server)

Node.js

Express.js

MongoDB

Mongoose

NanoID

📂 Project Structure
mern-url-shortener/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Container/
│   │   │   ├── DataTable/
│   │   │   ├── FormContainer/
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   ├── helpers/
│   │   ├── interface/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── .env
│   ├── vite.config.ts
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── dbConfig.ts
│   │   ├── controllers/
│   │   │   └── shortUrl.ts
│   │   ├── model/
│   │   │   └── shortUrl.ts
│   │   ├── routes/
│   │   │   └── shortUrl.ts
│   │   └── server.ts
│   ├── .env
│   ├── nodemon.json
│   └── package.json
│
└── README.md

⚙️ API Endpoints
Create Short URL
POST /api/shorturl


Request Body

{
  "fullUrl": "https://example.com"
}

Get All URLs (Sorted by Latest)
GET /api/shorturl

Delete URL
DELETE /api/shorturl/:id

Redirect Short URL
GET /:shortCode


Example:

http://localhost:5001/JqeluXomY7

🔁 How Redirection Works

A short code is generated and saved in MongoDB

User opens the short URL

Backend finds matching record

Click count is incremented

User is redirected to the original URL

🖥️ Local Development Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/mern-url-shortener.git
cd mern-url-shortener

2️⃣ Backend Setup
cd server
npm install


Create .env in server:

PORT=5001
MONGO_URI=your_mongodb_connection_string


Run backend:

npm run dev


Backend runs at:

http://localhost:5001

3️⃣ Frontend Setup
cd client
npm install
npm run dev


Frontend runs at:

http://localhost:3000

📈 Future Enhancements

Pagination & search

Custom short aliases

URL expiration

Authentication

Analytics dashboard

Production deployment

👨‍💻 Author

Abhishek Kumar
GitHub: https://github.com/abhishek-kr01
LinkedIn: https://www.linkedin.com/in/akr-abhishek-kr01/
