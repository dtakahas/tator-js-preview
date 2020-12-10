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
import AttributeValue from './AttributeValue';

/**
 * The LeafUpdate model module.
 * @module model/LeafUpdate
 * @version 0.0.1
 */
class LeafUpdate {
    /**
     * Constructs a new <code>LeafUpdate</code>.
     * @alias module:model/LeafUpdate
     */
    constructor() { 
        
        LeafUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeafUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeafUpdate} obj Optional instance to populate.
     * @return {module:model/LeafUpdate} The populated <code>LeafUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeafUpdate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': AttributeValue});
            }
        }
        return obj;
    }


}

/**
 * Name of the leaf.
 * @member {String} name
 */
LeafUpdate.prototype['name'] = undefined;

/**
 * Attribute values to update.
 * @member {Object.<String, module:model/AttributeValue>} attributes
 */
LeafUpdate.prototype['attributes'] = undefined;






export default LeafUpdate;

