const axios = require('axios');
const { apiKey, apiUrl, model } = require('../config/openai');

exports.model = model;

exports.getSkillAnalysis = async ({ fullName, skill, experience }) => {
  if (!apiKey) {
    const err = new Error('OpenAI API key not configured');
    err.status = 500;
    throw err;
  }

  const prompt = `You are an expert career counselor and skill analyst. Analyze this person's skill profile and provide insights.

Person: ${fullName}
Primary Skill/Trade: ${skill}
Experience Description: ${experience}

Please provide a JSON response with exactly this structure:
{
  "profileSummary": "A brief 2-3 sentence professional summary highlighting their strengths and experience",
  "skillSuggestions": ["First suggested skill area", "Second suggested skill area"]
}

The skill suggestions should be:
1. Relevant to their current skill but complementary
2. Practical and learnable
3. Valuable in today's job market
4. Specific enough to be actionable

Keep the profile summary professional, encouraging, and focused on their potential.`;

  const response = await axios.post(apiUrl, {
    model,
    messages: [
      { role: 'system', content: 'You are an expert career counselor. Always respond with valid JSON only.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 500,
    stream: false
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data.choices[0].message.content;
};
