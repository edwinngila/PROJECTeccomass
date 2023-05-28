import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "../components/LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faGithub,faGoogle,faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
let Login=()=>{
    return(
        <div>
             <div className="col-6">
                <div className="row">
                    <div className="space"></div>
                </div>
             </div>
            <Container className="col-5 heights"> 
             <div className="space"></div>               
                <Form className="offset-2 col-8">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-8"><h1>LOGIN</h1></div>
                        <div className="space"></div>
                    </div>
                    <FormGroup className="row">
                        <FormLabel className="col-6">User Name:</FormLabel>
                        <FormControl type="text" className="col-6"></FormControl>
                    </FormGroup>
                    <FormGroup className="row">
                        <FormLabel className="col-6">Password:</FormLabel>
                        <FormControl type="password" className="col-6"></FormControl>
                    </FormGroup>
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6" style={{fontSize:"14px"}}><div className="offset-2">FORGOT PASSWORD?</div></div>
                    </div>
                    <FormGroup className="row">                 
                        <Button type="submit" className="col-12 mt-3 buttons" style={{backgroundColor:"#281148",border:"0px"}}>LOGIN</Button>                         
                    </FormGroup>
                </Form>
                <div className="row mt-3">
                    <div className="col-4">
                       <div className="space"></div>
                    </div>
                   <div className="col-5">
                      <h4>or signup using</h4>
                   </div>
                </div>
               <Container className="offset-3 mt-3">
                    <div className="row">  
                        <div className="col-5">                            
                            <Container fluid className="g-4">
                                <div className="row">                                   
                                    <div className="col-3">
                                      <FontAwesomeIcon icon={faFacebook} size="3x" className="icons1"/>
                                    </div>
                                    <div className="col-3">
                                       <FontAwesomeIcon icon={faGoogle} size="3x" className="icons2"/> 
                                    </div>
                                    <div className="col-3">
                                        <FontAwesomeIcon icon={faTwitter} size="3x" className="icons3"/> 
                                    </div>
                                    <div className="col-3">
                                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                                    </div>
                                </div>
                            </Container>            
                        </div>
                    </div>
               </Container>
               <Container>
               <div className="row">
                        <div className="col-3">
                            <div className="space2"></div>
                        </div>
                        <div className="col-8">
                            <div className="space"></div>
                            <div>if you have no account:<Link to="/signup">signup</Link></div>
                        </div>
                </div>
               </Container>
            </Container>
        </div>
    )
}
export default Login;