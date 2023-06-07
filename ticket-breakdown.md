Ticket 1: Database Update - Custom Agent IDs
Description: Add support for custom Agent IDs by modifying the Agents table in the database.

Acceptance Criteria:
Add a new column called "customId" to the Agents table.
Ensure "customId" column can store  custom IDs provided by Facilities.
Perform a database migration to apply  schema changes.
Write SQL scripts to update existing Agent records with any existing custom IDs, if applicable.
Time/Effort Estimate: Approximately 3 hours

Implementation Details:
Use a database migration tool to add "customId" column to Agents table.
Define appropriate data type and constraints for "customId" column based on custom ID field requirements.
Create SQL scripts or utilize an ORM to update existing Agent records with any pre-existing custom IDs.

Ticket 2: Facility Interface - Custom Agent ID Management
Description: Develop an interface for Facilities to manage custom IDs for Agents.

Acceptance Criteria:
Design and implement a user-friendly form or interface where Facilities can add or update custom IDs for Agents.
Include proper validation and error handling to ensure data integrity.
Store custom IDs entered by Facilities in Agents table.
Time/Effort Estimate: Approximately 5 hours

Implementation Details:
Create a web-based form or user interface accessible to Facilities.
Design interface to allow Facilities to view, add, and update custom IDs for Agents.
Implement validation rules to ensure entered custom IDs meet any specified requirements.
Store custom IDs submitted by Facilities in "customId" column of Agents table.

Ticket 3: Report Generation - Custom Agent IDs
Description: Update report generation process to include custom Agent IDs.

Acceptance Criteria:
Modify "generateReport" function to utilize custom IDs if available, fallback to internal database IDs if not.
Enhance report generation logic to include custom Agent IDs in generated PDF reports.
Time/Effort Estimate: Approximately 4 hours

Implementation Details:
Update "generateReport" function to check if a custom ID is available for each Agent. Use custom ID if present; otherwise, use internal database ID.
Adjust report generation code to include custom Agent IDs alongside other relevant information in generated PDF reports.

Ticket 4: Testing - Custom Agent IDs
Description: Develop unit tests to ensure correctness and reliability of custom Agent ID functionality.

Acceptance Criteria:
Write unit tests to cover various scenarios, including adding custom IDs, updating existing custom IDs, fallback behavior, and report generation.
Verify that custom ID-related functionality works as expected and doesn't introduce any regressions.
Time/Effort Estimate: Approximately 3 hours

Implementation Details:
Develop unit tests using a testing framework such as Jest or Mocha.
Cover different test cases, including positive and negative scenarios, edge cases, and boundary values.
Test complete flow of custom Agent ID feature, including database updates, Facility interface, report generation, and any fallback behavior.