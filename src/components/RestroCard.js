import { CDN_URL } from "../Utils/Constants";


const RestroCard =(props)=>{
      const {resdata} =props;
      //console.log(resdata?.info);
      
      const{ cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resdata ;
  
      return(
          <div data-testid="resCard" className="m-4 p-4 w-[250px] bg-gray-200 rounded-b-lg">
              <img className="rounded-lg" src={CDN_URL+cloudinaryImageId}/>
              <h3 className="font-bold py-4 text-lg">{name}</h3>
              <h4>{cuisines.join(" ,")}</h4>
              <h4>Rating: {avgRating} stars</h4>
              <h4>Cost for Two: {costForTwo}</h4>
          </div>
      )
  }


  //input - restrocard=> restrocardpromoted

export const RestrocardPromoted =(RestroCard)=>{
    return ()=>{
        return(
            <div>
                <label>Promoted</label>
                <RestroCard/>
            </div>
        )
    }
  }

  export default RestroCard;