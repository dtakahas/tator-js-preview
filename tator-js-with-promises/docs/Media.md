# TatorJs.Media

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the media. | [optional] 
**mediaFiles** | [**MediaFiles**](MediaFiles.md) |  | [optional] 
**lastEditStart** | **Date** | Datetime of the start of the session when this media or its annotations were last edited. | [optional] 
**lastEditEnd** | **Date** | Datetime of the end of the session when this media or its annotations were last edited. | [optional] 
**attributes** | [**{String: AttributeValue}**](AttributeValue.md) | Object containing attribute values. | [optional] 
**id** | **Number** | Unique integer identifying this media. | [optional] 
**project** | **Number** | Unique integer identifying project of this media. | [optional] 
**meta** | **Number** | Unique integer identifying entity type of this media. | [optional] 
**file** | **String** | URL of the media file. Relative to https://&lt;domain&gt;/media/. | [optional] 
**thumbnail** | **String** | URL of the thumbnail. Relative to https://&lt;domain&gt;/media/. | [optional] 
**thumbnailGif** | **String** | URL of the thumbnail gif for videos. Relative to https://&lt;domain&gt;/media/. | [optional] 
**segmentInfo** | **String** | Path to segment info. | [optional] 
**createdDatetime** | **String** | Datetime when this media was created. | [optional] 
**createdBy** | **Number** | Unique integer identifying user who created this media. | [optional] 
**modifiedDatetime** | **String** | Datetime when this media was last modified. | [optional] 
**modifiedBy** | **Number** | Unique integer identifying user who last modified this media. | [optional] 
**md5** | **String** | MD5 checksum of the media file. | [optional] 
**numFrames** | **Number** | Number of frames for videos. | [optional] 
**fps** | **Number** | Frame rate for videos. | [optional] 
**codec** | **String** | Codec for videos. | [optional] 
**width** | **Number** | Horizontal resolution in pixels. | [optional] 
**height** | **Number** | Vertical resolution in pixels. | [optional] 
**original** | **String** | DEPRECATED. Use media_files. Stores path to original media file. | [optional] 
**gid** | **String** | Group ID for the upload group of this media. | [optional] 
**uid** | **String** | Unique ID for the upload of this media. | [optional] 


