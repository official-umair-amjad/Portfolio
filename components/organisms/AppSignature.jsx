import AppSection from '../molecules/AppSection';
import AppButton from '../atomics/AppButton';

const AppSignature = () => (
  <AppSection decoration={false}>
    <div className="text-center">
      <p className="text-primary text-xs md:text-sm">
          Greetings From
      </p>
      <h3 className="font-signature text-xl md:text-3xl inline-block py-1 mt-3 md:mt-6 border-b text-primary">
        Muhammad Umair Amjad
      </h3><br/>
      <AppButton title="VIEW MY RESUME" href="/Resume.pdf" target="_blank" />
    </div>
  </AppSection>
);

export default AppSignature;
