import { useGetFidelityQuery} from '../datas/FidelityApi';


const Fidelity = () => {

  const { data, isLoading, error } = useGetFidelityQuery()

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  console.log(data);

  return (
    <section className="fidelity">
      <h2>Fidélité</h2>

      { <div className="FidelityPoints">{data.title}</div> }

    </section>
  )
}
export default Fidelity