const { validateSkillRequest } = require('../utils/validation');
const { parseAIResponse, fallbackAnalysis } = require('../utils/responseParser');
const openaiService = require('../services/openaiService');

exports.analyzeSkill = async (req, res, next) => {
  try {
    const { fullName, email, skill, experience } = req.body;
    const validationError = validateSkillRequest({ fullName, email, skill, experience });
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }
    const aiResponseText = await openaiService.getSkillAnalysis({ fullName, skill, experience });
    const analysisResult = parseAIResponse(aiResponseText, fallbackAnalysis, skill, fullName);
    res.json({
      success: true,
      userProfile: { fullName, email, skill, experience },
      analysis: analysisResult,
      aiModel: openaiService.model,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};
