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
 * The Algorithm model module.
 * @module model/Algorithm
 * @version v1
 */
class Algorithm {
    /**
     * Constructs a new <code>Algorithm</code>.
     * @alias module:model/Algorithm
     */
    constructor() { 
        
        Algorithm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Algorithm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Algorithm} obj Optional instance to populate.
     * @return {module:model/Algorithm} The populated <code>Algorithm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Algorithm();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('manifest')) {
                obj['manifest'] = ApiClient.convertToType(data['manifest'], 'String');
            }
            if (data.hasOwnProperty('cluster')) {
                obj['cluster'] = ApiClient.convertToType(data['cluster'], 'Number');
            }
            if (data.hasOwnProperty('files_per_job')) {
                obj['files_per_job'] = ApiClient.convertToType(data['files_per_job'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Unique integer identifying the registered algorithm.
 * @member {Number} id
 */
Algorithm.prototype['id'] = undefined;

/**
 * Unique integer identifying the project associated with the algorithm.
 * @member {Number} project
 */
Algorithm.prototype['project'] = undefined;

/**
 * Unique name of the algorithm workflow.
 * @member {String} name
 */
Algorithm.prototype['name'] = undefined;

/**
 * Unique integer identifying the user registering the algorithm.
 * @member {Number} user
 */
Algorithm.prototype['user'] = undefined;

/**
 * Description of the algorithm.
 * @member {String} description
 */
Algorithm.prototype['description'] = undefined;

/**
 * Server URL to argo manifest file (.yaml)
 * @member {String} manifest
 */
Algorithm.prototype['manifest'] = undefined;

/**
 * Unique integer identifying the job cluster.
 * @member {Number} cluster
 */
Algorithm.prototype['cluster'] = undefined;

/**
 * Number of media files to be submitted to each workflow.
 * @member {Number} files_per_job
 */
Algorithm.prototype['files_per_job'] = undefined;






export default Algorithm;
