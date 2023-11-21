function Footer() {
    return (       
        <footer className="text-center text-lg-start bg-white text-muted">  
          <section className="">
            <div className="container text-center text-md-start mt-5">          
              <div className="row mt-3">             
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">              
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-tree me-3 text-secondary"></i>Wild Bergamot
                  </h6>
                  <p>
                  Dedicated to giving you the best experience,
                  request a quote today!
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Info</h6>
                  <p><i className="fas fa-home me-3 text-secondary"></i> Marshall, NC 28753, US</p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    wild.bergmot.gardening@gmail.com
                  </p>
                </div>      
              </div>        
            </div>
          </section>
        </footer>
    )
}

export default Footer;