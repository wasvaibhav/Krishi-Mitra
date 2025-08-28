# 🌱 Krishi Mitra

**Krishi Mitra** is a digital agriculture assistant designed to support farmers with crop recommendations, agricultural advisories, and AI-powered insights. The project integrates a web-based frontend, Node.js backend, and Python-based AI modules to provide a complete ecosystem for modern farming.

---

## 📌 Features

* 🌾 **Crop Advisory** – Get suggestions on suitable crops and farming practices.
* 🧮 **Agricultural Calculations** – Tools for calculating yields, costs, and resource requirements.
* 🤖 **AI Agent (Python)** – Provides intelligent responses and recommendations for farmers.
* 🖥️ **Web Interface** – Clean, user-friendly frontend with multiple pages (login, signup, home, etc.).
* 🔒 **Authentication** – Secure login and signup system.

---

## 🗂️ Project Structure

```
Krishi-Mitra-main/
├── app.js                # Node.js entry point
├── agent.py              # AI agent script (Python)
├── advisory.js           # Advisory logic
├── advisoryController.js # Controller for advisory functions
├── Crop.js               # Crop-related data/logic
├── calculations.js       # Farming calculations
├── requirements.txt      # Python dependencies
├── PACKAGE.JSON          # Node.js dependencies
├── .env                  # Environment variables
├── frontend/             # Static HTML pages
│   ├── index.html
│   ├── home.html
│   ├── login.html
│   ├── signup.html
│   └── krishi-mitra.html
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Krishi-Mitra.git
cd Krishi-Mitra-main
```

### 2️⃣ Setup Node.js Backend

```bash
# Install Node.js dependencies
npm install

# Start the server
node app.js
```

### 3️⃣ Setup Python AI Agent

```bash
# Create virtual environment (optional)
python -m venv venv
source venv/bin/activate   # (Linux/Mac)
venv\Scripts\activate      # (Windows)

# Install dependencies
pip install -r requirements.txt

# Run the AI agent
python agent.py
```

### 4️⃣ Environment Variables

Create a `.env` file in the root folder and configure necessary keys (example):

```env
PORT=5000
MONGO_URI=your_mongodb_connection
API_KEY=your_api_key_here
```

---

## 🚀 Usage

1. Open `index.html` in your browser to access the homepage.
2. Sign up / log in as a user.
3. Explore crop advisories, calculations, and AI-powered recommendations.

---

## 📦 Dependencies

### Node.js

* Express (backend framework)
* dotenv (environment variables)
* Other packages (check `PACKAGE.JSON`)

### Python

* Flask / FastAPI (if used for API)
* Requests
* Other AI-related libraries (see `requirements.txt`)

---

## 🤝 Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Authors

* **Your Name** – Krishi Mitra

---

✨ *Krishi Mitra – Empowering farmers with technology!* 🌾
