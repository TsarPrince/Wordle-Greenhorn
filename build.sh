npm install
npm run build
cd dist
echo '{
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
}' > manifest.json