// Request validation helpers
module.exports.validateSkillRequest = function ({ fullName, email, skill, experience }) {
  if (!fullName || !email || !skill || !experience) {
    return 'All fields are required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email format';
  }
  if (experience.length > 300) {
    return 'Experience description must be 300 characters or less';
  }
  return null;
};
