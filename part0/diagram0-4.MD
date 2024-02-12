```sequenceDiagram
	participant user
	participant browser
	participant server

	user->>browser: Insert text 
	user->>browser: press button
	browser->>server: request GET https://studies.cs.helsinki.fi/exampleapp/data.json
	server receive request
	server->>browser: send status(200)
	browser->>user: print text to screen
```
