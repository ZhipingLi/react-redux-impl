import { PureComponent } from "react";
import Provider from "./Provider.js";

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    class ConnectCpn extends PureComponent {
      constructor(props, context) {
        super(props)
        this.state = mapStateToProps(context.getState())
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          // this.forceUpdate()
          this.setState(mapStateToProps(this.context.getState()))
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const stateObj = mapStateToProps(this.context.getState())
        const dispatchObj = mapDispatchToProps(this.context.dispatch)
        return <WrappedComponent {...this.props} {...stateObj} {...dispatchObj}/>
      }
    }

    ConnectCpn.contextType = Provider

    return ConnectCpn
  }
}

/**
 * Example（Home.jsx）:
 * 
 * const mapStateToProps = state => ({
 *   counter: state.counter
 * })
 * 
 * const mapDispatchToProps = dispatch => ({
 *   addNumber(num) {
 *     dispatch(addNumberAction(num))
 *   }
 * })
 * 
 * export default connect(mapStateToProps, mapDispatchToProps)(Home)
 */
