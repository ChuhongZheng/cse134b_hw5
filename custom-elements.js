// Hello World Console Output Element
class HelloWorldConsole extends HTMLElement {
  constructor() {
    super();
    
    // Directly output "Hello World!" to the console
    console.log("Hello World!");
  }
}

// Define the new element
customElements.define('hello-world-console', HelloWorldConsole);

// Project Card Custom Element
class ProjectCard extends HTMLElement {
  constructor() {
    super();
    
    // Create a shadow root
    this.attachShadow({mode: 'open'});
  }
  
  connectedCallback() {
    // Get attributes
    const title = this.getAttribute('title') || 'Untitled';
    const description = this.getAttribute('description') || 'No description available';
    const image = this.getAttribute('image') || '';
    const alt = this.getAttribute('alt') || '';
    const link = this.getAttribute('link') || '#';
    const type = this.getAttribute('type') || '';
    
    // Apply CSS styles
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: 12px;
        padding: 16px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background: var(--card-bg, #fff);
        font-family: var(--font-body, Arial, sans-serif);
        transition: transform 0.3s ease;
      }
      
      :host(:hover) {
        transform: translateY(-5px);
      }
      
      .card-title {
        font-family: var(--font-heading, Impact, sans-serif);
        font-size: 1.5rem;
        margin: 0 0 12px 0;
        color: var(--title-color, #333);
        text-align: center;
        flex-shrink: 0;
      }
      
      .card-image-container {
        width: 100%;
        height: 200px;
        margin-bottom: 12px;
        flex-shrink: 0;
      }
      
      .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
      
      .card-description {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 16px;
        color: var(--text-color, #666);
        flex-grow: 1;
      }
      
      .card-link {
        display: inline-block;
        padding: 8px 16px;
        background-color: var(--accent-color, #4A7B9D);
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
        text-align: center;
        width: 100%;
        transition: background-color 0.3s ease;
        flex-shrink: 0;
      }
      
      .card-link:hover {
        background-color: var(--accent-hover, #3a6b8d);
      }
      
      /* Type-specific styles */
      :host([type="soccer"]) {
        --card-bg: #e8f4e8;
        --accent-color: #4CAF50;
        --accent-hover: #45a049;
      }
      
      :host([type="basketball"]) {
        --card-bg: #f4e8e8;
        --accent-color: #F44336;
        --accent-hover: #d32f2f;
      }
      
      :host([type="travel"]) {
        --card-bg: #e8e8f4;
        --accent-color: #2196F3;
        --accent-hover: #1976D2;
      }
    `;
    
    // Create card HTML structure
    this.shadowRoot.innerHTML = `
      <style>${style.textContent}</style>
      <h2 class="card-title">${title}</h2>
      ${image ? `<div class="card-image-container">
        <picture>
          <img src="${image}" alt="${alt}" class="card-image">
        </picture>
      </div>` : ''}
      <p class="card-description">${description}</p>
      <a href="${link}" class="card-link">Learn More</a>
    `;
  }
}

// Define the project-card element
customElements.define('project-card', ProjectCard);