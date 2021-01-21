if ("function" === typeof importScripts) {
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
  );

  // Global workbox
  if (workbox) {
    console.log("Workbox is loaded");

    const thirdPartyUrls = [
      'https://fonts.googleapis.com/css?family=Roboto%7CMuli%7CNeuropol',
      'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
      'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
      'https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk30e6fwniDtzM.woff'
    ];

    //`generateSW` and `generateSWString` provide the option
    // to force update an exiting service worker.
    // Since we're using `injectManifest` to build SW,
    // manually overriding the skipWaiting();
    self.addEventListener("install", (event) => {
      // self.skipWaiting();
      // window.location.reload();
      event.waitUntil(
        caches.open('google-fonts')
          .then((cache) => cache.addAll(thirdPartyUrls))
      );
    });

    self.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
      }
    });

    // Manual injection point for manifest files.
    // All assets under build/ and 5MB sizes are precached.
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    workbox.routing.registerRoute(
      ({url}) => {
          return url.origin === "https://fonts.googleapis.com"
              || url.origin === "https://cdnjs.cloudflare.com"
              || url.origin === "https://fonts.gstatic.com"
      },
      new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 30,
          }),
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200]
          }),
        ],
      }),
    );

    // Image caching
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 1000,
            maxAgeSeconds: 60 * 24 * 60 * 60, // 60 Days
          }),
        ],
      })
    );

    // JS, CSS caching
    workbox.routing.registerRoute(
      /\.(?:js|css)$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: "static-resources",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 100,
            maxAgeSeconds: 60 * 24 * 60 * 60, // 60 Days
          }),
        ],
      })
    );
  } else {
    console.error("Workbox could not be loaded. No offline support");
  }
}
