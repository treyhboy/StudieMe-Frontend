import React, {Component} from 'react';
import styled from 'styled-components';
import DashboardMain from './DashboardMain';
import User from './User';
import Gre from './Gre';
import {Route,Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import Feedback from './Feedback';

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


class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={User:props.User,value:"",status:false,
            CollegeScore:[],College:[],PieData:[],selectedCollege:"",subs:[],gre:"",
            Faculty:[],Publication:[],subGraph:[],CollegePer:[],PP:props.PP,
            Mode:"",catagory:""
            // ,selectedFile:null
        };
        this.handlechange = this.handlechange.bind(this);
        this.handleGrechange = this.handleGrechange.bind(this);
        this.handleclick = this.handleclick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
        this.settings = this.settings.bind(this);
        this.changeMode = this.changeMode.bind(this)
        this.handleCat = this.handleCat.bind(this)
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
    handleCat(event)
    {
        let k = event.target.value;
        console.log(k)
        this.setState({catagory:k})
        console.log(this.state)
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
    changeMode(mode)
    {
     this.setState({Mode:mode})
        console.log(this.state)
        console.log(mode)

    }
    toggle(ev){
        console.log("click click")
        console.log(ev.target.id)
        this.setState({
          selectedCollege:ev.target.id
        })
        axios.post(`http://localhost:1234/api2`,{subs:this.state.subs,college:ev.target.id,Mode:this.state.Mode,
        catagory:this.state.category
        })
            .then(res => {
                console.log(res.data)
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

    // handleselectedFile = event => {
    //     // window.console.log("fff", event.target.files[0]);
    //     this.setState({
    //         selectedFile: event.target.files[0],
    //         loaded: 0
    //     });
    // };

    handleclick(gre)
    {
        let s1 = ['Artificial Intelligence',
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

        var s2 = ['Aerospace Engineering',
            'Engineering Mechanics',
            'Biomedical Engineering',
            'Catalysis Technology',
            'Building Technology and Construction Management',
            'Environmental Engineering',
            'Geotechnical Engineering',
            'Hydraulic and Water Resources Engineering',
            'Structural Engineering',
            'Transportation Engineering',
            'Chemical Engineering',
            'Clinical Engineering',
            'Computer Science and Engineering',
            'Communication and Signal Processing',
            'Power Systems and Power Electronics',
            'Microelectronics and VLSI Design',
            'Control and Instrumentation',
            'Microelectronics and Photonics',
            'Industrial Mathematics and Scientific Computing',
            'Thermal Engineering',
            'Design (Mechanical Engineering)',
            'Manufacturing Engineering',
            'Metallurgical and Materials Engineering',
            'Ocean Engineering',
            'Ocean Technology',
            'Functional Materials and Nanotechnology'
        ]

        //adddedmy**********
        // window.console.log("upload", this.state.selectedFile);
        // const formData = new FormData();
        // formData.append(
        //     "file",
        //     this.state.selectedFile,
        //     // this.state.selectedFile.name
        // );
        //***************

        var subjects = this.state.Mode==="M Tech"?s2:s1
        console.log("dataa")
        console.log(this.state.gre);
        console.log(gre);
        console.log(this.props.Data);
        let t = (gre>290)?gre:this.state.gre;
        axios.post(`http://localhost:1234/api`,{'data':this.state.value,'Lidata':this.props.Data,Gre:t,Mode:this.state.Mode,
            catagory:this.state.catagory
        })
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
                axios.post(`http://localhost:1234/api2`,{subs:res.data.data.subs,college:res.data.data.college[0],Mode:this.state.Mode})
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
                    <Link to={"/"}>
                    <NavIcon>
                        <Icon src={require('../Images/home.svg')}/>
                    </NavIcon>
                    </Link>
                    <Link to={"/Dashboard"}>
                        <NavIcon>
                            <Icon src={require('../Images/order.svg')}/>
                        </NavIcon>
                    </Link>
                    <Link to={"/"}>
                        <NavIcon onClick={this.settings}>
                            <Icon src={require('../Images/settings.svg')}/>
                        </NavIcon>
                    </Link>
                    <Link to={"/Dashboard/User"}>
                    <NavIcon>
                        <Icon src={require('../Images/man.svg')}/>
                    </NavIcon>
                    </Link>
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
                        <Redirect to="/Dashboard"/>
                    ) :<Gre handleclick = {this.handleclick}
                            // handleselectedFile={this.handleselectedFile}
                            // gre={this.state.gre}
                            handlegre = {this.handleGrechange}
                            handlechange={this.handlechange}
                            value={this.state.value}
                            changeMode = {this.changeMode}
                            handleCat={this.handleCat}
                            catagory = {this.state.category}
                    />
                    }
                    />
                    <Route exact path="/Dashboard" render={() => !this.state.status ? (
                        <Redirect exact to="/"/>
                    ) :(<DashboardMain PieData = {this.state.PieData}
                                       subGraph = {this.state.subGraph}
                                       Faculty = {this.state.Faculty}
                                       College = {this.state.College}
                                       selectedCollege = {this.state.selectedCollege}
                                       toggle = {this.toggle}
                        />)
                    }/>
                    <Route path="/Dashboard/User" render={() =>
                        (<User/>)
                    }/>
                    <Route path="/feedback" render={() => (<Feedback />)} />
                </Main>
            </Container>
        );
    }
}

export default Dashboard;
