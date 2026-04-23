import { Button } from './ui/Button';

export default function TrainingConsultant() {
  return (
    <section className="w-full bg-primary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-mainText mb-2">
            Training The Consultant
          </h2>
          <h3 className="text-lg lg:text-xl font-medium text-subdued mb-6">
            Maximize Your Potential as a Certified Trainer:
          </h3>
          <p className="text-subdued text-sm md:text-base leading-relaxed max-w-4xl">
            With the help of our Business Analysis Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        <div className="bg-primary rounded-xl p-8 lg:p-12 mt-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h4 className="text-lg font-bold mb-3">Expert-Led Learning</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Interactive Workshops</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Comprehensive Curriculum</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3">Global Recognition</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button icon="chevron-right">Learn more</Button>
        </div>
      </div>
    </section>
  );
}
