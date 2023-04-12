## OS information
OS Name:	Microsoft Windows 11 Home Single Language <br/>
Version:	10.0.22621 Build 22621

## Environment requirements
node version: 18.12.1 <br/>
npm version: 8.19.2

## Build instructions
- `npm install` <br/>
- `npm run build` <br/>
- Replace the automatically generated `manifest.json` with the following (due to differences between Chrome's and Firefox's manifest support) -
```
{
  "manifest_version": 3,
  "name": "Greenhorn",
  "description": "Wordle for newbies",
  "version": "1.0.0",
  "action": {
    "default_popup": "index.html"
  },
  "icons": {
    "48": "icons/48.jpg",
    "96": "icons/96.jpg"
  },
  "content_scripts": [
    {
      "js": [
        "assets/content-script-loader.content.tsx.73b3edeb.a8b529e5.js"
      ],
      "matches": [
        "https://www.nytimes.com/games/wordle/*"
      ],
      "css": [
        "assets/index.52160747.css"
      ]
    }
  ],
  "web_accessible_resources": [
    {
      "matches": [
        "https://www.nytimes.com/*"
      ],
      "resources": [
        "assets/index.76cf0a13.js",
        "assets/content.tsx.73b3edeb.js"
      ]
    }
  ],
  "browser_specific_settings": {
    "gecko": {
      "id": "greenhorn@tsarprince.com"
    }
  }
}
```
