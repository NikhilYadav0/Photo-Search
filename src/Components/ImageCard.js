import React from 'react'
import { create } from 'domain';

class ImageCard extends React.Component{
    constructor (props){
        super(props)
        this.imageRef=React.createRef()
        this.state={span:0}
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans)
    }
    setSpans=()=>{
        const height=(this.imageRef.current.clientHeight)
        const span=Math.ceil(height/10)
        this.setState({span:span})
    }
    render(){
        console.log(this.imageRef)
        return (
            <div style={{gridRowEnd:`span ${this.state.span}`}}>
                <img
                    ref={this.imageRef}
                    src={this.props.imageSrc}
                />
            </div>
        )
    }
}

export default ImageCard