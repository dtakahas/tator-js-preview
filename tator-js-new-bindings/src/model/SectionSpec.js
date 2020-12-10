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
 * The SectionSpec model module.
 * @module model/SectionSpec
 * @version v1
 */
class SectionSpec {
    /**
     * Constructs a new <code>SectionSpec</code>.
     * @alias module:model/SectionSpec
     * @param name {String} Unique name of the algorithm workflow.
     */
    constructor(name) { 
        
        SectionSpec.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>SectionSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectionSpec} obj Optional instance to populate.
     * @return {module:model/SectionSpec} The populated <code>SectionSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SectionSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('lucene_string')) {
                obj['lucene_string'] = ApiClient.convertToType(data['lucene_string'], 'String');
            }
            if (data.hasOwnProperty('media_bools')) {
                obj['media_bools'] = ApiClient.convertToType(data['media_bools'], [{'String': Object}]);
            }
            if (data.hasOwnProperty('annotation_bools')) {
                obj['annotation_bools'] = ApiClient.convertToType(data['annotation_bools'], [{'String': Object}]);
            }
            if (data.hasOwnProperty('tator_user_sections')) {
                obj['tator_user_sections'] = ApiClient.convertToType(data['tator_user_sections'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique name of the algorithm workflow.
 * @member {String} name
 */
SectionSpec.prototype['name'] = undefined;

/**
 * Lucene query syntax search string.
 * @member {String} lucene_string
 */
SectionSpec.prototype['lucene_string'] = undefined;

/**
 * List of elasticsearch boolean queries that should be applied to media. These are applied to the boolean query \"filter\" list.
 * @member {Array.<Object.<String, Object>>} media_bools
 */
SectionSpec.prototype['media_bools'] = undefined;

/**
 * List of elasticsearch boolean queries that should be applied to annotations. These are applied to the boolean query \"filter\" list.
 * @member {Array.<Object.<String, Object>>} annotation_bools
 */
SectionSpec.prototype['annotation_bools'] = undefined;

/**
 * Attribute that is applied to media to identify membership to a section.
 * @member {String} tator_user_sections
 */
SectionSpec.prototype['tator_user_sections'] = undefined;






export default SectionSpec;

