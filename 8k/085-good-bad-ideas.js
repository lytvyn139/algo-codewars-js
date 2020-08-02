//https://www.codewars.com/kata/57f222ce69e09c3630000212/solutions/javascript/me/best_practice

function well(x) {
    let good = 0;
    for (let i = 0; i <= x.length; i++) {
        if (x[i] === 'good') {
            good++;
        } else continue
    }
    if (good === 0) {
        return 'Fail!'
    } else if (good === 1 || good === 2) {
        return 'Publish!'
    } else if (good > 2) {
        return 'I smell a series!'
    }
}

function well(ideas) {
    switch (ideas.reduce((a, i) => a + (i == 'good'), 0)) {
        case 0: return 'Fail!';
        case 1: case 2: return 'Publish!';
        default: return 'I smell a series!';
    }
}