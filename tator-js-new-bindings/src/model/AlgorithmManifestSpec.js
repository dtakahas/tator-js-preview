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
 * The AlgorithmManifestSpec model module.
 * @module model/AlgorithmManifestSpec
 * @version v1
 */
class AlgorithmManifestSpec {
    /**
     * Constructs a new <code>AlgorithmManifestSpec</code>.
     * Algorithm manifest save spec.
     * @alias module:model/AlgorithmManifestSpec
     */
    constructor() { 
        
        AlgorithmManifestSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AlgorithmManifestSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlgorithmManifestSpec} obj Optional instance to populate.
     * @return {module:model/AlgorithmManifestSpec} The populated <code>AlgorithmManifestSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlgorithmManifestSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('upload_url')) {
                obj['upload_url'] = ApiClient.convertToType(data['upload_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of manifest (.yaml) file
 * @member {String} name
 */
AlgorithmManifestSpec.prototype['name'] = undefined;

/**
 * URL of the uploaded file returned from tus upload
 * @member {String} upload_url
 */
AlgorithmManifestSpec.prototype['upload_url'] = undefined;






export default AlgorithmManifestSpec;
