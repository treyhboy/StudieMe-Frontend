import React, {Component} from 'react';
import styled from 'styled-components';
import {Route,Switch,Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import {PieChart, Pie,ResponsiveContainer,Tooltip,LineChart,Line,CartesianGrid,Legend,XAxis,YAxis} from 'recharts';
const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];



const Container = styled.div`
display: flex;
flex-flow: row;
height: 100vh;
width: 100vw;
background-color: #F8F8F8;
`
const Header = styled.div`
display: flex;
height: 8%;
width: 100%;
background-color: white;
border-bottom: solid 1px #f8f8f8;
`
const HeaderLogo = styled.div`
display: flex;
height: 100%;
width: 79%;
align-items: center;
//background-color: red;
`

const Logo = styled.img`
height: 4rem;
width: auto;
margin-left: 2rem;
`
const Notification = styled.img`
height: 3.3rem;
width: auto;
`

const HeaderNot = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 5%;
border-right: solid 1px #f8f8f8;
border-left: solid 1px #f8f8f8;
&:hover{
background-color: #F8F8F8;
}
//background-color: steelblue;
`
const HeaderUser = styled.div`
display: flex;
height: 100%;
width: 16%;
&:hover{
background-color: #F8F8F8;
}
//background-color: salmon;
`
const UserPhoto = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 25%;
//background-color: aqua;
`
const UserName = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 60%;
//background-color: antiquewhite;
font-weight: 200;
color: gray;
font-size: 1.6rem;
letter-spacing: 1.2px;
`
const UserButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 15%;
//background-color: orange;

`
const PP = styled.img`
height: 4rem;
width: auto;
`
const Down = styled.img`
height: 1.3rem;
width: auto;
`
const Nav = styled.div`
display: flex;
flex-flow: column;
height: 100%;
width: 5%;
border-right: solid 1px #f8f8f8;
background-color: white;
`
const NavToggle = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 8%;
width: 100%;
&:hover{
background-color: #F8F8F8;
}
border-bottom: solid 1px #f8f8f8;
`
const NavIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10rem;
width: 100%;
&:hover{
background-color: #F8F8F8;
}
`
const Icon = styled.img`
height: 3rem;
width: auto;
`
const Toggle = styled.img`
height: 2rem;
width: auto;
`
const Main = styled.div`
display: flex;
flex-flow: column;
height: 100%;
width: 95%;
`
const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 92%;
width: 100%;
//background-color: red;
`
const InputParent = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-flow: column;
height: 35%;
width: 40%;
border: solid 1px #f8f8f8;
border-radius: 1rem;
background-color: white;
`

const Input = styled.input`
height: 5rem;
width: 60%;
border: none;
outline: none;
font-size: 2rem;
border-bottom: solid 1px gray;
color: gray;
`
const EnterButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 4.5rem;
width: 14rem;
color: white;
font-weight: 200;
background-color: #24D89B;
border: solid 1px #24D89B;
&:hover{
background-color: white;
color: #24D89B;
}
font-size: 1.8rem;

border-radius: 3rem;
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



