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
    instance = new TatorRestApi.LeafType();
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

  describe('LeafType', function() {
    it('should create an instance of LeafType', function() {
      // uncomment below and update the code to test LeafType
      //var instane = new TatorRestApi.LeafType();
      //expect(instance).to.be.a(TatorRestApi.LeafType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TatorRestApi.LeafType();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instane = new TatorRestApi.LeafType();
      //expect(instance).to.be();
    });

    it('should have the property dtype (base name: "dtype")', function() {
      // uncomment below and update the code to test the property dtype
      //var instane = new TatorRestApi.LeafType();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TatorRestApi.LeafType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TatorRestApi.LeafType();
      //expect(instance).to.be();
    });

    it('should have the property attributeTypes (base name: "attribute_types")', function() {
      // uncomment below and update the code to test the property attributeTypes
      //var instane = new TatorRestApi.LeafType();
      //expect(instance).to.be();
    });

  });

}));
