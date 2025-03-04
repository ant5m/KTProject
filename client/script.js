// API configuration
const API_URL = 'http://localhost:5000/api';

// Handle request option toggles
document.addEventListener('DOMContentLoaded', function() {
    const optionButtons = document.querySelectorAll('.request-option-btn');
    const sections = document.querySelectorAll('.request-section');

    // Load projects on page load
    loadProjects();

    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            optionButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show corresponding section
            const option = button.getAttribute('data-option');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${option}-projects`) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Handle project form submission
    const projectForm = document.querySelector('.project-form');
    if (projectForm) {
        projectForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                title: document.getElementById('project-title').value,
                major: document.getElementById('project-major').value,
                expertise: document.getElementById('project-expertise').value,
                description: document.getElementById('project-description').value,
                requirements: document.getElementById('project-requirements').value
            };

            try {
                const response = await fetch(`${API_URL}/projects`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert('Project submitted successfully!');
                    projectForm.reset();
                    loadProjects(); // Reload projects list
                } else {
                    throw new Error('Failed to submit project');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to submit project. Please try again.');
            }
        });
    }

    // Handle filter changes
    const majorFilter = document.getElementById('major-filter');
    const expertiseFilter = document.getElementById('expertise-filter');

    if (majorFilter && expertiseFilter) {
        majorFilter.addEventListener('change', loadProjects);
        expertiseFilter.addEventListener('change', loadProjects);
    }
});

// Function to load projects
async function loadProjects() {
    const majorFilter = document.getElementById('major-filter');
    const expertiseFilter = document.getElementById('expertise-filter');
    const projectsContainer = document.querySelector('.projects-container');

    try {
        let url = `${API_URL}/projects?`;
        const params = new URLSearchParams();

        if (majorFilter.value) params.append('major', majorFilter.value);
        if (expertiseFilter.value) params.append('expertise', expertiseFilter.value);

        url += params.toString();

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch projects');

        const projects = await response.json();
        
        // Clear existing projects
        projectsContainer.innerHTML = '';
        
        // Add new projects
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error:', error);
        projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
    }
}

// Function to create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h2>${project.title}</h2>
        <div class="project-meta">
            <span class="major">Major: ${project.major}</span>
            <span class="expertise">Expertise: ${project.expertise}</span>
        </div>
        <p class="project-description">${project.description}</p>
        ${project.requirements ? `<p class="project-requirements">Requirements: ${project.requirements}</p>` : ''}
        <div class="project-footer">
            <span class="status">Status: ${project.status}</span>
            <button class="join-project" data-project-id="${project.id}">Join Project</button>
        </div>
    `;

    // Add event listener to join button
    const joinButton = card.querySelector('.join-project');
    joinButton.addEventListener('click', () => joinProject(project.id));

    return card;
}

// Function to handle joining a project
async function joinProject(projectId) {
    try {
        const response = await fetch(`${API_URL}/projects/${projectId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'In Progress' })
        });

        if (response.ok) {
            alert('Successfully joined the project!');
            loadProjects(); // Reload projects list
        } else {
            throw new Error('Failed to join project');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to join project. Please try again.');
    }
}
