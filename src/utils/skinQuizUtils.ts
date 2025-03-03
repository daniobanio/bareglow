export type SkinProfile = {
     type: string;
     concerns: string[];
     routine: Array<{ step: string; product: string }>;
     recommendations: Array<{ id: number; name: string; price: string }>;
   };
   export const processQuizResults = (answers: Record<number, string | string[]>): SkinProfile => {
     // In a real app, this would analyze the answers and generate personalized results
     // For now, we'll simulate results based on the first question (skin type)
     const skinType = answers[1] as string;
     let skinProfile: SkinProfile = {
       type: "Normal",
       concerns: [],
       routine: [],
       recommendations: []
     };
     
     switch(skinType) {
       case "dry":
         skinProfile = {
           type: "Dry",
           concerns: ["Dryness", "Flakiness"],
           routine: [
             { step: "Cleanse", product: "Hydrating Cream Cleanser" },
             { step: "Tone", product: "Alcohol-Free Hydrating Toner" },
             { step: "Treat", product: "Hyaluronic Acid Serum" },
             { step: "Moisturize", product: "Rich Cream Moisturizer" },
             { step: "Protect", product: "Hydrating SPF 30" },
           ],
           recommendations: [
             { id: 1, name: "Hydrating Cream Cleanser", price: "$24.99" },
             { id: 2, name: "Hyaluronic Acid Serum", price: "$35.99" },
             { id: 3, name: "Ultra Rich Moisturizer", price: "$29.99" },
           ],
         };
         break;
       case "oily":
         skinProfile = {
           type: "Oily",
           concerns: ["Excess Oil", "Breakouts"],
           routine: [
             { step: "Cleanse", product: "Gel Cleanser with Salicylic Acid" },
             { step: "Tone", product: "Oil-Control Toner" },
             { step: "Treat", product: "Niacinamide Serum" },
             { step: "Moisturize", product: "Oil-Free Gel Moisturizer" },
             { step: "Protect", product: "Mattifying SPF 50" },
           ],
           recommendations: [
             { id: 4, name: "Oil Control Gel Cleanser", price: "$22.99" },
             { id: 5, name: "Niacinamide + Zinc Serum", price: "$28.99" },
             { id: 6, name: "Oil-Free Moisturizer", price: "$26.99" },
           ],
         };
         break;
       case "combination":
         skinProfile = {
           type: "Combination",
           concerns: ["T-Zone Oiliness", "Dry Cheeks"],
           routine: [
             { step: "Cleanse", product: "Balanced Foam Cleanser" },
             { step: "Tone", product: "Balancing Toner" },
             { step: "Treat", product: "Vitamin C Serum" },
             { step: "Moisturize", product: "Lightweight Lotion" },
             { step: "Protect", product: "Balanced SPF 40" },
           ],
           recommendations: [
             { id: 7, name: "Balancing Foam Cleanser", price: "$23.99" },
             { id: 8, name: "Multi-Active Toner", price: "$19.99" },
             { id: 9, name: "Balancing Moisturizer", price: "$27.99" },
           ],
         };
         break;
       case "sensitive":
         skinProfile = {
           type: "Sensitive",
           concerns: ["Redness", "Irritation"],
           routine: [
             { step: "Cleanse", product: "Gentle Milk Cleanser" },
             { step: "Tone", product: "Calming Essence Toner" },
             { step: "Treat", product: "Centella Asiatica Serum" },
             { step: "Moisturize", product: "Soothing Barrier Cream" },
             { step: "Protect", product: "Mineral SPF 30" },
           ],
           recommendations: [
             { id: 10, name: "Ultra-Gentle Cleanser", price: "$25.99" },
             { id: 11, name: "Cica Repair Serum", price: "$32.99" },
             { id: 12, name: "Sensitive Skin Moisturizer", price: "$28.99" },
           ],
         };
         break;
       default:
         skinProfile = {
           type: "Normal",
           concerns: ["Maintenance", "Prevention"],
           routine: [
             { step: "Cleanse", product: "Gentle Cleanser" },
             { step: "Tone", product: "Hydrating Toner" },
             { step: "Treat", product: "Antioxidant Serum" },
             { step: "Moisturize", product: "Balanced Moisturizer" },
             { step: "Protect", product: "Daily SPF 30" },
           ],
           recommendations: [
             { id: 13, name: "Everyday Gentle Cleanser", price: "$21.99" },
             { id: 14, name: "Antioxidant Day Serum", price: "$29.99" },
             { id: 15, name: "Balance Perfect Moisturizer", price: "$26.99" },
           ],
         };
     }
     
     return skinProfile;
   };