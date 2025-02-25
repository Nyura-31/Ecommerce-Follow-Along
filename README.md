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

This milestone helps us understand **how to send, receive, and display data dynamically** using components. 🎯 





 ### **Summary of Milestone 13 - Editing Uploaded Products** 🚀  

In this milestone, you will **implement the functionality to edit uploaded products** in your project. This involves adding an **"Edit" button**, updating the backend to handle modifications, and ensuring the frontend form can auto-fill existing product details.  

### **Key Learning Goals 🎯**  
1. **Writing an API endpoint** to update existing product data in **MongoDB**.  
2. **Auto-filling the form** with the previous product details when clicking "Edit".  
3. **Allowing modifications** and saving the updated data back to the database.  

### **Steps to Complete 📝**  
1. **Backend:**  
   - Create an API endpoint (`PUT` request) to handle product updates.  
   - Update MongoDB with the new product details.  

2. **Frontend:**  
   - Add an **"Edit" button** to the product card.  
   - When clicked, **populate the form** with existing product data.  
   - Allow the user to modify and save the new details.  

### **Submission Guidelines 📥**  
- **Push your code** to your GitHub repository.  
- Ensure your **repository is public**.  
- Update the **README** file with a summary of your progress.  
- **Submit the repository link** in the assignment submission section.  

This milestone will strengthen your understanding of **CRUD operations**, specifically the **update functionality** in a **full-stack** application. 🚀





### **Summary of Milestone 14 - Deleting Products** 🚀  

In this milestone, you will **implement the functionality to delete products** from your application. This includes adding a **"Delete" button** on the product card and writing a **backend endpoint** to remove the product from **MongoDB** using its **ID**.  

### **Key Learning Goals 🎯**  
1. **Writing an API endpoint** to delete a product from **MongoDB** using its **ID**.  
2. **Adding a delete button** to each product card in the frontend.  
3. **Sending a delete request** to the backend when the button is clicked.  

### **Steps to Complete 📝**  
1. **Backend:**  
   - Create a **DELETE** endpoint (`DELETE /product/:id`).  
   - Find the product by **ID** and remove it from **MongoDB**.  

2. **Frontend:**  
   - Add a **"Delete" button** to each product card.  
   - When clicked, send a request to the backend to delete the product.  
   - Refresh the product list after successful deletion.  

### **Submission Guidelines 📥**  
- **Push your code** to your **GitHub repository**.  
- Ensure your **repository is public**.  
- Update the **README** file with a summary of your progress.  
- **Submit the repository link** in the assignment submission section.  

This milestone will help you **master the delete operation** in a **full-stack** application. 🚀





### **Milestone 15 Summary**  

In this milestone, we will **create a Navbar component** and integrate it across all pages of the application to enable smooth navigation.  

#### **Learning Goals 🎯**  
- Learn how to **create a Navbar component**.  
- Understand how to **reuse components** across multiple pages.  
- Implement a **responsive Navbar** that works on all screen sizes.  

#### **Steps to Complete 📝**  
1. **Create a Navbar Component** containing navigation links to:  
   - Home  
   - My Products  
   - Add Product  
   - Cart  
2. **Make the Navbar Responsive** to ensure proper display on all screen sizes.  
3. **Integrate the Navbar into all pages** for seamless navigation.  

#### **Submission Guidelines 📥**  
- Push your code to **GitHub** and ensure it is **publicly accessible**.  
- Update the **README file** to summarize your progress.  
- Submit the **GitHub repository link** in the assignment submission section.  

This milestone will help you understand how to create a **navigation system** in a React application efficiently. 🚀






### **Milestone 16 Summary** 🚀  

Milestone 16 focuses on **creating a product information page** that displays all relevant details about a product, allows users to select the desired quantity, and provides an **Add to Cart** button for easy purchasing. This milestone enhances the e-commerce functionality by ensuring users can interact with individual products efficiently.  

---

## **Key Objectives & Learning Outcomes 🎯**  
By completing this milestone, we have learned:  
✔️ How to create a **new page** dedicated to displaying detailed product information.  
✔️ How to dynamically fetch and display **product data** using React.  
✔️ How to implement a **quantity selector** to let users choose the number of items they want to buy.  
✔️ How to add an **"Add to Cart"** button for seamless shopping cart integration.  
✔️ How to navigate between pages using **React Router**.  

