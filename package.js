Package.describe({
    name: 'sbb:rss',
    version: '1.0.0',
    summary: "Adds basic support for rss feed v2.0\n"+
         "\u001b[32mv1.0.0\n"+
         "\u001b[33m-----------------------------------------\n"+
         "\u001b[0m Adds basic support for rss feed v2.0     \n"+
         "\u001b[0m                                          \n"+
         "\u001b[33m-------------------------------------RaiX\n"
});

Package.onUse(function (api) {
  api.use('webapp', 'server');
  api.addFiles('rss.server.js', 'server');
  api.export('RssFeed');
});