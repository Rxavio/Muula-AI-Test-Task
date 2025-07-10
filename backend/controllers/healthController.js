exports.hello = (req, res) => {
  res.json({
    message: 'SkillScope API - Smart Skill Profiler',
    version: '1.0.0',
    aiModel: process.env.OPENAI_MODEL,
    endpoints: [
      'GET /api/hello - Health check',
      'POST /api/analyze-skill - AI skill analysis'
    ]
  });
};
