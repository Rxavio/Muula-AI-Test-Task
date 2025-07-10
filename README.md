# SkillScope - Smart Skill Profiler

SkillScope is an AI-powered skill analysis tool that helps users discover their career strengths and potential opportunities based on their skills and experience.

## Live Demo

- Frontend: [https://muula-ai-test-task-u2ma.vercel.app](https://muula-ai-test-task-u2ma.vercel.app)
- Backend API: [https://muula-ai-test-task-backend.vercel.app](https://muula-ai-test-task-backend.vercel.app)

## Project Overview

SkillScope allows users to:
- Submit their name, email, skill, and experience details
- Receive AI-generated professional summaries of their skills
- Get personalized skill development recommendations
- All without requiring account creation or sign-up

## Features

- **AI-Powered Analysis**: Advanced AI analyzes skills and experience to provide personalized insights
- **Growth Recommendations**: Get specific skill suggestions that complement existing expertise
- **Instant Results**: Quick assessment with immediate, actionable career insights
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- **Modern UI**: Clean, professional interface built with Tailwind CSS

## Tech Stack

### Frontend
- **React**: UI framework
- **Tailwind CSS**: For styling
- **Vite**: Build tool and development server
- **ESLint**: Code linting

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **OpenAI API**: For AI-powered skill analysis
- **Cors**: For handling Cross-Origin Resource Sharing
- **Helmet**: For security headers
- **Morgan**: For HTTP request logging
- **Dotenv**: For environment variable management
- **Nodemon**: For development server reloading

## Project Structure

```
├── backend/             
│   ├── config/          
│   ├── controllers/     
│   ├── middleware/      
│   ├── routes/          
│   ├── services/        
│   ├── utils/            
│   ├── app.js           
│   └── vercel.json      
│
├── skillscope/          
│   ├── public/         
│   └── src/            
│       ├── assets/      
│       ├── config/     
│       ├── pages/        
│       └── main.jsx      
```
## Environment Variables

### Backend
- `PORT`: The port to run the server
- `MESSAGE`: Custom message for the root endpoint
- `OPENAI_API_KEY`: Your OpenAI API key
- `OPENAI_API_URL`: OpenAI API URL
- `OPENAI_MODEL`: OpenAI model to use (e.g., gpt-4o)
- `DEV_FRONTEND_URL`: URL of the frontend in development (for CORS)
- `LIVE_FRONTEND_URL`: URL of the frontend in production (for CORS)

### Frontend
- `VITE_LIVE_API_URL`: URL of the backend API in production
- `VITE_DEV_API_URL`: URL of the backend API in development

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- OpenAI API key

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/Rxavio/Muula-AI-Test-Task.git
   cd Muula-AI-Test-Task
   ```

2. Set up the backend
   ```bash
   cd backend
   npm install
   
   # Create .env file
   cp .env.example .env
   # Edit .env and add your OpenAI API key and other configuration
   
   # Start development server
   npm run dev
   ```

3. Set up the frontend
   ```bash
   cd ../skillscope
   npm install
   
   # Create .env file
   cp .env.example .env
   # Edit .env to point to your backend URL
   
   # Start development server
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Deployment

### Vercel Deployment

Both the frontend and backend are deployed on Vercel:

##### Backend Deployment
1. Connect your GitHub repository to Vercel
2. Set the project root to `/backend`
3. Add environment variables in Vercel project settings
4. Deploy the project

#### Frontend Deployment
1. Connect your GitHub repository to Vercel
2. Set the project root to `/skillscope`
3. Add the `VITE_LIVE_API_URL` environment variable with your backend URL
4. Deploy the project

## API Endpoints

### Health Check
- `GET /api/health` - Check if the API is running

### Skill Analysis
- `POST /api/analyze-skill` - Submit skill information for analysis
  - Request body:
    ```json
    {
      "fullName": "John Doe",
      "email": "john@example.com",
      "skill": "JavaScript Development",
      "experience": "5 years of frontend development with React"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "userProfile": {
        "fullName": "John Doe",
        "email": "john@example.com",
        "skill": "JavaScript Development",
        "experience": "5 years of frontend development with React"
      },
      "analysis": {
        "profileSummary": "Experienced JavaScript developer...",
        "skillSuggestions": ["TypeScript", "Node.js", "React Native"]
      },
      "aiModel": "gpt-4o-mini",
      "timestamp": "2025-07-10T12:34:56.789Z"
    }
    ```

## Author

- [Xavio](https://github.com/Rxavio) - Developer
