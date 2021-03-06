import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationProvider';
function App() {
  const [id, setId] = useLocalStorage('id')
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider> 
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )
  return(
    id ?  dashboard : <Login onIdSubmit = {setId}/> 
  )
}

export default App;
