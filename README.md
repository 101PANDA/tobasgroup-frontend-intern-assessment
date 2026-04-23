# Tobams Group - Training and Development Page

This is a Next.js and Tailwind CSS implementation of the "Training and Development" page for Tobams Group.

## Live URL

Live deployment: [Live App URL]()

## Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript

## Setup Instructions

1. Clone the repository.
2. Ensure you have Node.js 18+ installed.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Design Decisions & Assumptions

- **Assumptions**: I assumed the dropdown menus in the nav are placeholders and do not require functional state for this static assessment.
- **Customizations**: To maintain a clean component-based architecture, I defined some typography styles based on the provided Figma design.
- **Header Scroll Behavior Customisation**: The Header (`/components/Header.tsx`) currently features a standard "Hide on Scroll Down, Show on Scroll Up" layout which frees up screen space when users explore the page content.
- **Not Pixel perfect**: Could not complete total cleanup before deadline.

## AI Disclosure

The base template page was generated with the assistance of an AI coding agent (Gemini 3.1 pro).
