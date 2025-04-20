
const GettingStartedPage = () => {
    return(
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <img 
                    src={require("../resources/gettingstarted.png")} 
                    alt="img" 
                    style={{ maxWidth: "100%", maxHeight: "80vh", width: "auto", height: "auto" }} 
                />
            </div>
        </>
    );
}

export default GettingStartedPage;