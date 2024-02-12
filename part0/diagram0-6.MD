```
	sequenceDiagram

	participant user
	participant browser
	participant server

	user->>browser: Insert text 
	user->>browser: Press button
	Note: The form contains an id to manipulate with js and handle the event with an "event handler"

	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
	server->>browser: send status 201
	server->>browser: new_note_spa
	Note: POST request gets the new note in JSON format directly
	server->>browser: new_note_spa contain the new note = {content: "vzla", date: "2024-02-12T19:39:30.733Z"}

	browser->>user: Print text to screen
```
