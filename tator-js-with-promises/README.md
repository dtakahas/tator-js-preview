# tator-js

TatorJs - JavaScript client for tator-js
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: 0.0.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install tator-js --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your tator-js from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TatorJs = require('tator-js');

var defaultClient = TatorJs.ApiClient.instance;
// Configure API key authorization: TokenAuth
var TokenAuth = defaultClient.authentications['TokenAuth'];
TokenAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TokenAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new TatorJs.TatorApi()
var project = 56; // {Number} A unique integer identifying a project.
var algorithmLaunchSpec = {"algorithm_name":"My Algorithm","media_query":"?project=1&type=2"}; // {AlgorithmLaunchSpec} 
api.algorithmLaunch(project, algorithmLaunchSpec).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TatorJs.TatorApi* | [**algorithmLaunch**](docs/TatorApi.md#algorithmLaunch) | **POST** /rest/AlgorithmLaunch/{project} | 
*TatorJs.TatorApi* | [**cloneMediaList**](docs/TatorApi.md#cloneMediaList) | **POST** /rest/CloneMedia/{project} | 
*TatorJs.TatorApi* | [**createAnalysis**](docs/TatorApi.md#createAnalysis) | **POST** /rest/Analyses/{project} | 
*TatorJs.TatorApi* | [**createFavorite**](docs/TatorApi.md#createFavorite) | **POST** /rest/Favorites/{project} | 
*TatorJs.TatorApi* | [**createLeafList**](docs/TatorApi.md#createLeafList) | **POST** /rest/Leaves/{project} | 
*TatorJs.TatorApi* | [**createLeafType**](docs/TatorApi.md#createLeafType) | **POST** /rest/LeafTypes/{project} | 
*TatorJs.TatorApi* | [**createLocalizationList**](docs/TatorApi.md#createLocalizationList) | **POST** /rest/Localizations/{project} | 
*TatorJs.TatorApi* | [**createLocalizationType**](docs/TatorApi.md#createLocalizationType) | **POST** /rest/LocalizationTypes/{project} | 
*TatorJs.TatorApi* | [**createMedia**](docs/TatorApi.md#createMedia) | **POST** /rest/Medias/{project} | 
*TatorJs.TatorApi* | [**createMediaType**](docs/TatorApi.md#createMediaType) | **POST** /rest/MediaTypes/{project} | 
*TatorJs.TatorApi* | [**createMembership**](docs/TatorApi.md#createMembership) | **POST** /rest/Memberships/{project} | 
*TatorJs.TatorApi* | [**createObtainAuthToken**](docs/TatorApi.md#createObtainAuthToken) | **POST** /rest/Token | 
*TatorJs.TatorApi* | [**createProject**](docs/TatorApi.md#createProject) | **POST** /rest/Projects | 
*TatorJs.TatorApi* | [**createSection**](docs/TatorApi.md#createSection) | **POST** /rest/Sections/{project} | 
*TatorJs.TatorApi* | [**createStateList**](docs/TatorApi.md#createStateList) | **POST** /rest/States/{project} | 
*TatorJs.TatorApi* | [**createStateType**](docs/TatorApi.md#createStateType) | **POST** /rest/StateTypes/{project} | 
*TatorJs.TatorApi* | [**createTemporaryFile**](docs/TatorApi.md#createTemporaryFile) | **POST** /rest/TemporaryFiles/{project} | 
*TatorJs.TatorApi* | [**createVersion**](docs/TatorApi.md#createVersion) | **POST** /rest/Versions/{project} | 
*TatorJs.TatorApi* | [**deleteAlgorithm**](docs/TatorApi.md#deleteAlgorithm) | **DELETE** /rest/Algorithm/{id} | 
*TatorJs.TatorApi* | [**deleteAnalysis**](docs/TatorApi.md#deleteAnalysis) | **DELETE** /rest/Analysis/{id} | 
*TatorJs.TatorApi* | [**deleteFavorite**](docs/TatorApi.md#deleteFavorite) | **DELETE** /rest/Favorite/{id} | 
*TatorJs.TatorApi* | [**deleteJob**](docs/TatorApi.md#deleteJob) | **DELETE** /rest/Job/{uid} | 
*TatorJs.TatorApi* | [**deleteJobList**](docs/TatorApi.md#deleteJobList) | **DELETE** /rest/Jobs/{project} | 
*TatorJs.TatorApi* | [**deleteLeaf**](docs/TatorApi.md#deleteLeaf) | **DELETE** /rest/Leaf/{id} | 
*TatorJs.TatorApi* | [**deleteLeafList**](docs/TatorApi.md#deleteLeafList) | **DELETE** /rest/Leaves/{project} | 
*TatorJs.TatorApi* | [**deleteLeafType**](docs/TatorApi.md#deleteLeafType) | **DELETE** /rest/LeafType/{id} | 
*TatorJs.TatorApi* | [**deleteLocalization**](docs/TatorApi.md#deleteLocalization) | **DELETE** /rest/Localization/{id} | 
*TatorJs.TatorApi* | [**deleteLocalizationList**](docs/TatorApi.md#deleteLocalizationList) | **DELETE** /rest/Localizations/{project} | 
*TatorJs.TatorApi* | [**deleteLocalizationType**](docs/TatorApi.md#deleteLocalizationType) | **DELETE** /rest/LocalizationType/{id} | 
*TatorJs.TatorApi* | [**deleteMedia**](docs/TatorApi.md#deleteMedia) | **DELETE** /rest/Media/{id} | 
*TatorJs.TatorApi* | [**deleteMediaList**](docs/TatorApi.md#deleteMediaList) | **DELETE** /rest/Medias/{project} | 
*TatorJs.TatorApi* | [**deleteMediaType**](docs/TatorApi.md#deleteMediaType) | **DELETE** /rest/MediaType/{id} | 
*TatorJs.TatorApi* | [**deleteMembership**](docs/TatorApi.md#deleteMembership) | **DELETE** /rest/Membership/{id} | 
*TatorJs.TatorApi* | [**deleteProject**](docs/TatorApi.md#deleteProject) | **DELETE** /rest/Project/{id} | 
*TatorJs.TatorApi* | [**deleteSection**](docs/TatorApi.md#deleteSection) | **DELETE** /rest/Section/{id} | 
*TatorJs.TatorApi* | [**deleteState**](docs/TatorApi.md#deleteState) | **DELETE** /rest/State/{id} | 
*TatorJs.TatorApi* | [**deleteStateList**](docs/TatorApi.md#deleteStateList) | **DELETE** /rest/States/{project} | 
*TatorJs.TatorApi* | [**deleteStateType**](docs/TatorApi.md#deleteStateType) | **DELETE** /rest/StateType/{id} | 
*TatorJs.TatorApi* | [**deleteTemporaryFile**](docs/TatorApi.md#deleteTemporaryFile) | **DELETE** /rest/TemporaryFile/{id} | 
*TatorJs.TatorApi* | [**deleteTemporaryFileList**](docs/TatorApi.md#deleteTemporaryFileList) | **DELETE** /rest/TemporaryFiles/{project} | 
*TatorJs.TatorApi* | [**deleteVersion**](docs/TatorApi.md#deleteVersion) | **DELETE** /rest/Version/{id} | 
*TatorJs.TatorApi* | [**getAlgorithm**](docs/TatorApi.md#getAlgorithm) | **GET** /rest/Algorithm/{id} | 
*TatorJs.TatorApi* | [**getAlgorithmList**](docs/TatorApi.md#getAlgorithmList) | **GET** /rest/Algorithms/{project} | 
*TatorJs.TatorApi* | [**getAnalysis**](docs/TatorApi.md#getAnalysis) | **GET** /rest/Analysis/{id} | 
*TatorJs.TatorApi* | [**getAnalysisList**](docs/TatorApi.md#getAnalysisList) | **GET** /rest/Analyses/{project} | 
*TatorJs.TatorApi* | [**getClip**](docs/TatorApi.md#getClip) | **GET** /rest/GetClip/{id} | 
*TatorJs.TatorApi* | [**getFavorite**](docs/TatorApi.md#getFavorite) | **GET** /rest/Favorite/{id} | 
*TatorJs.TatorApi* | [**getFavoriteList**](docs/TatorApi.md#getFavoriteList) | **GET** /rest/Favorites/{project} | 
*TatorJs.TatorApi* | [**getFrame**](docs/TatorApi.md#getFrame) | **GET** /rest/GetFrame/{id} | 
*TatorJs.TatorApi* | [**getJob**](docs/TatorApi.md#getJob) | **GET** /rest/Job/{uid} | 
*TatorJs.TatorApi* | [**getJobList**](docs/TatorApi.md#getJobList) | **GET** /rest/Jobs/{project} | 
*TatorJs.TatorApi* | [**getLeaf**](docs/TatorApi.md#getLeaf) | **GET** /rest/Leaf/{id} | 
*TatorJs.TatorApi* | [**getLeafCount**](docs/TatorApi.md#getLeafCount) | **GET** /rest/LeafCount/{project} | 
*TatorJs.TatorApi* | [**getLeafList**](docs/TatorApi.md#getLeafList) | **GET** /rest/Leaves/{project} | 
*TatorJs.TatorApi* | [**getLeafType**](docs/TatorApi.md#getLeafType) | **GET** /rest/LeafType/{id} | 
*TatorJs.TatorApi* | [**getLeafTypeList**](docs/TatorApi.md#getLeafTypeList) | **GET** /rest/LeafTypes/{project} | 
*TatorJs.TatorApi* | [**getLocalization**](docs/TatorApi.md#getLocalization) | **GET** /rest/Localization/{id} | 
*TatorJs.TatorApi* | [**getLocalizationCount**](docs/TatorApi.md#getLocalizationCount) | **GET** /rest/LocalizationCount/{project} | 
*TatorJs.TatorApi* | [**getLocalizationGraphic**](docs/TatorApi.md#getLocalizationGraphic) | **GET** /rest/LocalizationGraphic/{id} | 
*TatorJs.TatorApi* | [**getLocalizationList**](docs/TatorApi.md#getLocalizationList) | **GET** /rest/Localizations/{project} | 
*TatorJs.TatorApi* | [**getLocalizationType**](docs/TatorApi.md#getLocalizationType) | **GET** /rest/LocalizationType/{id} | 
*TatorJs.TatorApi* | [**getLocalizationTypeList**](docs/TatorApi.md#getLocalizationTypeList) | **GET** /rest/LocalizationTypes/{project} | 
*TatorJs.TatorApi* | [**getMedia**](docs/TatorApi.md#getMedia) | **GET** /rest/Media/{id} | 
*TatorJs.TatorApi* | [**getMediaCount**](docs/TatorApi.md#getMediaCount) | **GET** /rest/MediaCount/{project} | 
*TatorJs.TatorApi* | [**getMediaList**](docs/TatorApi.md#getMediaList) | **GET** /rest/Medias/{project} | 
*TatorJs.TatorApi* | [**getMediaNext**](docs/TatorApi.md#getMediaNext) | **GET** /rest/MediaNext/{id} | 
*TatorJs.TatorApi* | [**getMediaPrev**](docs/TatorApi.md#getMediaPrev) | **GET** /rest/MediaPrev/{id} | 
*TatorJs.TatorApi* | [**getMediaStats**](docs/TatorApi.md#getMediaStats) | **GET** /rest/MediaStats/{project} | 
*TatorJs.TatorApi* | [**getMediaType**](docs/TatorApi.md#getMediaType) | **GET** /rest/MediaType/{id} | 
*TatorJs.TatorApi* | [**getMediaTypeList**](docs/TatorApi.md#getMediaTypeList) | **GET** /rest/MediaTypes/{project} | 
*TatorJs.TatorApi* | [**getMembership**](docs/TatorApi.md#getMembership) | **GET** /rest/Membership/{id} | 
*TatorJs.TatorApi* | [**getMembershipList**](docs/TatorApi.md#getMembershipList) | **GET** /rest/Memberships/{project} | 
*TatorJs.TatorApi* | [**getProject**](docs/TatorApi.md#getProject) | **GET** /rest/Project/{id} | 
*TatorJs.TatorApi* | [**getProjectList**](docs/TatorApi.md#getProjectList) | **GET** /rest/Projects | 
*TatorJs.TatorApi* | [**getSection**](docs/TatorApi.md#getSection) | **GET** /rest/Section/{id} | 
*TatorJs.TatorApi* | [**getSectionAnalysis**](docs/TatorApi.md#getSectionAnalysis) | **GET** /rest/SectionAnalysis/{project} | 
*TatorJs.TatorApi* | [**getSectionList**](docs/TatorApi.md#getSectionList) | **GET** /rest/Sections/{project} | 
*TatorJs.TatorApi* | [**getState**](docs/TatorApi.md#getState) | **GET** /rest/State/{id} | 
*TatorJs.TatorApi* | [**getStateCount**](docs/TatorApi.md#getStateCount) | **GET** /rest/StateCount/{project} | 
*TatorJs.TatorApi* | [**getStateGraphic**](docs/TatorApi.md#getStateGraphic) | **GET** /rest/StateGraphic/{id} | 
*TatorJs.TatorApi* | [**getStateList**](docs/TatorApi.md#getStateList) | **GET** /rest/States/{project} | 
*TatorJs.TatorApi* | [**getStateType**](docs/TatorApi.md#getStateType) | **GET** /rest/StateType/{id} | 
*TatorJs.TatorApi* | [**getStateTypeList**](docs/TatorApi.md#getStateTypeList) | **GET** /rest/StateTypes/{project} | 
*TatorJs.TatorApi* | [**getTemporaryFile**](docs/TatorApi.md#getTemporaryFile) | **GET** /rest/TemporaryFile/{id} | 
*TatorJs.TatorApi* | [**getTemporaryFileList**](docs/TatorApi.md#getTemporaryFileList) | **GET** /rest/TemporaryFiles/{project} | 
*TatorJs.TatorApi* | [**getVersion**](docs/TatorApi.md#getVersion) | **GET** /rest/Version/{id} | 
*TatorJs.TatorApi* | [**getVersionList**](docs/TatorApi.md#getVersionList) | **GET** /rest/Versions/{project} | 
*TatorJs.TatorApi* | [**leafSuggestion**](docs/TatorApi.md#leafSuggestion) | **GET** /rest/Leaves/Suggestion/{ancestor}/{project} | 
*TatorJs.TatorApi* | [**mergeStates**](docs/TatorApi.md#mergeStates) | **PATCH** /rest/MergeStates/{id} | 
*TatorJs.TatorApi* | [**moveVideo**](docs/TatorApi.md#moveVideo) | **POST** /rest/MoveVideo/{id} | 
*TatorJs.TatorApi* | [**notify**](docs/TatorApi.md#notify) | **POST** /rest/Notify | 
*TatorJs.TatorApi* | [**registerAlgorithm**](docs/TatorApi.md#registerAlgorithm) | **POST** /rest/Algorithms/{project} | 
*TatorJs.TatorApi* | [**saveAlgorithmManifest**](docs/TatorApi.md#saveAlgorithmManifest) | **POST** /rest/SaveAlgorithmManifest/{project} | 
*TatorJs.TatorApi* | [**transcode**](docs/TatorApi.md#transcode) | **POST** /rest/Transcode/{project} | 
*TatorJs.TatorApi* | [**trimStateEnd**](docs/TatorApi.md#trimStateEnd) | **PATCH** /rest/TrimStateEnd/{id} | 
*TatorJs.TatorApi* | [**updateAlgorithm**](docs/TatorApi.md#updateAlgorithm) | **PATCH** /rest/Algorithm/{id} | 
*TatorJs.TatorApi* | [**updateAnalysis**](docs/TatorApi.md#updateAnalysis) | **PATCH** /rest/Analysis/{id} | 
*TatorJs.TatorApi* | [**updateFavorite**](docs/TatorApi.md#updateFavorite) | **PATCH** /rest/Favorite/{id} | 
*TatorJs.TatorApi* | [**updateLeaf**](docs/TatorApi.md#updateLeaf) | **PATCH** /rest/Leaf/{id} | 
*TatorJs.TatorApi* | [**updateLeafList**](docs/TatorApi.md#updateLeafList) | **PATCH** /rest/Leaves/{project} | 
*TatorJs.TatorApi* | [**updateLeafType**](docs/TatorApi.md#updateLeafType) | **PATCH** /rest/LeafType/{id} | 
*TatorJs.TatorApi* | [**updateLocalization**](docs/TatorApi.md#updateLocalization) | **PATCH** /rest/Localization/{id} | 
*TatorJs.TatorApi* | [**updateLocalizationList**](docs/TatorApi.md#updateLocalizationList) | **PATCH** /rest/Localizations/{project} | 
*TatorJs.TatorApi* | [**updateLocalizationType**](docs/TatorApi.md#updateLocalizationType) | **PATCH** /rest/LocalizationType/{id} | 
*TatorJs.TatorApi* | [**updateMedia**](docs/TatorApi.md#updateMedia) | **PATCH** /rest/Media/{id} | 
*TatorJs.TatorApi* | [**updateMediaList**](docs/TatorApi.md#updateMediaList) | **PATCH** /rest/Medias/{project} | 
*TatorJs.TatorApi* | [**updateMediaType**](docs/TatorApi.md#updateMediaType) | **PATCH** /rest/MediaType/{id} | 
*TatorJs.TatorApi* | [**updateMembership**](docs/TatorApi.md#updateMembership) | **PATCH** /rest/Membership/{id} | 
*TatorJs.TatorApi* | [**updateProject**](docs/TatorApi.md#updateProject) | **PATCH** /rest/Project/{id} | 
*TatorJs.TatorApi* | [**updateSection**](docs/TatorApi.md#updateSection) | **PATCH** /rest/Section/{id} | 
*TatorJs.TatorApi* | [**updateState**](docs/TatorApi.md#updateState) | **PATCH** /rest/State/{id} | 
*TatorJs.TatorApi* | [**updateStateList**](docs/TatorApi.md#updateStateList) | **PATCH** /rest/States/{project} | 
*TatorJs.TatorApi* | [**updateStateType**](docs/TatorApi.md#updateStateType) | **PATCH** /rest/StateType/{id} | 
*TatorJs.TatorApi* | [**updateVersion**](docs/TatorApi.md#updateVersion) | **PATCH** /rest/Version/{id} | 
*TatorJs.TatorApi* | [**whoami**](docs/TatorApi.md#whoami) | **GET** /rest/User/GetCurrent | 


## Documentation for Models

 - [TatorJs.Algorithm](docs/Algorithm.md)
 - [TatorJs.AlgorithmLaunch](docs/AlgorithmLaunch.md)
 - [TatorJs.AlgorithmLaunchSpec](docs/AlgorithmLaunchSpec.md)
 - [TatorJs.AlgorithmManifest](docs/AlgorithmManifest.md)
 - [TatorJs.AlgorithmManifestSpec](docs/AlgorithmManifestSpec.md)
 - [TatorJs.AlgorithmParameter](docs/AlgorithmParameter.md)
 - [TatorJs.AlgorithmSpec](docs/AlgorithmSpec.md)
 - [TatorJs.Analysis](docs/Analysis.md)
 - [TatorJs.AnalysisSpec](docs/AnalysisSpec.md)
 - [TatorJs.ArchiveConfig](docs/ArchiveConfig.md)
 - [TatorJs.AttributeBulkUpdate](docs/AttributeBulkUpdate.md)
 - [TatorJs.AttributeType](docs/AttributeType.md)
 - [TatorJs.AttributeValue](docs/AttributeValue.md)
 - [TatorJs.AudioDefinition](docs/AudioDefinition.md)
 - [TatorJs.AutocompleteService](docs/AutocompleteService.md)
 - [TatorJs.BadRequestResponse](docs/BadRequestResponse.md)
 - [TatorJs.CloneMediaSpec](docs/CloneMediaSpec.md)
 - [TatorJs.Color](docs/Color.md)
 - [TatorJs.ColorMap](docs/ColorMap.md)
 - [TatorJs.CreateListResponse](docs/CreateListResponse.md)
 - [TatorJs.CreateResponse](docs/CreateResponse.md)
 - [TatorJs.Credentials](docs/Credentials.md)
 - [TatorJs.EncodeConfig](docs/EncodeConfig.md)
 - [TatorJs.Favorite](docs/Favorite.md)
 - [TatorJs.FavoriteSpec](docs/FavoriteSpec.md)
 - [TatorJs.FavoriteUpdate](docs/FavoriteUpdate.md)
 - [TatorJs.Fill](docs/Fill.md)
 - [TatorJs.Job](docs/Job.md)
 - [TatorJs.JobNode](docs/JobNode.md)
 - [TatorJs.Leaf](docs/Leaf.md)
 - [TatorJs.LeafSpec](docs/LeafSpec.md)
 - [TatorJs.LeafSuggestion](docs/LeafSuggestion.md)
 - [TatorJs.LeafType](docs/LeafType.md)
 - [TatorJs.LeafTypeSpec](docs/LeafTypeSpec.md)
 - [TatorJs.LeafTypeUpdate](docs/LeafTypeUpdate.md)
 - [TatorJs.LeafUpdate](docs/LeafUpdate.md)
 - [TatorJs.Localization](docs/Localization.md)
 - [TatorJs.LocalizationSpec](docs/LocalizationSpec.md)
 - [TatorJs.LocalizationType](docs/LocalizationType.md)
 - [TatorJs.LocalizationTypeSpec](docs/LocalizationTypeSpec.md)
 - [TatorJs.LocalizationTypeUpdate](docs/LocalizationTypeUpdate.md)
 - [TatorJs.LocalizationUpdate](docs/LocalizationUpdate.md)
 - [TatorJs.Media](docs/Media.md)
 - [TatorJs.MediaFiles](docs/MediaFiles.md)
 - [TatorJs.MediaNext](docs/MediaNext.md)
 - [TatorJs.MediaPrev](docs/MediaPrev.md)
 - [TatorJs.MediaSpec](docs/MediaSpec.md)
 - [TatorJs.MediaStats](docs/MediaStats.md)
 - [TatorJs.MediaType](docs/MediaType.md)
 - [TatorJs.MediaTypeSpec](docs/MediaTypeSpec.md)
 - [TatorJs.MediaTypeUpdate](docs/MediaTypeUpdate.md)
 - [TatorJs.MediaUpdate](docs/MediaUpdate.md)
 - [TatorJs.Membership](docs/Membership.md)
 - [TatorJs.MembershipSpec](docs/MembershipSpec.md)
 - [TatorJs.MembershipUpdate](docs/MembershipUpdate.md)
 - [TatorJs.MessageResponse](docs/MessageResponse.md)
 - [TatorJs.MoveVideoSpec](docs/MoveVideoSpec.md)
 - [TatorJs.NotFoundResponse](docs/NotFoundResponse.md)
 - [TatorJs.NotifySpec](docs/NotifySpec.md)
 - [TatorJs.Project](docs/Project.md)
 - [TatorJs.ProjectSpec](docs/ProjectSpec.md)
 - [TatorJs.ResolutionConfig](docs/ResolutionConfig.md)
 - [TatorJs.S3StorageConfig](docs/S3StorageConfig.md)
 - [TatorJs.Section](docs/Section.md)
 - [TatorJs.SectionSpec](docs/SectionSpec.md)
 - [TatorJs.State](docs/State.md)
 - [TatorJs.StateMergeUpdate](docs/StateMergeUpdate.md)
 - [TatorJs.StateSpec](docs/StateSpec.md)
 - [TatorJs.StateTrimUpdate](docs/StateTrimUpdate.md)
 - [TatorJs.StateType](docs/StateType.md)
 - [TatorJs.StateTypeSpec](docs/StateTypeSpec.md)
 - [TatorJs.StateTypeUpdate](docs/StateTypeUpdate.md)
 - [TatorJs.StateUpdate](docs/StateUpdate.md)
 - [TatorJs.TemporaryFile](docs/TemporaryFile.md)
 - [TatorJs.TemporaryFileSpec](docs/TemporaryFileSpec.md)
 - [TatorJs.Token](docs/Token.md)
 - [TatorJs.Transcode](docs/Transcode.md)
 - [TatorJs.TranscodeSpec](docs/TranscodeSpec.md)
 - [TatorJs.User](docs/User.md)
 - [TatorJs.UserUpdate](docs/UserUpdate.md)
 - [TatorJs.Version](docs/Version.md)
 - [TatorJs.VersionSpec](docs/VersionSpec.md)
 - [TatorJs.VersionUpdate](docs/VersionUpdate.md)
 - [TatorJs.VideoClip](docs/VideoClip.md)
 - [TatorJs.VideoDefinition](docs/VideoDefinition.md)


## Documentation for Authorization



### TokenAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

