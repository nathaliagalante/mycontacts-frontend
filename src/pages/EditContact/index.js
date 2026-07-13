import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm"

export default function EditContact() {
  return (
    <>
      <PageHeader title='Editar contato' />

      <ContactForm buttonLabel='Salvar alterações' />
    </>
  )
}
