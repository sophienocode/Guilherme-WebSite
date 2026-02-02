


import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import SkillsIcon from '../Models/TechLogos/SkillsIcon'



const PreviewSkils = () => {
   

  return (
    <>
    <div id='skills' className='flex-center section-padding scroll-mt-24' >
        <div className="w-full h-full md:px-10 px-5" >
            <TitleHeader 
            title="Mine  Language Skills"
            img="../images/mathematical.png"
            sub="The Skills I Bring to the Table"

            />
        <div className='tech-grid'>
            {techStackIcons.map((icon) => (
                <div key={icon.name} className='card-border tech-card overflow-hidden group rounded-lg'  >
                   
                        <div className='tech-card-content' >
                            <div className='tech-icon-wrapper' >
                                <SkillsIcon 
                                model={icon}
                                
                                />
                            </div>

                            <div className='padding-x w-full'>
                            <p>{icon.name}</p>
                            <p className='text-xs' >{icon.subtitle}</p>
                            </div>
                            
                        </div>
                    </div>
               
            ))}
        
        </div>    

        </div>
        
    </div>
    </>
  )
}

export default PreviewSkils;
                        