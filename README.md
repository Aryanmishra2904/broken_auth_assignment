# The Silent Server (Backend Debugging Assignment)

This project contains the completed solution for the Silent Server backend debugging assignment.
All broken authentication flows have been identified and fixed.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```
   Server runs at: `http://localhost:3000`
Authentication Flow (Completed)

The following authentication flow is fully functional:

1️⃣ Login

Endpoint: POST /auth/login

Validates email and password

Generates loginSessionId

Logs a 6-digit OTP in the server console

2️⃣ Verify OTP

Endpoint: POST /auth/verify-otp

Validates loginSessionId

Verifies OTP

Sets HTTP-only session cookie (session_token)

3️⃣ Generate JWT Token

Endpoint: POST /auth/token

Reads session cookie

Validates session

Generates JWT access_token

4️⃣ Access Protected Route

Endpoint: GET /protected

Requires header:

Authorization: Bearer <access_token>


Validates JWT

Returns user details and a unique success_flag

Verification

The complete authentication flow was tested using curl commands.

The terminal output of:

Login

OTP Verification

Token Generation

Protected Route Access

is available in:

output.txt


The final response includes a valid success_flag, confirming successful completion of the assignment.

Submission Details

Repository is public.

output.txt contains the complete verification flow.

All authentication endpoints are fully functional.

Author

Aryan Mishra
