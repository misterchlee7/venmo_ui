import React, { Component } from 'react';
import styles from './Footer.module.css';
import appstore from './../../resources/img/appstore.png';
import googleplay from './../../resources/img/googleplay.png';

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <footer>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.title}>
                        Learn More
                    </div>
                    <ul>
                        <li>
                            <a href="/about/product">
                                How it works
                            </a>
                        </li>
                        <li>
                            <a href="/business">
                                Business
                            </a>
                        </li>
                        <li>
                            <a href="/card">
                                Card
                            </a>
                        </li>
                        <li>
                            <a href="/about/security">
                                Security
                            </a>
                        </li>
                        <li>
                            <a href="/contact-us">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <div className={styles.title}>
                        Company
                    </div>
                    <ul>
                        <li>
                            <a href="/team">
                                Our Team
                            </a>
                        </li>
                        <li>
                            <a href="/jobs">
                                Jobs
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <div className={styles.title}>
                        Community
                    </div>
                    <ul>
                        <li>
                            <a href="http://blog.venmo.com">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="http://help.venmo.com">
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a href="http://developer.venmo.com">
                                Developer
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <div className={styles.title}>
                        Terms
                    </div>
                    <ul>
                        <li>
                            <a href="http://venmo.com/legal/us-user-agreement/">
                                Legal
                            </a>
                        </li>
                        <li>
                            <a href="https://venmo.com/legal/us-privacy-policy/">
                                Privacy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <a href="https://itunes.apple.com/us/app/venmo/id351727428?mt=8">
                        <img className={styles.appLogos} src={appstore} alt="Apple Store"/>
                    </a>
                </div>
                <div className={styles.column}>
                    <a href="https://play.google.com/store/apps/details?id=com.venmo">
                        <img className={styles.appLogos} src={googleplay} alt="Google Play"/>
                    </a>
                </div>
            </div>
            <div className={styles.rights}>
                Venmo is a service of PayPal, Inc., a licensed provider of money transfer services (NMLS ID: 910457). All money transmission is provided by PayPal, Inc. pursuant to <a className={styles.copyright} href="https://venmo.com/legal/us-licenses">PayPal, Inc.’s licenses.</a> © 2018 PayPal, Inc.
            </div>
        </footer>
      </div>
    )
  }
}
export default Footer;