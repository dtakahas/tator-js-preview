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
 * The StateTypeUpdate model module.
 * @module model/StateTypeUpdate
 * @version 0.0.1
 */
class StateTypeUpdate {
    /**
     * Constructs a new <code>StateTypeUpdate</code>.
     * @alias module:model/StateTypeUpdate
     */
    constructor() { 
        
        StateTypeUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StateTypeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StateTypeUpdate} obj Optional instance to populate.
     * @return {module:model/StateTypeUpdate} The populated <code>StateTypeUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StateTypeUpdate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
            if (data.hasOwnProperty('grouping_default')) {
                obj['grouping_default'] = ApiClient.convertToType(data['grouping_default'], 'Boolean');
            }
            if (data.hasOwnProperty('delete_child_localizations')) {
                obj['delete_child_localizations'] = ApiClient.convertToType(data['delete_child_localizations'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Name of the state type.
 * @member {String} name
 */
StateTypeUpdate.prototype['name'] = undefined;

/**
 * Description of the state type.
 * @member {String} description
 */
StateTypeUpdate.prototype['description'] = undefined;

/**
 * Whether this state type should be displayed.
 * @member {Boolean} visible
 */
StateTypeUpdate.prototype['visible'] = undefined;

/**
 * Whether to group elements in the UI by default.
 * @member {Boolean} grouping_default
 * @default true
 */
StateTypeUpdate.prototype['grouping_default'] = true;

/**
 * True if child localizations should be deleted when this state is deleted. Localizations will only be deleted if they are not associated with another state. 
 * @member {Boolean} delete_child_localizations
 * @default false
 */
StateTypeUpdate.prototype['delete_child_localizations'] = false;






export default StateTypeUpdate;

