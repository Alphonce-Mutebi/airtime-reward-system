import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Dashboard = (props) => {
//   const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <Button variant="primary" onClick={handleShow}>
                Add Reward Campaign
            </Button>

            <Modal show={show} onHide={handleClose}>
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
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
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
                    <span className="mr-5"> <FontAwesomeIcon icon="plus-square" /> </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="edit" /> </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="trash-alt" /> </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="eye" /> </span> 
                </td>
                </tr>
                <tr>
                <td>School of economics and Mathematics</td>
                <td>
                    <span className="mr-5"> <FontAwesomeIcon icon="plus-square" /> </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="edit" /> </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="trash-alt" /> </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="eye" /> </span>
                </td>
                </tr>
                <tr>
                <td>School of Tourism and Culinary Arts</td>
                <td> 
                    <span className="mr-5"> <FontAwesomeIcon icon="plus-square" /> </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="edit" /> </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="trash-alt" /> </span>
                    <span className="mr-5"> <FontAwesomeIcon icon="eye" /> </span></td>
                </tr>
            </tbody>
        </table>


      </div>
    </div>
  );
};

export default Dashboard;