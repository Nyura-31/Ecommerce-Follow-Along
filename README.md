# Ecommerce-Follow-Along

Project Description

This project is a full-stack e-commerce web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The MERN stack enables developers to build seamless, JavaScript-powered applications with both frontend and backend functionality.

### **Milestone 1: Project Overview**

Overview of the MERN Stack
The MERN stack is a popular technology stack for full-stack web development. It consists of:

**MongoDB** – NoSQL database for storing application data.
**Express.js** – Backend framework for handling server logic.
**React.js** – Frontend library for building dynamic user interfaces.
**Node.js** – JavaScript runtime for executing server-side code.
This stack allows developers to use a single language, JavaScript, throughout the entire application, making development more efficient and beginner-friendly.





### **Summary for Milestone 2: Structuring and Building the Login Page**

In Milestone 2 of your E-Commerce Application project, you focused on laying the groundwork for both the frontend and backend while creating your first functional user-facing feature: the **Login Page**. This milestone introduced foundational tools, configurations, and organizational best practices essential for a scalable project.

---

### **Key Achievements:**
1. **Project Structure:**
   - Created a clean and organized folder hierarchy with separate directories for the **frontend** and **backend** to ensure modularity and maintainability.

2. **Frontend Setup:**
   - Initialized a **React** application to develop the user interface.  
   - Configured **Tailwind CSS** for modern, responsive, and utility-based styling.

3. **Backend Setup:**
   - Set up a basic **Node.js** server, providing a foundation for API integration in future milestones.

4. **Login Page Development:**
   - Designed and implemented a functional **Login Page**, combining backend validation (if applicable) and frontend responsiveness.  
   - Styled the page using **Tailwind CSS** to ensure an intuitive and visually appealing layout.

---

### **Learning Outcomes:**
- **Project Structure Best Practices:** You learned how to organize files and directories for frontend and backend development.
- **React Development Skills:** You set up a React app and built a reusable, styled component for the Login Page.
- **Node.js Familiarity:** You configured a simple Node.js server to support future backend logic.
- **Styling with Tailwind CSS:** You gained experience in using Tailwind CSS for consistent and responsive UI design.
- **GitHub Integration:** Pushed changes to a **public GitHub repository** with updates reflecting Milestone 2 progress.

---

### **Deliverables:**
1. **Folder Structure:** Separate `frontend/` and `backend/` directories in the repository.
2. **Functional Login Page:** Includes both styling and basic functionality (form submission, input validation, etc.).
3. **Updated README:** A README file summarizing Milestone 2 progress, including setup instructions and key features implemented.





### **Milestone 3 Summary: Backend Setup and Database Integration**

In Milestone 3, you focused on building the backend foundation for your e-commerce application by organizing backend code, connecting to a database, and implementing basic error handling.

Key achievements include:  
- **Backend Folder Structure:** Organized the backend into directories for **routes**, **controllers**, **models**, and **middleware**, laying the groundwork for clean, modular development.  
- **Server Setup:** Configured a **Node.js** server using **Express** to handle API requests and listen on a designated port.  
- **Database Integration:** Connected the application to **MongoDB** to enable efficient data storage and management, verifying a successful connection.  
- **Error Handling:** Added basic error-handling mechanisms to improve debugging and ensure the server runs smoothly.  

All updates were pushed to the same **GitHub repository** from previous milestones, with the README file updated to document Milestone 3 progress. This milestone established a scalable backend to support future features.





### **Milestone 4 Summary: User Model, Controller, and File Uploads**

In Milestone 4, you enhanced your backend by creating a **User Model**, managing user-related operations with a **User Controller**, and enabling file uploads using **Multer**. These additions set the stage for handling and storing user data effectively.

---

### **Key Achievements:**
- **User Model:** Designed a schema to define how user data (e.g., name, email, password) is stored in **MongoDB**. This acts as a blueprint for the database.  
- **User Controller:** Built controllers to handle user-related operations, such as adding new users and retrieving their details, ensuring smooth management of server requests and responses.  
- **File Uploads with Multer:** Configured **Multer** to enable file uploads (e.g., profile pictures) and store them in the backend, providing a mechanism to handle user-generated content.  

---

### **Deliverables:**
1. **Codebase Updates:**  
   - Added a **User Model** and **Controller** to your backend.  
   - Configured file upload functionality using **Multer**.  

