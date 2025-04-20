
const PerformancePage = () => {
    return(
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
                <img 
                    src={require("../resources/performance.png")} 
                    alt="img" 
                    style={{ maxWidth: "200%", maxHeight: "100vh", width: "auto", height: "auto" }} 
                />
            </div>
        </>
    );
}

export default PerformancePage;