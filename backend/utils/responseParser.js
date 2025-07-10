// AI response parsing helpers
function fallbackAnalysis(skill, fullName) {
  return {
    profileSummary: `With expertise in ${skill}, ${fullName} brings valuable experience and practical knowledge. Their background positions them well for continued growth and new opportunities in their field.`,
    skillSuggestions: [
      'Project Management and Leadership',
      'Digital Tools and Automation'
    ]
  };
}

function parseAIResponse(responseText, fallback, skill, fullName) {
  let cleanedResponse = responseText.trim();
  if (cleanedResponse.startsWith('```json')) {
    cleanedResponse = cleanedResponse.replace(/```json\n?/, '').replace(/\n?```$/, '');
  }
  if (cleanedResponse.startsWith('```')) {
    cleanedResponse = cleanedResponse.replace(/```\n?/, '').replace(/\n?```$/, '');
  }
  try {
    const parsed = JSON.parse(cleanedResponse);
    if (
      parsed.profileSummary &&
      parsed.skillSuggestions &&
      Array.isArray(parsed.skillSuggestions)
    ) {
      let suggestions = parsed.skillSuggestions.slice(0, 2);
      if (suggestions.length < 2) {
        suggestions.push('Communication and Presentation Skills');
      }
      return {
        profileSummary: parsed.profileSummary,
        skillSuggestions: suggestions
      };
    }
  } catch (e) {
    console.error('Failed to parse AI response as JSON:', e);
  }
  return fallback(skill, fullName);
}

module.exports = { parseAIResponse, fallbackAnalysis };
