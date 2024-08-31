const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Government of Punjab</h3>
            <p className="text-lg">
              Serving the people with dedication and integrity.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-8">
              <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
              <p className="text-md mb-1">Email: <a href="mailto:info@punjab.gov.in" className="underline">info@punjab.gov.in</a></p>
              <p className="text-md mb-1">Phone: <a href="tel:+911234567890" className="underline">+91 123 456 7890</a></p>
              <p className="text-md">Fax: +91 123 456 7891</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Address</h4>
              <p className="text-md">
                Government of Punjab,<br />
                Punjab Civil Secretariat,<br />
                Sector 1, Chandigarh - 160001,<br />
                India
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Government of Punjab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
