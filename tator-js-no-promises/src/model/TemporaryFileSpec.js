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
 * The TemporaryFileSpec model module.
 * @module model/TemporaryFileSpec
 * @version v1
 */
class TemporaryFileSpec {
    /**
     * Constructs a new <code>TemporaryFileSpec</code>.
     * @alias module:model/TemporaryFileSpec
     * @param name {String} Unique name for the temporary file
     * @param url {String} URL for the temporary file
     * @param lookup {String} md5hash of lookup parameters
     */
    constructor(name, url, lookup) { 
        
        TemporaryFileSpec.initialize(this, name, url, lookup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, url, lookup) { 
        obj['name'] = name;
        obj['url'] = url;
        obj['lookup'] = lookup;
    }

    /**
     * Constructs a <code>TemporaryFileSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemporaryFileSpec} obj Optional instance to populate.
     * @return {module:model/TemporaryFileSpec} The populated <code>TemporaryFileSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemporaryFileSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('lookup')) {
                obj['lookup'] = ApiClient.convertToType(data['lookup'], 'String');
            }
            if (data.hasOwnProperty('hours')) {
                obj['hours'] = ApiClient.convertToType(data['hours'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique name for the temporary file
 * @member {String} name
 */
TemporaryFileSpec.prototype['name'] = undefined;

/**
 * URL for the temporary file
 * @member {String} url
 */
TemporaryFileSpec.prototype['url'] = undefined;

/**
 * md5hash of lookup parameters
 * @member {String} lookup
 */
TemporaryFileSpec.prototype['lookup'] = undefined;

/**
 * Number of hours file is to be kept alive
 * @member {Number} hours
 * @default 24
 */
TemporaryFileSpec.prototype['hours'] = 24;






export default TemporaryFileSpec;
