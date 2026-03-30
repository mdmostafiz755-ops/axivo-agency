# GOOGLE SHEETS SETUP GUIDE
# ============================================================
# Connect your contact form to Google Sheets in 5 steps
# ============================================================

## STEP 1 — Create a Google Sheet
1. Go to sheets.google.com
2. Create a new spreadsheet
3. Name it "VORTEX Studio — Contact Forms"
4. In Row 1, add these headers (one per column):
   A1: Timestamp
   B1: First Name
   C1: Last Name
   D1: Email
   E1: Company
   F1: Service
   G1: Budget
   H1: Message

## STEP 2 — Open Apps Script
1. In your Google Sheet, click Extensions → Apps Script
2. Delete any default code in the editor

## STEP 3 — Paste this script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date().toLocaleString(),   // Timestamp
      data.firstName || "",
      data.lastName  || "",
      data.email     || "",
      data.company   || "",
      data.service   || "",
      data.budget    || "",
      data.message   || ""
    ]);
    
    // Optional: send email notification
    MailApp.sendEmail("axivo26@gmail.com", "New Contact Form Submission", 
      "From: " + data.firstName + " " + data.lastName + "\nEmail: " + data.email + "\nMessage: " + data.message);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## STEP 4 — Deploy
1. Click "Deploy" → "New deployment"
2. Type: Select "Web app"
3. Description: "Contact Form Handler"
4. Execute as: "Me"
5. Who has access: "Anyone"
6. Click "Deploy"
7. Click "Authorize access" and follow the prompts
8. COPY the Web App URL (looks like: https://script.google.com/macros/s/AKfy.../exec)

## STEP 5 — Add URL to config.js
1. Open config.js
2. Find: googleSheetsUrl: "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"
3. Replace with your URL:
   googleSheetsUrl: "https://script.google.com/macros/s/YOUR_ID/exec"
4. Save config.js

## TESTING
- Submit the contact form on your site
- Check your Google Sheet — a new row should appear within seconds
- If it doesn't work, open browser DevTools → Console and look for error messages

## TROUBLESHOOTING
- "Failed to fetch": Your Apps Script URL is wrong or not deployed as "Anyone"
- "Permission denied": Re-deploy and re-authorize
- Empty rows: Check column names match the script above
