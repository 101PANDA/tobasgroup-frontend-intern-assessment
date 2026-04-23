import { Button } from './ui/Button';

export default function CtaBanner() {
  return (
    <section className="w-full bg-primary/5 py-8 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl p-10 lg:p-16 text-center text-white flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2">
            Want to accelerate professional growth and development at your organisation?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
            See how we can help.
          </p>
          <Button variant="white">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
