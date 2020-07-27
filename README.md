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
      <InternetStatus background='green' />
    </div>
  );
}

export default App
```
![InternetStatus png](https://user-images.githubusercontent.com/43539944/88469081-ab774b80-cea1-11ea-8246-fa983f93ddde.png)

- Render InternetStatus component, wrapped in any component, e.g the App Component as shown above. Then pass in props as need be.

## Props

<ul>
<li> message: string - Message to user when internet is lost </li>
<li> background: string - Container background color </li>
<li> textColor: string - Text color for message string </li>
<li> width: string - Container width </li>
<li> height: string - Container height </li>
</ul>

## Author
- Martins Obayomi
