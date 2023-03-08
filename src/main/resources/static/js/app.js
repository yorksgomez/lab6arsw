var App = (() => {
    let _selectedAuthor = "";
    let _selectedBlueprints = [];

    return {
        selectAuthor: (author) => {
            _selectedAuthor = author;
            apimock.getBlueprintsByAuthor(author, (blueprints) => _selectedBlueprints = blueprints);
        },
        getAuthor: () => {
            return _selectedAuthor;
        },
        getBlueprints: () => {
            return _selectedBlueprints;
        },
        updatePoints: () => {
            
        }
    };
})();