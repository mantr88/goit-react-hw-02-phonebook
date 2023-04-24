import { List } from "./ContactList.styled";

export const ContactList = ({contacts, onDelete}) => {
    return (
            <List>
            {contacts.map(contact => (
                    <li key={contact.id}>
                    <p>{contact.name}</p> :
                    <p>{contact.number}</p>
                    <button type="button" onClick={()=>onDelete(contact.id)}>Delete</button>
                    </li>
                ))}
            </List>
        )
};