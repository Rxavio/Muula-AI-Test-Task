import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    skill: "",
    experience: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Hard-code the backend URL directly for now
      const API_URL = 'https://muula-ai-test-task-backend.vercel.app/api';
      console.log('Using API URL:', API_URL);
      
      // Full request URL for debugging
      const requestUrl = `${API_URL}/analyze-skill`;
      console.log('Making request to:', requestUrl);
      
      // Show form data being sent
      console.log('Sending data:', formData);
      
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response received:', data);

      if (!response.ok) {
        console.error('Error response:', response.status, response.statusText);
        throw new Error(data.error || 'Failed to analyze skill profile');
      }

      // Navigate to results with the analysis data
      navigate("/results", { state: data });
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Skill Profile Form
          </h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="skill" className="block text-sm font-medium text-gray-700 mb-2">
                Primary Trade or Skill
              </label>
              <input
                type="text"
                id="skill"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Web Development, Graphic Design, Plumbing"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Experience Description
              </label>
              <textarea
                id="experience"
                name="experience"
                maxLength={300}
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows="4"
                placeholder="Describe your experience, key projects, or achievements in this field (max 300 characters)"
                required
                disabled={isLoading}
              />
              <div className="text-sm text-gray-500 mt-1">
                {formData.experience.length}/300 characters
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300 disabled:cursor-not-allowed transition duration-200"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analyzing Your Skills...
                </div>
              ) : (
                "Submit & Analyze"
              )}
            </button>
          </form>
        </div>
        
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
