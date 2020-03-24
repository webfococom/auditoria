import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faCheckCircle, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons';

import StepZilla from "react-stepzilla";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

import "./step.css";

const steps =
    [
      {name: 'Produto', component: <Step1 />},
      {name: 'Região', component: <Step2 />},
      {name: 'Investimento', component: <Step3 />},
      {name: 'Efetivar anúncio', component: <Step4 />}
    ]


class NovaLandingPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        
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
                                        <Link to="/">Produtos</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h2 className="title-section">Anúncio</h2>
                        </div>

                         <div className="container">


                         <div className='stepWrapper'>
                            <StepZilla 
                            steps={steps} 
                            showNavigation={true} 
                            backButtonText='Anterior'
                            nextButtonText='Próximo'
                            preventEnterSubmission={true}
                            nextButtonCls='btnStep'
                            backButtonCls='btnStep'
                            
                            />
                        </div>


                          
                        </div>

                    </div>

                    
                </div>
            </div>
        );
    }
}

export default NovaLandingPage;