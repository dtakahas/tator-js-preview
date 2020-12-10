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
import ArchiveConfig from './ArchiveConfig';
import AttributeType from './AttributeType';
import ResolutionConfig from './ResolutionConfig';

/**
 * The MediaTypeSpec model module.
 * @module model/MediaTypeSpec
 * @version 0.0.1
 */
class MediaTypeSpec {
    /**
     * Constructs a new <code>MediaTypeSpec</code>.
     * @alias module:model/MediaTypeSpec
     * @param name {String} Name of the media type.
     * @param dtype {module:model/MediaTypeSpec.DtypeEnum} Type of the media, image or video.
     */
    constructor(name, dtype) { 
        
        MediaTypeSpec.initialize(this, name, dtype);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, dtype) { 
        obj['name'] = name;
        obj['dtype'] = dtype;
    }

    /**
     * Constructs a <code>MediaTypeSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MediaTypeSpec} obj Optional instance to populate.
     * @return {module:model/MediaTypeSpec} The populated <code>MediaTypeSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MediaTypeSpec();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('dtype')) {
                obj['dtype'] = ApiClient.convertToType(data['dtype'], 'String');
            }
            if (data.hasOwnProperty('file_format')) {
                obj['file_format'] = ApiClient.convertToType(data['file_format'], 'String');
            }
            if (data.hasOwnProperty('keep_original')) {
                obj['keep_original'] = ApiClient.convertToType(data['keep_original'], 'Boolean');
            }
            if (data.hasOwnProperty('default_volume')) {
                obj['default_volume'] = ApiClient.convertToType(data['default_volume'], 'Number');
            }
            if (data.hasOwnProperty('attribute_types')) {
                obj['attribute_types'] = ApiClient.convertToType(data['attribute_types'], [AttributeType]);
            }
            if (data.hasOwnProperty('archive_config')) {
                obj['archive_config'] = ApiClient.convertToType(data['archive_config'], [ArchiveConfig]);
            }
            if (data.hasOwnProperty('streaming_config')) {
                obj['streaming_config'] = ApiClient.convertToType(data['streaming_config'], [ResolutionConfig]);
            }
            if (data.hasOwnProperty('overlay_config')) {
                obj['overlay_config'] = ApiClient.convertToType(data['overlay_config'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * Name of the media type.
 * @member {String} name
 */
MediaTypeSpec.prototype['name'] = undefined;

/**
 * Description of the media type.
 * @member {String} description
 * @default ''
 */
MediaTypeSpec.prototype['description'] = '';

/**
 * Type of the media, image or video.
 * @member {module:model/MediaTypeSpec.DtypeEnum} dtype
 */
MediaTypeSpec.prototype['dtype'] = undefined;

/**
 * File extension. If omitted, any recognized file extension for the given dtype is accepted for upload. Do not include a dot prefix.
 * @member {String} file_format
 */
MediaTypeSpec.prototype['file_format'] = undefined;

/**
 * For video dtype, whether to keep the original video file for archival purposes after transcoding. If true, the originally uploaded file will be available for download, otherwise downloads will use the transcoded videos.
 * @member {Boolean} keep_original
 * @default true
 */
MediaTypeSpec.prototype['keep_original'] = true;

/**
 * Default audio volume for this media type.
 * @member {Number} default_volume
 */
MediaTypeSpec.prototype['default_volume'] = undefined;

/**
 * Attribute type definitions.
 * @member {Array.<module:model/AttributeType>} attribute_types
 */
MediaTypeSpec.prototype['attribute_types'] = undefined;

/**
 * Archive config definitions. If null, the raw file will be uploaded to Tator.
 * @member {Array.<module:model/ArchiveConfig>} archive_config
 */
MediaTypeSpec.prototype['archive_config'] = undefined;

/**
 * Streaming config defintion. If null, the default will be used.
 * @member {Array.<module:model/ResolutionConfig>} streaming_config
 */
MediaTypeSpec.prototype['streaming_config'] = undefined;

/**
 * Overlay configuration
 * @member {Object.<String, Object>} overlay_config
 */
MediaTypeSpec.prototype['overlay_config'] = undefined;





/**
 * Allowed values for the <code>dtype</code> property.
 * @enum {String}
 * @readonly
 */
MediaTypeSpec['DtypeEnum'] = {

    /**
     * value: "image"
     * @const
     */
    "image": "image",

    /**
     * value: "video"
     * @const
     */
    "video": "video",

    /**
     * value: "multi"
     * @const
     */
    "multi": "multi"
};



export default MediaTypeSpec;

