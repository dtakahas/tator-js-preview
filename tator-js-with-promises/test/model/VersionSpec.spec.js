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
    instance = new TatorJs.VersionSpec();
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

  describe('VersionSpec', function() {
    it('should create an instance of VersionSpec', function() {
      // uncomment below and update the code to test VersionSpec
      //var instane = new TatorJs.VersionSpec();
      //expect(instance).to.be.a(TatorJs.VersionSpec);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TatorJs.VersionSpec();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TatorJs.VersionSpec();
      //expect(instance).to.be();
    });

    it('should have the property showEmpty (base name: "show_empty")', function() {
      // uncomment below and update the code to test the property showEmpty
      //var instane = new TatorJs.VersionSpec();
      //expect(instance).to.be();
    });

    it('should have the property bases (base name: "bases")', function() {
      // uncomment below and update the code to test the property bases
      //var instane = new TatorJs.VersionSpec();
      //expect(instance).to.be();
    });

  });

}));