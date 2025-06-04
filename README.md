# Gergő Fertetics - CV Website

A modern, responsive CV website built with HTML, CSS, and JavaScript, featuring dark/light theme switching and smooth animations.

## 🌐 Live Website

This CV website is hosted on GitHub Pages and can be accessed at:
**[https://your-username.github.io/CV](https://your-username.github.io/CV)**

*Replace `your-username` with your actual GitHub username*

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Automatic system theme detection with manual override options
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: Separate CSS and JS files for better loading
- **GitHub Pages Ready**: Configured for seamless deployment

## 🚀 GitHub Pages Setup

### Option 1: Automatic Deployment (Recommended)

1. **Fork/Clone this repository** to your own GitHub account
2. **Rename the repository** to match your desired URL:
   - For `username.github.io` → name it exactly `username.github.io`
   - For `username.github.io/CV` → name it `CV`
3. **Enable GitHub Pages**:
   - Go to your repository **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**
4. **Wait for deployment** (usually 1-2 minutes)
5. **Access your site** at the provided URL

### Option 2: Custom Domain

If you have a custom domain:

1. Follow steps 1-3 from Option 1
2. In **Pages** settings, add your **Custom domain**
3. Create a `CNAME` file in your repository root with your domain
4. Configure your domain's DNS to point to GitHub Pages

## 📁 Project Structure

```
CV/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and themes
├── script.js           # JavaScript for theme switching and animations
├── cv.png              # Favicon image (CV icon)
├── site.webmanifest    # Web app manifest for PWA features
└── README.md           # This file
```

## 🛠️ Customization

### Personal Information

Edit the content in `index.html`:
- Update the `<title>` tag and header information
- Modify personal details, experience, skills, and achievements
- Add or remove sections as needed

### Styling

Customize the appearance in `styles.css`:
- Colors are defined in CSS custom properties
- Theme colors are managed through data attributes
- Responsive breakpoints can be adjusted

### Functionality

Extend the JavaScript in `script.js`:
- Theme management system
- Animation controls
- Additional interactive features

## 🎨 Theme System

The website supports three theme modes:
- **🌙 Dark Mode**: Manual dark theme
- **☀️ Light Mode**: Manual light theme  
- **🔄 Auto Mode**: Follows system preference (default)

Theme preference is saved in localStorage and persists between visits.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js (if you have live-server installed)
   npx live-server
   ```

### Making Changes

1. Edit files locally
2. Test in browser
3. Commit and push to GitHub
4. GitHub Pages will automatically rebuild and deploy

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits & Attribution

- **Favicon**: CV icons created by [Good Ware - Flaticon](https://www.flaticon.com/free-icons/cv)

## 🤝 Contributing

Feel free to fork this project and customize it for your own CV. If you make improvements that could benefit others, pull requests are welcome!

---

**Built with ❤️ for GitHub Pages deployment**