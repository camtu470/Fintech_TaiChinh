import React from "react";
import { TiTick } from "react-icons/ti";
import "./Subscription.css";

const Subscription = ({ el, i }) => {
    return (
        <div className="SubscriptionBox">
            <div className="SubscriptionBox_box">
                <span className="SubscriptionBox_box_span">{el.plan}</span>
                <small className="SubscriptionBox_box_small">
                    {el.popular || ""}
                </small>
                <p className="SubscriptionBox_box_price">{el.price}</p>

                <div className="SubscriptionBox_box_info">
                    {el.service.map((service, i) => (
                        <p className="SubscriptionBox_box_info_para" key={i}>
                            <span>
                                <TiTick />
                            </span>
                            {service}
                        </p>
                    ))}
                </div>
                <button type="button">Submit</button>
            </div>
        </div>
    );
};

export default Subscription;
