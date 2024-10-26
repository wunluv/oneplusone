import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './astro/server_CCuxw6Jy.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.12.2_sass@1.77.8/node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/_slug_.DPM5bIGR.css"},{"type":"inline","content":"@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-cyrillic-ext-400-normal.D_sDW4LN.woff2) format(\"woff2\"),url(/_astro/pt-serif-cyrillic-ext-400-normal.CCV3yDrV.woff) format(\"woff\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-cyrillic-400-normal.nPdkmt1d.woff2) format(\"woff2\"),url(/_astro/pt-serif-cyrillic-400-normal.BajZm3vt.woff) format(\"woff\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-latin-ext-400-normal.sjwwVmUj.woff2) format(\"woff2\"),url(/_astro/pt-serif-latin-ext-400-normal.CCa-JUDh.woff) format(\"woff\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-latin-400-normal.Cx0mQj7e.woff2) format(\"woff2\"),url(/_astro/pt-serif-latin-400-normal.DIu_lRW0.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n::-moz-selection{background:#ffc4dd;color:#000}::selection{background:#ffc4dd;color:#000}.love{display:inline-block;position:relative;top:.1em;transform:scale(.9);animation:love .5s infinite linear alternate-reverse}@keyframes love{to{transform:scale(1.1)}}.book-container{display:flex;align-items:center;justify-content:center;perspective:600px;margin:0 auto}@keyframes initAnimation{0%{transform:rotateY(0)}to{transform:rotateY(-30deg)}}.book{width:300px;height:480px;position:relative;transform-style:preserve-3d;transform:rotateY(-30deg);transition:1s ease;animation:1s ease 0s 1 initAnimation}.book:hover{transform:rotateY(0)}.book>:first-child{position:absolute;top:0;left:0;background-color:red;width:300px;height:480px;transform:translateZ(25px);background-color:#01060f;border-radius:0 2px 2px 0;box-shadow:5px 5px 20px #666}.book:before{position:absolute;content:\" \";background-color:#00f;left:0;top:3px;width:48px;height:476px;transform:translate(272px) rotateY(90deg);background:linear-gradient(90deg,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff)}.book:after{position:absolute;top:0;left:0;content:\" \";width:300px;height:480px;transform:translateZ(-25px);background-color:#01060f;border-radius:0 2px 2px 0;box-shadow:-10px 0 50px 10px #666}.ribbon{position:absolute;top:0;right:0;width:150px;height:30px;margin-right:-40px;margin-top:20px;padding-top:5px;transform:rotate(45deg)}.underline{background:linear-gradient(to top,#ffc4dd 35%,transparent 35%);text-decoration:none}blockquote p span{font-size:1.125rem!important;font-weight:300}blockquote p{padding:1rem}p{padding:1rem;font-family:PT Serif,Georgia,serif;font-size:1.2rem}\n"}],"routeData":{"route":"/tags/[tag]","isIndex":false,"type":"page","pattern":"^\\/tags\\/([^/]+?)\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/tags/[tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/_slug_.DPM5bIGR.css"},{"type":"inline","content":"@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-cyrillic-ext-400-normal.D_sDW4LN.woff2) format(\"woff2\"),url(/_astro/pt-serif-cyrillic-ext-400-normal.CCV3yDrV.woff) format(\"woff\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-cyrillic-400-normal.nPdkmt1d.woff2) format(\"woff2\"),url(/_astro/pt-serif-cyrillic-400-normal.BajZm3vt.woff) format(\"woff\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-latin-ext-400-normal.sjwwVmUj.woff2) format(\"woff2\"),url(/_astro/pt-serif-latin-ext-400-normal.CCa-JUDh.woff) format(\"woff\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-latin-400-normal.Cx0mQj7e.woff2) format(\"woff2\"),url(/_astro/pt-serif-latin-400-normal.DIu_lRW0.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n::-moz-selection{background:#ffc4dd;color:#000}::selection{background:#ffc4dd;color:#000}.love{display:inline-block;position:relative;top:.1em;transform:scale(.9);animation:love .5s infinite linear alternate-reverse}@keyframes love{to{transform:scale(1.1)}}.book-container{display:flex;align-items:center;justify-content:center;perspective:600px;margin:0 auto}@keyframes initAnimation{0%{transform:rotateY(0)}to{transform:rotateY(-30deg)}}.book{width:300px;height:480px;position:relative;transform-style:preserve-3d;transform:rotateY(-30deg);transition:1s ease;animation:1s ease 0s 1 initAnimation}.book:hover{transform:rotateY(0)}.book>:first-child{position:absolute;top:0;left:0;background-color:red;width:300px;height:480px;transform:translateZ(25px);background-color:#01060f;border-radius:0 2px 2px 0;box-shadow:5px 5px 20px #666}.book:before{position:absolute;content:\" \";background-color:#00f;left:0;top:3px;width:48px;height:476px;transform:translate(272px) rotateY(90deg);background:linear-gradient(90deg,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff)}.book:after{position:absolute;top:0;left:0;content:\" \";width:300px;height:480px;transform:translateZ(-25px);background-color:#01060f;border-radius:0 2px 2px 0;box-shadow:-10px 0 50px 10px #666}.ribbon{position:absolute;top:0;right:0;width:150px;height:30px;margin-right:-40px;margin-top:20px;padding-top:5px;transform:rotate(45deg)}.underline{background:linear-gradient(to top,#ffc4dd 35%,transparent 35%);text-decoration:none}blockquote p span{font-size:1.125rem!important;font-weight:300}blockquote p{padding:1rem}p{padding:1rem;font-family:PT Serif,Georgia,serif;font-size:1.2rem}\n"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/_slug_.DPM5bIGR.css"},{"type":"inline","content":"@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-cyrillic-ext-400-normal.D_sDW4LN.woff2) format(\"woff2\"),url(/_astro/pt-serif-cyrillic-ext-400-normal.CCV3yDrV.woff) format(\"woff\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-cyrillic-400-normal.nPdkmt1d.woff2) format(\"woff2\"),url(/_astro/pt-serif-cyrillic-400-normal.BajZm3vt.woff) format(\"woff\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-latin-ext-400-normal.sjwwVmUj.woff2) format(\"woff2\"),url(/_astro/pt-serif-latin-ext-400-normal.CCa-JUDh.woff) format(\"woff\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-latin-400-normal.Cx0mQj7e.woff2) format(\"woff2\"),url(/_astro/pt-serif-latin-400-normal.DIu_lRW0.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n::-moz-selection{background:#ffc4dd;color:#000}::selection{background:#ffc4dd;color:#000}.love{display:inline-block;position:relative;top:.1em;transform:scale(.9);animation:love .5s infinite linear alternate-reverse}@keyframes love{to{transform:scale(1.1)}}.book-container{display:flex;align-items:center;justify-content:center;perspective:600px;margin:0 auto}@keyframes initAnimation{0%{transform:rotateY(0)}to{transform:rotateY(-30deg)}}.book{width:300px;height:480px;position:relative;transform-style:preserve-3d;transform:rotateY(-30deg);transition:1s ease;animation:1s ease 0s 1 initAnimation}.book:hover{transform:rotateY(0)}.book>:first-child{position:absolute;top:0;left:0;background-color:red;width:300px;height:480px;transform:translateZ(25px);background-color:#01060f;border-radius:0 2px 2px 0;box-shadow:5px 5px 20px #666}.book:before{position:absolute;content:\" \";background-color:#00f;left:0;top:3px;width:48px;height:476px;transform:translate(272px) rotateY(90deg);background:linear-gradient(90deg,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff)}.book:after{position:absolute;top:0;left:0;content:\" \";width:300px;height:480px;transform:translateZ(-25px);background-color:#01060f;border-radius:0 2px 2px 0;box-shadow:-10px 0 50px 10px #666}.ribbon{position:absolute;top:0;right:0;width:150px;height:30px;margin-right:-40px;margin-top:20px;padding-top:5px;transform:rotate(45deg)}.underline{background:linear-gradient(to top,#ffc4dd 35%,transparent 35%);text-decoration:none}blockquote{font-style:italic;border-left:4px solid #d1d5db;padding-left:1rem}blockquote p span{font-size:1.125rem!important;font-weight:300}blockquote p{padding:1rem}p{padding:1rem;font-family:PT Serif,Georgia,serif;font-size:1.2rem}\n.post-card-image[data-astro-cid-ifodokdz]{width:400px;height:200px;background:#c5d2d9 no-repeat center center;-o-object-fit:cover;object-fit:cover}.post-details[data-astro-cid-ifodokdz]{display:flex;flex-direction:column}.author-info[data-astro-cid-ifodokdz]{display:flex;align-items:center}.author-image[data-astro-cid-ifodokdz]{width:30px;height:30px;border-radius:50%;margin-right:10px}.tags[data-astro-cid-ifodokdz]{margin-top:10px}.tag[data-astro-cid-ifodokdz]{display:inline-block;background:#e0e0e0;border-radius:3px;padding:2px 5px;margin-right:5px}\n"}],"routeData":{"route":"/[slug]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/_slug_.DPM5bIGR.css"},{"type":"inline","content":"@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-cyrillic-ext-400-normal.D_sDW4LN.woff2) format(\"woff2\"),url(/_astro/pt-serif-cyrillic-ext-400-normal.CCV3yDrV.woff) format(\"woff\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-cyrillic-400-normal.nPdkmt1d.woff2) format(\"woff2\"),url(/_astro/pt-serif-cyrillic-400-normal.BajZm3vt.woff) format(\"woff\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-latin-ext-400-normal.sjwwVmUj.woff2) format(\"woff2\"),url(/_astro/pt-serif-latin-ext-400-normal.CCa-JUDh.woff) format(\"woff\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:\"PT Serif\";font-style:normal;font-display:swap;font-weight:400;src:url(/_astro/pt-serif-latin-400-normal.Cx0mQj7e.woff2) format(\"woff2\"),url(/_astro/pt-serif-latin-400-normal.DIu_lRW0.woff) format(\"woff\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n::-moz-selection{background:#ffc4dd;color:#000}::selection{background:#ffc4dd;color:#000}.love{display:inline-block;position:relative;top:.1em;transform:scale(.9);animation:love .5s infinite linear alternate-reverse}@keyframes love{to{transform:scale(1.1)}}.book-container{display:flex;align-items:center;justify-content:center;perspective:600px;margin:0 auto}@keyframes initAnimation{0%{transform:rotateY(0)}to{transform:rotateY(-30deg)}}.book{width:300px;height:480px;position:relative;transform-style:preserve-3d;transform:rotateY(-30deg);transition:1s ease;animation:1s ease 0s 1 initAnimation}.book:hover{transform:rotateY(0)}.book>:first-child{position:absolute;top:0;left:0;background-color:red;width:300px;height:480px;transform:translateZ(25px);background-color:#01060f;border-radius:0 2px 2px 0;box-shadow:5px 5px 20px #666}.book:before{position:absolute;content:\" \";background-color:#00f;left:0;top:3px;width:48px;height:476px;transform:translate(272px) rotateY(90deg);background:linear-gradient(90deg,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff,#f9f9f9,#fff)}.book:after{position:absolute;top:0;left:0;content:\" \";width:300px;height:480px;transform:translateZ(-25px);background-color:#01060f;border-radius:0 2px 2px 0;box-shadow:-10px 0 50px 10px #666}.ribbon{position:absolute;top:0;right:0;width:150px;height:30px;margin-right:-40px;margin-top:20px;padding-top:5px;transform:rotate(45deg)}.underline{background:linear-gradient(to top,#ffc4dd 35%,transparent 35%);text-decoration:none}blockquote p span{font-size:1.125rem!important;font-weight:300}blockquote p{padding:1rem}p{padding:1rem;font-family:PT Serif,Georgia,serif;font-size:1.2rem}\n.post-card-image[data-astro-cid-ifodokdz]{width:400px;height:200px;background:#c5d2d9 no-repeat center center;-o-object-fit:cover;object-fit:cover}.post-details[data-astro-cid-ifodokdz]{display:flex;flex-direction:column}.author-info[data-astro-cid-ifodokdz]{display:flex;align-items:center}.author-image[data-astro-cid-ifodokdz]{width:30px;height:30px;border-radius:50%;margin-right:10px}.tags[data-astro-cid-ifodokdz]{margin-top:10px}.tag[data-astro-cid-ifodokdz]{display:inline-block;background:#e0e0e0;border-radius:3px;padding:2px 5px;margin-right:5px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://one.mojah2.mojahmedia.net","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/tags/[tag].astro",{"propagation":"none","containsHead":true}],["/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/.pnpm/astro@4.12.2_sass@1.77.8/node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/node_modules/.pnpm/astro@4.12.2_sass@1.77.8/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_aNbuPIwT.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/pt-serif-cyrillic-ext-400-normal.D_sDW4LN.woff2","/_astro/pt-serif-cyrillic-400-normal.nPdkmt1d.woff2","/_astro/pt-serif-latin-ext-400-normal.sjwwVmUj.woff2","/_astro/pt-serif-latin-400-normal.Cx0mQj7e.woff2","/_astro/pt-serif-cyrillic-ext-400-normal.CCV3yDrV.woff","/_astro/pt-serif-cyrillic-400-normal.BajZm3vt.woff","/_astro/pt-serif-latin-ext-400-normal.CCa-JUDh.woff","/_astro/pt-serif-latin-400-normal.DIu_lRW0.woff","/_astro/_slug_.DPM5bIGR.css","/444470733_859814116191287_3561418244508521862_n.jpg","/author.jpeg","/book-table.jpeg","/chapter-4.pdf","/cover-2.jpeg","/cover.jpeg","/favicon.jpeg","/favicon.png","/gloria.jpg","/open-book.jpg","/san.jpg","/icons8-medium-ios-16-filled/icons8-medium-50.svg","/icons8-medium-ios-16-filled/icons8-medium-512.svg","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, DEFAULT_404_ROUTE as D, Logger as L, default404Instance as d, ensure404Route as e, getEventPrefix as g, levels as l, manifest as m };
