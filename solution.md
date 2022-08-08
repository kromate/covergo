# covergo-assessment

## Technical choices 
- Nuxt 3 RC6
- Composition API
- Typescript
- Vitest(unit test) && Cypress(E2E test)
- Eslint for linting
- Tailwind for styles

## architecture
- I used a global object and ref to store state.
- I then created an useInsurance Hook to handle the insurance form logic.
- imported the hook in the required page.
## Approach
- Created the UI for all the pages (Home | about | Summary)
- implemented the logic for the simple requirement like age limit and navigation logic
- created an insurance composition to extract the form logic to.
- extracted the types to separate function
- Wrote Tests