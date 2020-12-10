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
 * The CloneMediaSpec model module.
 * @module model/CloneMediaSpec
 * @version 0.0.1
 */
class CloneMediaSpec {
    /**
     * Constructs a new <code>CloneMediaSpec</code>.
     * @alias module:model/CloneMediaSpec
     * @param destProject {Number} Unique integer identyifying destination project.
     * @param destType {Number} Unique integer identifying destination media type. Use -1 to automatically select the media type if only one media type exists in the destination project.
     */
    constructor(destProject, destType) { 
        
        CloneMediaSpec.initialize(this, destProject, destType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destProject, destType) { 
        obj['dest_project'] = destProject;
        obj['dest_type'] = destType;
    }

    /**
     * Constructs a <code>CloneMediaSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloneMediaSpec} obj Optional instance to populate.
     * @return {module:model/CloneMediaSpec} The populated <code>CloneMediaSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CloneMediaSpec();

            if (data.hasOwnProperty('dest_project')) {
                obj['dest_project'] = ApiClient.convertToType(data['dest_project'], 'Number');
            }
            if (data.hasOwnProperty('dest_type')) {
                obj['dest_type'] = ApiClient.convertToType(data['dest_type'], 'Number');
            }
            if (data.hasOwnProperty('dest_section')) {
                obj['dest_section'] = ApiClient.convertToType(data['dest_section'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique integer identyifying destination project.
 * @member {Number} dest_project
 */
CloneMediaSpec.prototype['dest_project'] = undefined;

/**
 * Unique integer identifying destination media type. Use -1 to automatically select the media type if only one media type exists in the destination project.
 * @member {Number} dest_type
 */
CloneMediaSpec.prototype['dest_type'] = undefined;

/**
 * Destination media section name.
 * @member {String} dest_section
 */
CloneMediaSpec.prototype['dest_section'] = undefined;






export default CloneMediaSpec;
