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
import AttributeType from './AttributeType';

/**
 * The LeafType model module.
 * @module model/LeafType
 * @version 0.0.1
 */
class LeafType {
    /**
     * Constructs a new <code>LeafType</code>.
     * Leaf type.
     * @alias module:model/LeafType
     */
    constructor() { 
        
        LeafType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeafType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeafType} obj Optional instance to populate.
     * @return {module:model/LeafType} The populated <code>LeafType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeafType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'Number');
            }
            if (data.hasOwnProperty('dtype')) {
                obj['dtype'] = ApiClient.convertToType(data['dtype'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('attribute_types')) {
                obj['attribute_types'] = ApiClient.convertToType(data['attribute_types'], [AttributeType]);
            }
        }
        return obj;
    }


}

/**
 * Unique integer identifying a leaf type.
 * @member {Number} id
 */
LeafType.prototype['id'] = undefined;

/**
 * Unique integer identifying project for this leaf type.
 * @member {Number} project
 */
LeafType.prototype['project'] = undefined;

/**
 * Name of this data type, value is always \"leaf\".
 * @member {String} dtype
 */
LeafType.prototype['dtype'] = undefined;

/**
 * Name of the leaf type.
 * @member {String} name
 */
LeafType.prototype['name'] = undefined;

/**
 * Description of the leaf type.
 * @member {String} description
 * @default ''
 */
LeafType.prototype['description'] = '';

/**
 * Attribute type definitions.
 * @member {Array.<module:model/AttributeType>} attribute_types
 */
LeafType.prototype['attribute_types'] = undefined;






export default LeafType;

