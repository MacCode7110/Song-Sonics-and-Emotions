import Heading from '../components/Heading'
import Content from '../components/Content'

const DataMethodologyPage = () => {
  return (
    <section className="section">
      <div className="container">
        <header className="block mb-3">
          <Heading size={1} className="is-family-primary has-text-black">
            Data Methodology
          </Heading>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            The <span className="is-italic">Music Preferences and Feelings Survey</span> was
            administered to a targeted 250 full-time employees in the United States through
            SurveyMonkey from May 28th, 2026 - June 5th, 2026. A total of 275 survey responses were
            collected and stored in <span className="is-italic">survey_data_master_raw.csv</span>. JavaScript, React, D3, Python, Pandas, yt-dlp, FFmpeg, Essentia Audio Analysis, <span className="is-italic">PCA (Principal Component Analysis)</span>, and <span className="is-italic">Russell's Core Affect Framework</span> are utilized to build <span className="is-italic">Exploratory PCA: Musical Qualities and Construction of Feelings</span>. The 275 survey responses stored in <span className="is-italic">survey_data_master_raw.csv</span> proceed through 8 unique cleaning and processing phases to build the output file <span className="is-italic">pca_matrix.json</span>. The corrected survey writing, PCA coordinates, and scaled sonic values stored in <span className="is-italic">pca_matrix.json</span> are presented through <span className="is-italic">Exploratory PCA: Musical Qualities and Construction of Feelings</span>.
          </Content>
        </header>
        <main className="block mb-3">
          <Content size={5} className="is-family-secondary has-text-black p-5">
            
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            
          </Content>
          <Content size={5} className="is-family-secondary has-text-black p-5">
            
          </Content>
        </main>
        <footer className="block mb-3">
          <Content size={5} className="is-family-secondary has-text-black p-5"></Content>
        </footer>
      </div>
    </section>
  )
}

export default DataMethodologyPage
