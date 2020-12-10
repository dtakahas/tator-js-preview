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
    instance = new TatorRestApi.AnalysisSpec();
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

  describe('AnalysisSpec', function() {
    it('should create an instance of AnalysisSpec', function() {
      // uncomment below and update the code to test AnalysisSpec
      //var instane = new TatorRestApi.AnalysisSpec();
      //expect(instance).to.be.a(TatorRestApi.AnalysisSpec);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TatorRestApi.AnalysisSpec();
      //expect(instance).to.be();
    });

    it('should have the property dataQuery (base name: "data_query")', function() {
      // uncomment below and update the code to test the property dataQuery
      //var instane = new TatorRestApi.AnalysisSpec();
      //expect(instance).to.be();
    });

  });

}));
