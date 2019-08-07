import React, { Component } from 'react'
import "./styles.css"

class TableData extends Component {
	constructor(props){
		super(props);
		this.state={
			finalDataList:this.props.dataList
		}
    }
    
	componentWillUpdate(nextProps){
		if(nextProps.dataList!==this.props.dataList){
			this.setState({finalDataList: nextProps.dataList});
		}
	}
	
    render() {
		return (
            <table className="table">
                <tbody>{
				Object.keys(this.state.finalDataList).map((key,i)=>{
					let _this=this;
            return (
				<tr>
					<td key={i}>{Object.keys(_this.state.finalDataList)[i]}</td>
					<td key={i+1}>{this.state.finalDataList[key]}</td>
				</tr>
              )
			})
				}
                </tbody>
            </table>
        )
	}
}
export default TableData