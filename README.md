# Information Security and Quality Assurance Projects - Issue Tracker


## MERN app that has a full CRUD functionality


-----------------

[Live Demo](https://api-issues-tracker.herokuapp.com/)

---------------

#### Technologies used:

- HTML
- CSS 
- JAVASCRIPT
- REACT JS
- BOOTSTRAP
- NODE JS
- EXPRESS JS
- MONGO DB
- HELMET JS
- AXIOS
- CHAI/MOCHA JS


### User stories: 

- Prevent cross site scripting (XSS) attacks.
- I can POST /api/issues/{projectname} with form data containing required issue_title, issue_text, created_by, and optional assigned_to and status_text.
- The object saved (and returned) will include all of those fields (blank for optional no input) and also include created_on(date/time), updated_on(date/time), open(boolean, true for open, false for closed), and _id.
- I can PUT /api/issues/{projectname} with a id and any fields in the object with a value to object said object. Returned will be 'successfully updated' or 'could not update '+id. This should always update updated_on. If no fields are sent return 'no updated field sent'.
- I can DELETE /api/issues/{projectname} with a id to completely delete an issue. If no _id is sent return 'id error', success: 'deleted '+id, failed: 'could not delete '+id.
- I can GET /api/issues/{projectname} for an array of all issues on that specific project with all the information for each issue as was returned when posted.
- I can filter my get request by also passing along any field and value in the query(ie. /api/issues/{project}?open=false). I can pass along as many fields/values as I want.
- All 11 functional tests are complete and passing.
