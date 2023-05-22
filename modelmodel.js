
function ModelModel(appKey) {

    const getUserKey = function(appKey){
        return "foo-key-for-user";
    }
    
    const state = {
        modelKey: "",
        userKey: getUserKey(appKey),
    }

    return {
        setModelKey: function(modelKey){
            state.modelKey = modelKey;
        },
        query: function(query) {
            if (state.modelKey === ""){
                console.log("no modelKey set, using `default`")
                this.setModelKey("default");
            }
            return "querying with "+state.modelKey+": "+query;
        }
    }
}