import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class ContactCard extends React.Component{
    constructor(){
        super();
        this.state = {
            // initialize your state
        };
    }
    
    render(){
        return (
            <li className="list-group-item">
                <div className="row w-100">
                    <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <div className=" float-right">
                            <button className="btn" onClick={() => this.props.history.push('/edit/' + this.props.data.id)}><i className="fas fa-pencil-alt mr-3"></i></button>
                            <button className="btn" onClick={() => this.props.onDelete(this.props.data)}><i className="fas fa-trash-alt"></i></button>
                        </div>
                        <label className="name lead">{this.props.data.full__name}</label>
                        <br /> 
                        <i className="fas fa-map-marker-alt text-muted mr-3">{this.props.data.address}</i>
                        <span className="text-muted">5842 Hillcrest Rd</span>
                        <br />
                        <span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149">{this.props.data.phone}</span>
                        <span className="text-muted small">(870) 288-4149</span>
                        <br />
                        <span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
                        <label className="text-muted small text-truncate">{this.props.data.email}</label>
                    </div>
                </div>
            </li>
        );
    }
    
}

/**
 * here is where you define the data-types for
 * your component propersties
**/
ContactCard.propTypes = {
    history: PropTypes.object,
    onDelete: PropTypes.func,
    data: PropTypes.object,
    email: PropTypes.string
};

/**
 * here is where you define the default values
 * for your component propersties
**/
ContactCard.defaultProps = {
  onDelete: null
};
export default withRouter(ContactCard);