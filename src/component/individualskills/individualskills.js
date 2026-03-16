import '../individualskills/individualskills.css';

export default function individualskills() {
  return (
    <>
        <section className="MYSkillsSection">
                <div className="WrapperContainer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 headingSection text-center">
                                <h2>Areas of Expertise</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="individualSkill">
                                    <label>#Front-End Development</label>
                                    <div className="skillsBar"></div>
                                    <h4>95%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#Responsive Web Development</label>
                                    <div className="skillsBar"></div>
                                    <h4>90%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#HTML / CSS / Bootstrap </label>
                                    <div className="skillsBar"></div>
                                    <h4>95%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#JavaScript & jQuery</label>
                                    <div className="skillsBar"></div>
                                    <h4>85%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#SEO Optimization</label>
                                    <div className="skillsBar"></div>
                                    <h4>80%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#Performance Optimization</label>
                                    <div className="skillsBar"></div>
                                    <h4>80%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#Google Analytics Setup</label>
                                    <div className="skillsBar"></div>
                                    <h4>75%</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
    </>
  )
}
