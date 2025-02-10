# OSC Assessment - Adio Mojeed

This is my submission for the OSC Front-end Engineer Technical Assessment. Development is built upon Remix, React Context for state management, Tailwind CSS for stylings, GraphQL for API calls, and Vitest/React Testing Library for unit and integration tests

## Setup Instruction
1. Clone this repository
```git
git clone https://github.com/Adiomojeed/osc-assessment && cd osc-assessment
```
2. Install dependencies:
```bash
npm install
```
3. Copy environment variables and fill accordingly with correct credentials (API url):
```bash
cp .env.example .env
```
4. Ensure you have at least node version 20 installed. You can set that with the command below:
```bash
nvm use 20
```
5. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) with your browser to see the page.

6. Build the project:
```bash
npm run build
```
This will compile TypeScript files from `app/` into JavaScript in the `build/` directory.

7. Start the server in production mode:
```bash
npm start
```
Production URL is [https://osc-adiomojeed.vercel.app](https://osc-adiomojeed.vercel.app)

## Other application commands
1. Check for linting error:
```bash
npm run lint
```
2. Check for Typescript error:
```bash
npm run typecheck
```
3. Run the unit tests:
```bash
npm run test
```

## Technical Decisions 

### Framework and Libraries

-  **Remix**: Remix is preferred for its component-based architecture, server-side rendering and routing, it provides a seamless experience for building modern web applications.
-  **TypeScript**: TS ensures type safety and improves code quality.
-  **Tailwind CSS**: It provides utility-first CSS for rapid UI development with already defined classes and optionality of user-defined styles/customization.
-  **GraphQL**: GraphQL was chosen over REST API because it reduces the need to make more requests than is necessary when interacting with the API.
-  **Vitest**: Chosen over jest and other testing libraries for its fast and efficient testing capabilities, especially suited for Vite projects.
-  **React Testing Library**: Used for testing React components in a way that imitates how users interact with them.

### State Management

-  **Context API**: Used for managing global state (e.g., cart context) to avoid prop drilling and provide a clean and maintainable state management solution. Since this is a simple application, using tools like redux, zustand, or react-query would introduce unnecessary complexities

### File Structure

-  **Component-based structure**: The codes are organized by features, making it easier to maintain and scale.
-  **Separation of concerns**: This ensures that each component and utility function has a single responsibility, improving code readability and maintainability.
```
/
├── app/ 				# All application source codes are here, including styles, API calls, and unit/integration tests
|	├── __tests__/ 		# contains all units and integration tests
|	├── api/ 			# contains api related codes (graphql) 
|	├── components/ 	# all reusable components
|	├── hooks/ 			# contains all custom hooks used in application
|	├── routes/ 		# pages routing 
|	├── styles/ 		# application stylings (css) 
|	├── utils/ 			# self-defined functions 
|	├── root.tsx 		# applicatione entry 
├── public/ # All static assets are stored here
├── .env.example        # environment variables
├── .eslintrc.cjs       # linting rules configuration
├── .gitignore          # git ignores files
├── vitest.config.ts	# vitest configurations for tests
├── vitest.setup.ts		# vitest setup for file
├── vite.config.ts 		# vite configuration
├── README.md           # ReadME documentations
├── package.json        # application information and dependencies
├── postcss.config.js
└── tsconfig.json       # typescripts configurations
├── others 				# Other configuration files are listed below
└── ...
```
### Performance Optimization

-  **Code splitting and lazy load**: Implemented dynamic imports to split code into smaller bundles and lazy-loaded components that are not immediately needed to reduce initial load time using react's `lazy`.
-  **Accessibility**: WCAG standards were followed to improve accessibility by ensuring all components are accessible via keyboard and screen readers.
-  **Responsive Design**: Tailwind's media queries was used to ensure the application is fully responsive and works well on all screen sizes.
![Lighthouse report](https://res.cloudinary.com/codeleaf/image/upload/v1739190505/fc6341cf-252a-4e1a-9d6a-b20946d48ebf.png)

## Potential Improvements
- Implementation of payment integration

> *Happy Development!!!*

