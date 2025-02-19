// GeneratePDF.jsx
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function GeneratePDF({
  personalDetails,
  jobExperience,
  educationExperience,
}) {
  // Download PDF Function
  const exportPDF = () => {
    const input = document.getElementById('resume_page');

    html2canvas(input, {
      scale: 2, // Increase resolution
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <div className='resume_container'>
      <div className='pdf_navbar'>
        <img
          className='download_resume'
          src='src/assets/download_icon.png'
          alt='Download resume button'
          height='30'
          width='30'
          onClick={exportPDF}
        />
      </div>
      <div id='resume_page'>
        <div className='left-container'>
          <div className='picture-container'></div>
          <h2>Contact</h2>
          <div className='div_line'></div>
          <h3>Email</h3>
          <p>{personalDetails.email || 'JohnDoe@gmail.com'}</p>
          <h3>Phone Number</h3>
          <p>{personalDetails.phoneNum || '123-456-7890'}</p>
          <h3>Address</h3>
          <p>{personalDetails.address || 'Hollywood, California'}</p>
          <h3>LinkedIn</h3>
          <p>
            {personalDetails.linkedin || 'https://www.linkedin.com/in/johndoe'}
          </p>
          <h3>Portfolio</h3>
          <p>{personalDetails.portfolio || 'https://www.github.com/johndoe'}</p>
        </div>
        <div className='right-container'>
          <h1>
            {personalDetails.firstName || 'John'}{' '}
            {personalDetails.lastName || 'Doe'}
          </h1>
          <h2>{personalDetails.occupation || 'Software Developer'}</h2>
          <div className='div_line'></div>
          <p>
            {personalDetails.about ||
              'Passionate and detail-oriented Software Engineer with hands-on experience in developing scalable, efficient solutions. Proficient in Python, Java, C#, and modern web technologies. Eager to apply technical expertise and problem-solving skills in a dynamic, innovative team environment.'}
          </p>
          <br></br>
          <h2>Experience</h2>
          <div className='div_line'></div>
          {jobExperience && jobExperience.length > 0 ? (
            jobExperience.map((job, index) => (
              <div key={index}>
                <div className='education_div'>
                  <div className='holder'>
                    {' '}
                    <div className='left_education'>
                      <p>{job.job_title || 'Job Title'}</p>
                      <p>{job.company_name || 'Company Name'}</p>
                    </div>
                    <div className='right_education'>
                      <p>
                        {job.start_date || 'Start Date'} -{' '}
                        {job.end_date || 'End Date'}
                      </p>
                      <p>{job.job_location || 'Job Location'}</p>
                    </div>
                  </div>
                  <p>{job.job_duties || 'Job Duties'}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No job experience available.</p>
          )}
          <br></br>
          <h2>Education</h2>
          <div className='div_line'></div>
          {educationExperience && educationExperience.length > 0 ? (
            educationExperience.map((education, index) => (
              <div className='education_border_container ' key={index}>
                <div className='border-left'></div>
                <div className='education_div'>
                  <div className='holder'>
                    {' '}
                    <div className='left_education'>
                      {' '}
                      <p>{education.school_name || 'School Name'}</p>
                      <p>{education.degree || 'Degree'}</p>
                    </div>
                    <div className='right_education'>
                      {' '}
                      <p>
                        {education.start_date || 'Start Date'} -{' '}
                        {education.end_date || 'End Date'}
                      </p>
                      <p>{education.school_location || 'School Location'}</p>
                    </div>
                  </div>

                  <p>{education.school_description || 'School Description'}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No education experience available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
