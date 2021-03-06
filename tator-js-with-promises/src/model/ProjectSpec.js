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

import ApiClient from '../ApiClient';

/**
 * The ProjectSpec model module.
 * @module model/ProjectSpec
 * @version 0.0.1
 */
class ProjectSpec {
    /**
     * Constructs a new <code>ProjectSpec</code>.
     * @alias module:model/ProjectSpec
     * @param name {String} Name of the project.
     */
    constructor(name) { 
        
        ProjectSpec.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ProjectSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectSpec} obj Optional instance to populate.
     * @return {module:model/ProjectSpec} The populated <code>ProjectSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the project.
 * @member {String} name
 */
ProjectSpec.prototype['name'] = undefined;

/**
 * Summary of the project.
 * @member {String} summary
 * @default ''
 */
ProjectSpec.prototype['summary'] = '';






export default ProjectSpec;

