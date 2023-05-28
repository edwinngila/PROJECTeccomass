import { Container, FormControl, FormLabel,Form,FormGroup, Button, FormCheck } from "react-bootstrap";
import "../components/SignUp.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
let Signup=()=>{
 return(
   <div>
      <div className="sign2"></div>
      <Container className="sighn col-5" style={{borderRadius:"20px"}}>           
            <Form className="offset-1">
              <div className="sign3"></div>
                 <h3>CREATE YOUR ACCOUNT TODAY</h3>    
                    <div className="row">
                        <FormLabel>ENTER YOUR NAME:</FormLabel>
                        <div className="col-5">
                            <FormGroup className="row">
                                <FormLabel className="col-6">FIRST:</FormLabel>
                                <FormControl className="col-6" style={{width:"300px"}} placeholder="first name"></FormControl>
                            </FormGroup>
                        </div> 
                        <div className="col-5">
                            <FormGroup className="row">
                                <FormLabel className="col-6">SECOND:</FormLabel>
                                <FormControl className="col-6" style={{width:"300px"}} placeholder="second name"></FormControl>
                            </FormGroup>
                        </div> 
                    </div> 
                    <div className="row">
                        <div className="col-10">
                            <FormGroup className="row mt-3">
                                <FormLabel>ENTER YOUR EMAIL:</FormLabel>
                                <FormControl className="col-6" placeholder="example@gmail.com"></FormControl>
                            </FormGroup>
                        </div>
                    </div> 
                    <div className="row mt-3">
                        <div className="col-5">
                            <FormGroup className="row">
                                <FormLabel className="col-6">PASSWORD:</FormLabel>
                                <FormControl className="col-6" style={{width:"270px"}} placeholder="Enter password"></FormControl>
                            </FormGroup>
                        </div> 
                        <div className="col-5">
                            <FormGroup className="row">
                                <FormLabel className="col-8">CONFIRM:</FormLabel>
                                <FormControl className="col-4" placeholder="Re-enter password" ></FormControl>
                            </FormGroup>
                        </div> 
                        <div className="row mt-2">
                            <div className="col-10"> 
                                <FormGroup>
                                    <FormCheck type="checkbox" label="show password"></FormCheck>
                                </FormGroup>
                                <p className="mt-3">The password should have at list one special character @!#$^&*,should have numbers 0123456789, should have 8 characters</p>
                            </div>
                        </div>
                    </div>            
                <FormGroup className="mt-1">
                    <Button type="submit" className="col-8 offset-1" style={{backgroundColor:"#070916",border:"0px"}}>REGISTER</Button>
                </FormGroup>
                <div className="offset-4 mt-2"><Link to="/">login?</Link>instead</div>
                <div className="sign4"></div>
            </Form>
      </Container>
   </div>
 )
}
export default Signup;