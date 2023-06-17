
# **Node.js Express.js and MySQL CRUD Operation**

# This is a Node.js project that utilizes the Express.js framework and MySQL as the database for performing CRUD (Create, Read, Update, Delete) operations. The project provides an API for managing data in a database through HTTP endpoints.

====================================================================================================
# **Features**

The Node.js Express.js and MySQL CRUD Operation project offers the following features:

- **Create:** Insert new data records into the MySQL database.
- **Read:** Retrieve data records from the MySQL database.
- **Update:** Update existing data records in the MySQL database.
- **Delete:** Remove data records from the MySQL database.

# **Prerequisites**

Before running this project, ensure you have the following installed:

- Node.js (version 12 or higher)
- MySQL (version 5.7 or higher)

# **Installation**

To install and run the Node.js Express.js and MySQL CRUD Operation project, follow these steps:

1. Clone or download the project repository to your local machine.

2. Open a terminal or command prompt and navigate to the project's directory.

3. Install the project dependencies by running the command:

   ## **npm install**

4. Configure the MySQL database connection:
- Open the **config/db.config.js** file.
- Update the MySQL database configuration properties (host, user, password, database) to match your MySQL server settings.

5. Create the required database table:
- Execute the SQL script provided in the **database/db.sql** file to create the necessary table structure.

6. Start the application by running the command:

    ## **npm start**

7. The API will be accessible at **http://localhost:3000.** You can use tools like Postman or a web browser to interact with the API endpoints.

## **Home Page**
![Alternate text](/NodejsmysqlCRUD/Home.png)

## **Add Page**
![Alternate text](/NodejsmysqlCRUD/Add.png)

## **Search Page**
![Alternate text](/NodejsmysqlCRUD/Search.png)

## **Update Page**
![Alternate text](/NodejsmysqlCRUD/Update.png)

## **Delete Page**
![Alternate text](/NodejsmysqlCRUD/Delete.png)

# **API Endpoints**

The following API endpoints are available:

- **GET /:** Retrieve all data records.
- **GET /:id:** Retrieve a specific data record by ID.
- **POST /:** Create a new data record.
- **PUT /:id:** Update a specific data record by ID.
- **DELETE /:id:** Delete a specific data record by ID.

# **Customization**

You can customize the project as per your requirements:

- Routes: Modify the routes and endpoints in the **routes/data.routes.js** file to match your desired API structure.
- Data Model: Adjust the data model in the **models/data.model.js** file to match your database table structure.
- Validation: Add or modify input validation logic in the **middlewares/validate.js** file to suit your specific data requirements.
- Error Handling: Enhance or modify the error handling logic in the **middlewares/errorHandler.js** file to meet your needs.

# **Contributing**

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

# **License**
This project is licensed under the **[MIT License](https://opensource.org/license/mit/ "Optional Title").**
