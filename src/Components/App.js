import React from 'react'
import unsplash from '../APIs/unsplash'
import Search from './Search';
class App extends React.Component{
    state={image:[]}
    response(term){
        var RequestPromise=unsplash. get('/search/photos',{
                        params:{query:term,page:5,per_page:50}
                    })
        return RequestPromise;
    }
    render(){
        return <Search onSubmit={this.response}/>
    }
} 


export default App