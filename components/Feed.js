import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-6xl mx-auto">
      {/* section */}

      <section className="col-span-2">
        {/* Storie */}
        <Stories />

        {/* posts */}
        <Posts />
      </section>

      {/* Sectoin  */}
      <section className="hidden lg:inline-grid md:col-span-1">

        <div className="fixed top-20 mr-1">
        {/* miniProfile */}
        <MiniProfile />
        {/* Suggestoin */}
        <Suggestions />
        </div>
     
      </section>
    </main>
  );
}

export default Feed;
