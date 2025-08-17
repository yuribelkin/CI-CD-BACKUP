# Hello World JS Application

This is a simple Node.js application that prints **Hello, World** and includes a CI/CD pipeline using **GitHub Actions** and **Docker**.

---

##  Running the Application Locally

### 1. Clone the repository

```bash
git clone <repository_url>
cd <repository_name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
node main.js
```

You should see the following output:

```
Hello, World
```

### 4. Run tests

```bash
npm test
```

---

## ⚙️ CI/CD Pipeline Workflow

This repository includes a **GitHub Actions** workflow defined in `.github/workflows/main.yml`.

The pipeline has **two jobs**:

### **1. Test Job**

* Checks out the repository.
* Sets up Node.js (version 18).
* Installs dependencies using `npm install -y.
* Runs automated tests using `npm test`.

### **2. Build & Push Job**

* Runs **only if the test job passes**.
* Builds and deploys the Docker image

---

## 🛠 Setup Instructions

### **1. Environment Requirements**

* Node.js (v18 or above)
* npm
* Docker
* Github