class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={User:props.User,value:"",status:false,
            CollegeScore:[],College:[],PieData:[],selectedCollege:"",subs:[],gre:"",
            Faculty:[],Publication:[],subGraph:[],CollegePer:[],PP:props.PP
        };
        this.handlechange = this.handlechange.bind(this);
        this.handleGrechange = this.handleGrechange.bind(this);
        this.handleclick = this.handleclick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
        this.settings = this.settings.bind(this);
    }
    componentDidMount() {


            var token = JSON.parse(sessionStorage.getItem('Gre'))
            if (token) {
                console.log("token true")
                this.setState({
                    gre: token,
                    status:true
                })
                this.handleclick(token)
                // if(this.state.Gre)
        }
    }
    logout(){
        sessionStorage.removeItem('LiToken');
        window.location.reload();
    }
    handlechange(event)
    {
        let k = event.target.value;
        this.setState({
            value:k
        }
    )
    }
    handleGrechange(event)
    {
        let u = event.target.value;
        u=Number(u)
        // console.log(u)
        this.setState({
                gre:u
            }
        )
        sessionStorage.setItem('Gre',u);
        // console.log(this.state.gre);


    }
    toggle(ev){
        console.log("click click")
        console.log(ev.target.id)
        this.setState({
          selectedCollege:ev.target.id
        })
        axios.post(`http://127.0.0.1:5000/college`,{subs:this.state.subs,college:ev.target.id})
            .then(res => {
                console.log(res.data)
                // console.log(res.data.faculty)
                // console.log(res.data.publication)
                // console.log(res.data.graph)
                let f = [];
                for(let i in res.data.faculty)
                {
                    f.push({faculty:res.data.faculty[i],Pubs:res.data.publication[i]})
                }
                let e =[];
                for(let j in res.data.graph)
                {
                    e.push({subject:this.state.subs[j],Percent:res.data.graph[j]*100})
                }
                this.setState({
                    Faculty:f,
                    subGraph:e
                })
                console.log(this.state.Faculty)
                console.log(this.state.subGraph)
            })

    }
    handleclick(gre)
    {
        // console.log(this.state)
        let subjects = ['Artificial Intelligence',
            'Computer Vision',
            'Machine learning & data mining',
            'Natural language processing',
            'The Web & information retrieval',
            'Computer architecture',
            'Computer networks',
            'Computer security',
            'Databases',
            'Design automation',
            'Embedded & real-time systems',
            'High-performance computing',
            'Mobile computing',
            'Measurement & perf. Analysis',
            'Operating systems',
            'Programming languages',
            'Software engineering',
            'Algorithms & complexity',
            'Cryptography',
            'Logic & verification',
            'Comp. bio & bioinformatics',
            'Computer graphics',
            'Economics & computation',
            'Human-computer interaction',
            'Robotics',
            'Visualization'
        ]
        console.log("dataa")
        console.log(this.state.gre);
        console.log(gre);
        console.log(this.props.Data);
        let t = (gre>290)?gre:this.state.gre;
        axios.post(`http://localhost:1234/api`,{'data':this.state.value,'Lidata':this.props.Data,Gre:t})
            .then(res => {
                console.log(res);
                var i,j;
                var sum = 0;
                for (j in res.data.data.Score)
                {
                    sum += res.data.data.Score[j];
                }
                let newScore = []
                let s=0;
                for (i in res.data.data.Score)
                {
                    newScore.push({subject:subjects[i],score:Number(((res.data.data.Score[i]/sum)*100).toFixed(2))});
                    s +=(res.data.data.Score[i]/sum)*100;
                }
                // console.log("Data")
                // console.log(res.data.data.Score)
                let sa = newScore.sort(function(a, b){
                    return a.score-b.score
                });
                // console.log(newScore);
                // console.log(sa);
                let cd = [];
                for(let r in res.data.data.college)
                {
                    cd.push({college:res.data.data.college[r],Per:res.data.data.percentage[r]})
                }
                this.setState({
                    status:true,
                    College:cd,
                    subs:res.data.data.subs,
                    PieData:sa
                })
                let coll = res.data.data.college[0];
                axios.post(`http://127.0.0.1:5000/college`,{subs:res.data.data.subs,college:res.data.data.college[0]})
                    .then(res => {
                        console.log(res)
                        console.log(res.data.faculty)
                        console.log(res.data.publication)
                        console.log(res.data.graph)
                        let f = [];
                        for(let i in res.data.faculty)
                        {
                            f.push({faculty:res.data.faculty[i],Pubs:res.data.publication[i]})
                        }
                        let e =[];
                        for(let j in res.data.graph)
                        {
                            e.push({subject:this.state.subs[j],Percent:res.data.graph[j]*100})
                        }
                        this.setState({
                            Faculty:f,
                            subGraph:e,
                            selectedCollege:coll
                        })
                        console.log(this.state.Faculty)
                        console.log(this.state.subGraph)
                    })
                // console.log(res.data);
                // console.log(res.data);
                // console.log(this.state.College);
                // console.log(res.data.data);
            })


    }
    settings(){
        sessionStorage.removeItem('Gre');
        this.setState({
            status:false,
            gre:""
        })
    }

    render() {

        return (<Container>
                <Nav>
                    <NavToggle>
                        <Toggle src={require('../Images/Toggle icon.svg')}/>
                    </NavToggle>
                    <NavIcon>
                        <Icon src={require('../Images/home.svg')}/>
                    </NavIcon>
                    <NavIcon>
                        <Icon src={require('../Images/order.svg')}/>
                    </NavIcon>
                    <NavIcon onClick={this.settings}>
                        <Icon src={require('../Images/settings.svg')}/>
                    </NavIcon>
                    <NavIcon>
                        <Icon src={require('../Images/man.svg')}/>
                    </NavIcon>
                </Nav>
                <Main>
                    <Header>
                        <HeaderLogo>
                            <Logo src={require('../Images/Logo.svg')}/>
                        </HeaderLogo>
                        <HeaderNot>
                            <Notification src={require('../Images/notification.svg')}/>
                        </HeaderNot>
                        <HeaderUser onClick={this.logout}>
                            <UserPhoto>
                                <PP src={this.state.PP}/>
                            </UserPhoto>
                            <UserName>
                                {this.state.User}
                            </UserName>
                            <UserButton>
                                <Down src={require('../Images/caret-down.svg')}/>
                            </UserButton>
                        </HeaderUser>
                    </Header>
                    <Route exact path="/" render={() =>this.state.status ? (
                        <Redirect to="/dashboard"/>
                    ) :(<Content>
                        <InputParent>
                            {/*<Input placeholder={"Enter Resume Data"} value={this.state.value} onChange={this.handlechange}/>*/}
                            <Input placeholder={"Enter Gre Score"} value={this.state.gre} onChange={this.handleGrechange}/>
                            <EnterButton onClick={this.handleclick}>
                                Send
                            </EnterButton>
                        </InputParent>
                    </Content>)
                    }
                    />
                    <Route path="/dashboard" render={() => !this.state.status ? (
                        <Redirect to="/"/>
                    ) :(<Content>
                        <ContentCol1>
                            <Col1Row1>
                                <Row1Pie>
                                    {/*<Pie src={require('../Images/chart.svg')}/>*/}
                                    <ResponsiveContainer height={"100%"} width={"100%"}>
                                    <PieChart >
                                        <Pie data={this.state.PieData} dataKey="score" nameKey="subject" cx="50%" cy="50%" outerRadius={80} fill="#5FDAFF" />
                                        <Pie data={this.state.PieData} dataKey="score" nameKey="subject" cx="50%" cy="50%" innerRadius={100} outerRadius={125} fill="#24D89B" label/>
                                        <Tooltip/>
                                    </PieChart>
                                    </ResponsiveContainer>
                                </Row1Pie>
                                <Row1Graph>
                                    <ResponsiveContainer height={"100%"} width={"100%"}>
                                    <LineChart  data={this.state.subGraph}
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
                                        {this.state.Faculty.map((item, index) => (
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
                                    {this.state.College.map((item, index) => (
                                        <CollegeRow key={index}
                                                    color={(this.state.selectedCollege===item.college?"#24D89B":"white")}
                                                    tcolor={(this.state.selectedCollege===item.college?"white":"gray")}
                                                    onClick={this.toggle}
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
                    />

                </Main>
            </Container>
        );
    }
}

export default Dashboard;
