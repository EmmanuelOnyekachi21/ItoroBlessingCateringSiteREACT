import React from 'react';
import styles from './CateringGallery.module.css'


const CateringGallery = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">Our Catering Gallery</h2>

        <div id="cateringCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033" 
                  className={`d-block ${styles.galleryImg}`}
                  alt="Wedding Event"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bg-dark bg-opacity-50 d-inline-block px-3 py-1 rounded">Wedding Reception</h5>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950" 
                  className={`d-block ${styles.galleryImg}`}
                  alt="Corporate Party"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bg-dark bg-opacity-50 d-inline-block px-3 py-1 rounded">Corporate Event</h5>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img 
                  src="https://images.unsplash.com/photo-1571805341302-f857308690e3" 
                  className={`d-block ${styles.galleryImg}`}
                  alt="Birthday Party"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bg-dark bg-opacity-50 d-inline-block px-3 py-1 rounded">Birthday Celebration</h5>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                  className={`d-block ${styles.galleryImg}`}
                  alt="Family Gathering"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bg-dark bg-opacity-50 d-inline-block px-3 py-1 rounded">Family Gathering</h5>
              </div>
            </div>

            {/* Slide 5
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img 
                  src="https://images.unsplash.com/photo-1600891964092-4316be0a1b87"
                  className={`d-block ${styles.galleryImg}`}
                  alt="Graduation Party"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bg-dark bg-opacity-50 d-inline-block px-3 py-1 rounded">Graduation Party</h5>
              </div>
            </div> */}

            {/* Slide 6 */}
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img 
                  src="https://images.unsplash.com/photo-1526382551041-3c817fc3d478"
                  className={`d-block ${styles.galleryImg}`}
                  alt="Anniversary Celebration"
                />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="bg-dark bg-opacity-50 d-inline-block px-3 py-1 rounded">Anniversary Dinner</h5>
              </div>
            </div>

          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#cateringCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#cateringCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CateringGallery;
