/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sahyadri: {
          green: '#205A40',
          greenDark: '#17422E',
          gold: '#A3542E',
          orange: '#E86E2A',
          orangeDark: '#9C3B00',
        },
        kpi: {
          rank: '#9EAAEC',
          rankText: '#1E3A8A',
          avgScore: '#A8DFB5',
          avgScoreText: '#166534',
          totalTests: '#E6A89B',
          totalTestsText: '#7C2D12',
          attendance: '#E3B6DC',
          attendanceText: '#701A75',
        },
        brand: {
          blue: '#0056D2',
          coral: '#EF4444',
          darkNavy: '#0F172A',
        },
      },
      borderRadius: {
        'asym-card': '56px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-faculty': 'linear-gradient(135deg, #3238A8 0%, #0EA5E9 100%)',
        'gradient-student': 'linear-gradient(135deg, #E11D48 0%, #8B5CF6 100%)',
        'gradient-calendar': 'linear-gradient(135deg, #5B4EB5 0%, #6C5CE7 100%)',
        'gradient-upcoming': 'linear-gradient(135deg, #A4E5BB 0%, #74C69D 100%)',
        'gradient-toppers': 'linear-gradient(135deg, #FCD5B5 0%, #F7B267 100%)',
        'gradient-tests-overview': 'linear-gradient(180deg, #FFF0EA 0%, #FFE3D8 100%)',
        'gradient-skills-summary': 'linear-gradient(180deg, #D7F9F1 0%, #BFF3E7 100%)',
      },
    },
  },
  plugins: [],
}

