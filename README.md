# sbb:rssfeed

## Preliminary notes
This package is a fork from raix:rssfeed. The maintainer deleted it from github and before that the last commit was somewhen about 9 years ago. Since meteor 3.x the old package isn't compatible anymore.

At this point this fork only replaces an old promise-like structure that is incompatible with node > 14 with a regular promise.

## Description

A package for serving data in RSS 2.0 XML format for Meteor

## What is it?

It serves published data mounted on `http://mysite.meteor.com/rss/name`

or with a querystring `http://mysite.meteor.com/rss/news?foo=latest`


## Installation

We don't offer a athmosphere package atm. So you can either copy the source code to your project and use it as a local package or fork yourself a repo, that you turn into an published meteor package on athmosphere or anywhere else.

## How?

Publish a feed
```js
RssFeed.publish('test', function(query) {
  var self = this;
  // We got 3 helpers:
  // 1. self.setValue
  // 2. self.addItem
  // 3. self.cdata


  // query is the parsed querystring as an object
  // eg. foo=latest would be query.foo === 'latest'

  // feed handler helpers
  // this.cdata, this.setValue, this.addItem
  self.setValue('title', self.cdata('My news'));
  self.setValue('description', self.cdata('This is a live feed'));
  self.setValue('link', 'http://mysite.meteor.com');
  self.setValue('lastBuildDate', new Date());
  self.setValue('pubDate', new Date());
  self.setValue('ttl', 1);
  // managingEditor, webMaster, language, docs, generator

  newsCollection.find({}).forEach(function(doc) {
    self.addItem({
      title: doc.name,
      description: doc.text,
      link: 'http://mysite.meteor.com',
      pubDate: new Date()
      // title, description, link, guid, pubDate
    });
  });

});
```

## API
* RssFeed.publish: function(name, handlerFunction)
* RssFeed.unpublish: function(name)
### Internal
* RssFeed.createTag: function(key, value)
* RssFeed.cdataValue: function(value)
* RssFeed.objectToXML: function(sourceObject)

### this in publish feed handler helpers
* this.cdata: RssFeed.cdataValue
* this.setValue: function(key, value)
* this.addItem: function(itemObject)
