import DomainCard from './DomainCard'

const Domains = () => {
    return (
        <div className="flex flex-col gap-8 px-16">
            <h2 className="flex justify-center text-white text-5xl font-medium">DOMAINS</h2>
            <div className="flex flex-col md:flex-row gap-6 py-24 px-20 gap-y-20 justify-between items-center">
                <DomainCard image="./assets/images//technical.svg" Title="TECHNICAL" Desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptate omnis assumenda"/>
                <DomainCard image="./assets/images/creative.svg" Title="CREATIVE" Desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptate omnis assumenda"/>
                <DomainCard image="./assets/images/corporate.svg" Title="CORPORATE" Desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptate omnis assumenda"/>
            </div>
        </div>
    );
}

export default Domains;