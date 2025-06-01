# Manchester Gents Countdown Website

This is a countdown site for Manchester Gents events.

## 🔧 Configuration

To change the event details or customize the design, edit the `config.js` file in the root folder.

### 📅 Set the Event Date & Time
Update the `eventDate` value in ISO format (YYYY-MM-DDTHH:MM:SS):

```js
eventDate: "2025-12-31T21:00:00",
```

This will dynamically update the countdown and the visible date on the page (formatted like: `26 APR, 2025`).

### 🌍 Set the Time Zone
Specify the time zone using an IANA time zone string (e.g., `Europe/London`, `America/New_York`):

```js
timeZone: "Europe/London",
```

### 🎨 Customize Colors
You can change the background color, text color, and logo color using HEX values or CSS color names:

```js
backgroundColor: "#fdfae2", // Page background
textColor: "#a56b6b",       // Text and button border color
logoColor: "#a56b6b"        // SVG logo color
```

### Example config.js
```js
window.COUNTDOWN_CONFIG = {
  eventDate: "2025-12-31T21:00:00",
  timeZone: "Europe/London",
  backgroundColor: "#fdfae2",
  textColor: "#a56b6b",
  logoColor: "#a56b6b"
};
```

## 📄 License

This project is the intellectual property of **Manchester Gents**.

- It is licensed for **exclusive use by Manchester Gents** only.
- **Redistribution, copying, or modification** of this codebase in whole or in part is **strictly prohibited** without prior **written permission** from the Manchester Gents team.
- Unauthorized use or reproduction is a violation of this license.

For inquiries or permissions, please contact: [Instagram @manchestergents](https://instagram.com/manchestergents)