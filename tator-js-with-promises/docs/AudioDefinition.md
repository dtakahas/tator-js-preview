# TatorJs.AudioDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **String** | Relative URL to the file. | [optional] 
**size** | **Number** | File size in bytes. | [optional] 
**bitRate** | **Number** | Bit rate in bits per second | [optional] 
**codec** | **String** | Human readable codec. | 
**host** | **String** | If supplied will use this instead of currently connected host, e.g. https://example.com | [optional] 
**httpAuth** | **String** | If specified will be used for HTTP authorization in request for media, i.e. \&quot;bearer &lt;token&gt;\&quot;. | [optional] 
**codecMime** | **String** | Example mime: \&quot;video/mp4; codecs&#x3D;\&quot;avc1.64001e\&quot;\&quot;. Only relevant for streaming files, will assume example above if not present. | [optional] 
**codecDescription** | **String** | Description other than codec. | [optional] 
**url** | **String** | Required when this object is used with the MoveVideo endpoint, this field is the upload URL of the audio file. It is is used for the src path and to create &#x60;path&#x60; field. | [optional] 


