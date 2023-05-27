import { Container, FormControl, FormLabel,Form,FormGroup, Button, FormCheck } from "react-bootstrap";
import "../components/SignUp.css";
let Signup=()=>{
 return(
   <div>
      <Container className="sighn col-7">
        <h3>CREATE YOUR ACCOUNT TODAY</h3>
        <Form>
           <Container>
              <div className="row">
                <FormLabel>ENTER YOUR NAME:</FormLabel>
                <div className="col-3">
                    <FormGroup className="row">
                        <FormLabel className="col-6">FIRST:</FormLabel>
                        <FormControl className="col-6" style={{width:"270px"}} placeholder="first name"></FormControl>
                    </FormGroup>
                </div> 
                <div className="col-3">
                    <FormGroup className="row">
                        <FormLabel className="col-6">SECOND:</FormLabel>
                        <FormControl className="col-6" placeholder="second name"></FormControl>
                    </FormGroup>
                </div> 
              </div> 
              <div className="row">
                <div className="col-6">
                    <FormGroup className="row mt-3">
                        <FormLabel>ENTER YOUR EMAIL:</FormLabel>
                        <FormControl className="col-6" placeholder="example@gmail.com"></FormControl>
                    </FormGroup>
                </div>
              </div> 
              <div className="row mt-3">
                <div className="col-3">
                    <FormGroup className="row">
                        <FormLabel className="col-6">PASSWORD:</FormLabel>
                        <FormControl className="col-6" style={{width:"270px"}} placeholder="Enter password"></FormControl>
                    </FormGroup>
                </div> 
                <div className="col-3">
                    <FormGroup className="row">
                        <FormLabel className="col-8">CONFIRM:</FormLabel>
                        <FormControl className="col-4" placeholder="Re-enter password" ></FormControl>
                    </FormGroup>
                </div> 
                <div className="row mt-2">
                    <div className="col-6"> 
                        <FormGroup>
                            <FormCheck type="checkbox" label="show password"></FormCheck>
                        </FormGroup>
                        <p className="mt-3">The password should have at list one special character @!#$^&*,should have numbers 0123456789, should have 8 characters</p>
                       
                    </div>
                </div>
              </div>            
           </Container>
           <FormGroup className="mt-3">
              <Button type="submit">REGISTER</Button>
           </FormGroup>
        </Form>
      </Container>
   </div>
 )
}
export default Signup;