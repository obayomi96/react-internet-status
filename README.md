# react-internet-status
- A small React omponent that indicates lost internet connectivity

### Installation
`npm install react-internet-status`

### Usage
`import { InternetStatus } from 'react-internet-status'`

```
function App(){
  return (
    <div>
      <InternetStatus />
    </div>
  );
}

export default App
```
- Render InternetStatus component, wrapped in any component, e.g the App Component as shown above. Then pass in props as need be.

## Props

### PropTypes
<ul>
<li> message: PropTypes.string </li>
<li> bgColor: PropTypes.string </li>
<li> txColor: PropTypes.string </li>
<li> wd: PropTypes.string </li>
<li> ht: PropTypes.string </li>
</ul>

## Author
- Martins Obayomi
