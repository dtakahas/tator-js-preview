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
 * The NotifySpec model module.
 * @module model/NotifySpec
 * @version v1
 */
class NotifySpec {
    /**
     * Constructs a new <code>NotifySpec</code>.
     * @alias module:model/NotifySpec
     * @param message {String} Message to send to administrators.
     */
    constructor(message) { 
        
        NotifySpec.initialize(this, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message) { 
        obj['message'] = message;
    }

    /**
     * Constructs a <code>NotifySpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotifySpec} obj Optional instance to populate.
     * @return {module:model/NotifySpec} The populated <code>NotifySpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotifySpec();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('sendAsFile')) {
                obj['sendAsFile'] = ApiClient.convertToType(data['sendAsFile'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Message to send to administrators.
 * @member {String} message
 */
NotifySpec.prototype['message'] = undefined;

/**
 * Whether to send message as a file. (0 or 1)
 * @member {Number} sendAsFile
 */
NotifySpec.prototype['sendAsFile'] = undefined;






export default NotifySpec;
