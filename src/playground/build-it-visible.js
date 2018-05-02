class VisiblityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handletoggleVisibility = this.handletoggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handletoggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1> 
                <button onClick={this.handletoggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'} 
                </button>
                {this.state.visibility && (
                    <div>
                      <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById("app"));




// const app = {
//     title: 'Visiblity Toggle',
//     buttonText: ['Show Details', 'Hide Details'],
//     bVisible: false
// }

// let currIdx = 0;

// const onClickVisible = () => {
//     console.log("onclick", app.bVisible);
//     if (app.bVisible) {
//         currIdx = 0;
//         app.bVisible = false;
//     }else{
//         currIdx = 1;
//         app.bVisible = true;
//     }    
//     renderApp();
// }

// const renderApp = () => {
//     const jsx = (  
//         <div>
//             <h1>{app.title}</h1>        
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <button onClick={onClickVisible}>{(app.buttonText[currIdx])}</button>
//             <p style={app.bVisible ? {display:'block'} : {display:'none'}}>These are the details you wanted.</p>
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById("app"));
// }
// renderApp();