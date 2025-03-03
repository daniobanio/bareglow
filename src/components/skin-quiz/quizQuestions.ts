export type QuizQuestion = {
     id: number;
     question: string;
     type: "single" | "multiple";
     options: Array<{
       id: string;
       label: string;
     }>;
   };
   // Quiz questions
   export const quizQuestions: QuizQuestion[] = [
     {
       id: 1,
       question: "How would you describe your skin type?",
       type: "single",
       options: [
         { id: "dry", label: "Dry - Often feels tight, flaky or rough" },
         { id: "oily", label: "Oily - Shiny, especially in T-zone, prone to breakouts" },
         { id: "combination", label: "Combination - Oily T-zone but dry cheeks" },
         { id: "normal", label: "Normal - Neither too oily nor too dry" },
         { id: "sensitive", label: "Sensitive - Easily irritated, prone to redness" },
       ],
     },
     {
       id: 2,
       question: "What are your main skin concerns?",
       type: "multiple",
       options: [
         { id: "acne", label: "Acne or breakouts" },
         { id: "aging", label: "Signs of aging (fine lines, wrinkles)" },
         { id: "uneven", label: "Uneven skin tone or hyperpigmentation" },
         { id: "dryness", label: "Dryness or dehydration" },
         { id: "texture", label: "Rough texture or large pores" },
         { id: "redness", label: "Redness or irritation" },
         { id: "dullness", label: "Dullness or lack of radiance" },
       ],
     },
     {
       id: 3,
       question: "How much time do you spend outdoors on a typical day?",
       type: "single",
       options: [
         { id: "minimal", label: "Minimal (less than 30 minutes)" },
         { id: "moderate", label: "Moderate (30 minutes to 2 hours)" },
         { id: "significant", label: "Significant (more than 2 hours)" },
       ],
     },
     {
       id: 4,
       question: "Do you currently use sunscreen daily?",
       type: "single",
       options: [
         { id: "always", label: "Yes, always" },
         { id: "sometimes", label: "Sometimes" },
         { id: "rarely", label: "Rarely or never" },
       ],
     },
     {
       id: 5,
       question: "What products do you currently use in your skincare routine?",
       type: "multiple",
       options: [
         { id: "cleanser", label: "Cleanser" },
         { id: "toner", label: "Toner" },
         { id: "serum", label: "Serum" },
         { id: "moisturizer", label: "Moisturizer" },
         { id: "spf", label: "Sunscreen" },
         { id: "exfoliant", label: "Exfoliant" },
         { id: "mask", label: "Face masks" },
         { id: "eye", label: "Eye cream" },
         { id: "none", label: "None of the above" },
       ],
     },
     {
       id: 6,
       question: "How would you describe your preferred skincare routine?",
       type: "single",
       options: [
         { id: "minimal", label: "Minimal - Quick and easy, 2-3 steps" },
         { id: "moderate", label: "Moderate - Balanced approach, 3-5 steps" },
         { id: "extensive", label: "Extensive - Comprehensive routine, 5+ steps" },
       ],
     },
   ];