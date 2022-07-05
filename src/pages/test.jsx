import React from "react";
import { Card } from "react-bootstrap";
import { Button } from 'antd';
import "bootstrap/dist/css/bootstrap.css";
import Appa from "../../components/prd8/tabs/tab";
function Card3() {
    return (
        <div id="small21">
            <Card className="card2">

                <Card.Body className="table1">
                    <p className="title">Hello,<span className="shyam">Shyam Amipara!</span>
                    </p>
                    <p className="t1">“Welcome to Agrivision4U, where your vision becomes reality”

                    </p>
                    <p className="t2">By being a part of Agrivision4U, you’ve taken your first step towards building you successful Agriculture career. All the best!</p>
                </Card.Body>


            </Card>
            <Appa />
            <Card className="card4">

                <Card.Body className="table4">
                    Refer and Earn
                </Card.Body>
                <p className="r1">Earn upto Rs. 1000 when your friend purchases a course/ test-series using your referral code.
                </p>
                <div className="ollia">
                    <div id="left">
                        <img className="imagi" src="images/1.jpg" alt="/"/>
                    </div>
                    <div id="right">
                        <p className="sia">
                            Your Referral code : <span className="why">SJDBPKOM</span>
                            <Button className="btn7">Copy Code</Button>

                        </p>
                        <p className="sia">
                            Your Earnings : <span className="why">500 points</span>

                        </p>
                        <p className="sia">
                            No of Referral values : <span className="why">5</span>

                        </p>
                        <Button className="btn8">Visit Referral page</Button>

                    </div>
                </div>


            </Card>
            <h2 className="coi">Frequently Asked Questions</h2>
            <p className="sole">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,incididunt ut labore et dolore magna aliqua. ?</p>
            <div className="line">

            </div>
            <p className="sole">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,incididunt ut labore et dolore magna aliqua. ?</p>
            <div className="line">

            </div>
            <p className="sole">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,incididunt ut labore et dolore magna aliqua. ?</p>
            <div className="line">

            </div>
            <p className="sole">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,incididunt ut labore et dolore magna aliqua. ?</p>
            <div className="line">

            </div>
        </div>
    );
}

export default Card3;
