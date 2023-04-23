import { List } from "./ContactList.styled";

export const ContactList = ({contacts}) => {
    return (
            <List>
            {contacts.map(contact => (
                    <li key={contact.id}>
                        <p>{contact.name}</p>    
                    </li>
                ))}
            </List>
        )
};