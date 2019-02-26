import React, { Component } from 'react';
import styled from 'styled-components';
import {PieChart, Pie,ResponsiveContainer,Tooltip,LineChart,Line,CartesianGrid,Legend,XAxis,YAxis} from 'recharts';

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 92%;
width: 100%;
`
const ContentCol1 = styled.div`
display: flex;
flex-flow: column;
height: 100%;
width: 66%;
`
const Col1Row1 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 45%;
width: 100%;

`
const Row1Pie = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 2rem;
height: 100%;
width: 45%;
`
// const Pie = styled.img`
// height: 28rem;
// width: auto;
// `
const Row1Graph = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80%;
width: 40%;
margin-right: 6rem;
border-radius:1rem;
background-color: white;
`
// const Graph = styled.img`
// height: 28rem;
// width: auto;
// `

const Col1Row2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 55%;
width: 100%;
//background-color: palegreen;
`
const Prof = styled.div`
display: flex;
flex-flow: column;
height: 80%;
width: 91%;
border-radius: 1rem;
border: solid 1px #f8f8f8;
background-color: white;
`
const ProfHead = styled.div`
display: flex;
align-items: center;
height: 12%;
width: 100%;
font-size: 2.3rem;
padding-left:3rem ;
font-weight: 200;
color:gray;
//border-bottom: solid 1px #E3DEDE;
`
const ProfContent = styled.div`
display: flex;
flex-flow: column;
height: 88%;
width: 100%;

//background-color: red;
`
const ContentRow = styled.div`
display: flex;
justify-content: space-between;
box-sizing: content-box;
height: 10%;
width: 96.4%;
font-size: 1.7rem;
padding-left:3rem;
font-family: 'Lato', sans-serif;
font-weight: 100;
color:gray;
border-top: solid 1px #f8f8f8;
cursor: pointer;
&:hover{
background-color: #f8f8f8;
}
`



const ContentCol2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 34%;
`
const College = styled.div`
display: flex;
flex-flow: column;
height: 91%;
width: 91%;
border-radius: 1rem;
border: solid 1px #f8f8f8;
margin-bottom: 1rem;
background-color: white;
`
const CollegeHead = styled.div`
display: flex;
align-items: center;
height: 10%;
width: 100%;
font-size: 2.8rem;
padding-left:3rem ;
font-weight: 200;
color:gray;
//border-bottom: solid 1px #E3DEDE;
`
const CollegeContent = styled.div`
display: flex;
flex-flow: column;
height: 90%;
width: 100%;
//background-color: red;
`
const CollegeRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 10%;
width: 93%;
font-size: 2rem;
padding-left:3rem;
font-weight: 200;
color:${props=>props.tcolor};
background-color:${props=>props.color};
border-top: solid 1px #f8f8f8;
transition: .2s;
cursor: pointer;
//#24D89B
//&:hover{
//background-color: #f8f8f8;
//}
`
const Perc =  styled.div`
font-size: 1.6rem;
font-family: 'Lato', sans-serif;
font-weight: 200;
padding-right: ${(props)=>props.right||'.5rem'};
`

class DashboardMain extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(<Content>
            <ContentCol1>
                <Col1Row1>
                    <Row1Pie>
                        {/*<Pie src={require('../Images/chart.svg')}/>*/}
                        <ResponsiveContainer height={"100%"} width={"100%"}>
                            <PieChart >
                                <Pie data={this.props.PieData} dataKey="score" nameKey="subject" cx="50%" cy="50%" outerRadius={80} fill="#5FDAFF" />
                                <Pie data={this.props.PieData} dataKey="score" nameKey="subject" cx="50%" cy="50%" innerRadius={100} outerRadius={125} fill="#24D89B" label/>
                                <Tooltip/>
                            </PieChart>
                        </ResponsiveContainer>
                    </Row1Pie>
                    <Row1Graph>
                        <ResponsiveContainer height={"100%"} width={"100%"}>
                            <LineChart  data={this.props.subGraph}
                                        margin={{ top: 20, right: 40,left:20}}>
                                <XAxis dataKey="subject" />
                                <Tooltip />
                                {/*<Legend />*/}
                                <Line type="monotone" dataKey="Percent" nameKey="subject" stroke="#5FDAFF" />
                                {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                            </LineChart>
                        </ResponsiveContainer>
                        {/*<Graph src={require('../Images/Graph2.svg')}/>*/}
                    </Row1Graph>
                </Col1Row1>
                <Col1Row2>
                    <Prof>
                        <ProfHead>
                            Top 10 Matched Professors
                        </ProfHead>
                        <ProfContent>
                            {this.props.Faculty.map((item, index) => (
                                <ContentRow key={index}>
                                    {index+1}{". "}{item.faculty}
                                    <Perc right={"2rem"}>{item.Pubs + "  Pubs"}</Perc>
                                </ContentRow>
                            ))}

                        </ProfContent>
                    </Prof>
                </Col1Row2>
            </ContentCol1>
            <ContentCol2>
                <College>
                    <CollegeHead>
                        Top 10 Matched Colleges
                    </CollegeHead>
                    <CollegeContent>
                        {this.props.College.map((item, index) => (
                            <CollegeRow key={index}
                                        color={(this.props.selectedCollege===item.college?"#24D89B":"white")}
                                        tcolor={(this.props.selectedCollege===item.college?"white":"gray")}
                                        onClick={this.props.toggle}
                                        id={item.college}
                            >
                                {index+1}{". "}{item.college}{"  "}
                                <Perc>{(item.Per*100).toFixed(2) + "%"}</Perc>
                            </CollegeRow>
                        ))}
                    </CollegeContent>
                </College>
            </ContentCol2>
        </Content>)
    }
}

export default DashboardMain;