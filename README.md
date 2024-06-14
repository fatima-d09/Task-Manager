# Task-Manager
Task Manager I created for my self.

This is a simple web-based Task Manager application built with HTML, CSS, JavaScript, and Python (Flask). It allows users to manage their tasks, set goals, and keep track of miscellaneous things.

# Features
- <strong>Task Management:</strong> Add, view, complete, and remove tasks. Tasks are categorized into incomplete and completed tasks.
- <strong>Goals:</strong> Add and view personal goals.
- <strong>Miscellaneous:</strong> Add and view miscellaneous things for quick notes or reminders.

# Project Structure
TaskManager/
├── app.py
├── templates/
│   └── index.html
└── static/
    ├── styles.css
    └── script.js

# Files and Directories
- <strong>app.py: </strong>The Flask application that handles the backend logic.
- <strong>templates/index.html: </strong>The main HTML file that contains the structure of the web application.
- <strong>static/styles.css: </strong>The CSS file for styling the web application.
- <strong>static/script.js: </strong>The JavaScript file for handling the client-side functionality.

# Installation

## Prerequisites
- Python 3.x
- Flask

## Setup
1. Clone the Repository

'''
git clone https://github.com/yourusername/task-manager.git
cd task-manager
'''

2. Create a virtual environment and activate it

'''
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
'''

3. Install Flask

'''
pip3 install Flask
'''

4. Run the Flask Application

'''
python3 app.py
'''

5. Open your browser to navigate the Task Manager

(My link: http://127.0.0.1:5000/)

# Usage

## Task Management
- Add Task: Enter the task name and select its priority (High, Medium, Low). Click "Add Task".
- Complete Task: Click the "Complete" button next to the task to mark it as completed.
- Remove Task: Click the "Remove" button next to the task to delete it from the list.
- View Tasks: Tasks are categorized into Incomplete and Completed sections.

## Goals
- Add Goal: Enter your goal in the input field and click "Add Goal".
- View Goals: Added goals are displayed in the Goals section.

## Miscellaneous Things
- Add Miscellaneous Thing: Enter your note or reminder in the input field and click "Add Miscellaneous".
- View Miscellaneous Things: Added notes and reminders are displayed in the Miscellaneous section.
