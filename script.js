// Theme Management
const themeManager = {
    init() {
        this.buttons = document.querySelectorAll('.theme-button');
        this.body = document.body;
        this.loadTheme();
        this.bindEvents();
    },

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'auto';
        this.setTheme(savedTheme);
    },

    setTheme(theme) {
        // Update active button
        this.buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });

        // Apply theme
        if (theme === 'auto') {
            this.body.removeAttribute('data-theme');
        } else {
            this.body.setAttribute('data-theme', theme);
        }

        // Save preference
        localStorage.setItem('theme', theme);
    },

    bindEvents() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.setTheme(button.dataset.theme);
            });
        });
    }
};

// Add some interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme manager
    themeManager.init();

    // Add colored borders to experience items
    addExperienceColors();

    // Add technology cards to experience items
    addTechnologyCards();

    // Add subtle fade-in animation for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Function to add colored borders to experience items
function addExperienceColors() {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(item => {
        const companyElement = item.querySelector('.company');
        if (companyElement) {
            const companyText = companyElement.textContent;
            
            if (companyText.includes('Deutsche Telekom')) {
                item.classList.add('telekom');
            } else if (companyText.includes('xantolohandball.com') || companyText.includes('y-sports.xyz')) {
                item.classList.add('private-project');
            }
            // Solutio GmbH and Morgan Stanley will use the default blue border
        }
    });
}

// Function to add technology cards to experience items
function addTechnologyCards() {
    const experienceItems = document.querySelectorAll('.experience-item');
      // Technology mappings based on company and role
    const techMappings = {
        'Solutio GmbH - Charly Praxis Management': ['Java', 'Spring Boot', 'React', 'TypeScript', 'Hexagonal Architecture', 'Microservices', 'REST APIs', 'PostgreSQL', 'Docker', 'AI/LLM'],
        'Deutsche Telekom IT Hungary - ACC Project': ['Java', 'Quarkus', 'CaaS', 'Helm', 'REST APIs', 'Microservices', 'Flyway', 'Kubernetes', 'Gitlab CI/CD', 'InfluxDB'],
        'Morgan Stanley - D1 Trading Systems': ['Java', 'Python', 'Zero GC', 'JUnit', 'Low Latency', 'Reactive', 'Jenkins', 'Prometheus', 'Grafana'],
        'Deutsche Telekom IT Hungary - SWE BE 1': ['Team Leadership', 'People Management', 'Process Management', 'Training'],        'Deutsche Telekom IT Hungary - ABILIT': ['Java', 'Oracle', 'PL/SQL', 'Billing Systems', 'High-Availability', 'Legacy Systems'],
        'Deutsche Telekom IT Hungary - IPMRS': ['Java', 'High Availability', 'Git', 'ClearCase', 'Agile', 'Configuration Management', 'MongoDB'],
        'xantolohandball.com & y-sports.xyz': ['JavaScript', 'Node.js', 'Android', 'Next.js', 'Live Streaming']
    };
    
    // Category classifications for styling
    const techCategories = {
        // Languages
        'Java': 'language', 'C++': 'language', 'JavaScript': 'language', 'Python': 'language', 'PL/SQL': 'language', 'TypeScript': 'language',
        
        // Frameworks
        'Quarkus': 'framework', 'Spring Boot': 'framework', 'React': 'framework', 'Material UI': 'framework', 'Node.js': 'framework', 'Next.js': 'framework',
        
        // Databases
        'Oracle': 'database', 'PostgreSQL': 'database', 'MongoDB': 'database', 'InfluxDB': 'database', 'Prometheus': 'database',
        
        // Tools
        'Git': 'tool', 'Jenkins': 'tool', 'Docker': 'tool', 'ClearCase': 'tool', 'JUnit': 'tool', 'Bazel': 'tool', 'GitLab CI/CD': 'tool', 'Grafana': 'tool', 'Flyway': 'tool', 'Docker': 'tool',
        
        // Cloud/Infrastructure
        'Kubernetes': 'cloud', 'Microservices': 'cloud', 'AWS': 'cloud', 'GCP': 'cloud', 'CaaS': 'cloud', 'Helm': 'cloud',
        
        // Special categories (will use default styling)
        'Team Leadership': '', 'Agile': '', 'Scrum': '', 'AI/ML': '', 'Real-time Systems': '', 
        'High-Performance Computing': '', 'Financial Systems': '', 'Process Management': '', 
        'Training': '', 'Billing Systems': '', 'High-Availability': '', 'Legacy Systems': '',
        'Configuration Management': '', 'Android': '', 'Mobile Development': '', 'Live Streaming': '',
        'Web Platform': '', 'REST APIs': ''
    };
      experienceItems.forEach(item => {
        const companyElement = item.querySelector('.company');
        if (companyElement) {
            const companyText = companyElement.textContent.trim();
            const technologies = techMappings[companyText];
            
            if (technologies) {
                // Create tech cards container
                const techCardsContainer = document.createElement('div');
                techCardsContainer.className = 'tech-cards';
                
                // Create individual tech cards
                technologies.forEach(tech => {
                    const techCard = document.createElement('span');
                    techCard.className = 'tech-card';
                    techCard.textContent = tech;
                      // Add category class for styling
                    const category = techCategories[tech];
                    if (category) {
                        techCard.classList.add(category);
                    }
                    
                    techCardsContainer.appendChild(techCard);
                });
                
                // Append to the experience item
                item.appendChild(techCardsContainer);
            }
        }
    });
}
