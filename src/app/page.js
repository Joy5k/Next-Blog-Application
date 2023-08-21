"use client"
import Blog from "./Pages/Blog/page"

const Home = () => {
 
  return (
    <div>
      <section>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      </section>
      <section>
        <h2>Section 2</h2>
        {/* Your content */}
      </section>
      <Blog  />
    </div>
  );
};

export default Home;

// Use getServerSideProps or getStaticProps to fetch data