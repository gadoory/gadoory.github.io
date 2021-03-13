'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d23cbe03a4e85423584af6a662ad9a7f",
"index.html": "00d9b712ae0949020ed2289b93ae44f0",
"/": "00d9b712ae0949020ed2289b93ae44f0",
"main.dart.js": "dac1255dabc36c2b9adfadd6fecec70c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "af508bfdb6ba7a0f614ce2ec657d4d82",
"icons/Icon-512.png": "c084891e9aa4f2bf4bc6a7373637c2f8",
"packages/timezone/data/latest.tzf": "295f8590ec3c47627d3c7b421c2710c3",
"manifest.json": "efad930b149d291be17f969a96d10d20",
".git/config": "a66fd1548937ba3f667a2d7fd73e6956",
".git/objects/61/2636b04613efe4d45a7f9d28d05ea80834b126": "4a8029f760cb76b59411f27f551ed63b",
".git/objects/ad/9cdb240f1b03cc5e6f95bb4706f77edd5a45bc": "4bfc9990592b0252932917abf6e93e0a",
".git/objects/bb/5f9fe64347ad537d1935c0a54a2cc4e413d970": "cc0600f6b28659dc17aea2feabd1a97f",
".git/objects/cf/d1e33c673408cfa266231d6b831a27364a372b": "11f39ebc02f87140b6a26f4bbb67497f",
".git/objects/fe/6a2ac57a58d96cee9afce2f6dbf7de86e310d2": "55de4e574cbcb087861ed38708123843",
".git/objects/c1/0eceff115d8a95d89d246e73253b3cf5361ad1": "c5053050b2268d1a16429d92c052303f",
".git/objects/pack/pack-142fc0a33314521bfdc66b03311e7394029ff218.pack": "388e1de4d3ef18dba5ad4b466dfed149",
".git/objects/pack/pack-142fc0a33314521bfdc66b03311e7394029ff218.idx": "304cbd681444ae2a603dfca7d89334d3",
".git/objects/45/876e3ce23ec5bbedc7fe45ce0d2e30a471bfeb": "4633c8f720c5d968268a46e4a22a7c2f",
".git/objects/80/96079ac79664dd7df5008eccb0111071f479b9": "1aab3ee2fb98361be5a8bd80a45f8382",
".git/objects/8f/4030e75c7d1faca375154cb050936dc0e11765": "e0d9294812122c889f0e1203e8ee7cf0",
".git/objects/09/67784c406697232f845e740731443a0fcdce9c": "55db6fd9815b6c7bd814f75668b845f7",
".git/objects/78/f32614253372733995eea9bbdef52c1c78a1e6": "cdb5affa69cc8a191ad4ce505afac1ce",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f3a089ea22c58a906df110086e913c6",
".git/logs/refs/heads/master": "1f3a089ea22c58a906df110086e913c6",
".git/logs/refs/remotes/origin/master": "cb7b3cf4f1704a001a204510dddb3d19",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "eada9a9fa233074db67b33712a4d341b",
".git/refs/remotes/origin/master": "eada9a9fa233074db67b33712a4d341b",
".git/index": "bfa0fbf297444c2b972827f8b4e4fbd5",
".git/COMMIT_EDITMSG": "fa22c85771deca6b07dd702b9523c051",
".git/FETCH_HEAD": "f78419da0be8d8c0acb458c8437594fa",
"assets/AssetManifest.json": "3f5422941c716bddc7098b93a9173a13",
"assets/NOTICES": "7e9f2c9bd84bcf7f13881dada3cad623",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/timezone/data/latest.tzf": "295f8590ec3c47627d3c7b421c2710c3",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/logo_uber.png": "aef23a298336c15c00bb401f075813ca",
"assets/assets/heart.gif": "ca97bde328433c2497b154afdee5f8d7",
"assets/assets/icon_arrow_up.png": "4718400159607e5f5fcf0fd5720aa56a",
"assets/assets/city_toronto.png": "969f6970d3fc55a1db5f39b3302b081a",
"assets/assets/1.5x/logo_uber.png": "7ba2677f665853a6bd3990623c478553",
"assets/assets/1.5x/icon_arrow_up.png": "944b9d85904df6b2249cc0a2b749f318",
"assets/assets/1.5x/city_toronto.png": "bdca1ff7e5edd23ecc81798897181942",
"assets/assets/1.5x/city_seoul.png": "25cdc1286360c6184ba15afbdcae5494",
"assets/assets/1.5x/icon_weather_50.png": "e189748486f02e6c1edd5fd1a263c91d",
"assets/assets/1.5x/city_los_angeles.png": "09bae5d2903b125a6a344ed8a28c4105",
"assets/assets/1.5x/city_new_york.png": "4fdd06bbfccb3063cb8be2d457bfc841",
"assets/assets/1.5x/icon_weather_09.png": "d903f9640e0eda75e50c77477d096e84",
"assets/assets/1.5x/city_london.png": "169d37ae17b894fc8f647b9559801394",
"assets/assets/1.5x/icon_weather_03.png": "5279c1fb9f7cdfff9312115ea8cb403c",
"assets/assets/1.5x/icon_weather_02.png": "ca49c3d550b0bc0cd7a60695911c53a9",
"assets/assets/1.5x/icon_weather_01.png": "12f068251542fd2c8abe15c0e2099de5",
"assets/assets/1.5x/icon_weather_11.png": "9e17a5e8ec9020c0de7f8d66f10b0744",
"assets/assets/1.5x/icon_weather_10.png": "c2123cad60b1d504a1169f4dbbec72d2",
"assets/assets/1.5x/icon_weather_04.png": "7d1bed09529518ec744ea9b1b71556d7",
"assets/assets/1.5x/icon_weather_13.png": "a04d7d61e275ade7bd75dae78b8338db",
"assets/assets/1.5x/city_seattle.png": "7f63a414443b8600d75198b343fb3cb7",
"assets/assets/1.5x/city_hong_kong.png": "fa492c6fc91649739a83c0af973fc860",
"assets/assets/1.5x/icon_arrow_down.png": "f8803016183bb0c092fe89e446c9d21a",
"assets/assets/city_seoul.png": "a97c9265432f39bce617910079a24a23",
"assets/assets/icon_weather_50.png": "fa6836a1cc510802b948ece8774afe23",
"assets/assets/2.0x/logo_uber.png": "8ca31057b9ce0a6eb812c1f606b46f07",
"assets/assets/2.0x/icon_arrow_up.png": "a77907c02217a441935259e387ec6bb3",
"assets/assets/2.0x/city_toronto.png": "ba36539437462b4b35b3f91c950e13b5",
"assets/assets/2.0x/city_seoul.png": "f8a3a68ab2a380165ac5bdc7f510e778",
"assets/assets/2.0x/icon_weather_50.png": "b52f7c921368e1d9bcd0bdbc1a4f685d",
"assets/assets/2.0x/city_los_angeles.png": "45d0d7b9a8b3c401dcbec4eebcb9334e",
"assets/assets/2.0x/city_new_york.png": "14418c9d0791a9ce62c657629717bb4d",
"assets/assets/2.0x/icon_weather_09.png": "1c06a5ac3e2d7db70b46ac9a8796e16b",
"assets/assets/2.0x/city_london.png": "022115930ee77965a508118e6b91b40a",
"assets/assets/2.0x/icon_weather_03.png": "9ab94d413bb09b00d7454793f0c33554",
"assets/assets/2.0x/icon_weather_02.png": "9ab94d413bb09b00d7454793f0c33554",
"assets/assets/2.0x/icon_weather_01.png": "a15a5fe518831c2770ef6181e4ca2451",
"assets/assets/2.0x/icon_weather_11.png": "d6b880e0e06a9912caf6e032741f4c32",
"assets/assets/2.0x/icon_weather_10.png": "df0088d7ec7484b3ac450ecb98cd82d0",
"assets/assets/2.0x/icon_weather_04.png": "9ab94d413bb09b00d7454793f0c33554",
"assets/assets/2.0x/icon_weather_13.png": "8762b9cf61d2fd0a099e5447ca004217",
"assets/assets/2.0x/city_seattle.png": "6338b681dac871c29a0e4edd183a8ad7",
"assets/assets/2.0x/city_hong_kong.png": "bceac2f0282f9a638dc6c67328d196fa",
"assets/assets/2.0x/icon_arrow_down.png": "c78b2e5ec0e907410b622d40309ca30e",
"assets/assets/city_los_angeles.png": "8ace8e8b0fe6bac6aa1900a408c56657",
"assets/assets/city_new_york.png": "c0813a7ecfd005571cc5f0264cc4b593",
"assets/assets/icon_weather_09.png": "96d2f40c37c069b01f8e3e6385ac1ff4",
"assets/assets/city_london.png": "a9771717b9b24365f435a7bb2535a744",
"assets/assets/3.0x/logo_uber.png": "3138511586802e76fffc6405da48a0c8",
"assets/assets/3.0x/icon_arrow_up.png": "bb35c116c785d97ac7870b107bdbcfc1",
"assets/assets/3.0x/city_toronto.png": "5712c0d62a89911dffc671337f171c24",
"assets/assets/3.0x/city_seoul.png": "3e5e08ddcddf37ba24c202a4f989e3ad",
"assets/assets/3.0x/icon_weather_50.png": "6dc18ee586a256fc6b4f6b3f8731e721",
"assets/assets/3.0x/city_los_angeles.png": "806cce06f431513b57a462c4eb412c3d",
"assets/assets/3.0x/city_new_york.png": "dc91d63a410934da784ca028c3c0d3f9",
"assets/assets/3.0x/icon_weather_09.png": "b7f15101b1ae3865be3ddd73ce5a402c",
"assets/assets/3.0x/city_london.png": "1c6ce37d8e7ec0c3fca4ee9d43067534",
"assets/assets/3.0x/icon_weather_03.png": "d6510e448d4cd39c4288f51bffc74818",
"assets/assets/3.0x/icon_weather_02.png": "d6510e448d4cd39c4288f51bffc74818",
"assets/assets/3.0x/icon_weather_01.png": "7f1920e8a453080f30b5be6a86542ddf",
"assets/assets/3.0x/icon_weather_11.png": "eaefb37ceb424d9389073750753e3d39",
"assets/assets/3.0x/icon_weather_10.png": "f5abef02b83961b3e0bc79ad7821ba8e",
"assets/assets/3.0x/icon_weather_04.png": "d6510e448d4cd39c4288f51bffc74818",
"assets/assets/3.0x/icon_weather_13.png": "784fbcce4b86a519bd2c3ad1e5dd3bfe",
"assets/assets/3.0x/city_seattle.png": "0fb9f42dcfe50cdfb7426a28641d2135",
"assets/assets/3.0x/city_hong_kong.png": "6a79d8391542f3e9131594b579b53fbd",
"assets/assets/3.0x/icon_arrow_down.png": "9b51becbbe206be0d8b98200c39bd90e",
"assets/assets/icon_weather_03.png": "8e5ce8a9c4a18a70712735c3b04628f4",
"assets/assets/4.0x/logo_uber.png": "8aa3fce7b0805a24b054d0b64125d628",
"assets/assets/4.0x/icon_arrow_up.png": "358e9d02e8a4281c536fd357cdf6de45",
"assets/assets/4.0x/city_toronto.png": "ad0a55162228ee8b706031e42825ffd0",
"assets/assets/4.0x/city_seoul.png": "c2c5109ff98bdf6a44d0ff574129b51e",
"assets/assets/4.0x/icon_weather_50.png": "19fa3c4665b265c788679151026fa740",
"assets/assets/4.0x/city_los_angeles.png": "b998dfaa37cac44e70251c054a2e1600",
"assets/assets/4.0x/city_new_york.png": "42bd1a06fd263fc01990ade4ec40ec8e",
"assets/assets/4.0x/icon_weather_09.png": "69ff27526d29ea30c37b49dc5b97c221",
"assets/assets/4.0x/city_london.png": "01b0cb45a3f5c9ce47dbfc442ca50046",
"assets/assets/4.0x/icon_weather_03.png": "46becd2e90319b824eb25dda7ef39741",
"assets/assets/4.0x/icon_weather_02.png": "46becd2e90319b824eb25dda7ef39741",
"assets/assets/4.0x/icon_weather_01.png": "621a38f527bad4a50d4ff26fcd77c236",
"assets/assets/4.0x/icon_weather_11.png": "dc84d2d04fcac0bab7d7d3f8ed972031",
"assets/assets/4.0x/icon_weather_10.png": "02d985eff3b6fde25506573bcd584d3e",
"assets/assets/4.0x/icon_weather_04.png": "46becd2e90319b824eb25dda7ef39741",
"assets/assets/4.0x/icon_weather_13.png": "85137a6603c0b6527c7206e4f585531f",
"assets/assets/4.0x/city_seattle.png": "ef0e82c61b7c7dd28f9681289cddb83f",
"assets/assets/4.0x/city_hong_kong.png": "6c8945107cab28d7fbbf1c9789624c1f",
"assets/assets/4.0x/icon_arrow_down.png": "d9f2c3bc4c3cd379c3bff71f42a3930f",
"assets/assets/icon_weather_02.png": "8e5ce8a9c4a18a70712735c3b04628f4",
"assets/assets/icon_weather_01.png": "e22f1685481088d8fe35d370cb0ddd26",
"assets/assets/icon_weather_11.png": "b713cd0299105021af043b5b15d8a1dc",
"assets/assets/icon_weather_10.png": "a5c67d0505c0fe63147a3d21743c600b",
"assets/assets/icon_weather_04.png": "8e5ce8a9c4a18a70712735c3b04628f4",
"assets/assets/icon_weather_13.png": "103f50df680830cdda02922b52272139",
"assets/assets/city_seattle.png": "64bb49e32877283154c7b84971972778",
"assets/assets/city_hong_kong.png": "291c8067cff1c0e5a856a8142c172ef3",
"assets/assets/icon_arrow_down.png": "651966920e12698db2dd30d1e2bd75fc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
