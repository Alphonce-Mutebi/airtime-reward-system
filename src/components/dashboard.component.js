import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
  const history = useHistory();
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
                <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">Add Campaign</button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
      </div>
      {/* <button onClick={() => history.push('/sign-in')}>Go Back</button> */}

      {/* Table */}
      <div className="container mt-5">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Campaign Name</th>
                <th scope="col">Action</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                <td>School of Engineering and Computer Science</td>
                <td>test</td>
                </tr>
                <tr>
                <td>School of economics and Mathematics</td>
                <td>test</td>
                </tr>
                <tr>
                <td>School of Tourism and Culinary Arts</td>
                <td>test</td>
    
                </tr>
            </tbody>
        </table>


      </div>
    </div>
  );
};

export default Dashboard;