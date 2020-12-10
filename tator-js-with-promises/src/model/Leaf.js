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
 * The Leaf model module.
 * @module model/Leaf
 * @version 0.0.1
 */
class Leaf {
    /**
     * Constructs a new <code>Leaf</code>.
     * Leaf object.
     * @alias module:model/Leaf
     */
    constructor() { 
        
        Leaf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Leaf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Leaf} obj Optional instance to populate.
     * @return {module:model/Leaf} The populated <code>Leaf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Leaf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], 'Number');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'Number');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': AttributeValue});
            }
        }
        return obj;
    }


}

/**
 * Unique integer identifying the leaf.
 * @member {Number} id
 */
Leaf.prototype['id'] = undefined;

/**
 * Unique integer identifying the entity type.
 * @member {Number} meta
 */
Leaf.prototype['meta'] = undefined;

/**
 * Unique integer identifying a project.
 * @member {Number} project
 */
Leaf.prototype['project'] = undefined;

/**
 * Full path to leaf in hierarchy.
 * @member {String} path
 */
Leaf.prototype['path'] = undefined;

/**
 * Name of the leaf.
 * @member {String} name
 */
Leaf.prototype['name'] = undefined;

/**
 * ID to use as parent if there is one.
 * @member {Number} parent
 */
Leaf.prototype['parent'] = undefined;

/**
 * Object containing attribute values.
 * @member {Object.<String, module:model/AttributeValue>} attributes
 */
Leaf.prototype['attributes'] = undefined;






export default Leaf;

