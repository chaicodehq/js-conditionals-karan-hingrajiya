/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (password === "" || typeof password !== "string") {
    return "weak";
  }

  function checknum(num) {
    for (let i = 0; i <= 9; i++) {
      if (num == i) {
        return true;
      }
    }
    return false;
  }

  function lowercaseCheck(char){
    let code = char.charCodeAt(0);
    return code>= 97 && code <= 122;
  }

  function uppercaseCheck(char){
    let code = char.charCodeAt(0);
    return code>= 65 && code <= 90;//return true if char exist between this ascii values
  }

  // let count = 0;
  let lower = 0;
  let upper = 0;
  let num = 0;
  let specialChar = 0;
  let specialList = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  for (let i = 0; i < password.length; i++) {
    if (lowercaseCheck(password[i])) {
      lower++;
    }
    if (uppercaseCheck(password[i])) {
      upper++;
    }
    if (checknum(password[i])) {
      num++;
    } 
    // if (lowercaseCheck(password[i]) != true && uppercaseCheck(password[i]) != true && checknum(password[i]) != true){
    //   specialChar++;
    // }
    if(specialList.includes(password[i])){//checking all the char but makes code smaller than above 
      specialChar++;
    }
  }

  let total = lower + upper + num + specialChar;
  let condition = 0;
  if (lower >= 1) {
    condition += 1;
  }
  if (upper >= 1) {
    condition += 1;
  }
  if (num >= 1) {
    condition += 1;
  }
  if (specialChar >= 1) {
    condition += 1;
  }
  if (total >= 8) {
    condition += 1;
  }

  if (condition == 1 || condition == 0) {
    return "weak";
  } else if (condition == 2 || condition == 3) {
    return "medium";
  } else if (condition == 4) {
    return "strong";
  } else if (condition == 5) {
    return "very strong";
  }
}
