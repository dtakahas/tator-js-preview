# TatorJs.SectionSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Unique name of the algorithm workflow. | 
**luceneString** | **String** | Lucene query syntax search string. | [optional] 
**mediaBools** | **[{String: Object}]** | List of elasticsearch boolean queries that should be applied to media. These are applied to the boolean query \&quot;filter\&quot; list. | [optional] 
**annotationBools** | **[{String: Object}]** | List of elasticsearch boolean queries that should be applied to annotations. These are applied to the boolean query \&quot;filter\&quot; list. | [optional] 
**tatorUserSections** | **String** | Attribute that is applied to media to identify membership to a section. | [optional] 


