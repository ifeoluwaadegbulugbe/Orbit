# Making the email forms work

The newsletter box in the footer, the "email me this" boxes on the free tools, and the contact form all send to one endpoint (`/api/leads`). It saves each submission to **one** place you choose. Until you set one up, the forms show an error and nothing is saved.

## Option A: Google Sheet (about 5 minutes, free, no database)

1. Create a new Google Sheet. Name it "Orbit leads". In row 1 type these headings, one per column:
   `created_at, email, name, message, source, utm_source, utm_medium, utm_campaign, referrer, landing_page`
2. In the Sheet, open **Extensions → Apps Script**. Delete what's there and paste:

```js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var d = JSON.parse(e.postData.contents);
  sheet.appendRow([
    d.created_at, d.email, d.name, d.message, d.source,
    d.utm_source, d.utm_medium, d.utm_campaign, d.referrer, d.landing_page
  ]);
  return ContentService.createTextOutput("ok");
}
```

3. Click **Deploy → New deployment**. Type: **Web app**. Execute as: **Me**. Who has access: **Anyone**. Click Deploy and approve the permissions.
4. Copy the **Web app URL**.
5. In Vercel: your project → **Settings → Environment Variables**. Add `LEADS_WEBHOOK_URL` = that URL (Production). Then **Redeploy**.
6. Test: submit the footer form on your live site. A new row should appear in the Sheet.

Every sign-up now lands in the Sheet. You can export it to any email tool later.

## Option B: Supabase (a proper database)

1. Create a free project at supabase.com.
2. SQL Editor → paste the contents of `supabase/migrations/0001_leads.sql` → Run.
3. Project Settings → API: copy the **Project URL** and the **service_role** key.
4. In Vercel add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, then redeploy.

Keep the service_role key secret. It is only used on the server.

## Sending a confirmation email

Neither option emails the person back. If you want that (for example "here are your templates"), add a Resend account and send from `src/app/api/leads/route.ts` after the save succeeds.
