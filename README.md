# Application for Validation of Duplicate Bank Customer Statements and Balance Correctness

## Main Idea
After the user uploads a file, validation takes place, and only failed records appear in the report. By clicking on a record from the list, you can see more detailed data.

## Technology Selection
- **Frontend Framework:** Next.js (chosen for its convenience, especially in routing)
- **State Manager:** Zustand (considered the best choice for its simplicity compared to Redux and lighter weight)
- **File Processing Libraries:**
  - [PapaParse](https://github.com/mholt/PapaParse): Used for parsing CSV files
  - [x2js](https://github.com/x2js/x2js): Utilized for parsing XML files
    - Note: Limited experience with these libraries, but they effectively serve their purpose.

## Overview
This application aims to streamline the validation of duplicate bank customer statements and ensure balance correctness. The user can upload a file, triggering the validation process. The report displays only the failed records, and users can view more detailed data by clicking on a specific record.
