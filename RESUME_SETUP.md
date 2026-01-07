# Resume Setup Instructions

## Adding Your Resume

To enable the "View Resume" button in the header, you need to add your resume PDF file to the `public` folder.

### Steps:

1. **Prepare your resume PDF**
   - Make sure your resume is saved as a PDF file
   - Name it: `resume.pdf` (or `Resume.pdf` - case may vary by OS)

2. **Add to public folder**
   - Copy your resume PDF file
   - Paste it into the `public` folder in your project
   - The path should be: `public/resume.pdf`

3. **Verify**
   - The file should be accessible at: `http://localhost:3030/resume.pdf` (in development)
   - Or: `https://your-domain.com/resume.pdf` (in production)

### File Structure:
```
public/
  ├── resume.pdf  ← Add your resume here
  ├── favicon.ico
  ├── Grad pic.jpg
  └── ...
```

### Features:
- **View Resume Button**: Opens the resume in a new tab
- **Download Button**: Downloads the resume with filename "Arbie_Tomas_Resume.pdf"
- **Responsive**: Button text adapts on mobile devices

### Customization:
If you want to change the resume filename or location, update the paths in `src/components/Header.tsx`:
- Line with `window.open("/resume.pdf", "_blank")` - for viewing
- Line with `link.href = "/resume.pdf"` - for download
- Line with `link.download = "Arbie_Tomas_Resume.pdf"` - download filename

