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
    factory(root.expect, root.TatorRestApi);
  }
}(this, function(expect, TatorRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TatorRestApi.CloneMediaSpec();
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

  describe('CloneMediaSpec', function() {
    it('should create an instance of CloneMediaSpec', function() {
      // uncomment below and update the code to test CloneMediaSpec
      //var instane = new TatorRestApi.CloneMediaSpec();
      //expect(instance).to.be.a(TatorRestApi.CloneMediaSpec);
    });

    it('should have the property destProject (base name: "dest_project")', function() {
      // uncomment below and update the code to test the property destProject
      //var instane = new TatorRestApi.CloneMediaSpec();
      //expect(instance).to.be();
    });

    it('should have the property destType (base name: "dest_type")', function() {
      // uncomment below and update the code to test the property destType
      //var instane = new TatorRestApi.CloneMediaSpec();
      //expect(instance).to.be();
    });

    it('should have the property destSection (base name: "dest_section")', function() {
      // uncomment below and update the code to test the property destSection
      //var instane = new TatorRestApi.CloneMediaSpec();
      //expect(instance).to.be();
    });

  });

}));
