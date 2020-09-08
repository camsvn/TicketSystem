import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Row,Container, Image, Button, Form, Alert,Col, Spinner} from 'react-bootstrap';

export default function App (props) {     
  const [deptData, setDeptData] = useState([])
  const [usersData, setUsersData] = useState([])
  const [formData, setFormData] = useState({department:'',user:'',subject:'',message:''})
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [statusMsg, setStatusMsg] = useState({});

  useEffect(() => {
    axios.get('/api/tickets/getdepts')
    .then(res => {
      // setDeptData(res.data)
      axios.get('api/tickets/getusers',{
        params:{
          department: res.data[0]
        }
      })
      .then(userres=>{
      setDeptData(res.data)
      setUsersData(userres.data)
        setFormData({...formData, department: res.data[0], user: userres.data[0]._id})
      })
      .catch(err=> console.log(err))
    })
    .catch(err => console.log(err))
  }, [])

  const handleDeptChange = (e) =>{
    const department = e.target.value;
    setFormData({ ...formData, department, user:''})
    axios.get('api/tickets/getusers',{
      params:{
        department: department
      }
    })
    .then(res => {
      setUsersData(res.data)
      const newFormData = { department, user:res.data[0]._id}
      setFormData({...formData,  ...newFormData})
    })
    .catch(err => console.log(err))
  } 

  
  const TicketSubmit = (data) => {   
    // const newdata = {...data, message: escape(data.message)}
    axios.post('/api/tickets/add', JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res)=>{
      // console.log(res);      
      setStatusMsg({msg:res.data, code:res.status});
      if(res.status === 200){        
        setTimeout(() => {
          setLoading(false);
          setFormData({...formData, subject: '', message: ''})
          setShowAlert(true)
        }, 500);      
      }
      console.log(res);
    })
    .catch((err)=>{
      setLoading(false);
      setStatusMsg({msg:err.response.data, code:err.response.status});
      setShowAlert(true)
      // console.log(err.response);
    })
    }
  
  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    TicketSubmit(formData)
  }
  // console.log(formData)
  
    return (
      <Form onSubmit={handleTicketSubmit}>              
        <div className="form-body">
          {showAlert && statusMsg.msg && <Alert variant={statusMsg.code === 200 ? 'success': 'danger'} className='login-alert' dismissible onClose={()=>setShowAlert(false)}>{statusMsg.msg}</Alert>}
          <Form.Row>
            <Col xs={12} sm={6}>
              <Form.Group controlId="formDepartmentControl">
                <Form.Label>Department</Form.Label>
                <Form.Control 
                  as="select" 
                  value={formData.department} 
                  onChange={handleDeptChange}
                >
                  {deptData.length ? deptData.map(item => (
                    <option key={item} value={item}>{item}</option>
                  )): <option value="">Loading..</option>}
                </Form.Control>
              </Form.Group>
            </Col>
            
            <Col xs={12} sm={6}>
              <Form.Group controlId="formUserControl">
                <Form.Label>User</Form.Label>
                <Form.Control as="select" value={formData.user} onChange={e => setFormData({...formData, user: e.target.value})}>
                  {usersData.length ? usersData.map(item => (
                    <option key={item._id} value={item._id}>{item.name}</option>
                  )): <option value="">--</option>}                  
                </Form.Control>
              </Form.Group>
            </Col>
            
          </Form.Row>

          <Form.Group controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" value={formData.subject} required onChange={e=> setFormData({...formData ,subject: e.target.value})} />
          </Form.Group>

          <Form.Group controlId="formIssue">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows='5' value={formData.message} required onChange={e=> setFormData({...formData ,message: e.target.value})} />
          </Form.Group>
          <Button variant="success" disabled={loading} type="submit" className="submit">
            {loading? (
              <span>
                Submitting..
                {' '}
                <Spinner animation="border" role="status" variant='light' size="sm" />
              </span>
              ): 'Submit'
            }
          </Button>
        </div>
      </Form>
 )}