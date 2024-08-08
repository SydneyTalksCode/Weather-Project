import { useParams } from 'react-router-dom'

const Contacts = () => {
    const { id } = useParams();
    return (
    <div>{id} from list of Contacts</div>
  )
}

export default Contacts