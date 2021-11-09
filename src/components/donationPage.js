import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const DonationPage = () => {
    const [donationAmount, setDonationAmount] = useState(100.00);
    const history = useHistory();

    const handleDonate = () => {
        //https://support.boystown.org/site/Donation2?idb=532727795&df_id=2421&mfc_pref=T&2421.donation=completed&idb=532727795
        history.push(`/Donation2?amount=${donationAmount}&donation=completed`);
    }

    return (
<div id="ffbh-content">
    <div className="ffbh-container clearfix">
        <div className="clearfix">
            <div id="donate-tab" className="tab-content active">
                <form name="process" id="ProcessForm" >
                    <div className="donation-form-container responsive">
                        <div className="donation-form-content">

                            <div className="form-row form-row-1">
                                <div className="html-caption-container html-caption-container-1">
                                    <img src="https://support.boystown.org/images/content/pagebuilder/showTheWorld-banner.jpg" border="0" alt="Thank you. You're not just saving one child." className="banner" />
                                </div>
                            </div>

                            <h2 className="section-header-container">
                                Your Donation
                            </h2>

                            <div className="don-standard-levels form-row form-row-5">
                                <div className="levels-label">
                                </div>
                                <div id="level_standard_row" className="form-row form-donation-level form-row-6">
                                    <div className="form-content">
                                        <span className="field-required"></span> <span className="aural-only">Field Is Required</span>
                                        <span className="FormLabelText">Your Gift Amount</span> 

                                        <div className="donation-levels">
                                    
                                            <div className={donationAmount === 50.00 ? "donation-level-container active-donation-level" : "donation-level-container" }>
                                                <div className="form-content">
                                                    <div className="donation-level-input-container form-input">
                                                        <div className="donation-level-label-input-container">
                                                            <input type="radio" 
                                                                    name="level_standardexpanded" 
                                                                    id="level_standardexpanded3909" 
                                                                    value="3909" checked="checked" 
                                                                    onClick={() => setDonationAmount(50.00)} />
                                                        </div>
                                                        <label htmlFor="level_standardexpanded3909" >
                                                            <div className={donationAmount === 50.00 ?  "donation-level-amount-container active-donation-level" : "donation-level-amount-container"}>
                                                            $50
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <input type="hidden" name="level_standardexpandedsubmit" id="level_standard_3909expandedsubmit" value="true" /> 
                                                </div>
                                            </div>

                                            <div className={donationAmount === 100.00 ? "donation-level-container active-donation-level" : "donation-level-container" }>
                                                <div className="form-content">
                                                    <div className="donation-level-input-container form-input">
                                                        <div className="donation-level-label-input-container">
                                                            <input type="radio" 
                                                                    name="level_standardexpanded" 
                                                                    id="level_standardexpanded3910" 
                                                                    value="3910"  
                                                                    onClick={() => setDonationAmount(100.00)} 
                                                                    />
                                                        </div>
                                                        <label htmlFor="level_standardexpanded3910" >
                                                            <div className={donationAmount === 100.00 ? "donation-level-amount-container active-donation-level" : "donation-level-amount-container"}>
                                                            $100
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={donationAmount === 250.00 ? "donation-level-container active-donation-level" : "donation-level-container" }>
                                                <div className="form-content">
                                                    <div className="donation-level-input-container form-input">
                                                        <div className="donation-level-label-input-container">
                                                            <input type="radio" 
                                                                    name="level_standardexpanded" 
                                                                    id="level_standardexpanded3911" 
                                                                    value="3911"  
                                                                    onClick={() => setDonationAmount(250.00)} />
                                                        </div>
                                                        <label htmlFor="level_standardexpanded3911">
                                                            <div className={donationAmount === 250.00? "donation-level-amount-container active-donation-level" : "donation-level-amount-container"}>
                                                            $250
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <input type="hidden" name="level_standardexpandedsubmit" id="level_standard_3911expandedsubmit" value="true" /> 
                                                </div>
                                            </div>
                                            <div className="donation-level-container"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="section-header-container">
                                Payment Method
                            </h2>

                            <div className="payment-type-element-container">
                                <div className="payment-type-selection-container payment-field-container">
                                    <h3>Payment Method:</h3>
                                    <div id="responsive_payment_typepay_typeradio_row" className="form-row form-row-40">
                                        <div className="form-content">
                                            <div className="payment-type-selections" id="responsive_payment_typepay_typeradio_payment_types">
                                            <span className="internal-payment">
                                                <span className="payment-type-option selected payment-option-1" style={{width: "100%"}}>
                                                    <input type="radio" name="responsive_payment_typepay_typeradio" id="responsive_payment_typepay_typeradiocredit" value="credit" checked="checked" />
                                                    <label for="responsive_payment_typepay_typeradiocredit"><a href="javascript:void(0);" className="payment-type-label">Credit Card</a></label>
                                                </span>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div id="payment_cc_container" className="payment-field-container">
                                <h3>Credit Card Information:</h3>

                                <div id="responsive_payment_typecc_number_row" className="form-row form-text form-row-42">
                                    <div className="form-content">
                                        <span className="field-required"></span>
                                        <label for="responsive_payment_typecc_numbername">Credit Card Number:</label>
                                        <input type="text" name="responsive_payment_typecc_numbername" id="responsive_payment_typecc_numbername" value="" maxlength="22" autocomplete="cc-csc" className="form-control" />
                                    </div>
                                </div>
                                <div id="responsive_payment_typecc_exp_date_row" className="form-row form-date form-row-43">
                                    <div className="form-content">
                                        <span className="field-required"></span>
                                        <label for="responsive_payment_typecc_exp_date_MONTH">
                                            <span className="label-text">Expiration Date:</span><span className="aural-only">Select month of credit card</span>
                                        </label>
                                        <label for="responsive_payment_typecc_exp_date_YEAR"><span className="aural-only">Select Expiration Year</span></label>
                                    <div className="date-input-container">
                                        <fieldset className="cardExpGroup">
                                            <select name="responsive_payment_typecc_exp_date_MONTH" id="responsive_payment_typecc_exp_date_MONTH" onchange="fire_obs_comp_event('responsive_payment_typecc_exp_date_MONTH', this)" className="form-control">
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                                <option value="4">04</option>
                                                <option value="5">05</option>
                                                <option value="6">06</option>
                                                <option value="7">07</option>
                                                <option value="8">08</option>
                                                <option value="9">09</option>
                                                <option value="10">10</option>
                                                <option value="11" selected="selected">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            <select name="responsive_payment_typecc_exp_date_YEAR" id="responsive_payment_typecc_exp_date_YEAR" onchange="fire_obs_comp_event('responsive_payment_typecc_exp_date_YEAR', this)" className="form-control">
                                                <option value="2021" selected="selected">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                                <option value="2031">2031</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    </div>
                                </div>

                                <div id="responsive_payment_typecc_cvv_row" className="form-row form-text cvv-input form-row-44">
                                    <div className="form-content">
                                    <span className="field-required"></span>
                                    <label for="responsive_payment_typecc_cvvname">
                                        <span className="FormLabelText">CVV Number:</span>
                                    </label>
                                    <a href="http://help.convio.net/site/PageServer?s_site=ffbh&amp;pagename=user_donation_cvv" className="HelpLink" title="What is this? Opens new window.">What is this?</a>
                                    <input type="text" name="responsive_payment_typecc_cvvname" id="responsive_payment_typecc_cvvname" value="" maxlength="4" autocomplete="off" className="form-control" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="button-container clearfix">
                            <div className="button-sub-container">
                            <button className="step-button action-button finish-step"  id="pstep_finish" name="pstep_finish" 
                                    value="Make My Donation" onClick={handleDonate}>
                                <span className="fa fa-lock fa-lock-color" style={{fontSize: "1.5em", marginRight: ".5em"}}></span>
                                Make My Donation
                            </button>
                            <button className="step-button cancel-step" type="submit" id="pstep_cancel" name="pstep_cancel" value="Cancel" title="Cancel">Cancel</button>
                            </div>
                        </div>

                    </div>
                </form>
</div>   
</div>
</div>

</div>

    )
}

export default DonationPage;