---

## **Steps to Implement 📝**  

### **1️⃣ Creating a New Product Info Page**  
- We created a **new React page/component** to display individual product details.  
- Used **React Router’s `useParams()`** to fetch the correct product based on the URL.  
- Retrieved product details from the backend or a mock database and displayed the **image, title, price, and description**.  

### **2️⃣ Implementing a Quantity Selector**  
- Added a simple **input field or increment/decrement buttons** to let users select the number of items they want to purchase.  
- Used `useState()` to manage the selected quantity dynamically.  

### **3️⃣ Adding the "Add to Cart" Button**  
- Implemented a button that, when clicked, adds the selected product and quantity to the shopping cart.  
- Used **React Context or Redux** to manage cart state globally.  

### **4️⃣ Styling and UI Enhancements**  
- Ensured the page is **responsive** and visually appealing.  
- Used **CSS or Tailwind CSS** for a clean and intuitive layout.  

---

## **Challenges & How We Solved Them 💡**  
🔹 **Dynamic Routing:** Used React Router to load the correct product dynamically.  
🔹 **State Management:** Managed the cart and quantity selection using `useState()` and Context API.  
🔹 **User Experience:** Ensured the UI is easy to navigate with clear buttons and structured content.  

---

## **Submission Guidelines 📥**  

✔ **Push your code** to a **public GitHub repository**.  
✔ **Ensure all files are updated**, including the new product page.  
✔ **Update the README** file with a description of Milestone 16’s implementation.  
✔ **Submit the GitHub repository link** in the assignment submission section.  

---

## **Conclusion & Next Steps 🚀**  
With this milestone completed, our **e-commerce platform** now has a functional **product details page** that enhances the user shopping experience. The next step would be integrating **cart functionality, checkout flow, and payment processing** to make the platform fully functional.  





### **Milestone 17 Summary: Implementing Add-to-Cart Functionality**  

In this milestone, we focused on building a backend endpoint to add products to the cart and store them in the database.  

#### **Key Accomplishments:**  
✅ **Updated User Schema** – Modified the user schema to include a cart field to store selected products.  
✅ **Created Cart Schema** – Designed a schema to store product details in the cart collection.  
✅ **Developed an API Endpoint** – Implemented an endpoint that receives product details and adds them to the cart.  
✅ **Database Integration** – Ensured that cart data is persisted in the database.  

#### **Submission Steps:**  
1. **Push Code to GitHub** – Ensure all changes are committed and pushed.  
2. **Update README** – Document the milestone’s progress.  
3. **Submit Repository Link** – Share the GitHub link in the assignment submission section.  

This milestone helped in understanding the fundamentals of cart functionality and database integration. 🚀





### **Milestone 18 Summary: Fetching Cart Products**  

In this milestone, we focused on creating a backend endpoint to retrieve all products inside a user’s cart for display on the cart page.  

#### **Key Accomplishments:**  
✅ **Created an API Endpoint** – Developed an endpoint to handle requests from the cart page.  
✅ **Fetched Cart Products** – Implemented logic to retrieve all products in a user’s cart using their email.  
✅ **Database Integration** – Ensured seamless retrieval of cart data from the database.  

#### **Submission Steps:**  
1. **Push Code to GitHub** – Ensure all updates are committed and pushed.  
2. **Update README** – Document the milestone’s progress.  
3. **Submit Repository Link** – Share the GitHub link in the assignment submission section.  

This milestone helped in understanding how to retrieve user-specific data and display it dynamically. 🚀





### **Milestone 19 Summary: Building a Cart Page with Quantity Update Functionality**  

#### **Objective:**  
In this milestone, you will **create a frontend cart page** that displays products inside the cart and allows users to **increase or decrease the quantity** of each product using `+` and `-` buttons. Additionally, you'll **write backend endpoints** to handle quantity updates.  

---

### **Tasks Overview:**  

