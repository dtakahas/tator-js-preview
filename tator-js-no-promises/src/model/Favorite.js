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
 * The Favorite model module.
 * @module model/Favorite
 * @version v1
 */
class Favorite {
    /**
     * Constructs a new <code>Favorite</code>.
     * Favorite object.
     * @alias module:model/Favorite
     */
    constructor() { 
        
        Favorite.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Favorite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Favorite} obj Optional instance to populate.
     * @return {module:model/Favorite} The populated <code>Favorite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Favorite();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], {'String': Object});
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique integer identifying a favorite.
 * @member {Number} id
 */
Favorite.prototype['id'] = undefined;

/**
 * Unique integer identifying a user.
 * @member {Number} user
 */
Favorite.prototype['user'] = undefined;

/**
 * Unique integer identifying entity type of this localization.
 * @member {Number} meta
 */
Favorite.prototype['meta'] = undefined;

/**
 * Name of the favorite.
 * @member {String} name
 */
Favorite.prototype['name'] = undefined;

/**
 * Attribute name/value pairs.
 * @member {Object.<String, Object>} values
 */
Favorite.prototype['values'] = undefined;

/**
 * Integer specifying page to display on. Should be 1-10.
 * @member {Number} page
 * @default 1
 */
Favorite.prototype['page'] = 1;






export default Favorite;