2. **Repository Updates:**  
   - All progress pushed to the existing **GitHub repository** from earlier milestones.  
   - README file updated with a section summarizing Milestone 4.  

---

This milestone lays the groundwork for future user-specific features and prepares the backend to handle real-world data and media effectively.





### **Milestone 5 Summary: Sign-Up Page and Form Validation**

In Milestone 5, you focused on creating a user-friendly **Sign-Up Page** on the frontend and implementing **form validation** to ensure smooth and secure user registration.

---

### **Key Achievements:**
- **Sign-Up Page:** Built a clean and functional **Sign-Up UI** using **HTML** and **CSS**, allowing users to input details such as their name, email, and password to create an account.  
- **Form Validation:** Added validation checks to ensure users provide valid information, such as correctly formatted emails and secure passwords. This step prevents invalid data from being sent to the backend.  

---

### **Deliverables:**
1. **Codebase Updates:**  
   - A functional and visually appealing **Sign-Up Page** with validation mechanisms.  

2. **Repository Updates:**  
   - All changes pushed to the existing **GitHub repository**.  
   - README file updated with a summary of Milestone 5 progress.  

---

This milestone ensures a solid user registration flow on the frontend, preparing the application for future integration with backend functionality and user sessions.





### **Milestone 6 Summary: Backend Endpoint for Signup with Password Encryption**

In Milestone 6, you created a backend endpoint for the **Signup Page**, focusing on securely storing user data in the database by encrypting passwords.

---

### **Key Achievements:**
- **Password Encryption:**  
   - Used **bcrypt** to hash user passwords during signup.  
   - Ensured secure storage of hashed passwords in the database, preventing unauthorized access to sensitive data.  

- **Store User Data:**  
   - Saved complete user details (e.g., name, email, hashed password) in the database while ensuring security and privacy.  

---

### **Deliverables:**
1. **Codebase Updates:**  
   - Backend endpoint for **user signup** with password encryption.  
   - Database integration to store all user data securely.  

2. **Repository Updates:**  
   - Code pushed to the existing **GitHub repository** from previous milestones.  
   - README file updated with a new section summarizing Milestone 6 progress.  

---

This milestone reinforces the importance of data security by implementing encryption, preparing your application to handle user data responsibly and securely. 





### **Milestone 7 Summary: Backend Endpoint for User Login**

In Milestone 7, you implemented a backend endpoint for **user login**, focusing on validating credentials and securely verifying encrypted passwords stored in the database.

---

### **Key Achievements:**
1. **Login Endpoint Creation:**
   - Built an endpoint to accept user credentials (email/username and password).
   - Retrieved corresponding user data from the database for authentication.

2. **Password Validation:**
   - Used **bcrypt** to compare the hashed password from the database with the user’s input.
   - Ensured users can log in only if their credentials match securely.

3. **Error Handling:**
   - Returned appropriate errors for invalid credentials or non-existent users (e.g., "User does not exist").
   - Focused on user-friendly and secure responses during the authentication process.

---

### **How it Works:**
- **User Enters Credentials:** The user submits email/username and password through the login page.
- **Fetch Data:** The backend retrieves user details from the database if the email/username exists.
- **Password Check:** The provided password is hashed and compared with the stored hash to verify authenticity.
- **Authentication Outcome:**
  - If the hash matches: User is successfully logged in.
  - If not: Error is returned.

---

### **Deliverables:**
1. **Codebase Updates:**
   - Backend login endpoint with password validation using bcrypt.
   - Database integration to fetch and validate user data.

2. **Repository Updates:**
   - Code pushed to the existing **GitHub repository** from previous milestones.
   - README file updated with a new section summarizing Milestone 7 progress.

---

This milestone ensures that your app is secure and capable of authenticating users efficiently while safeguarding their credentials!





### **Milestone 8 Summary: Product Card Component and Homepage Design**

In Milestone 8, you focused on building a **product card component** and designing a clean, organized **homepage** to display multiple product cards dynamically.

---

### **Key Achievements:**
1. **Card Component Creation:**
   - Designed a reusable product card component to display product details such as name, price, and image.
   - Used props to dynamically pass product information to the component.

2. **Homepage Layout Design:**
   - Structured the homepage to display multiple product cards using **grid layout** or **flexbox** for a visually appealing design.
   - Ensured the layout was clean, user-friendly, and responsive.

