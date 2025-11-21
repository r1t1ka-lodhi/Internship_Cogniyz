// Simple client-side router
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = '';
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    window.location.hash = path;
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const route = this.routes[hash];
    if (route) {
      route();
      this.currentRoute = hash;
    }
  }
}

// Initialize router
const router = new Router();

// Define routes
router.addRoute('/', () => showPage('form'));
router.addRoute('/responses', () => showPage('responses'));
router.addRoute('/success', () => showPage('success'));

function showPage(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  
  // Show selected page
  const targetPage = document.getElementById(page + 'Page');
  if (targetPage) {
    targetPage.style.display = 'block';
  }
}

// Navigation helper
function navigateTo(path) {
  router.navigate(path);
}