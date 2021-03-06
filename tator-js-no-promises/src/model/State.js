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
 * The State model module.
 * @module model/State
 * @version v1
 */
class State {
    /**
     * Constructs a new <code>State</code>.
     * @alias module:model/State
     */
    constructor() { 
        
        State.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>State</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/State} obj Optional instance to populate.
     * @return {module:model/State} The populated <code>State</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new State();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], 'Number');
            }
            if (data.hasOwnProperty('media')) {
                obj['media'] = ApiClient.convertToType(data['media'], ['Number']);
            }
            if (data.hasOwnProperty('localizations')) {
                obj['localizations'] = ApiClient.convertToType(data['localizations'], ['Number']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': AttributeValue});
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('frame')) {
                obj['frame'] = ApiClient.convertToType(data['frame'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique integer identifying the state.
 * @member {Number} id
 */
State.prototype['id'] = undefined;

/**
 * Unique integer identifying the entity type.
 * @member {Number} meta
 */
State.prototype['meta'] = undefined;

/**
 * List of media IDs that this state applies to.
 * @member {Array.<Number>} media
 */
State.prototype['media'] = undefined;

/**
 * List of localization IDs that this state applies to.
 * @member {Array.<Number>} localizations
 */
State.prototype['localizations'] = undefined;

/**
 * Object containing attribute values.
 * @member {Object.<String, module:model/AttributeValue>} attributes
 */
State.prototype['attributes'] = undefined;

/**
 * Unique integer identifying the version.
 * @member {Number} version
 */
State.prototype['version'] = undefined;

/**
 * Frame number this state applies to.
 * @member {Number} frame
 */
State.prototype['frame'] = undefined;






export default State;

