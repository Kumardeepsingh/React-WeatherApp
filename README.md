# 🌦️ Weather Visualization Web App

A modern, responsive weather application built using **React, TypeScript, and Vite** that provides real-time weather data, forecasts, and interactive map-based visualization.

---

## 📌 Overview

This project is a **feature-rich weather dashboard** that allows users to:

- Search weather by city name from a dropdown 
- Select any location directly from an interactive map  
- View **current weather**, **hourly forecast**, and **7-day forecast**  
- Explore weather conditions visually using map overlays  
- Toggle between **light and dark themes**  

The application is designed with a strong focus on **clean architecture, scalability, and performance**.

---

## 🚀 Features

### 🌍 Location Selection
- Choose a city from a predefined dropdown menu to display weather data  
- Dropdown provides quick access to supported cities  
- Interactive map allows users to retrieve weather data for any location beyond the predefined list   

### 🌡️ Weather Data
- Real-time current weather  
- Hourly forecast  
- 7-day forecast  
- Temperature, humidity, wind, conditions  

### 🗺️ Interactive Map
- Built with Leaflet + React Leaflet  
- Weather overlays  
- Dynamic updates  

### ⚡ Performance
- React Query (TanStack Query)  
- Caching and background refetching  
- Skeleton loaders  

### 🎨 UI/UX
- Fully responsive  
- Dark/Light mode  
- Clean component-based design  

---

## 🛠️ Tech Stack

**Frontend**
- React  
- TypeScript  
- Vite  

**Styling**
- Tailwind CSS  
- ShadCN UI  

**State & Data**
- React Query  

**Maps**
- Leaflet  
- React Leaflet  
- MapTiler  

**Validation**
- Zod  

---

## 🏗️ Project Structure

```
src/
│
├── components/
│   ├── cards/          # Weather cards (current, hourly, daily)
│   ├── dropdowns/     # Location and map controls
│   ├── skeletons/     # Loading placeholders
│
├── lib/               # Utility/helper functions
├── schemas/           # Zod validation schemas
├── api.ts             # API integration logic
├── types.ts           # TypeScript interfaces/types
├── App.tsx            # Main application logic
└── main.tsx           # Entry point
```

---

## 🧠 Architecture & Design Decisions

### Separation of Concerns
- API logic isolated in `api.ts`  
- UI split into reusable components  
- Types centralized  

### Data Handling
- React Query for caching and async state  
- Optimized API calls  

### Component Design
- Modular and reusable  
- Easy scalability  

### Type Safety
- TypeScript + Zod validation  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-project.git
cd weather-project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment variables
Create `.env.local`:

```
VITE_WEATHER_API_KEY=your_key
VITE_MAP_API_KEY=your_key
```

### 4. Run app
```bash
npm run dev
```

---


## 📈 Future Enhancements

- Save locations  
- Notifications  
- Historical data  
- PWA support  

---

## 🎯 Key Learnings

- Scalable frontend architecture  
- API integration  
- React Query usage  
- Interactive maps  

---

## 👨‍💻 Author

**Kumardeep Singh**  
B.Tech Student | Aspiring Software Engineer  
