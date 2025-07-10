import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SS</span>
          </div>
          <span className="text-xl font-bold text-gray-800">SkillScope</span>
        </div>
        <Link
          to="/form"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 text-sm font-medium"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-16 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Know Your Strengths,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Unlock New Opportunities
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Discover where your skills can take you next with our AI-powered skill profiler. 
            Get personalized insights and recommendations to advance your career.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600 text-sm">
              Advanced AI analyzes your skills and experience to provide personalized insights
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Growth Recommendations</h3>
            <p className="text-gray-600 text-sm">
              Get specific skill suggestions that complement your expertise
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">
              Quick assessment with immediate, actionable career insights
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-4">
          <Link
            to="/form"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-200 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Skill Check
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-gray-500">
            Takes less than 2 minutes • No signup required
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} SkillScope by Xavio</p>
      </footer>
    </div>
  );
}

export default LandingPage;
