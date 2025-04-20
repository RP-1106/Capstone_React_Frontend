
const EducationalPage = () => {
    return(
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <img 
                    src={require("../resources/education.png")} 
                    alt="img" 
                    style={{ maxWidth: "100%", maxHeight: "80vh", width: "auto", height: "auto" }} 
                />
            </div>
        </>
    );
}

export default EducationalPage;