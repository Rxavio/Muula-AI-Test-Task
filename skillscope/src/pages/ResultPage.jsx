import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [shareClicked, setShareClicked] = useState(false);

  // Fallback if page loaded directly
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">No Data Available</h2>
            <p className="text-gray-600 mb-6">
              Please complete the skill assessment form to see your results.
            </p>
            <button
              onClick={() => navigate("/form")}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Start Skill Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { userProfile, analysis } = data;

  const handleShare = () => {
    setShareClicked(true);
    // Simulate sharing functionality
    setTimeout(() => {
      setShareClicked(false);
      alert("Results shared successfully! (This is a demo feature)");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-2">Your Skill Profile</h1>
            <p className="text-blue-100">
              Personalized insights powered by AI
            </p>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {userProfile.fullName.split(' ').map(name => name[0]).join('').toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{userProfile.fullName}</h2>
                <p className="text-gray-600">{userProfile.email}</p>
                <p className="text-sm text-blue-600 font-medium">{userProfile.skill}</p>
              </div>
            </div>
          </div>

          {/* AI Analysis */}
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  ✓
                </span> Profile Summary
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  {analysis.profileSummary}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  💡
                </span>Recommended Skills to Learn
              </h3>
              <div className="space-y-3">
                {analysis.skillSuggestions.map((skill, index) => (
                  <div key={skill} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{skill}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          This skill complements your {userProfile.skill} expertise and is highly valued in today's market.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Context */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  📋
                </span>Your Experience
              </h3>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-gray-700 italic">
                  "{userProfile.experience}"
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => navigate("/form")}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-semibold"
              >
                Start New Assessment
              </button>
              <button
                onClick={handleShare}
                disabled={shareClicked}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-300 disabled:cursor-not-allowed transition duration-200 font-semibold"
              >
                {shareClicked ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sharing...
                  </div>
                ) : (
                  "Share Results"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-800 text-sm transition duration-200"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
