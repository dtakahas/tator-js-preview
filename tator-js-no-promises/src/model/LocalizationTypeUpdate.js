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
import ColorMap from './ColorMap';

/**
 * The LocalizationTypeUpdate model module.
 * @module model/LocalizationTypeUpdate
 * @version v1
 */
class LocalizationTypeUpdate {
    /**
     * Constructs a new <code>LocalizationTypeUpdate</code>.
     * Localization type update.
     * @alias module:model/LocalizationTypeUpdate
     */
    constructor() { 
        
        LocalizationTypeUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LocalizationTypeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalizationTypeUpdate} obj Optional instance to populate.
     * @return {module:model/LocalizationTypeUpdate} The populated <code>LocalizationTypeUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocalizationTypeUpdate();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('colorMap')) {
                obj['colorMap'] = ColorMap.constructFromObject(data['colorMap']);
            }
            if (data.hasOwnProperty('line_width')) {
                obj['line_width'] = ApiClient.convertToType(data['line_width'], 'Number');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
            if (data.hasOwnProperty('grouping_default')) {
                obj['grouping_default'] = ApiClient.convertToType(data['grouping_default'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Description of the localization type.
 * @member {String} description
 */
LocalizationTypeUpdate.prototype['description'] = undefined;

/**
 * Name of the localization type.
 * @member {String} name
 */
LocalizationTypeUpdate.prototype['name'] = undefined;

/**
 * @member {module:model/ColorMap} colorMap
 */
LocalizationTypeUpdate.prototype['colorMap'] = undefined;

/**
 * Width of the line used to draw the localization.
 * @member {Number} line_width
 */
LocalizationTypeUpdate.prototype['line_width'] = undefined;

/**
 * Whether this type should be displayed in the UI.
 * @member {Boolean} visible
 * @default true
 */
LocalizationTypeUpdate.prototype['visible'] = true;

/**
 * Whether to group elements in the UI by default.
 * @member {Boolean} grouping_default
 * @default true
 */
LocalizationTypeUpdate.prototype['grouping_default'] = true;






export default LocalizationTypeUpdate;

