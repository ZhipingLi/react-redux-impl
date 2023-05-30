# react-redux-impl
A simple implementation of react-redux

## Usage

### 1. npm install react-redux-impl

```js
import {
  connect,
  Provider,
} from 'react-redux-impl'
```

### 2. Pass the shared state in Redux to components as props

#### Example（Home.jsx）:
```js
class Home extends PureComponent {
  ...
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  addNumber(num) {
    dispatch(addNumberAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
```

### 3. Provide store for connect() by Context

#### Example（index.jsx）:
```js
import store from './xxx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider.Provider value={store}>
   <App />
 </Provider.Provider>
)
```
