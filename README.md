# tator-js
The generated code is under [tator-js-new-bindings](/tator-js-new-bindings)

It had a problem with 2 models: `EncodeConfig` and `ResolutionConfig`. They produced this error:
```
[main] WARN  o.o.codegen.DefaultCodegen - Schema Object<String, Object> not found
Exception in thread "main" java.lang.RuntimeException: Could not process model 'ResolutionConfig'.Please make sure that your schema is correct!
```

I got past that by removing `additionalProperties: true` from the schema yaml for both of those, but I'm not sure if that's a desireable solution.