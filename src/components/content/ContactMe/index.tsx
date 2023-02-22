import ContactForm from "./ContactForm";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <section className="text-gray-400 body-font relative w-full">
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            hire me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Any sort of web application development or mobile application
            development
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
