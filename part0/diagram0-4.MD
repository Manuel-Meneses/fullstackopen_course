```sequenceDiagram
	participant user
	participant browser
	participant server

	user->>browser: Insert text 
	user->>browser: Press button
	Note: When performing this action, it activates an HTTP POST request to the address /new_note

	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	server->>browser: Send status 302 (redirect url)
	Note: new_note contain Form Data = note: the inserted text
	server->>browser: new_note	

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
	server->>browser: Send status 200
	server->>browser: notes file

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	server->>browser: Send status 200
	server->>browser: main.css
	
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
	server->>browser: Send status 200
	server->>browser: main.js
	Note: javascript file makes a request to /data.json

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	server->>browser: Send status 200
	server->>browser: data.json
	Note: data.json will be responsible for returning the data in json format

	browser->>user: Print text to screen
```
