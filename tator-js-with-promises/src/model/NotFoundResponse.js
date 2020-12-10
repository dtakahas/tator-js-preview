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
 * The NotFoundResponse model module.
 * @module model/NotFoundResponse
 * @version 0.0.1
 */
class NotFoundResponse {
    /**
     * Constructs a new <code>NotFoundResponse</code>.
     * @alias module:model/NotFoundResponse
     */
    constructor() { 
        
        NotFoundResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotFoundResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotFoundResponse} obj Optional instance to populate.
     * @return {module:model/NotFoundResponse} The populated <code>NotFoundResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotFoundResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Message explaining not found error.
 * @member {String} message
 */
NotFoundResponse.prototype['message'] = undefined;






export default NotFoundResponse;

