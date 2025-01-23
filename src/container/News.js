import React from 'react';
import '../component/News.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function News() {
    return (
        <>
            {/* Section for Introduction */}
            <div className="latest-news-container">
                <div className="latest-news-content">
                    <div className="news-heading">
                        <h3 className="news-title">Latest</h3>
                        <h3 className="news-subtitle">Updates and News</h3>
                    </div>
                    <div className="news-text">
                        <p>
                            Explore heartwarming and inspiring stories of children whose lives
                            have been positively impacted by Forhelps initiatives. Witness the
                            transformative journey of young souls as they overcome adversity,
                            discover their potential, and chase their dreams. These stories of
                            hope and resilience showcase the profound difference that compassion
                            and support can make in the lives of underprivileged children.
                        </p>
                        <div className="news-buttons">
                            <button className="button-primary">
                                Join the Movement
                                <span className="join-arrow">→</span>
                            </button>
                            <button className="button-secondary">Support Our Cause</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section for Latest Updates */}
            <div className="latest-updates">
                <h1 className="latest-update-title">Latest Updates</h1>
                <p className="latest-update-description">
                    Discover our most recent developments and initiatives in our 'Latest Updates' section.
                    We keep you in the loop with the latest news, events, and progress on our mission,
                    ensuring you're always up-to-date with our efforts to make a positive change.
                </p>

                <div className="latest-updates-grid">
                    {/* First Update */}
                    <div className="update-card">
                        <div className="update-image-container">
                            <img
                                src="/images/inauguration.jpg"
                                alt="New School Building"
                                className="update-image"
                            />
                            <div className="image-date-overlay">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                <span className="date-text">July 15, 2023</span>
                            </div>                        
                            </div>
                        <div className="update-content">
                            <h3>New School Building Inauguration</h3>
                            <p>
                                We are delighted to announce the successful inauguration of a new school building in
                                Greenfield Village. This state-of-the-art facility will provide a conducive learning
                                environment for over 300 children, empowering them with quality education and a
                                brighter future.
                            </p>
                        </div>
                    </div>
                    {/* Second Update */}
                    <div className="update-card">
                        <div className="update-image-container">
                            <img
                                src="/images/healthcare.jpg"
                                alt="Healthcare Outreach"
                                className="update-image"
                            />
<div className="image-date-overlay">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                <span className="date-text">July 28, 2023</span>
                            </div>                         </div>
                        <div className="update-content">
                            <h3>Healthcare Outreach Program</h3>
                            <p>
                                Our recent healthcare outreach program provided medical check-ups and essential
                                healthcare services to over 500 underprivileged children in Riverside Community.
                                Thanks to our dedicated team and volunteers, we continue to prioritize the well-being
                                of young souls.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="view-more-updates-button">View More Updates
                    <span className="arrow">↓</span>
                </button>
            </div>
            {/* Section for Events and Fundraisers */}
            <div className="latest-updates">
                <h1 className="latest-update-title">Events and Fundraisers</h1>
                <p className="latest-update-description">
                    Explore our upcoming events and fundraisers, where your participation directly supports your mission.
                    Join us in making a meaningful impact together.
                </p>
                <div className="latest-updates-grid">
                    {/* First Update */}
                    <div className="update-card">
                        <div className="update-image-container">
                            <img
                                src="images/Gala night.jpg"
                                alt="Gala night"
                                className="update-image"
                            />
<div className="image-date-overlay">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                <span className="date-text">September 5, 2023</span>
                            </div>                         </div>
                        <div className="update-content">
                            <h3>Charity Gala Night</h3>
                            <p>
                                Join us for a memorable Charity Gala Night to
                                raise funds for Education Support program.
                                Enjoy an evening Of entertainment, auctions and
                                inspring stories of transformed lives.
                            </p>
                            <div className="news-buttons">
                                <button className="button-secondary">Learn More</button>
                                <button className="button-primary">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Second Update */}
                    <div className="update-card">
                        <div className="update-image-container">
                            <img
                                src="/images/walkathon.jpg"
                                alt="walkathon"
                                className="update-image"
                            />
<div className="image-date-overlay">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                <span className="date-text">September 28, 2023</span>
                            </div>                         </div>
                        <div className="update-content">
                            <h3>Walkathon for a Cause</h3>
                            <p>
                                Lace your sneakers and participate in our annual Walkathon to support our Healthcare for
                                Children initiative. Every Step take brings us
                                closer to ensuring better health for
                                underprivileged children.
                            </p>
                            <div className="news-buttons">
                                <button className="button-secondary">Learn More</button>
                                <button className="button-primary">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="view-more-updates-button">View More Updates
                    <span className="arrow">↓</span>
                </button>
            </div>
        </>
    );
}

export default News;
