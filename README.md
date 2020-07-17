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
![InternetStatus png](https://user-images.githubusercontent.com/43539944/87772276-5a4ac600-c7d6-11ea-91d9-c93838b417d8.png)

- Render InternetStatus component, wrapped in any component, e.g the App Component. Then pass it's props as needed.

## Props

### PropTypes
<ul>
<li> message: PropTypes.string </li>
<li> bgColor: PropTypes.string </li>
<li> txColor: PropTypes.string </li>
<li> wd: PropTypes.string </li>
<li> ht: PropTypes.string </li>
</ul>

### DefaultProps
<ul>
<li> message: 'Your device is not connected to the internet!' </li>
<li> bgColor: 'red' </li>
<li> txColor: 'white' </li>
<li> wd: '100%' </li>
<li> ht: '50px' </li>
</ul>

## Author
- Martins Obayomi
