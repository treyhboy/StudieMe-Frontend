import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 92%;
width: 100%;
`
const BlogContainer = styled.div`
display: flex;
justify-content: center;
flex-flow: column;
align-items: center;
background-color: white;
border-radius: 1rem;
height: 90%;
width: 90%;
`
const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 40%;
width: 100%;
`
const HeaderPic = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 50%;
`
const Pic = styled.img`
height: 80%;
width: auto;
`

const HeaderContent = styled.div`
display: flex;
justify-content: center;
flex-flow:column;
align-items: center;
height: 100%;
width: 50%;
`
const HeaderText = styled.div`
display: flex;
align-items: center;
font-size: 4.5rem;
font-weight: lighter;
color: gray;
font-family: 'Lato', sans-serif;
height: 15rem;
width: 80%;
`
const HeaderAuther = styled.div`
display: flex;
align-items: center;
height: 10rem;
width: 85%;
`
const Auther = styled.div`
display: flex;
align-items: center;
height: 80%;
width: 50%;
`
const AutherPic = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 35%;
`
const AutherDetail = styled.div`
display: flex;
justify-content: center;
flex-flow: column;
height: 100%;
width: 65%;
`
const AutherName = styled.div`
display: flex;
align-items: center;
color: gray;
font-size: 1.8rem;
font-family: 'Lato', sans-serif;
height: 50%;
width: 90%;
`
const AutherFollow = styled.div`
display: flex;
align-items: center;
height: 50%;
width: 100%;
`
const Follow = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2rem;
border: solid 1.5px #24D89B;
color: #24D89B;
font-size: 1.3rem;
font-family: 'Lato', sans-serif;
height: 60%;
width: 45%;
&:hover{
background-color: #24D89B;
color: white;
}
`
const Fpic = styled.img`
height: 90%;
width: auto;
border-radius: 100%;
`


const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 60%;
width: 100%;
`
const MainText = styled.div`
display: flex;
align-items: center;
color: gray;
font-weight: lighter;
font-size: 1.7rem;
font-family: 'Lato', sans-serif;
height: 100%;
width: 97%;
`


class Blog2 extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(<Content>
            <BlogContainer>
                <Header>
                    <HeaderContent>
                        <HeaderText>
                            C++ The Easy Way
                        </HeaderText>
                        <HeaderAuther>
                            <Auther>
                                <AutherPic>
                                    <Fpic src={require('./kev2.jpg')}/>
                                </AutherPic>
                                <AutherDetail>
                                    <AutherName>
                                        Kevin Spencer
                                    </AutherName>
                                    <AutherFollow>
                                        <Follow>
                                            Follow
                                        </Follow>
                                    </AutherFollow>
                                </AutherDetail>
                            </Auther>
                        </HeaderAuther>
                    </HeaderContent>
                    <HeaderPic>
                        <Pic src={require('./1200px-ISO_C++_Logo.svg.png')}/>
                    </HeaderPic>
                </Header>
                <Main>
                    <MainText>
                        Thanks in part to recent revelations about how the company gave access to user data and private messages to Netflix, Spotify, and others, as well as the dirty tricks campaign to smear Facebook critic George Soros, people are becoming aware that the platform doesn’t merely hurt society as a side effect. Facebook is an intentionally bad actor. That said, maybe there’s something to be gained or learned from the social network before it’s gone.

                        We may not have a lot of time. Facebook’s products have become too obviously destructive for almost anyone to justify. A decade of articles, documentaries, and school curriculums dedicated to explaining to users that they are not Facebook’s customers but its product, combined with evidence of its weaponized memetics and that icky feeling of being actively targeted by algorithms, has finally taken its toll: People use Facebook when they absolutely have to, but rarely because they want to. And now, with all the desperation of a cigarette company denying that its product is addictive, Facebook has revealed just how low it will go by blaming Russian spies for using the platform as designed or smearing Jewish philanthropist George Soros because, well, he’s an easy target and a surefire distraction.

                        Sure, Facebook may yet throw an audacious Hail Mary, like when a declining AOL went and bought Time Warner, but even the purchase of a Netflix or Disney would only temporarily slow the bleeding. The corporate brand is shot because Facebook has become the face of algorithmic malfeasance. It is the poster child for how technology can be turned against human agency. The company employs behavioral finance, privacy invasion, and machine learning to manipulate users in the fashion of Las Vegas slot machines, and then claims either innocence or ignorance when the social impact of these machinations is revealed.
                        Facebook’s most aggravating aspect is also its most intriguing: the way it attempts to predict our needs and desires. On the surface, it’s simple: The platform uses what it knows about us from our clicks and likes and shares and choices of friends to allow marketers to deliver ads to which we are likely to respond. Sometimes the data is analyzed by Facebook itself, and sometimes it is analyzed by Facebook’s clients — who can then combine the information they get about us on Facebook with the data they get from the web’s many other surveillance tools. That’s how the subject of an email thread or web search can end up following us around as ads. Thanks to data sharing between companies, cookies that track our web activity, and algorithms that read our public posts, most of the internet works this way. Retweeting a critical message about a progressive political candidate may get you targeted ads or articles decrying gun control, for instance.
                    </MainText>
                </Main>
            </BlogContainer>
        </Content>)
    }
}

export default Blog2;