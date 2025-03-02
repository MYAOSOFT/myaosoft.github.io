// キャッシュファイルの指定
var CACHE_NAME = 'pwacaches';
var urlsToCache = [
	'myaosoft.github.io/',
];

// インストール処理
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(function(cache) {
				return cache.addAll(urlsToCache);
			})
	);
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function(response) {
				return response ? response : fetch(event.request);
			})
	);
});

// プッシュ通知
self.addEventListener('message', function (event) {
  console.log(event.data);
  self.registration.showNotification(event.data);
});
