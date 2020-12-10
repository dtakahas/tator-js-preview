/**
 * Tator REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TatorJs);
  }
}(this, function(expect, TatorJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TatorJs.VideoDefinition();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VideoDefinition', function() {
    it('should create an instance of VideoDefinition', function() {
      // uncomment below and update the code to test VideoDefinition
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be.a(TatorJs.VideoDefinition);
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property bitRate (base name: "bit_rate")', function() {
      // uncomment below and update the code to test the property bitRate
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property codec (base name: "codec")', function() {
      // uncomment below and update the code to test the property codec
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property resolution (base name: "resolution")', function() {
      // uncomment below and update the code to test the property resolution
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property segmentInfo (base name: "segment_info")', function() {
      // uncomment below and update the code to test the property segmentInfo
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property httpAuth (base name: "http_auth")', function() {
      // uncomment below and update the code to test the property httpAuth
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property codecMime (base name: "codec_mime")', function() {
      // uncomment below and update the code to test the property codecMime
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property codecDescription (base name: "codec_description")', function() {
      // uncomment below and update the code to test the property codecDescription
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

    it('should have the property segmentsUrl (base name: "segments_url")', function() {
      // uncomment below and update the code to test the property segmentsUrl
      //var instane = new TatorJs.VideoDefinition();
      //expect(instance).to.be();
    });

  });

}));