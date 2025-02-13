import AppButton from '../atomics/AppButton';

const AppCtaSection = () => (
  <section className="py-20 border-b border-light-gray">
    <div className="text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-primary">
        GET IN TOUCH
      </h2>
      <p className="text-xs md:text-sm text-gray mt-2">
        <b>
          Want to consult about your project or anything?
        </b>
        <br />
        My inbox and DM's are always open to you, feel free to ask.
      </p>
      <AppButton title="Contact / Say Hi.." href="/contact" color="primary" />
    </div>
  </section>
);

export default AppCtaSection;
