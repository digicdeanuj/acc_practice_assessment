import React, { Component } from 'react'
import './styles.css'
import TableData from '../../components/TableData'

class Main extends Component {
	constructor(props){
		super(props)
            this.state = {
                dataList:[
				{
					"Name":"aaaa",
					"User ID":"aa_11",
					"Salary":5000000,
					"Comments":"NA",
					"Status":"Active"
					
				}
				],
				populateData:[]
            }
    }

	handlePopulateBtn =()=>{
		this.setState({populateData:this.state.dataList});
	};
	render() {
		return (
			<div className="Main">
			<button className="mystyle" type="button" onClick={this.handlePopulateBtn}>Populate data</button>
				<div className="tableAlignment">
				
				<TableData dataList={this.state.dataList[0]}/>
				
					{
						this.state.populateData && this.state.populateData.length>0 &&
						<TableData dataList={this.state.populateData[0]}/>
						
					}
				</div>
                
			</div>
	    )
	}
}

export default Main