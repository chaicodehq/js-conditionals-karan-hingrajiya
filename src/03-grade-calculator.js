/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  // Your code here
  if(score < 0 || score > 100){
    return "INVALID";
  }

  let totalScore = 0;
  if (hasExtraCredit == true) {
    totalScore = score + 5;
    if (totalScore > 100) {
      //capped at 100 if score + creadit > 100
      totalScore = 100;
    }
  }else{
    totalScore = score;
  }

  let grade;

  if (totalScore >= 0 && totalScore <= 59) {
    grade = "F";
    return grade;
  } else if (totalScore > 59 && totalScore <= 69) {
    grade = "D";
    return grade;
  } else if (totalScore > 69 && totalScore <= 79) {
    grade = "C";
    return grade;
  } else if (totalScore > 79 && totalScore <= 89) {
    grade = "B";
    return grade;
  } else if (totalScore > 89 && totalScore <= 100) {
    grade = "A";
    return grade;
  } else {
    return "INVALID";
  }
}
