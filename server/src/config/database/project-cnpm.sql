CREATE TABLE Accounts(
	id CHAR(6) PRIMARY KEY,
	
	username VARCHAR(50) NOT NULL,
   userpassword VARCHAR(50) NOT NULL,
   idRole VARCHAR(50) NOT NULL 
);

CREATE TABLE Students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(15),
    email VARCHAR(100)
);

-- Table for courses
CREATE TABLE Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL
);

-- Table for student enrollments
CREATE TABLE StudentEnrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Table for class schedules
CREATE TABLE ClassSchedules (
    schedule_id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT NOT NULL,
    teacher_id INT NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    location VARCHAR(255),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Table for teachers
CREATE TABLE Teachers (
    teacher_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    contact_info VARCHAR(255),
    profile_image_url VARCHAR(255)
);

-- Table for staff
CREATE TABLE Staff (
    staff_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL
);

-- Table for invoices
CREATE TABLE Invoices (
    invoice_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE,
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);
