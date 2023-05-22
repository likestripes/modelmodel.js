
function ModelModel(appKey) {

    const getUserKey = function(appKey){
        return "foo-key-for-user";
    }
    
    const state = {
        modelKey: "",
        model: {},
        userKey: getUserKey(appKey),
    }

    return {
        setModel: function(modelName){
            console.log("get/set ModelKey for "+modelName)
            state.model = {
                name: modelName,
            }
            state.modelKey = "key-for-"+modelName;
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