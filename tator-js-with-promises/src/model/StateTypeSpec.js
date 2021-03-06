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
 * The StateTypeSpec model module.
 * @module model/StateTypeSpec
 * @version 0.0.1
 */
class StateTypeSpec {
    /**
     * Constructs a new <code>StateTypeSpec</code>.
     * @alias module:model/StateTypeSpec
     * @param name {String} Name of the state type.
     * @param association {module:model/StateTypeSpec.AssociationEnum} Type of object this state type is associated with.
     * @param mediaTypes {Array.<Number>} List of integers identifying media types that this state type may apply to.
     */
    constructor(name, association, mediaTypes) { 
        
        StateTypeSpec.initialize(this, name, association, mediaTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, association, mediaTypes) { 
        obj['name'] = name;
        obj['association'] = association;
        obj['media_types'] = mediaTypes;
    }

    /**
     * Constructs a <code>StateTypeSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StateTypeSpec} obj Optional instance to populate.
     * @return {module:model/StateTypeSpec} The populated <code>StateTypeSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StateTypeSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('association')) {
                obj['association'] = ApiClient.convertToType(data['association'], 'String');
            }
            if (data.hasOwnProperty('interpolation')) {
                obj['interpolation'] = ApiClient.convertToType(data['interpolation'], 'String');
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
            if (data.hasOwnProperty('delete_child_localizations')) {
                obj['delete_child_localizations'] = ApiClient.convertToType(data['delete_child_localizations'], 'Boolean');
            }
            if (data.hasOwnProperty('media_types')) {
                obj['media_types'] = ApiClient.convertToType(data['media_types'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Name of the state type.
 * @member {String} name
 */
StateTypeSpec.prototype['name'] = undefined;

/**
 * Description of the state type.
 * @member {String} description
 */
StateTypeSpec.prototype['description'] = undefined;

/**
 * Type of object this state type is associated with.
 * @member {module:model/StateTypeSpec.AssociationEnum} association
 */
StateTypeSpec.prototype['association'] = undefined;

/**
 * Interpolation method used by the web interface.
 * @member {module:model/StateTypeSpec.InterpolationEnum} interpolation
 * @default 'latest'
 */
StateTypeSpec.prototype['interpolation'] = 'latest';

/**
 * Whether this state type should be displayed.
 * @member {Boolean} visible
 */
StateTypeSpec.prototype['visible'] = undefined;

/**
 * Whether to group elements in the UI by default.
 * @member {Boolean} grouping_default
 * @default true
 */
StateTypeSpec.prototype['grouping_default'] = true;

/**
 * Attribute type definitions.
 * @member {Array.<module:model/AttributeType>} attribute_types
 */
StateTypeSpec.prototype['attribute_types'] = undefined;

/**
 * True if child localizations should be deleted when this state is deleted. Localizations will only be deleted if they are not associated with another state. 
 * @member {Boolean} delete_child_localizations
 * @default false
 */
StateTypeSpec.prototype['delete_child_localizations'] = false;

/**
 * List of integers identifying media types that this state type may apply to.
 * @member {Array.<Number>} media_types
 */
StateTypeSpec.prototype['media_types'] = undefined;





/**
 * Allowed values for the <code>association</code> property.
 * @enum {String}
 * @readonly
 */
StateTypeSpec['AssociationEnum'] = {

    /**
     * value: "Media"
     * @const
     */
    "Media": "Media",

    /**
     * value: "Frame"
     * @const
     */
    "Frame": "Frame",

    /**
     * value: "Localization"
     * @const
     */
    "Localization": "Localization"
};


/**
 * Allowed values for the <code>interpolation</code> property.
 * @enum {String}
 * @readonly
 */
StateTypeSpec['InterpolationEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "latest"
     * @const
     */
    "latest": "latest",

    /**
     * value: "attr_style_range"
     * @const
     */
    "attr_style_range": "attr_style_range"
};



export default StateTypeSpec;

