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
 * The StateMergeUpdate model module.
 * @module model/StateMergeUpdate
 * @version 0.0.1
 */
class StateMergeUpdate {
    /**
     * Constructs a new <code>StateMergeUpdate</code>.
     * @alias module:model/StateMergeUpdate
     * @param mergeStateId {Number} Unique integer identifying the state whose localizations will merge with this state.
     */
    constructor(mergeStateId) { 
        
        StateMergeUpdate.initialize(this, mergeStateId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mergeStateId) { 
        obj['merge_state_id'] = mergeStateId;
    }

    /**
     * Constructs a <code>StateMergeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StateMergeUpdate} obj Optional instance to populate.
     * @return {module:model/StateMergeUpdate} The populated <code>StateMergeUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StateMergeUpdate();

            if (data.hasOwnProperty('merge_state_id')) {
                obj['merge_state_id'] = ApiClient.convertToType(data['merge_state_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique integer identifying the state whose localizations will merge with this state.
 * @member {Number} merge_state_id
 */
StateMergeUpdate.prototype['merge_state_id'] = undefined;






export default StateMergeUpdate;

