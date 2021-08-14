var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }

    let positive = []
    let negative = []
    let zeroes = []
    let threes = []

    nums.forEach(element => {
        if (element > 0) {
            positive.push(element)
        } else if (element < 0) {
            negative.push(element)
        } else {
            zeroes.push(element)
        }
    });

    positive.sort((a,b) => a-b)
    negative.sort((a,b) => a-b)

    if (zeroes.length > 2) {
       threes.push([0,0,0])
    }

    if (nums.includes(0)) {
        let first = []
        negative.forEach(num => {
            if (positive.includes(-1*num) && !first.includes(num)) {
                first.push(num)
                threes.push([num, 0, -1*num])
            }
        })
    }

    let negPair = []
    for (i = 0; i < negative.length - 1; i++) {
        for (j = i + 1; j < negative.length; j++) {
            let sum = negative[i] + negative[j]
            let numStr = negative[i].toString() + negative[j].toString()
            if (positive.includes(-1*sum) && !negPair.includes(numStr)) {
                threes.push([negative[i], negative[j], -1*sum])
                negPair.push(numStr)
            }
        }
    }

    let posPair = []
    for (i = 0; i < positive.length - 1; i++) {
        for (j = i + 1; j < positive.length; j++) {
            let sum = positive[i] + positive[j]
            let numStr = positive[i].toString() + positive[j].toString()
            if (negative.includes(-1*sum) && !posPair.includes(numStr)) {
                threes.push([positive[i], positive[j], -1*sum])
                posPair.push(numStr)
            }
        }
    }

    return threes
};

console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]))