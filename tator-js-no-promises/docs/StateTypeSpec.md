# TatorRestApi.StateTypeSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the state type. | 
**description** | **String** | Description of the state type. | [optional] 
**association** | **String** | Type of object this state type is associated with. | 
**interpolation** | **String** | Interpolation method used by the web interface. | [optional] [default to &#39;latest&#39;]
**visible** | **Boolean** | Whether this state type should be displayed. | [optional] 
**groupingDefault** | **Boolean** | Whether to group elements in the UI by default. | [optional] [default to true]
**attributeTypes** | [**[AttributeType]**](AttributeType.md) | Attribute type definitions. | [optional] 
**deleteChildLocalizations** | **Boolean** | True if child localizations should be deleted when this state is deleted. Localizations will only be deleted if they are not associated with another state.  | [optional] [default to false]
**mediaTypes** | **[Number]** | List of integers identifying media types that this state type may apply to. | 



## Enum: AssociationEnum


* `Media` (value: `"Media"`)

* `Frame` (value: `"Frame"`)

* `Localization` (value: `"Localization"`)





## Enum: InterpolationEnum


* `none` (value: `"none"`)

* `latest` (value: `"latest"`)

* `attr_style_range` (value: `"attr_style_range"`)




