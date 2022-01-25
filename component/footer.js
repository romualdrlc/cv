import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer class="text-center text-lg-start bg-light text-muted">
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a
            href="mailto:romuald.lecorroller@gmail.com"
            class="me-4 text-reset"
          >
            <i class="fa fa-google"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/romuald-le-corroller-6a03a9196/"
            class="me-4 text-reset"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/romualdrlc" class="me-4 text-reset">
            <i className="fa fa-github"></i>
          </a>
          <a href="tel:0624565327" class="me-4 text-reset">
            <i className="fa fa-phone"></i>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
