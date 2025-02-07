// GeneratePDF.jsx
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function GeneratePDF({ personalDetails, jobExperience }) {
  // Download PDF Function
  const exportPDF = () => {
    const input = document.getElementById('resume_page');
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const pdfWidth = 175;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
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
        {/* Personal Details */}
        <p>{personalDetails.firstName || 'First Name'}</p>
        <p>{personalDetails.lastName || 'Last Name'}</p>
        <p>{personalDetails.email || 'Email'}</p>
        <p>{personalDetails.phoneNum || 'Phone Number'}</p>
        <p>{personalDetails.address || 'Address'}</p>
        <p>{personalDetails.occupation || 'Occupation'}</p>
        <p>{personalDetails.linkedin || 'LinkedIn'}</p>
        <p>{personalDetails.portfolio || 'Portfolio'}</p>
        <p>{personalDetails.about || 'About'}</p>

        {/* Job Experience Details */}
        <p>{jobExperience.job_title || 'Job Title'}</p>
        <p>{jobExperience.company_name || 'Company Name'}</p>
        <p>{jobExperience.start_date || 'Start Date'}</p>
        <p>{jobExperience.end_date || 'End Date'}</p>
        <p>{jobExperience.job_location || 'Job Location'}</p>
        <p>{jobExperience.job_duties || 'Job Duties'}</p>
      </div>
    </div>
  );
}
