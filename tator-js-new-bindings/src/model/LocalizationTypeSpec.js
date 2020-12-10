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
import ColorMap from './ColorMap';

/**
 * The LocalizationTypeSpec model module.
 * @module model/LocalizationTypeSpec
 * @version v1
 */
class LocalizationTypeSpec {
    /**
     * Constructs a new <code>LocalizationTypeSpec</code>.
     * @alias module:model/LocalizationTypeSpec
     * @param name {String} Name of the localization type.
     * @param dtype {module:model/LocalizationTypeSpec.DtypeEnum} Shape of this localization type.
     * @param mediaTypes {Array.<Number>} List of integers identifying media types that this localization type may apply to.
     */
    constructor(name, dtype, mediaTypes) { 
        
        LocalizationTypeSpec.initialize(this, name, dtype, mediaTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, dtype, mediaTypes) { 
        obj['name'] = name;
        obj['dtype'] = dtype;
        obj['media_types'] = mediaTypes;
    }

    /**
     * Constructs a <code>LocalizationTypeSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalizationTypeSpec} obj Optional instance to populate.
     * @return {module:model/LocalizationTypeSpec} The populated <code>LocalizationTypeSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LocalizationTypeSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('dtype')) {
                obj['dtype'] = ApiClient.convertToType(data['dtype'], 'String');
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
            if (data.hasOwnProperty('attribute_types')) {
                obj['attribute_types'] = ApiClient.convertToType(data['attribute_types'], [AttributeType]);
            }
            if (data.hasOwnProperty('media_types')) {
                obj['media_types'] = ApiClient.convertToType(data['media_types'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Name of the localization type.
 * @member {String} name
 */
LocalizationTypeSpec.prototype['name'] = undefined;

/**
 * Description of the localization type.
 * @member {String} description
 */
LocalizationTypeSpec.prototype['description'] = undefined;

/**
 * Shape of this localization type.
 * @member {module:model/LocalizationTypeSpec.DtypeEnum} dtype
 */
LocalizationTypeSpec.prototype['dtype'] = undefined;

/**
 * @member {module:model/ColorMap} colorMap
 */
LocalizationTypeSpec.prototype['colorMap'] = undefined;

/**
 * Width of the line used to draw the localization.
 * @member {Number} line_width
 */
LocalizationTypeSpec.prototype['line_width'] = undefined;

/**
 * Whether this type should be displayed in the UI.
 * @member {Boolean} visible
 * @default true
 */
LocalizationTypeSpec.prototype['visible'] = true;

/**
 * Whether to group elements in the UI by default.
 * @member {Boolean} grouping_default
 * @default true
 */
LocalizationTypeSpec.prototype['grouping_default'] = true;

/**
 * Attribute type definitions.
 * @member {Array.<module:model/AttributeType>} attribute_types
 */
LocalizationTypeSpec.prototype['attribute_types'] = undefined;

/**
 * List of integers identifying media types that this localization type may apply to.
 * @member {Array.<Number>} media_types
 */
LocalizationTypeSpec.prototype['media_types'] = undefined;





/**
 * Allowed values for the <code>dtype</code> property.
 * @enum {String}
 * @readonly
 */
LocalizationTypeSpec['DtypeEnum'] = {

    /**
     * value: "box"
     * @const
     */
    "box": "box",

    /**
     * value: "line"
     * @const
     */
    "line": "line",

    /**
     * value: "dot"
     * @const
     */
    "dot": "dot"
};



export default LocalizationTypeSpec;

