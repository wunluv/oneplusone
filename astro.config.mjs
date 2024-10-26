// Determine the environment
const isProduction = process.env.NODE_ENV === 'production'; // Check if in production

// Import the appropriate configuration based on the environment
const config = isProduction
    ? await import('./astro.config.prod.mjs') // Load production config if true
    : await import('./astro.config.dev.mjs'); // Load development config if false

// Export the configuration
export default config.default;