import { Component } from "react";
import services from "../services/services";
import { Paper,Box,Grid } from "@mui/material";
import ProductCard from "../lib/card";

class AllCategories extends Component{


  constructor(){
 
    super()

    this.state={
      categories:{},
      loading:true
    }

    this.groupBy=this.groupBy.bind(this)


  }


  groupBy(array, key){
   
    return array.reduce((result, currentValue) => {


      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      
      return result;

      
    }, {}); 
  };
  


  componentDidMount(){

    services.getData('categories').then((res)=>{

      console.log(res);


      this.setState({
        ...this.state,
        categories:this.groupBy(res,'mainCategory'),
        loading:false
      })


    })

  }


  render(){

    return(

      <Box sx={{marginLeft:{xs:'0px',md:'250px'}}}>
        {

           this.state.loading?
           <h1>Loading</h1>
           :Object.keys(this.state.categories).map((i,index)=>{


            return <Paper key={index} sx={{marginTop:'10px'}}>
              <h4>{i}</h4>
              <Grid container item xs={12} md={12}>
                {
                  this.state.categories[i].slice(0,3).map((category,index)=>{


                    return <Grid item xs={6} md={4} key={index}>
                      <ProductCard 
                      img={category.categoryImage}
                      title={category.subcategoryName}
                      id={category.id}
                      other={category}
                      />
                    </Grid>


                  })
                }
                {
                  this.state.categories[i].length>3?
                  <Grid item xs={6} md={4}>show more</Grid>
                  :null
                }
              </Grid>
              
            </Paper>


           })

        }
      </Box>

    )

  }



}


export default AllCategories