# TatorJs.MediaTypeSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the media type. | 
**description** | **String** | Description of the media type. | [optional] [default to &#39;&#39;]
**dtype** | **String** | Type of the media, image or video. | 
**fileFormat** | **String** | File extension. If omitted, any recognized file extension for the given dtype is accepted for upload. Do not include a dot prefix. | [optional] 
**keepOriginal** | **Boolean** | For video dtype, whether to keep the original video file for archival purposes after transcoding. If true, the originally uploaded file will be available for download, otherwise downloads will use the transcoded videos. | [optional] [default to true]
**defaultVolume** | **Number** | Default audio volume for this media type. | [optional] 
**attributeTypes** | [**[AttributeType]**](AttributeType.md) | Attribute type definitions. | [optional] 
**archiveConfig** | [**[ArchiveConfig]**](ArchiveConfig.md) | Archive config definitions. If null, the raw file will be uploaded to Tator. | [optional] 
**streamingConfig** | [**[ResolutionConfig]**](ResolutionConfig.md) | Streaming config defintion. If null, the default will be used. | [optional] 
**overlayConfig** | **{String: Object}** | Overlay configuration | [optional] 



## Enum: DtypeEnum


* `image` (value: `"image"`)

* `video` (value: `"video"`)

* `multi` (value: `"multi"`)




