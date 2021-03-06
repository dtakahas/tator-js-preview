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
 * The ResolutionConfig model module.
 * @module model/ResolutionConfig
 * @version 0.0.1
 */
class ResolutionConfig {
    /**
     * Constructs a new <code>ResolutionConfig</code>.
     * Settings for streaming video encode. Any additional properties will be passed as command line arguments to ffmpeg. 
     * @alias module:model/ResolutionConfig
     */
    constructor() { 
        
        ResolutionConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResolutionConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResolutionConfig} obj Optional instance to populate.
     * @return {module:model/ResolutionConfig} The populated <code>ResolutionConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResolutionConfig();

            if (data.hasOwnProperty('vcodec')) {
                obj['vcodec'] = ApiClient.convertToType(data['vcodec'], 'String');
            }
            if (data.hasOwnProperty('crf')) {
                obj['crf'] = ApiClient.convertToType(data['crf'], 'Number');
            }
            if (data.hasOwnProperty('resolution')) {
                obj['resolution'] = ApiClient.convertToType(data['resolution'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Video codec.
 * @member {module:model/ResolutionConfig.VcodecEnum} vcodec
 * @default 'h264'
 */
ResolutionConfig.prototype['vcodec'] = 'h264';

/**
 * Constant rate factor.
 * @member {Number} crf
 * @default 23
 */
ResolutionConfig.prototype['crf'] = 23;

/**
 * Vertical Resolution
 * @member {Number} resolution
 */
ResolutionConfig.prototype['resolution'] = undefined;





/**
 * Allowed values for the <code>vcodec</code> property.
 * @enum {String}
 * @readonly
 */
ResolutionConfig['VcodecEnum'] = {

    /**
     * value: "h264"
     * @const
     */
    "h264": "h264"
};



export default ResolutionConfig;

