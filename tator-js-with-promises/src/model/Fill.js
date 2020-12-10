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
import Color from './Color';

/**
 * The Fill model module.
 * @module model/Fill
 * @version 0.0.1
 */
class Fill {
    /**
     * Constructs a new <code>Fill</code>.
     * Maps an attribute value or version to a color/alpha. Use &#x60;key&#x60; and &#x60;map&#x60; (optionally &#x60;alpha_ranges&#x60;) to map an attribute value to colors. Use &#x60;version&#x60; to map version IDs to colors.
     * @alias module:model/Fill
     */
    constructor() { 
        
        Fill.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Fill</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Fill} obj Optional instance to populate.
     * @return {module:model/Fill} The populated <code>Fill</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Fill();

            if (data.hasOwnProperty('color')) {
                obj['color'] = Color.constructFromObject(data['color']);
            }
            if (data.hasOwnProperty('style')) {
                obj['style'] = ApiClient.convertToType(data['style'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Color} color
 */
Fill.prototype['color'] = undefined;

/**
 * Type of fill effect
 * @member {module:model/Fill.StyleEnum} style
 */
Fill.prototype['style'] = undefined;





/**
 * Allowed values for the <code>style</code> property.
 * @enum {String}
 * @readonly
 */
Fill['StyleEnum'] = {

    /**
     * value: "fill"
     * @const
     */
    "fill": "fill",

    /**
     * value: "blur"
     * @const
     */
    "blur": "blur",

    /**
     * value: "gray"
     * @const
     */
    "gray": "gray"
};



export default Fill;

