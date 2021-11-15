import React, {useEffect} from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';

const ThankYouPage = () => {
    const params = queryString.parse(useLocation().search);
    const amount = params.amount ? params.amount : 1.01;
    const content_name = params.content_name ? params.content_name : 'default-content-name';
    const content_ids = params.content_ids ? params.content_ids : 'default-content-ids';
    const donate = params.donate ? true : false;


    //var gtag = gtag || {};

    useEffect(() => {

        if (window.dataLayer) {
            console.log('sending purchase')
            window.dataLayer.push(['event', 'purchase', {
            //"transaction_id": new Date().getTime(),
            "value": amount,
            "currency": "USD",
            "content_name" : content_name,
            "content_ids" : content_ids,
             //"items": [
            //     // {
            //     //   "id": "P67890",
            //     //   "name": "Flame challenge TShirt",
            //     //   "list_name": "Search Results",
            //     //   "brand": "MyBrand",
            //     //   "category": "Apparel/T-Shirts",
            //     //   "variant": "Red",
            //     //   "list_position": 2,
            //     //   "quantity": 1,
            //     //   "price": '3.0'
            //     // }
             //]
            }]);
            console.log('sent purchase')
            if (donate) {
                console.log('sending donate');
                window.dataLayer.push(['event', 'donate', {}]);
                console.log('sent donate');
            }
        } else {
            console.log('dataLayer not defined');
        }
    }, [amount, window.dataLayer]);

    return (
        <div id="ffbh-content">
            <div className="ffbh-container clearfix">
                <div className="clearfix">
                    <div className="donation-form-container responsive">
                        <div className="donation-form-content">
                            <h2>Thank You, John</h2>
                            <p>We appreciate your contribution to Boys Town. We strive to be a beacon of hope for at-risk youth and families in crisis, and we can't do it without your support. Your gift will be used to help make positive life changes possible for these youths and families, giving them hope for a better life. As you know, the need is great, and your donation helps Boys Town achieve its mission.</p>
                            <p>You will be emailed a receipt.</p>
                            <div align="center">
                                <div style={{padding: "56.25% 0 0 0", position: "relative"}}>
                                    <iframe title="Video" src="https://player.vimeo.com/video/354878366?autoplay=1" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="">
                                    </iframe>
                                </div>
                                <script src="https://player.vimeo.com/api/player.js"></script>
                            </div>
                            
                            <h3>Transaction Summary</h3>
                            <p>John Doe <br />
                                123 Any Ln<br />
                                Sometown, NE 68189<br /> <br />
                                johndoe@test.com<br /> <br />
                                Gift Amount: ${amount}<br />
                                No goods or services were provided by Boys Town
                            </p>
                            <p><a href="https://www.boystown.org/" target="_parent">Return to our Home Page</a></p>
                        </div>

                    </div>

 
                </div>
            </div>
	    </div>
    );
}

export default ThankYouPage;