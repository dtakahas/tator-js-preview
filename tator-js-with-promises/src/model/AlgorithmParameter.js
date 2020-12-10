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
import OneOfnumberstring from './OneOfnumberstring';

/**
 * The AlgorithmParameter model module.
 * @module model/AlgorithmParameter
 * @version 0.0.1
 */
class AlgorithmParameter {
    /**
     * Constructs a new <code>AlgorithmParameter</code>.
     * @alias module:model/AlgorithmParameter
     * @param name {String} Name of algorithm parameter
     * @param value {module:model/OneOfnumberstring} Value of algorithm parameter
     */
    constructor(name, value) { 
        
        AlgorithmParameter.initialize(this, name, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value) { 
        obj['name'] = name;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>AlgorithmParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AlgorithmParameter} obj Optional instance to populate.
     * @return {module:model/AlgorithmParameter} The populated <code>AlgorithmParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlgorithmParameter();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], OneOfnumberstring);
            }
        }
        return obj;
    }


}

/**
 * Name of algorithm parameter
 * @member {String} name
 */
AlgorithmParameter.prototype['name'] = undefined;

/**
 * Value of algorithm parameter
 * @member {module:model/OneOfnumberstring} value
 */
AlgorithmParameter.prototype['value'] = undefined;






export default AlgorithmParameter;

