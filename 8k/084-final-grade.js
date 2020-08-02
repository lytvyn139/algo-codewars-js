//https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript
/* Examples:

finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0
 */
const finalGrade = (exam, projects) => {
    if (exam > 90 || projects > 10) return 100
    if (exam > 75 && projects >= 5) return 90
    if (exam > 50 && projects >= 2) return 75

    return 0
}
