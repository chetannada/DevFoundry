## ✨ AI Text Summarizer

An intelligent and responsive text summarization tool built with **React.js**, **JavaScript**, **TailwindCSS**, and powered by **Gemini API** in the backend. This app allows users to paste long-form text and instantly generate concise summaries in multiple formats—ideal for students, professionals, and content creators.

- 💻 [Source Code](/src/features/ai-text-summarizer)
- 🌐 [Live Demo](https://devfoundry.netlify.app/ai-text-summarizer) ✨

### 🎯 Challenge Overview

#### 🕒 Estimated Completion Time: 45–60 minutes

#### 🛠️ Task Overview:

Build an AI-powered text summarizer that accepts large text input, processes it via Gemini API, and outputs summaries in different modes. The UI should be intuitive, responsive, and optimized for clarity and usability.

#### 📌 Requirements:

- 📝 **Text Input Area**:
  - Accepts up to 10,000 characters.
  - Displays live character count with warnings when nearing the limit.
- ⚡ **Summarization Modes**:
  - Paragraph summary
  - Bullet points
  - One-line summary
- 🤖 **AI Integration**:
  - Backend call to Gemini API for text summarization.
  - Retry mechanism with configurable attempts and delay.
- 📋 **Output Display**:
  - Clean summary output with copy-to-clipboard functionality.
  - Loading skeletons and retry status messages.
- 🧹 **Clear Functionality**:
  - Reset text and summary with one click.
- ⚛️ **State Management**:
  - Use React hooks for text, mode, summary, error, and retry states.
- 🎨 **Styling**:
  - Modern, minimal layout with TailwindCSS animations and transitions.

#### 🔍 Development Focus:

- **Component Modularity** → Separate components for mode selector, textarea, output, and controls.
- **UX Clarity** → Smooth loading states, clear error messages, and intuitive summarization flow.
- **Performance** → Efficient API calls with retry logic and error handling.
- **Accessibility** → Semantic HTML, keyboard-friendly interactions, and clear focus states.

#### 🌟 Additional Considerations:

- Add support for multiple languages.
- Provide export options (PDF, DOCX).
- Integrate with note-taking or productivity apps.
- Allow customization of summary length or tone.
