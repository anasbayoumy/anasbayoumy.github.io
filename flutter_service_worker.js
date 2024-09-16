'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8953e34c58cd553d80e031d55cd03ee5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dca66fff18164b61ee746016a4220910",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd6cd967d2db91e0125758e30f8d4a10",
".git/logs/refs/heads/main": "f5f5187e837fcee8ecb0834ac51e56f9",
".git/logs/refs/remotes/origin/main": "4bd3aad44c1a8cf79d91c80a075187de",
".git/objects/09/a001ccfa5c27f2adad7d07185c3b094f8eecaf": "7321aa98b5a81fc965b8261fe65486e4",
".git/objects/09/b81bb3c6516279cf93d957568a6bef1a551371": "3452c5041195da595fe0f378b977bdca",
".git/objects/0a/55fde3905572dba126c9a89ba54595f71ef64f": "b5dee1087b3aa5bf20ccbba5e4d882b9",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/13/02581656570ff7a45afa9bb0420b91c4ffcd30": "d94896ab1bea6432f91ccfc74ecd308c",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/901ae73480027364f7b7535f16fba3126bfddf": "ab367b707225b79cd4cefec666c4c921",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/e6b79b7b5faeec07acdeee7fe9291e2ce849cb": "4f38d79482faf42276610a915a0145fa",
".git/objects/23/a2552d8291649ce6aa1f547fd09f1939615714": "59d399669cd5e73f27fcbcab1546ee20",
".git/objects/2b/b41fbe9b25cd03f0312a8981207054e9025449": "7e40840d4ec752c8a5fb1e175106a43a",
".git/objects/35/d6b1bd67df845bb4bd03a4b860a805334d05eb": "84f3e840cc50dd5a0fda4a00fd6f80c2",
".git/objects/39/bb10de028482883b83ca6f76c79a09d38f830f": "dd6b5ad37664d99c9ba85ce90cc7a53c",
".git/objects/41/45d69b1ac600f0688c07dffdaa0587636eeb7b": "2e2fb2dea8cf75cb04413b4ba60fb6f9",
".git/objects/43/8aad27b4d0a851473be04c0d258e2a858ebe32": "c78dab60613fc85ded956a53308c5391",
".git/objects/47/48f22377f3421610469e63e52c299f188d2e31": "5de032641da90035da644462b80dfecc",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/52/f4d1313b80ffb74c734a64c2bdc4a545834110": "99bb8688cf924c646be73b978e6fc8e7",
".git/objects/53/7aeb060a847a84b7f236b5998c22fd00fcd8b9": "b9442b09b4adb4d670882a1c527724ef",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/56/9835dfae0b8dcb5e597096ad54ad25c4189bc7": "e26419e554331f9cce3ef55e1c2f1fb9",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/b77c6d7d3202b97027f0c80bb9c5e78743c91d": "6df3717cc6f2220b821a6368ca21fde1",
".git/objects/5d/34e56a92a5f1fef908688ed08710e25c125dfb": "a4296e3b99bd7be21fc44c721f90bcaf",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/122333b82e6496f113209b35cf1f803b8e19cc": "8ecf4dda2fc2c847548d32bff29ce7e0",
".git/objects/64/511ef366a27308640cca0453e061cdb8a148a6": "d2b159010d61a23f0889eb1d0e6d98ab",
".git/objects/67/aeb77f320016b6db748a5c4777d8a3c32bdfdc": "75449849b3a1243d5f58a6c83c05fd29",
".git/objects/6a/a547f99c5b24a5a1b792d2755dec0b75caf92b": "4e748660d0b5327093738254953fe5b7",
".git/objects/70/c54c3ebbbacbc6831e2cf765f09c70d7060d72": "aec194962fd056890b290aea475b6b4a",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/bc365dd50f957ed81547daf1d4379fe4dae140": "8d022c978edcb47fc4739c344833cd16",
".git/objects/77/486dbeb6c8fc89cbf1a553cb45ee9d46c0c645": "4e8186fdf0d825f4eb9c8f69a61acf9c",
".git/objects/7d/47cc88e02bc56079f99709a67a48db1f1c788b": "65b38d075d55e865bdf1ee1e48352258",
".git/objects/7d/742493ef66c7c18a3ea865548186140c4ea029": "4e4445aa7f7c0b02260e3d9ee92323a5",
".git/objects/7e/e97a73011e7eee11adf79d51fc6e30edcc37c2": "eae664703d94e245b4b0a1bbb1398b99",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/f469dd1a4054abd664e89f9131c509f0938e60": "e5fd33423fb0d35461c7086795b1619c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/6f59e8a1d1501f020c4a268d165481fab700e7": "cdd68b4e0aa85df5baca78ac6c334ee2",
".git/objects/90/ee5a2843ccfc7bc3430c12e7a29a2934d3808e": "45c1b4debe40a4e7973043be0c21a23e",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/c0dcb3a8e9dcc7ebfdd6e7ebf3911399598d1b": "cc4604cc6101e8a5386554b37f7cfd68",
".git/objects/9c/bf1d74b15048dfa1f11dd6f42cd0dc74853426": "b5dafa685b64b8ad336993405e786c91",
".git/objects/9e/4ac24e76fd5c8307b4d48ea2dc2d76064fe227": "065e39ad529b43b8471134ab26bb970e",
".git/objects/a1/ac7f546f1b314c2ac031a7a5deae1eceaa1582": "6daab3af1a70f1bd3aea05b9f58cc612",
".git/objects/a2/36a64e5e5f54869321ede9152e53541e7a74c6": "7d9fd2f345cd9d917775b6b9eeef7fd2",
".git/objects/a2/975275d20d74e3ab2e05478fbeae842b87e4c9": "73cbb4a0a6b05bb36fec970c8bb90131",
".git/objects/a5/0dfa89d2e6fd6ca4711b43d828bfc51cc809b7": "261721c14f0086668c00be7a4171ce55",
".git/objects/a7/e734ac4209d7569dcdcbe11fdf3c3b5d4c2a09": "186b6763283a5544a7ad0e6c7656103d",
".git/objects/ab/4f0df6e4d079dcbf60e47eb3e14963adb9a91d": "493c2b75aacc7259fd55dccfe2b8db37",
".git/objects/ab/a85861020fdbc6686cc431a93d849ccf0b2e30": "4175eefc52e36f11b5a489c8dae8c5f8",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/0c73d72635c1c2472b41389b378211c897f74c": "6b59b7af33468b7799733d68590f5d91",
".git/objects/c2/f1bd3328d43c203e25eb781393ee93d327291d": "44faae86969722a83d64029b9150fcfb",
".git/objects/c3/251ad65563c01bbdd12a8598082a3ab2aace4b": "c188633049f7ac3fe6a860cd83ce0c8f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cf/f530994cc48bf4d1cf76d0d3f31e3ae4eb0e89": "830f4d2a3c1d8cc5b56b1d6d3de021f8",
".git/objects/d0/31ee012f56225fafdd22568d9b663662fbd391": "5d6843739e631f264d2533e53c8633b3",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/1547ce95ccdbc6dae34a60c600946e1d7eec36": "812a761363a23a20484768e42ac9895e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/f5afd98a9e997a2d1ceaa19ad35160445f5250": "e8a402d2f116142a53a58bf46ccc3717",
".git/objects/e4/4c257d13c845650778d86661b668009a16cfab": "86f1653bac5d3ce516db6cd21e320003",
".git/objects/ea/cda694e653f9cbfcd1abc10cd1035fd46030c9": "20d073f5e58bea7aa5a832be82c39c25",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/4330da2ccbc8583f9ea9e3f659d8126d0a02cc": "1c031423957cf5c71da0af141773d940",
".git/objects/f9/5e2cc9c30549d2ecca0f86cec25171b57b0599": "8a70b44483629fc64dda41c5337d4b72",
".git/ORIG_HEAD": "2db10cc53b7f7e82a2304bc70edcf454",
".git/refs/heads/main": "d74ae13d3db9283bba7738f76a98a39a",
".git/refs/remotes/origin/main": "2db10cc53b7f7e82a2304bc70edcf454",
"assets/AssetManifest.bin": "9eee8ab84ea8ab58ae2b9646f9b381a2",
"assets/AssetManifest.bin.json": "a809c6f2ea15ccbfc4112cbacb64323d",
"assets/AssetManifest.json": "9cf8e787fe05b5a4bc6c954b9a25d4f3",
"assets/assets/fonts/califr.ttf": "12c13307742d4e286b692cce7ec65307",
"assets/assets/fonts/constan.ttf": "d145e0da42db9c9a2277fed0ad3bd723",
"assets/assets/lottie/loader.json": "f8a505e978f6db6ac647ce3b3500a549",
"assets/assets/Profile_Picture.jpeg": "d4188ed5fe55e69f0e7f7f47eeef5581",
"assets/FontManifest.json": "268a95f782ae4263e92e09e9dad34504",
"assets/fonts/MaterialIcons-Regular.otf": "41fa9bdbfecefe6a6c6dd4ae5794af38",
"assets/NOTICES": "7c95082a28eadbeaf5a5aac954ec8d9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bf2cff6a887439e713425d98e2433c9f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "24fa2876801a9240e782743bdbc61839",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a86e3e44e34692fc71b7d15098ec78b4",
"/": "a86e3e44e34692fc71b7d15098ec78b4",
"main.dart.js": "b2555c62cf234e1c07938db3ea9ef77e",
"manifest.json": "a960d218b58b217dfbc5d3e5ba3c772e",
"README.md": "84b4bf3c9a32874fab83188c32b7288c",
"version.json": "8f17e265c96b13c80384966b52267e6a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
