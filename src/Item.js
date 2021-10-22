import React, { Component } from 'react'

export default class Task extends Component {

    render() {

        return (
            <div className="row border border-3 align-items-center">
                <div className="col-lg-4 text-center mb-5 mb-lg-0 mx-auto">
                    <button type="button"className="btn bg-success"onClick={() => this.props.finish(this.props.data.id)}>
                    <p>Complete</p>
                    
                    </button>
                </div>
                <div className="col-lg-4 text-center mb-5 mb-lg-0">
                    
                    {(this.props.data.textValue).length > 19 
                    ? (this.props.data.textValue).substring(0, 17) + '...' : this.props.data.textValue
                }
                </div>
                <div className="col-lg-4  mb-5 mb-lg-0">
                    <button type="button" className="btn bg-danger" onClick={() => this.props.remove(this.props.data.id)}>
                        <p>Delete</p>
                    </button>
                </div>
            </div>
        )
    }

}