"use client"
import Blog from "./Pages/Blog/page"

const Home = () => {
 
  return (
    <div>
      <section>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-lg">
      <h1 className="mb-5 text-5xl font-bold">Check out todays sports news with sports-zone</h1>
      <p className="mb-5">Sports have always been an integral part of human history, transcending cultures and generations. Beyond the realm of entertainment and competition, sports offer a myriad of benefits that contribute to both physical fitness and mental well-being. Whether it's a casual game of soccer with friends or a dedicated training regimen, engaging in sports can have a profound positive impact on individuals and communities alike.</p>
      <button className="btn btn-primary">Stay with us</button>
    </div>
  </div>
</div>
      </section>
      <h3 className="text-4xl font-bold text-center my-5">What happened in sports world? </h3>
      <p className="lg:w-6/12 md:w-4/12 sm:11/12 mx-auto font-serif text-center ">Here is the today's news.Sports have the remarkable ability to bring people together, regardless of their cultural or linguistic differences. Whether it's the FIFA World Cup, the Olympics, or local sporting events, the unifying power of sports is undeniable.</p>
      <Blog  />
      <section className="">
      <div className="stats shadow flex justify-center p-10 bg-blue-100 ">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="../../public/Mehedi Hasan.png" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
      </section>
    </div>
  );
};

export default Home;

// Use getServerSideProps or getStaticProps to fetch data