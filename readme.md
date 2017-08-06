# chrome extension 

### manifest.json [manifest read...](https://developer.chrome.com/extensions/manifest)
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
```json
{
    "background": {
        "scripts": [
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
> ถ้าใช้ event ใน background.javascrtips ให้ปิดการใช้งาน default_popup

<br>

- page action
```json
{
    "background": {
        "scripts": [
            "bg-page-action.js"
        ],
        "persistent": false
    },
    "page_action": {
        "default_icon": { 
            "24": "images/icons8-ok.png" 
        },
        "default_title": "Click On read file." 
    },
    "icons": {
        "24": "images/icons8-ok.png"
    },
    "permissions": [
        "declarativeContent"
    ]
}
```
> Notice that without the "persistent" key, you have a regular background page. Persistence is what differentiates an event page from a background page. [readmore](https://developer.chrome.com/extensions/event_pages)
> 

<hr>

- default_title : optional; shown in tooltip
- default_popup : page .html & include css & js in file.
- [declare permissions](https://developer.chrome.com/extensions/declare_permissions) : อนุญาติการเรียกใช้งาน function เสริมต่าง 

