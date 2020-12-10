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
    instance = new TatorJs.ColorMap();
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

  describe('ColorMap', function() {
    it('should create an instance of ColorMap', function() {
      // uncomment below and update the code to test ColorMap
      //var instane = new TatorJs.ColorMap();
      //expect(instance).to.be.a(TatorJs.ColorMap);
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new TatorJs.ColorMap();
      //expect(instance).to.be();
    });

    it('should have the property defaultFill (base name: "defaultFill")', function() {
      // uncomment below and update the code to test the property defaultFill
      //var instane = new TatorJs.ColorMap();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new TatorJs.ColorMap();
      //expect(instance).to.be();
    });

    it('should have the property map (base name: "map")', function() {
      // uncomment below and update the code to test the property map
      //var instane = new TatorJs.ColorMap();
      //expect(instance).to.be();
    });

    it('should have the property fillMap (base name: "fillMap")', function() {
      // uncomment below and update the code to test the property fillMap
      //var instane = new TatorJs.ColorMap();
      //expect(instance).to.be();
    });

    it('should have the property alphaRanges (base name: "alpha_ranges")', function() {
      // uncomment below and update the code to test the property alphaRanges
      //var instane = new TatorJs.ColorMap();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new TatorJs.ColorMap();
      //expect(instance).to.be();
    });

  });

}));
