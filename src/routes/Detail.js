import React from "react";
import Navigation from "../components/Navigation";
import "./Detail.scss"

// home에서 'more detail'button을 클릭하지 않고 
// detail 주소로 갔을 때 home에서 받아온 정보가 없으므로 
// props: undefined가 된다. 이때 어떻게 할지 설정해야함

//git test


class Detail extends React.Component {
  
    componentDidMount() {  
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

    render () {
        const { location } =this.props;
            if(location.state) {
                return (
                    <div className="detail">
                     <span className="header">
                        <Navigation />
                    </span>
                    <div className="fruitarian">
                        {location.state.name}
                        {location.state.icon}
                        {location.state.desc}
                    </div>
                    </div>
                    
                );
            } else {
                return null;
            }
    }
}
export default Detail;