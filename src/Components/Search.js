import React from 'react'
import ImageList from './ImageList'
import Loading from './Loading'
class Search extends React.Component{
    state={term:"",images:[],Loading:false}
    loadingImage=()=>{
                    if(document.getElementById('PhotoName')==null)return
                    var SearchBar=document.getElementById('PhotoName')
                    var value=SearchBar.value
                    console.log(value)
                    var RequestPromise=this.props.onSubmit(value)
                    RequestPromise.then((response)=>{
                        var arr=response.data.results
                        var arr1=[]
                        for (var i=0;i<arr.length;i++){
                            arr1[i]=arr[i].links.download
                        }
                        this.setState({images:arr1,Loading:false})
                    })
                    this.setState({Loading:true})
    }
 
    render(){
        if(this.state.Loading==true){
            return <Loading/>
        }
        return (
            <div>
                <div className="ui icon input">
                    <input id="PhotoName" className="prompt" type="text" placeholder="Search ..."/>               
                    <button  onClick={this.loadingImage}><i className="search icon" ></i></button>
                </div>
                <br/><br/>
                <div>
                    <ImageList imageLinks={this.state.images}/>
                </div>
            </div>
        )
    }
}

export default Search