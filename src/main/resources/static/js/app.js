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
            
        },
        draw: (blueprint) => {
            
            apimock.getBlueprintsByNameAndAuthor(_selectedAuthor, blueprint, (found) => {
                let canvas = document.getElementById("myCanvas");
                let context = canvas.getContext('2d');
                let points = found.points;

                context.lineWidth = 5;
                context.strokeStyle = "black";
                context.fillStyle = "black";

                if(points == 0) return;

                if(points == 1) {
                    let p = points[0];
                    context.fillRect(p.x, p.y, 5, 5);
                    return;
                }

                for(let i = 1; i < points.length; i++) {
                    let p1 = points[i];
                    let p2 = points[i-1];
                    context.beginPath();
                    console.log(p1);
                    console.log(p2);
                    context.moveTo(p1.x, p1.y);
                    context.lineTo(p2.x, p2.y);
                    context.stroke();
                }
            });

        }
    };
})();