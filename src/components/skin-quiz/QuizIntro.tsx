type QuizIntroProps = {
     title: string;
     description: string;
   };
   const QuizIntro = ({ title, description }: QuizIntroProps) => {
     return (
       <div className="text-center mb-12">
         <h1 className="text-3xl md:text-5xl font-light mb-4">{title}</h1>
         <p className="text-muted-foreground max-w-2xl mx-auto">
           {description}
         </p>
       </div>
     );
   };
   export default QuizIntro;