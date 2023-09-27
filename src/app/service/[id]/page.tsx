
import data from '@/app/data.json';
import Service from '@/app/components/Service';
const Dynamic = ({params}:any) => {
  const {id} = params
  const UserData = data.filter((item) => item.id === id);
  return (
    <Service name={UserData[0].name} id={UserData[0].id} description={UserData[0].description}/>
  );
};
export default Dynamic;

export function generateStaticParams() {
  return[
    {id:'2023001'},
    {id:'2023002'},
    {id:'2023003'},
    {id:'2023004'},
    {id:'2023005'},
    {id:'2023006'},
    {id:'2023007'},
    {id:'2023008'}

  ]
}

export function generateMetadata({params}:any){
  const {id} = params
  const UserData = data.filter((item) => item.id === id);
  return{
    title:`Best ${UserData[0].name} in Chandigarh`,
    description:`Top 10 ${UserData[0].name} Company in India`
  }

}




