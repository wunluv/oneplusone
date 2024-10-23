import devConfig from './astro.config.dev.mjs';
import prodConfig from './astro.config.prod.mjs';

const isProduction = process.env.NODE_ENV === 'production';

export default isProduction ? prodConfig : devConfig;