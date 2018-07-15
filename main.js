
let staircasesData = require('./data.json');
staircasesData = JSON.stringify(staircasesData)
staircasesData = JSON.parse(staircasesData);

function processStaircasesData(staircasesData) {
    let processedStaircasesData = [];
    processedStaircasesData = staircasesData.features.map(
        staircase => {
            let processedStaircaseObj = {
                "id": staircase.properties.id,
                "name": staircase.properties.name,
                "image": staircase.properties.image,
                "coordinates": staircase.geometry.coordinates,
                "material": staircase.properties.material,
                "numberOfSteps": staircase.properties.number_of_steps,
                "length": staircase.properties.length,
                "totalPopulation": staircase.properties.total_population,
                "transitRiderCount": staircase.properties.transit_rider_count,
                "overallScore": staircase.properties.overall_score,
                "detourScore": staircase.properties.detour_score,
                "transitScore": staircase.properties.transit_score,
            };

            return processedStaircaseObj;
        }
    );
    return processedStaircasesData;
}

function averageArrayOfArrays(arrays) {
    let total = [0, 0];
    arrays.forEach(
        arr => {
            total[0] += arr[0];
            total[1] += arr[1];
        }
    );
    total[0] = total[0] / arrays.length;
    total[1] = total[1] / arrays.length;
    return total;
}

let staircases = processStaircasesData(staircasesData);
let totalSteps = 0;
let totalLength = 0;
let countStaircases = 0;

staircases.forEach(
    staircase => {
        totalSteps += staircase.numberOfSteps;
        totalLength += staircase.length;
        countStaircases++;
        console.log(
            `
                Name: ${staircase.name}
                Number of steps: ${staircase.numberOfSteps}
                Length: ${staircase.length}
                Length / Num of steps: ${staircase.length / staircase.numberOfSteps}
                Overall score: ${staircase.overallScore}
                Detour score: ${staircase.detourScore}
                Transit score: ${staircase.transitScore}
                Running count of staircases: ${countStaircases}
                Running count of steps: ${totalSteps}
                Running total length of staircases: ${totalLength}
                Coordinates: ${staircase.coordinates}
                Avg coordinates: ${averageArrayOfArrays(staircase.coordinates)}
            `
        );
    }
);


// function drawMap(staircasesData) {
//     let staircasesLocations = staircasesData.map(
//         // staircase => {
//         //     for (cstaircase.coordinates.length)
//         // }
//     );
//
// }
// drawMap(staircases);
