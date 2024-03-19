import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card1'
import Question11 from '../components/question11'
import './a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event.css'

const ANewPageWhichHaveALotOfCardShowingImagesAndDestinationForEachPartyEvent =
  (props) => {
    return (
      <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-container">
        <Helmet>
          <title>
            A-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event
            - Frank Frilly Tarsier
          </title>
          <meta
            property="og:title"
            content="A-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event - Frank Frilly Tarsier"
          />
        </Helmet>
        <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-header">
          <header
            data-thq="thq-navbar"
            className="navbarContainer a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-navbar-interactive"
          >
            <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-logo logo">
              PARTYUP
            </span>
            <div
              data-thq="thq-navbar-nav"
              className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-desktop-menu"
            >
              <nav className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-links">
                <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav12 bodySmall">
                  Home
                </span>
                <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav22 bodySmall">
                  Events
                </span>
                <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav32 bodySmall">
                  About Us
                </span>
                <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav42 bodySmall">
                  Contact
                </span>
                <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav52 bodySmall">
                  FAQ
                </span>
              </nav>
              <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-buttons">
                <button className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-login buttonFlat">
                  Login
                </button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-burger-menu"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-icon socialIcons"
              >
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-mobile-menu1 mobileMenu"
            >
              <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav">
                <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-top">
                  <span className="logo">PARTYUP</span>
                  <div
                    data-thq="thq-close-menu"
                    className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-icon02 socialIcons"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-links1">
                  <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav121 bodySmall">
                    Home
                  </span>
                  <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav221 bodySmall">
                    Events
                  </span>
                  <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav321 bodySmall">
                    About Us
                  </span>
                  <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav421 bodySmall">
                    Contact
                  </span>
                  <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav521 bodySmall">
                    FAQ
                  </span>
                </nav>
                <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-buttons1">
                  <button className="buttonFlat">Login</button>
                  <button className="buttonFilled">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-icon04 socialIcons"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-icon06 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-icon08 socialIcons"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-hero">
          <div className="heroContainer a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-hero1">
            <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-container1">
              <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-hero-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>Join the Ultimate Party Experience</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
              <h1 className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-hero-heading heading1">
                Discover the Best Parties
              </h1>
              <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-btn-group">
                <button className="buttonFilled">Explore Events</button>
                <button className="buttonFlat">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
        <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-container2">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-image"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-image1"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-image2"
          />
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-image3"
          />
        </div>
        <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-features">
          <div className="featuresContainer">
            <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-features1">
              <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-container3">
                <span className="overline">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-features-heading heading2">
                  Exciting Features for Party Enthusiasts
                </h2>
                <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-features-sub-heading bodyLarge">
                  <span>
                    <span>
                      <span>
                        Discover the exclusive features that make your party
                        experience unforgettable
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-container4">
                <FeatureCard1
                  heading="Event Listings"
                  subHeading="Explore a wide range of party events happening near you"
                ></FeatureCard1>
                <FeatureCard1
                  heading="Customized Preferences"
                  subHeading="Tailor your party experience by setting preferences for music, venue, and more"
                ></FeatureCard1>
                <FeatureCard1
                  heading="Exclusive Party Plans"
                  subHeading="Access special party plans with unique features and benefits"
                ></FeatureCard1>
                <FeatureCard1
                  heading="Notification Alerts"
                  subHeading="Stay updated with event notifications and never miss out on a party"
                ></FeatureCard1>
              </div>
            </div>
          </div>
        </div>
        <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-banner">
          <div className="bannerContainer a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-banner1">
            <h1 className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-banner-heading heading2">
              Join the Ultimate Party Experience!
            </h1>
            <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-banner-sub-heading bodySmall">
              <span>
                <span>
                  <span>
                    Discover and join the hottest parties in town with our
                    exclusive event listings and customized party plans. Get
                    ready to elevate your party game and create unforgettable
                    memories with like-minded party enthusiasts.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <button className="buttonFilled">Explore Events</button>
          </div>
        </div>
        <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-faq">
          <div className="faqContainer">
            <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-faq1">
              <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-container5">
                <span className="overline">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-text48 heading2">
                  Common questions
                </h2>
                <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-text49 bodyLarge">
                  <span>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-container6">
                <Question11
                  answer="You can easily find party events near you by using the search feature on our platform and filtering by location."
                  question="How can I find party events near me?"
                ></Question11>
                <Question11
                  answer="Yes, you can customize your party preferences in your profile settings to receive personalized event recommendations."
                  question="Can I customize my party preferences?"
                ></Question11>
                <Question11
                  answer="Our party plans offer exclusive features such as VIP access, special discounts, and priority entry to selected events."
                  question="What exclusive features do the party plans offer?"
                ></Question11>
                <Question11
                  answer="You will receive notifications about upcoming events based on your preferences and selected party plans via email or push notifications."
                  question="How do I receive notifications about upcoming events?"
                ></Question11>
                <Question11
                  answer="Yes, you can create and promote your own party event on the platform to invite other users and expand your guest list."
                  question="Can I create my own party event on the platform?"
                ></Question11>
              </div>
            </div>
          </div>
        </div>
        <footer className="footerContainer a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-footer">
          <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-container7">
            <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-logo2 logo">
              PARTYUP
            </span>
            <nav className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav1">
              <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav122 bodySmall">
                Home
              </span>
              <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav222 bodySmall">
                Events
              </span>
              <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav322 bodySmall">
                About Us
              </span>
              <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav422 bodySmall">
                Contact
              </span>
              <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-nav522 bodySmall">
                FAQ
              </span>
            </nav>
          </div>
          <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-separator"></div>
          <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-container8">
            <span className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-text52 bodySmall">
              © 2024 PartyUp, All Rights Reserved.
            </span>
            <div className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="a-new-page-which-have-a-lot-of-card-showing-images-and-destination-for-each-party-event-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    )
  }

export default ANewPageWhichHaveALotOfCardShowingImagesAndDestinationForEachPartyEvent