✅ **Frontend Tasks:**  
1. **Create a Cart Page UI**  
   - Display products in the cart using data from the backend (built in Milestone 18).  
   - Show product details (image, name, price, quantity).  
   - Provide `+` and `-` buttons to adjust quantity.  

2. **Handle Quantity Updates on the Frontend**  
   - Clicking `+` increases the quantity.  
   - Clicking `-` decreases the quantity (with a minimum of 1).  
   - Send API requests to update the backend.  

---

✅ **Backend Tasks:**  
3. **Create an Endpoint to Update Product Quantity**  
   - Create a **PUT** or **PATCH** endpoint to increase or decrease the quantity of a product in the cart.  
   - Accept parameters like `productId` and `updateType` (`increase` or `decrease`).  
   - Update the database accordingly.  

---

### **Final Outcome:**  
- A fully functional **cart page** that displays products and allows users to adjust quantities dynamically.  
- **Real-time updates** where changes reflect in the database via API requests.  

---

### **Next Steps:**  
🚀 **Push your code to GitHub** and **update the README** with a summary of the milestone.  
🔗 **Submit the GitHub repository link** in the assignment portal.  

This milestone will help you understand how to build an **interactive cart system** for an e-commerce platform. 🎯






### **Milestone 20 Summary: Building a Profile Page with User Data**  

#### **Objective:**  
In this milestone, you will **create a frontend profile page** that displays user details like **profile photo, name, email, and addresses**. You'll also **write a backend endpoint** to fetch user data using email.  

---

### **Tasks Overview:**  

✅ **Backend Tasks:**  
1. **Create an API Endpoint to Fetch User Data**  
   - Develop an **endpoint that returns user details** (profile photo, name, email, and addresses) based on the provided email.  
   - Store user data in the database.  
   - Ensure the endpoint sends all required user information.  

---

✅ **Frontend Tasks:**  
2. **Build a Profile Page UI**  
   - **Section 1:** Display **profile photo, name, and email**.  
   - **Section 2:** Display **user address(es)**.  
     - If addresses exist, list them.  
     - If no address is found, show **"No address found"**.  
     - Add a button labeled **"Add Address"** for adding new addresses.  

---

### **Final Outcome:**  
- A **profile page** that dynamically displays user data.  
- Users can see their personal details and manage their addresses.  

---

### **Next Steps:**  
🚀 **Push your code to GitHub** and **update the README** with a summary of the milestone.  
🔗 **Submit the GitHub repository link** in the assignment portal.  

This milestone will help you understand **how to fetch and display user data** in a structured profile page. 🎯





### **Summary of Milestone 21: Address Form** 🚀  

In this milestone, we are creating a **frontend form** for address input. The form will collect details such as:  
✅ **Country**  
✅ **City**  
✅ **Address Line 1 & 2**  
✅ **Zip Code**  
✅ **Address Type** (e.g., Home, Office)  

### **Key Steps:**
1. **Build the Address Form UI** – Use React to create input fields for address details.  
2. **Manage State** – Store user input using React's `useState()`.  
3. **Navigation** – Clicking **"Add Address"** in the profile should redirect to this form page.  
4. **Submission** – Ensure the form captures data properly.  

### **Submission:**
- Push the code to **GitHub**.  
- Make sure the repository is **public**.  
- Update **README.md** with a summary of your work.  
- Submit the GitHub link in the assignment portal.  

This milestone helps in understanding **form handling, state management, and navigation** in a React app. Let me know if you need help with the code! 🚀





### **Summary of Milestone 22: Backend Endpoint for Address Storage** 🚀  

In this milestone, we are building a **backend endpoint** to save the user's address in the database.  

### **Key Steps:**
1. **Create a Backend Endpoint** – Set up an API route to receive address data from the frontend form.  
2. **Store Data in the Database** – Add the received address to the **address array** inside the **user collection** in the database.  
3. **Handle Requests & Responses** – Ensure proper request handling, validation, and response messages.  

### **Submission:**
- Push the code to **GitHub**.  
- Make sure the repository is **public**.  
- Update **README.md** with a summary of your work.  
- Submit the GitHub link in the assignment portal.  

This milestone helps in understanding **backend API creation, database integration, and data storage** in user profiles. Let me know if you need help with the code! 🚀


