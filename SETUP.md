# Setup Guide - React Portfolio

## 🚀 Quick Start

```bash
cd "c:\Users\HP\Desktop\React Portfolio"
npm run dev
```

Open **http://localhost:5174** (or the port shown in terminal).

---

## 📧 EmailJS Setup (Contact Form)

To enable the contact form to send emails:

1. **Sign up at [EmailJS](https://www.emailjs.com/)** (free tier available)

2. **Create an Email Service:**
   - Go to Dashboard → Email Services
   - Click "Connect New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup steps

3. **Create an Email Template:**
   - Go to Dashboard → Email Templates
   - Click "Create New Template"
   - Use these template variables:
     ```
     From: {{from_name}}
     Email: {{from_email}}
     Message: {{message}}
     ```
   - Note the **Template ID** (e.g., template_xxx)

4. **Get Your Credentials:**
   - **Service ID**: From Email Services section
   - **Template ID**: From Email Templates section
   - **Public Key**: Dashboard → Account → API Keys

5. **Update `src/components/ContactForm.jsx`:**
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY_HERE')
   
   // In handleSubmit, replace:
   // 'YOUR_SERVICE_ID' → your actual Service ID
   // 'YOUR_TEMPLATE_ID' → your actual Template ID
   ```

6. **Update recipient email in ContactForm:**
   - Change `to_email: 'pratapabhinav88@gmail.com'` to where you want emails sent

---

## 🎨 Features Implemented

✅ **Stylish Logo Mark** — "A" logo in header  
✅ **Social Links with Icons** — GitHub & LinkedIn with react-icons  
✅ **Enhanced Skills Section** — Interactive cards with hover effects and emoji icons  
✅ **Contact Form** — EmailJS integration for direct messaging  
✅ **3D Card Tilt** — Project cards tilt on hover (Framer Motion based)  
✅ **Scroll Animations** — Fade-in animations on hero and sections  
✅ **Theme Switcher** — Light/Dark mode toggle (top-right of header)  
✅ **Responsive Design** — Mobile-friendly layout  
✅ **Smooth Scrolling** — Anchor links scroll smoothly  

---

## 🎯 Next Steps (Optional)

- Replace emoji icons in skills section with custom images/icons
- Add more projects or update existing ones
- Deploy to **Vercel** or **Netlify** for free hosting
- Add a blog section or portfolio filtering

---

## 📱 Sections

| Section | Details |
|---------|---------|
| Home/Hero | Intro banner with CTA |
| About | Bio, photo, skills summary, social links |
| Projects | 3D tilt cards with links to GitHub repos |
| Skills | Interactive emoji-icon skill cards |
| Contact | EmailJS contact form + social links |

---

## 🛠️ Build & Deploy

**Development:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
```

**Preview Build:**
```bash
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

---

Enjoy your portfolio! 🎉
