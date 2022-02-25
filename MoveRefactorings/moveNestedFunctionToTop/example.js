/**
    why to move a nested function ?
        sometimes a helper function in the form of nested function might have
        a value of it's own so it's better to move that function and give it's
        own identity and more visibility so that it can be used more widely.
 */

// before refactoring the function looks like this
function trackSummary(points) {
    const totalTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance ;
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };

    // nested helper func
    function calculateDistance() {
        let result = 0;
        for (let i = 1; i < points.length; i++) {
        result += distance(points[i], points[i]); }
        return result;
    }

    function distance(p1,p2) {
        const EARTH_RADIUS = 3959;
        const dLat = radians(p2.lat) - radians(p1.lat);
        const dLon = radians(p2.lon) - radians(p1.lon);
        const a = Math.pow(Math.sin(dLat / 2),2)
                    + Math.cos(radians(p2.lat))
                    * Math.cos(radians(p1.lat))
                    * Math.pow(Math.sin(dLon / 2), 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return EARTH_RADIUS * c;
    }
    
    function radians(degrees) { return degrees * Math.PI / 180; }

    function calculateTime() { ... }
}



// 1. we identified that we want to move "calculateDistance" function out

// 2. "calculateDistance" depends on "distance" function and "distance" func depends on "radians"
//      so we will be moving distance, radians

// 3. copy the TO_BE_MOVED func to new context. new context is "outside" right now in this case.
//      pass "points" and move "distance" func as well. name it little different so that we can identify.
//      till now we are just copying the group elements and noting breaks till now. once all the moving
//      is done then follow next step.

function xxx_calculateDistance(points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        result += distance(points[i], points[i-1]);
    }
    return result;

    // nested helper group func1
    function distance(p1,p2) {
        const EARTH_RADIUS = 3959;
        const dLat = radians(p2.lat) - radians(p1.lat);
        const dLon = radians(p2.lon) - radians(p1.lon);
        const a = Math.pow(Math.sin(dLat / 2),2)
                    + Math.cos(radians(p2.lat))
                    * Math.cos(radians(p1.lat))
                    * Math.pow(Math.sin(dLon / 2), 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return EARTH_RADIUS * c;
    }
    
    // nested helper group func2
    function radians(degrees) { return degrees * Math.PI / 180; }    

}

// 4. call "xxx_calculateDistance" from "trackSummary" and test
function trackSummary(points) {
    const totalTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance ;
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };

    // "calculateDistance" is a "middle man" or a "delegating function" here
    function calculateDistance() {
        return xxx_calculateDistance(points)
    }

    function calculateTime() { ... }
}

// 5. change name for "xxx_calculateDistance" and inline it
function trackSummary(points) {
    const totalTime = calculateTime();
    const pace = totalTime / 60 / totalDistance(points) ;
    return {
        time: totalTime,
        distance: totalDistance(points),
        pace: pace
    };

    function calculateTime() { ... }
}

function totalDistance(points) { ... }

/**
    Mechanics
        Step1: find the element which we want to move.
        Step2: identify the elements on which our TO_BE_MOVED function depends and identify
                whether they should be moved or not. if we conclude that we need to move a group
                of functions then it's better to start moving the elements which are least dependent
                on the group which is getting moved.
        Step3: copy the func/s to the new context and give it a new name and pass the parameters or references
                to the older context if the moving funcs need something from older context.
        Step4: refer the moved element from the place from where it was moved and test for correctness.
        Step5: give a new name to moved function which is suitable for the wider scope in which it's in now.
                try thinking of removing the "delegating func" and use Inline Function.
 */
