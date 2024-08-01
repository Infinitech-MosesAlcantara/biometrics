import React from "react";

import axios from "axios";

const Connect = () => {
    async function connect() {
        let res = await axios.get("http://localhost:8000/api/device/connect");
        console.log(res)
    }

    return (
        <>
            <button onClick={connect}>Test</button>
        </>
    )
};

export default Connect;