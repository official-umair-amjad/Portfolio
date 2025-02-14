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
      </h3><br />
      <div className='inline-block w-max p-2 mt-6 border border-light-gray'>

        <a
          href={'/Resume.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold bg-primary py-3 px-9 hover:bg-black text-white hover:text-white transition duration-300"
        >
          VIEW MY RESUME
        </a>
      </div>
      
    </div>
  </AppSection>
);

export default AppSignature;
