import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* left */}
        <div className="relative hidden lg:inline-grid h-24 w-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative lg:hidden w-10 h-10 flex-shrink-0 cur">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}

        <h1>hello</h1>
        {/* Right */}
      </div>
    </div>
  );
};

export default Header;
