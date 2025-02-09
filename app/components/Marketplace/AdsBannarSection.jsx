"use client";

import { useEffect } from "react";

const AdBanner = () => {
    useEffect(() => {
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense Error:", e);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block", textAlign: "center" }}
            data-ad-client="ca-pub-2752472851152027"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default AdBanner;