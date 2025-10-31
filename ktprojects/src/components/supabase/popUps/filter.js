import "../../../App.css";

export const FilterPopUp = ({triggerred}) => {
    return(
    <div className = "opacheBackground">
        <div style = {{backgroundColor:"white", borderRadius: 25, height: 500, width: 500, position:"absolute",  top: triggerred? 100 : -100, justifyContent:"center", alignItems:"center", alignContent:"center", }}>
        <h1 style = {{alignSelf:"center"}}>Hello Universe</h1>
        </div>
    </div>
    )
}