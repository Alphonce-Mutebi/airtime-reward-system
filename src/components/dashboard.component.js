import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Dashboard = (props) => {
//   const history = useHistory();

  const [ addCampaignDialog, setShowCampaign] = useState(false);
  const [ addCustomerDialog, setShowCustomer] = useState(false);
  const [ editCampaignDialog, setEditCampaign] = useState(false);
  const [ deleteCampaignDialog, setDeleteCampaign ]= useState(false);
  const [ ViewCampaignDialog, setViewCampaign] = useState(false);

  
  const addRewardCampaign = () => setShowCampaign(true);
  const closeRewardCampaign = () => setShowCampaign(false);

  const addCustomer = () => setShowCustomer(true);
  const closeAddCustomer = () => setShowCustomer(false);

  const editCampaign = () => setEditCampaign(true);
  const closeEditCampaign = () => setEditCampaign(false);

  const deleteCampaign = () => setDeleteCampaign(true);
  const closeDeleteCampaign= () => setDeleteCampaign(false);

  const ViewCampaign = () => setViewCampaign(true);
  const closeViewCampaign = () => setViewCampaign(false);



  return (
    <div>
      <h1>Campaigns</h1>
      <br />
      <div className="container">
        <div className="row">
            <div className="col-md-10">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Search" />
                </div>
            </div>

            <div className="col-md-2">
            <Button variant="primary" onClick={addRewardCampaign}>
                Add Reward Campaign
            </Button>

            <Modal show={addCampaignDialog} onHide={closeRewardCampaign}>
                <Modal.Header >
                <Modal.Title>Add Reward Campaign</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <form>
                    <div className="form-group">
                        <label>Campaign Name</label>
                        <input type="text" className="form-control" placeholder="campaign name" />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea class="form-control"  rows="3"></textarea>
                    </div>

                    <div className="form-group">
                        <label>Airtime Amount</label>
                        <input type="number" className="form-control" placeholder="100" />
                    </div>

                </form>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={closeRewardCampaign}>
                    Close
                </Button>
                <Button variant="primary" onClick={closeRewardCampaign}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            </div>
        </div>
      </div>
      {/* <button onClick={() => history.push('/sign-in')}>Go Back</button> */}

      {/* Table */}
      <div className="container mt-5">
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Campaign Name</th>
                <th scope="col">Action</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                <td>School of Engineering and Computer Science</td>
                <td>
                <span className="mr-5" > <FontAwesomeIcon icon="plus-square" onClick={addCustomer}/>
                    <Modal show={addCustomerDialog} onHide={closeAddCustomer}>
                        <Modal.Header >
                            <Modal.Title>Customer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                        <form>
                            <div className="form-group">
                                <label>Customer Name</label>
                                <input type="text" className="form-control" placeholder="Customer Name" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="number" className="form-control" placeholder="+254723289212" />
                            </div>

                        </form>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={closeAddCustomer}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={closeAddCustomer}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                     </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="edit" onClick={editCampaign}/>
                    <Modal show={editCampaignDialog} onHide={closeEditCampaign}>
                        <Modal.Header >
                            <Modal.Title>Campaign</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                        <form>
                            <div className="form-group">
                                <label>Campaign Name</label>
                                <input type="text" className="form-control" placeholder="campaign name" />
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea class="form-control"  rows="3"></textarea>
                            </div>

                            <div className="form-group">
                                <label>Airtime Amount</label>
                                <input type="number" className="form-control" placeholder="100" />
                            </div>

                        </form>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={closeEditCampaign}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={closeEditCampaign}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    
                     </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="trash-alt" onClick={deleteCampaign}/> 
                    <Modal show={deleteCampaignDialog} onHide={closeDeleteCampaign}>

                        <Modal.Body className="text-center">
                            <p>Are you sure you want to delete this campaign?</p>
 
                        </Modal.Body>

                        <Modal.Footer>
                            <Button  variant="danger" onClick={closeDeleteCampaign}>
                                    Yes
                                </Button>
                                <Button  variant="success" onClick={closeDeleteCampaign}>
                                    Cancel
                            </Button>
                        </Modal.Footer>

                    </Modal>
                    </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="eye" onClick={ViewCampaign}/>
                    <Modal show={ViewCampaignDialog} onHide={ViewCampaign}>
                        <Modal.Header>
                        <Modal.Title>Campaign</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                        <form>
                            <div className="form-group">
                                <label>Campaign Name</label>
                                <input type="text" className="form-control" placeholder="campaign name" />
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea class="form-control"  rows="3"></textarea>
                            </div>

                            <div className="form-group">
                                <label>Airtime Amount</label>
                                <input type="number" className="form-control" placeholder="100" />
                            </div>

                        </form>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={closeViewCampaign}>
                            Close
                        </Button>
                        <Button variant="success" onClick={closeViewCampaign}>
                            Send Airtime
                        </Button>
                        </Modal.Footer>
                    </Modal>
                     </span> 
                </td>
                </tr>
                
            </tbody>
        </table>


      </div>
    </div>
  );
};

export default Dashboard;