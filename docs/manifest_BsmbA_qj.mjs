import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_EUbCdetL.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/","cacheDir":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/node_modules/.astro/","outDir":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/","srcDir":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/","publicDir":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/public/","buildClientDir":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/client/","buildServerDir":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/server/","adapterName":"","routes":[{"file":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/archives/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/archives","isIndex":true,"type":"page","pattern":"^\\/archives\\/?$","segments":[[{"content":"archives","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archives/index.astro","pathname":"/archives","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/og.png","links":[],"scripts":[],"styles":[],"routeData":{"route":"/og.png","isIndex":false,"type":"endpoint","pattern":"^\\/og\\.png\\/?$","segments":[[{"content":"og.png","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/og.png.ts","pathname":"/og.png","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/Personal-Website/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Tag.astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/layouts/PostDetails.astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/posts/[...slug]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...slug]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/layouts/Main.astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/archives/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/archives/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/posts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/content.config.ts",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/utils/getPath.ts",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Card.astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/posts/[...slug]/index.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[...slug]/index.png@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/utils/generateOgImages.ts",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/og.png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/og.png@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/about.md",{"propagation":"none","containsHead":true}],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\u0000@astro-page:src/pages/archives/index@_@astro":"pages/archives.astro.mjs","\u0000@astro-page:src/pages/og.png@_@ts":"pages/og.png.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]/index.png@_@ts":"pages/posts/_---slug_/index.png.astro.mjs","\u0000@astro-page:src/pages/posts/[...page]@_@astro":"pages/posts/_---page_.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]/index@_@astro":"pages/posts/_---slug_.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"pages/tags/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BsmbA_qj.mjs","/Users/emmanuelburuvuru/Desktop/Website/astro-paper/.astro/content-assets.mjs":"chunks/content-assets_DJjZDR62.mjs","/Users/emmanuelburuvuru/Desktop/Website/astro-paper/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BqOhdRyv.mjs","/Users/emmanuelburuvuru/Desktop/Website/astro-paper/node_modules/.pnpm/astro@5.5.2_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.2_typescript@5.8.2_yaml@2.7.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C3vT3Ylg.mjs","/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/search.astro?astro&type=script&index=0&lang.ts":"_astro/search.astro_astro_type_script_index_0_lang.BHZgX_oq.js","/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.Mdz3KX3V.js","/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/layouts/Main.astro?astro&type=script&index=0&lang.ts":"_astro/Main.astro_astro_type_script_index_0_lang.DmwrTf24.js","/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/BackButton.astro?astro&type=script&index=0&lang.ts":"_astro/BackButton.astro_astro_type_script_index_0_lang.CWLqCqN9.js","/Users/emmanuelburuvuru/Desktop/Website/astro-paper/node_modules/.pnpm/astro@5.5.2_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.2_typescript@5.8.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","/Users/emmanuelburuvuru/Desktop/Website/astro-paper/node_modules/.pnpm/@pagefind+default-ui@1.3.0/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.BmCE0Kb2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Header.astro?astro&type=script&index=0&lang.ts","function s(){const e=document.querySelector(\"#menu-btn\"),t=document.querySelector(\"#menu-items\"),n=document.querySelector(\"#menu-icon\"),o=document.querySelector(\"#close-icon\");!e||!t||!n||!o||e.addEventListener(\"click\",()=>{const c=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",c?\"false\":\"true\"),e.setAttribute(\"aria-label\",c?\"Open Menu\":\"Close Menu\"),t.classList.toggle(\"hidden\"),n.classList.toggle(\"hidden\"),o.classList.toggle(\"hidden\")})}s();document.addEventListener(\"astro:after-swap\",s);"],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/layouts/Main.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const t=document.querySelector(\"#main-content\")?.dataset?.backurl;t&&sessionStorage.setItem(\"backUrl\",t)});"],["/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/BackButton.astro?astro&type=script&index=0&lang.ts","function o(){const t=document.querySelector(\"#back-button\"),e=sessionStorage.getItem(\"backUrl\");e&&t&&(t.href=e)}document.addEventListener(\"astro:page-load\",o);o();"]],"assets":["/Personal-Website/file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/404.html","/Personal-Website/file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/about/index.html","/Personal-Website/file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/archives/index.html","/Personal-Website/file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/og.png","/Personal-Website/file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/robots.txt","/Personal-Website/file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/rss.xml","/Personal-Website/file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/search/index.html","/Personal-Website/file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/tags/index.html","/Personal-Website/file:///Users/emmanuelburuvuru/Desktop/Website/astro-paper/docs/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"ENpIEAoNLphGTaNiizipXlzJTW5mVcByyft7sFTdcGY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
