# tator-js
The 2 versions of the generated code are under [tator-js-no-promises](/tator-js-no-promises) and [tator-js-with-promises](/tator-js-with-promises)

Good examples here [with promises](https://github.com/dtakahas/tator-js-preview/blob/main/tator-js-with-promises/docs/TatorApi.md#example) and [without promises](https://github.com/dtakahas/tator-js-preview/blob/main/tator-js-no-promises/docs/TatorApi.md#example).

## Problems

It had a problem with 2 models: `EncodeConfig` and `ResolutionConfig`. They produced this error:
```
[main] WARN  o.o.codegen.DefaultCodegen - Schema Object<String, Object> not found
Exception in thread "main" java.lang.RuntimeException: Could not process model 'ResolutionConfig'.Please make sure that your schema is correct!
```

I got past that by removing `additionalProperties: true` from the schema yaml for both of those, but I'm not sure if that's a desireable solution.