3. **Dynamic Rendering:**
   - Used **array mapping** to iterate over a product list and render individual cards for each product.
   - Maintained consistency in the layout by passing unique product details dynamically to each card.

---

### **Deliverables:**
1. **Codebase Updates:**
   - Completed the product card component.
   - Created a homepage with a dynamic grid layout showcasing multiple product cards.

2. **Repository Updates:**
   - Pushed all changes to your **GitHub repository**.
   - Updated the README file with a new section summarizing the progress of Milestone 8.

---

This milestone enhances the **usability and visual appeal** of your app, laying a strong foundation for advanced features like filtering and sorting in the upcoming milestones!





### **Milestone 9 Summary: Product Input Form Implementation**  

In Milestone 9, you focused on creating a **frontend form** to take product details as input, including support for multiple images. This step is essential for enabling product uploads and preparing data for future database integration.  

---  

### **Key Achievements:**  

1. **Product Input Form Creation:**  
   - Developed a structured form to collect essential product details such as name, price, description, and category.  
   - Ensured a user-friendly layout for easy data entry.  

2. **Multiple Image Upload Support:**  
   - Implemented functionality to allow users to upload multiple product images.  
   - Used input type `"file"` with `"multiple"` attribute to facilitate multiple file selection.  

3. **Preparation for Backend Integration:**  
   - Designed the form in a way that its data can be easily sent to a backend database in future milestones.  
   - Experimented with additional features like validation and restricting uploads to specific users (e.g., admin or shop owners).  

---  

### **Deliverables:**  

1. **Codebase Updates:**  
   - Developed and styled the product input form.  
   - Implemented basic validation for required fields and file uploads.  

2. **Repository Updates:**  
   - Pushed all changes to the **GitHub repository**.  
   - Updated the README file with a new section summarizing the progress of Milestone 9.  

---  

This milestone lays the groundwork for **storing and displaying product data**, setting the stage for **filtering, sorting, and user role-based access** in upcoming milestones! 🚀





### **Milestone 10 Summary: Product Schema & API Endpoint**  

In Milestone 10, you focused on **defining a Mongoose schema for products** and **creating an API endpoint** to store product details in a MongoDB database.  

---

### **Key Achievements:**  

1. **Product Schema Definition:**  
   - Created a **Mongoose schema** to structure product data, including fields like `name`, `description`, `price`, and `image URL`.  
   - Implemented **validation rules** to ensure data integrity (e.g., required fields, correct data types).  

2. **POST API Endpoint for Product Storage:**  
   - Built an **Express.js POST endpoint** to handle product data submissions.  
   - Implemented **data validation** before storing in MongoDB to prevent invalid entries.  

3. **Importance of Data Validation:**  
   - Ensured that only **valid and structured data** is stored in the database.  
   - Helped maintain **data consistency** and prevent errors in future queries.  

---

### **Deliverables:**  

1. **Codebase Updates:**  
   - Completed the **Mongoose schema for products**.  
   - Developed and tested the **POST API endpoint** for storing product data.  

2. **Repository Updates:**  
   - Pushed all changes to the **GitHub repository**.  
   - Updated the **README file** with a section summarizing Milestone 10 progress.  

---

This milestone **lays the groundwork** for managing product data efficiently, ensuring validation, and preparing for upcoming features like **filtering and sorting** in future milestones. 🚀





### **Summary of Milestone 11** 🚀  

In this milestone, you will make your **home page dynamic** by fetching and displaying all the products stored in **MongoDB**.  

#### **Key Learning Goals:**  
✔️ Create an **API endpoint** to extract and send product data from MongoDB.  
✔️ Fetch this data on the **frontend** using a function.  
✔️ Dynamically display the data using the **product card component** created earlier.  

#### **Steps to Complete:**  
1️⃣ **Backend:** Write an API endpoint to retrieve all product data.  
2️⃣ **Frontend:** Implement a function to fetch the data.  
3️⃣ **Display Data:** Pass the retrieved data to the product card component for dynamic rendering.  

#### **Submission Guidelines:**  
✅ Push the code to your **GitHub repository** (publicly accessible).  
✅ Update the **README** with a summary of your progress.  
✅ Submit the **repository link** in the assignment submission section.  

This milestone helps us understand **how to send, receive, and display data dynamically** using components. 🎯  `
