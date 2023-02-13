# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Create a new table to store custom agent ids:
Acceptance Criteria:
A new table named "AgentCustomIds" is created with the following columns: "facility_id", "internal_agent_id", and "custom_agent_id".
The "facility_id" column should be a foreign key referencing the "Facilities" table.
The "internal_agent_id" column should be a foreign key referencing the "Agents" table.
Time/Effort Estimate: 1-2 hours
Implementation Details:
Use SQL or a database migration tool to create the new table in the database.

2nd
Add a custom agent id field to the Agent form:
Acceptance Criteria:
The "Agents" form includes a new field for the custom agent id.
The custom agent id can be entered and saved for each Agent.
Time/Effort Estimate: 2-3 hours
Implementation Details:
Modify the "Agents" form to include a field for the custom agent id.
Update the form's submit handler to save the custom agent id to the database along with the other Agent information.

3rd
Update the Shift data to include the custom agent id:
Acceptance Criteria:
The Shift data stored in the database now includes the custom agent id in addition to the internal agent id.
The custom agent id is retrieved from the "AgentCustomIds" table using the facility_id and internal_agent_id.
Time/Effort Estimate: 2-3 hours
Implementation Details:
Modify the code that saves Shift data to retrieve the custom agent id from the "AgentCustomIds" table using the facility_id and internal_agent_id.
Update the Shift data to include the custom agent id.

4th
Update the getShiftsByFacility function to return the custom agent id:
Acceptance Criteria:
The getShiftsByFacility function now returns the custom agent id along with the other Shift data.
Time/Effort Estimate: 1-2 hours
Implementation Details:
Update the getShiftsByFacility function to retrieve the custom agent id from the Shift data and return it along with the other Shift data.

5th
Update the generateReport function to use the custom agent id:
Acceptance Criteria:
The generateReport function now uses the custom agent id when generating reports for Facilities.
Time/Effort Estimate: 2-3 hours
Implementation Details:
Modify the generateReport function to use the custom agent id instead of the internal agent id when generating reports for Facilities.