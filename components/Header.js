import Image from "next/image";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>

      <div className="flex justify-between max-w-6xl">
        {/* left */}
        <div className="relative h-24 w-24">
                  <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain"/>
        </div>
        {/* middle */}

              <h1>hello</h1>
        {/* Right */}
      </div>
    </div>
  );
};

export default Header;
