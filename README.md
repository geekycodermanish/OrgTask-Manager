# NodeExpressMVC Backend

## Description

This project is a backend application built with Node.js, Express, Mongoose, and MongoDB following the MVC (Model-View-Controller) architecture. It includes user management with different roles, organization management, session management, and task management.

## Features

1. **User Management**
   - User registration and login
   - Different roles for users based on privileges (admin, user)

2. **Organization Management**
   - Users can add multiple organizations if they have the privilege
   - Each organization can have multiple users

3. **Session Management**
   - JWT-based authentication
   - Users can switch between organizations within a session

4. **Task Management**
   - Users can create tasks within organizations
   - Tasks are identifiable by organization

## Installation

### Prerequisites

- Node.js (>=14.x)
- MongoDB (>=4.x)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/NodeExpressMVC.git
   cd NodeExpressMVC
