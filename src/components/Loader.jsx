import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#FDFEFE"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader
