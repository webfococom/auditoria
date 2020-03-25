import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class GMBInformacoes extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        if (this.props.localSelected === null) {
            this.props.history.push('/google-meu-negocio/locais');
        }
    }

    render() {
        return (
            <div className="content-header content-ads">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-auditoria">
                                    <li className="breadcrumb-item" aria-current="page">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        <Link to="/">Google Meu Negócio</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Informações</h2>
                        </div>
                    </div>

                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    localSelected: store.localSelectedState.selected
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GMBInformacoes);