
import './components/carousel.css'; // Import CSS file for styling

function Home() {
  
  return (
    <>
      <section class="section-hero">
        <div class="container hero-box">
          <div class="hero-content margin-bottom">
            <h1 class="heading heading--1 margin-bottom">
              A place for your Stay In Shirdi
            </h1>
            <p class="description">
              We Are one of the leading services in hospitality industry in
              shirdi.Come and join us
            </p>
          </div>
        </div>
      </section>
      <section class="gallery-block compact-gallery bg-gray-100 py-20">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="gallery-card">
              <a
                class="lightbox group"
                href="/images/DSC_2252.jpg"
                onclick="zoomImage(event)"
              >
                <img
                  class="img-fluid image rounded-t-md"
                  src="/images/DSC_2252.jpg"
                  alt="Dock"
                />
              </a>
            </div>
            <div class="gallery-card ">
              <a class="lightbox group" href="/images/DSC_2441.jpg">
                <img
                  class="img-fluid image rounded-t-md"
                  src="/images/DSC_2441.jpg"
                  alt="Nature"
                />
              </a>
            </div>
            <div class="gallery-card ">
              <a class="lightbox group" href="/images/DSC_2440.jpg">
                <img
                  class="img-fluid image rounded-t-md"
                  src="/images/DSC_2440.jpg"
                  alt="Guy"
                />
              </a>
            </div>
          </div>
          <div class="spaxe">
            <h1 class="head"> .</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="gallery-card">
              <a
                class="lightbox group"
                href="Hotel/public/images/DSC_2441.jpg"
                onclick="zoomImage(event)"
              >
                <img
                  class="img-fluid image rounded-t-md"
                  src="/images/DSC_2441.jpg"
                  alt="Dock"
                />
              </a>
            </div>
            <div class="gallery-card ">
              <a class="lightbox group" href="images/DSC_2271.jpg">
                <img
                  class="img-fluid image rounded-t-md"
                  src="images/DSC_2271.jpg"
                  alt="Nature"
                />
              </a>
            </div>
            <div class="gallery-card ">
              <a class="lightbox group" href="/images/DSC_2269.jpg">
                <img
                  class="img-fluid image rounded-t-md"
                  src="/images/DSC_2269.jpg"
                  alt="Guy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
