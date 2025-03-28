# Prayer Schedule App

A modern web application for tracking daily prayers and religious activities, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🌙 Daily prayer tracking
- 📅 30-day schedule management
- 🌐 Multi-language support (Arabic/English)
- 🎨 Dynamic theme switching (Light/Dark)
- 📱 Responsive design
- 💾 Local storage persistence
- ⚡ Server-side rendering
- 🔒 Type-safe translations

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ahmedRAOUANE/schedule-app.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```bash
├── src/
│ ├── app/ # Next.js app directory
│ ├── components/ # Reusable components
│ ├── hooks/ # Custom React hooks
│ ├── locals/ # Translation files
│ ├── providers/ # React context providers
│ └── utils/ # Utility functions and types
├── public/ # Static assets
└── tailwind.config.js # Tailwind CSS configuration
```

## Key Components

- `Day`: Manages individual day tracking
- `TaskList`: Handles prayer and task lists
- `ToggleLanguage`: Language switching component
- `ToggleTheme`: Theme switching component

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the beautiful icons