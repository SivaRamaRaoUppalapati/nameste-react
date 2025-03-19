import { userInfo } from "os";
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count :0,
            count2 :2,
            // userInfo :{
            //     name:" ",
            //     location:" "
            // }
        };
    }

    async componentDidMount(){
    //     //TO MAKE API CALLS
    //     const data = await fetch("");
    //     const json = data.json;
    //      this.setState({
    //         userInfo :json
    //      })
    console.log("cm")
     }

    componentDidUpdate(){
        console.log("cu");
    }

    render(){
        const{name} = this.props;
        const {count , count2} = this.state;


        return (
            <div className="user">
                <h1>{name}</h1>
            </div>
        )
    }
}

export default UserClass;