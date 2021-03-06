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
 * The AnalysisSpec model module.
 * @module model/AnalysisSpec
 * @version v1
 */
class AnalysisSpec {
    /**
     * Constructs a new <code>AnalysisSpec</code>.
     * @alias module:model/AnalysisSpec
     * @param name {String} Name of analysis.
     * @param dataQuery {String} Lucene query string used to retrieve entities to analyze.
     */
    constructor(name, dataQuery) { 
        
        AnalysisSpec.initialize(this, name, dataQuery);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, dataQuery) { 
        obj['name'] = name;
        obj['data_query'] = dataQuery;
    }

    /**
     * Constructs a <code>AnalysisSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnalysisSpec} obj Optional instance to populate.
     * @return {module:model/AnalysisSpec} The populated <code>AnalysisSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnalysisSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('data_query')) {
                obj['data_query'] = ApiClient.convertToType(data['data_query'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of analysis.
 * @member {String} name
 */
AnalysisSpec.prototype['name'] = undefined;

/**
 * Lucene query string used to retrieve entities to analyze.
 * @member {String} data_query
 * @default '*'
 */
AnalysisSpec.prototype['data_query'] = '*';






export default AnalysisSpec;

