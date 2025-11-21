# Internship Projects - Cogniyz

This repository contains web form applications developed during the Cogniyz internship program. The project includes two main form implementations with different styling approaches and features.

## 📁 Project Structure

```
Internship/
├── Form/                    # Main form project with Tailwind CSS
│   ├── public/             # Static assets
│   ├── src/                # Source CSS files
│   ├── Views/              # EJS templates
│   ├── index.js            # Main server file
│   └── package.json        # Dependencies
└── Advance-form/           # Alternative form implementation
    ├── views/              # EJS templates
    ├── index.js            # Server file
    └── package.json        # Dependencies
```

## 🚀 Features

### Form Project (Main)
- **Responsive Design**: Built with Tailwind CSS
- **Form Validation**: Client and server-side validation
- **Data Management**: Store and view form submissions
- **CRUD Operations**: Create, read, and delete submissions
- **Modern UI**: Clean, professional interface

### Advance-form Project
- **Basic Form Handling**: Simple form processing
- **Data Storage**: In-memory submission storage
- **Response Management**: View and manage submissions

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Tailwind CSS
- **Middleware**: Body-parser for form data
- **Styling**: Tailwind CSS (Form project)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## ⚡ Quick Start

### Form Project Setup

1. **Navigate to the Form directory**:
   ```bash
   cd Form
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build CSS (for Tailwind)**:
   ```bash
   npm run build-css
   ```

4. **Start the server**:
   ```bash
   node index.js
   ```

5. **Access the application**:
   Open your browser and go to `http://localhost:5013`

### Advance-form Project Setup

1. **Navigate to the Advance-form directory**:
   ```bash
   cd Advance-form
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node index.js
   ```

4. **Access the application**:
   Open your browser and go to `http://localhost:3000`

## 🎯 Usage

### Main Features

1. **Fill Form**: Navigate to the home page and fill out the registration form
2. **View Submissions**: Go to `/responses` to see all form submissions
3. **Delete Entries**: Remove unwanted submissions from the responses page

### Form Fields

- **Name**: User's full name
- **Email**: Valid email address (with validation)
- **Password**: User password
- **Department**: Selection from available departments
- **Gender**: Radio button selection
- **Message**: Optional text area for additional information

## 🔧 API Endpoints

### Form Project (Port 5013)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display the main form |
| POST | `/submit` | Submit form data |
| GET | `/responses` | View all submissions |
| POST | `/delete/:id` | Delete a specific submission |

### Advance-form Project (Port 3000)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display the form |
| POST | `/submit` | Submit form data |
| GET | `/responses` | View all submissions |
| POST | `/delete/:id` | Delete a specific submission |

## 🎨 Styling

- **Form Project**: Uses Tailwind CSS for modern, responsive design
- **Advance-form**: Basic styling with custom CSS

## 📝 Development Notes

- Data is stored in memory (resets on server restart)
- Email validation is implemented on the server side
- Both projects use EJS for server-side rendering
- Tailwind CSS is configured for the main Form project

## 🤝 Contributing

This is an internship project. For any improvements or suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

ISC License - See individual package.json files for details.

## 👨‍💻 Author

Developed during Cogniyz Internship Program

---

**Note**: This project is part of an internship program and serves as a learning exercise for web development with Node.js and Express.js.
