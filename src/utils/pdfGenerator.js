// src/utils/pdfGenerator.js
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async () => {
  try {
    const element = document.getElementById('resume');
    if (!element) {
      console.error('Resume element not found');
      return;
    }

    // Store original styles
    const originalStyles = {
      position: element.style.position,
      visibility: element.style.visibility,
      height: element.style.height,
      width: element.style.width,
      left: element.style.left,
      top: element.style.top,
      padding: element.style.padding,
      backgroundColor: element.style.backgroundColor,
    };

    // A4 dimensions in mm (standard)
    const A4_WIDTH_MM = 210;
    
    // Calculate pixel equivalents at 96 DPI
    const A4_WIDTH_PX = Math.floor((A4_WIDTH_MM * 96) / 25.4);

    // Prepare the element for capture
    element.style.position = 'absolute';
    element.style.visibility = 'visible';
    element.style.width = `${A4_WIDTH_PX}px`;
    element.style.height = 'auto'; // Let content determine height
    element.style.left = '-10000px';
    element.style.top = '0';
    element.style.padding = '20px';
    element.style.backgroundColor = '#ffffff';
    element.style.boxSizing = 'border-box';

    // Wait for layout to stabilize
    await new Promise(resolve => setTimeout(resolve, 500));
    await document.fonts.ready;

    // Capture with high quality
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      allowTaint: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: A4_WIDTH_PX,
      windowHeight: element.scrollHeight,
    });

    // Calculate image dimensions to fit exactly one A4 page
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    let pdfWidth = pageWidth;
    let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    if (pdfHeight > pageHeight) {
      pdfHeight = pageHeight;
      pdfWidth = (imgProps.width * pdfHeight) / imgProps.height;
    }

    // Center the image if it's smaller than the page
    const x = (pageWidth - pdfWidth) / 2;
    const y = (pageHeight - pdfHeight) / 2;

    pdf.addImage(imgData, 'PNG', x, y, pdfWidth, pdfHeight);

    // Restore original styles
    Object.assign(element.style, originalStyles);

    // Save the PDF
    pdf.save('Melese_Abrham_Resume.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};