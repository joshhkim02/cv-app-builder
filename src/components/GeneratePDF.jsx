import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function GeneratePDF({ personalDetails }) {
  // Download PDF Function
  const exportPDF = () => {
    // Select the element we want to screenshot
    const input = document.getElementById('resume_page');
    // Render the element using html2canvas
    html2canvas(input, {
      // Optional arguments
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
        ></img>
      </div>
      <div id='resume_page'>
        <p>{personalDetails.firstName || 'First Name'}</p>
        <p>{personalDetails.lastName || 'Last Name'}</p>
        <p>{personalDetails.email || 'Email'}</p>
        <p>{personalDetails.phoneNum || 'Phone Number'}</p>
        <p>{personalDetails.address || 'Address'}</p>
        <p>{personalDetails.occupation || 'Occupation'}</p>
        <p>{personalDetails.linkedin || 'LinkedIn'}</p>
        <p>{personalDetails.portfolio || 'Portfolio'}</p>
        <p>{personalDetails.about || 'About'}</p>
      </div>
    </div>
  );
}
