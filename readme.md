# chrome extension 

### manifest.json
- notification
```json
{
    "background": {
        "scripts": [
            "bg-notification.js"
        ]
    },
    "browser_action": {
        "default_icon": "images/icons8-google_docs.png",
        "default_title": "Extension",     
        "default_popup": "popup.html"    
    },
    "permissions": [
        "notifications"
    ]
}
```

- browser action : onclicked & show notification
> ถ้าใช้ event ใน background.javascrtips ให้ปิดการใช้งาน default_popup
```json
{
    "background": {
        "scripts": [
            "bg-notification.js", 
            "bg-onclick.js"
        ]
    },
    "browser_action": {
        "default_icon": {
            "32": "images/icons8-contacts-32px.png",
            "48": "images/icons8-contacts-48px.png"
        },
        "default_title": "Extension"
    },
    "permissions": [
        "notifications",
        "tabs"
    ]
}
```

<br>



<hr>

- default_title : optional; shown in tooltip
- default_popup : page .html & include css & js in file.
- permissions : อนุญาติการเรียกใช้งาน function เสริมต่าง

