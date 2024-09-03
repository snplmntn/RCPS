import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <header class="header">
        <div class="slide-left">
          <p>
            Welcome to Recamie Computer & Printing Shop! Gcash Cash IN & Cash
            OUT Available! Load for all networks Available! Piso Wifi Packages
            Available! School Supplies Available! Address: Poblacion, Esperanza,
            Masbate Near Pablo M. Conag Central School
          </p>
        </div>
        <nav class="nav">
          <div class="logo-container">
            <img
              src="img/logo.png"
              alt="Recamie logo"
              class="nav__logo"
              id="logo"
            />
            <span class="logo-text"></span>
          </div>

          <ul class="nav__links">
            <li class="nav__item">
              <a class="nav__link" href="#section--2">
                Best Sellers
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--3">
                Piso Wifi
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#piso-wifi">
                School Supplies
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#section--4">
                Contact Us
              </a>
            </li>
          </ul>

          <span class="material-symbols-outlined icon">menu</span>
        </nav>
        <ul class="nav-links">
          <li class="nav-item">
            <a class="nav__link" href="#section--2">
              Best Sellers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav__link" href="#section--3">
              Piso Wifi
            </a>
          </li>
          <li class="nav-item">
            <a class="nav__link" href="#piso-wifi">
              School Supplies
            </a>
          </li>
          <li class="nav-item">
            <a class="nav__link" href="#section--4">
              Contact Us
            </a>
          </li>
        </ul>
      </header>

      <section class="section" id="section--1">
        <div class="slider">
          <div class="slide slide--1">
            <img src="img/slide1.jpg" alt="slide 1" />
          </div>

          <div class="slide slide--2">
            <img src="img/img-1.jpg" alt="slide 1" />
          </div>

          <div class="slide slide--3">
            <img src="img/img-2.jpg" alt="slide 1" />
          </div>

          <div class="slide slide--4">
            <img src="img/img-3.jpg" alt="slide 1" />
          </div>

          <button class="slider__btn slider__btn--left">&larr;</button>
          <button class="slider__btn slider__btn--right">&rarr;</button>
          <div class="dots"></div>
        </div>
      </section>

      <section class="section" id="section--2">
        <div class="featured-product-wrapper">
          <h1>Best Sellers</h1>
          <div class="product-container">
            <div class="best-product" href="product.html">
              <div class="best-product-brand">
                <span>RECAMIE</span>
                <div class="best-product-discount">
                  <span>SAVE ₱2,000.00</span>
                </div>
              </div>
              <img src="img/slide1.jpg" alt="" class="best-product-img" />
              <h2>
                Piso Wifi Package 1 <br />
                w/ 150W Solar Panel
              </h2>
              <div class="best-product-price">
                <span>₱28,000.00</span>
                <span class="best-product-original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="best-product" href="product.html">
              <div class="best-product-brand">
                <span>RECAMIE</span>
                <div class="best-product-discount">
                  <span>SAVE ₱999.00</span>
                </div>
              </div>
              <img src="img/slide1.jpg" alt="" class="best-product-img" />
              <h2>Piso Wifi Package 2</h2>
              <h2>w/ 100W Solar Panel</h2>
              <div class="best-product-price">
                <span>₱25,000.00</span>
                <span class="best-product-original-price">₱25,999.00</span>
              </div>
            </div>
            <div class="best-product" href="product.html">
              <div class="best-product-brand">
                <span>RECAMIE</span>
                <div class="best-product-discount">
                  <span>SAVE ₱499.00</span>
                </div>
              </div>
              <img src="img/slide1.jpg" alt="" class="best-product-img" />
              <h2>Piso Wifi Package 3</h2>
              <div class="best-product-price">
                <span>₱12,000.00</span>
                <span class="best-product-original-price">₱12,499.00</span>
              </div>
            </div>
            <div class="best-product">
              <div class="best-product-brand">
                <span>RECAMIE</span>
                <div class="best-product-discount">
                  <span>SAVE ₱2,000.00</span>
                </div>
              </div>
              <img src="img/slide1.jpg" alt="" class="best-product-img" />
              <h2>Piso Wifi Package 1</h2>
              <h2>w/ 150W Solar Panel</h2>
              <div class="best-product-price">
                <span>₱28,000.00</span>
                <span class="best-product-original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="best-product" href="product.html">
              <div class="best-product-brand">
                <span>RECAMIE</span>
                <div class="best-product-discount">
                  <span>SAVE ₱999.00</span>
                </div>
              </div>
              <img src="img/slide1.jpg" alt="" class="best-product-img" />
              <h2>Piso Wifi Package 2</h2>
              <h2>w/ 100W Solar Panel</h2>
              <div class="best-product-price">
                <span>₱25,000.00</span>
                <span class="best-product-original-price">₱25,999.00</span>
              </div>
            </div>
            <div class="best-product">
              <div class="best-product-brand">
                <span>RECAMIE</span>
                <div class="best-product-discount">
                  <span>SAVE ₱499.00</span>
                </div>
              </div>
              <img src="img/slide1.jpg" alt="" class="best-product-img" />
              <h2>Piso Wifi Package 3</h2>
              <div class="best-product-price">
                <span>₱12,000.00</span>
                <span class="best-product-original-price">₱12,499.00</span>
              </div>
            </div>
            <div class="best-product">
              <div class="best-product-brand">
                <span>RECAMIE</span>
                <div class="best-product-discount">
                  <span>SAVE ₱2,000.00</span>
                </div>
              </div>
              <img src="img/slide1.jpg" alt="" class="best-product-img" />
              <h2>Piso Wifi Package 1</h2>
              <h2>w/ 150W Solar Panel</h2>
              <div class="best-product-price">
                <span>₱28,000.00</span>
                <span class="best-product-original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="best-product">
              <div class="best-product-brand">
                <span>RECAMIE</span>
                <div class="best-product-discount">
                  <span>SAVE ₱999.00</span>
                </div>
              </div>
              <img src="img/slide1.jpg" alt="" class="best-product-img" />
              <h2>Piso Wifi Package 2</h2>
              <h2>w/ 100W Solar Panel</h2>
              <div class="best-product-price">
                <span>₱25,000.00</span>
                <span class="best-product-original-price">₱25,999.00</span>
              </div>
            </div>
            <div class="best-product">
              <div class="best-product-brand">
                <span>RECAMIE</span>
                <div class="best-product-discount">
                  <span>SAVE ₱499.00</span>
                </div>
              </div>
              <img src="img/slide1.jpg" alt="" class="best-product-img" />
              <h2>Piso Wifi Package 3</h2>
              <div class="best-product-price">
                <span>₱12,000.00</span>
                <span class="best-product-original-price">₱12,499.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="section--3">
        <div class="section__title">
          <h2 class="section__description">All Products</h2>
        </div>
        <h3 class="section__header" id="piso-wifi">
          Piso Wifi
        </h3>

        <div class="piso-wifi-product">
          <div class="product-container">
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
          </div>
        </div>
        <h3 class="section__header">School Supplies</h3>
        <div class="piso-wifi-product">
          <div class="product-container">
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
            <div class="product">
              <img src="img/slide1.jpg" alt="" class="product-img" />
              <p>Piso Wifi Package 1 w/ 150W Solar Panel</p>
              <div class="product-price">
                <span>₱28,000.00</span>
                <span class="original-price">₱30,000.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="section--4">
        <div class="section__title">
          <h2 class="section__description">Contacts</h2>
          <h3 class="section__header">
            Reach out to Recamie Computer and Printing Shop
          </h3>
        </div>

        <div class="operations">
          <div class="operations__tab-container">
            <button
              class="btn operations__tab operations__tab--1 operations__tab--active"
              data-tab="1"
            >
              Facebook Page
            </button>
            <button class="btn operations__tab operations__tab--2" data-tab="2">
              Recamie Tinagsa
            </button>
            <button class="btn operations__tab operations__tab--3" data-tab="3">
              Paul Monton
            </button>
          </div>
          <div class="operations__content operations__content--1 operations__content--active">
            <div class="operations__icon operations__icon--1">
              <img src="img/facebook.png" alt="facebook logo" />
            </div>
            <a
              href="https://www.facebook.com/recamieshop"
              target="_blank"
              class="facebook-link"
            >
              <h5 class="operations__header">
                Recamie Computer and Printing Shop Page
              </h5>
            </a>
            <p>
              Feel free to reach out to us on our Facebook page,
              <a
                class="facebook-text-link"
                href="https://www.facebook.com/recamieshop"
                target="_blank"
              >
                Recamie Computer and Printing Shop
              </a>
              , for any inquiries or to explore our range of services and
              products.
            </p>
          </div>

          <div class="operations__content operations__content--2">
            <div class="operations__icon operations__icon--2">
              <img src="img/facebook.png" alt="facebook logo" />
            </div>
            <a
              href="https://www.facebook.com/heartmie.tinagsa"
              target="_blank"
              class="facebook-link-2"
            >
              <h5 class="operations__header">Recamie Monticalvo Tinagsa</h5>
            </a>
            <p>
              Feel free to reach out to
              <a
                class="facebook-text-link-2"
                href="https://www.facebook.com/heartmie.tinagsa"
                target="_blank"
              >
                Recamie Monticalvo Tinagsa
              </a>
              on Facebook for any inquiries or to explore our range of services
              and products.
            </p>
          </div>
          <div class="operations__content operations__content--3">
            <div class="operations__icon operations__icon--3">
              <img src="img/facebook.png" alt="facebook logo" />
            </div>
            <a
              href="https://www.facebook.com/paulmonton22"
              target="_blank"
              class="facebook-link"
            >
              <h5 class="operations__header">Paul Monton</h5>
            </a>
            <p>
              Feel free to reach out to
              <a
                class="facebook-text-link"
                href="https://www.facebook.com/paulmonton22"
                target="_blank"
              >
                Paul Monton
              </a>
              on Facebook for any inquiries or to explore our range of services
              and products.
            </p>
          </div>
        </div>
      </section>

      <div class="modal hidden">
        <button class="btn--close-modal">&times;</button>
        <h2 class="modal__header">
          Open your bank account <br />
          in just <span class="highlight">5 minutes</span>
        </h2>
        <form class="modal__form">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <button class="btn">Next step &rarr;</button>
        </form>
      </div>
      <div class="overlay hidden"></div>
      <img src="img/logo.png" alt="Logo" class="footer__logo" />
    </div>
  );
}

export default App;
