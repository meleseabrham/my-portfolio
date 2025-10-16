import React, { useState } from 'react';
import { generatePDF } from '../utils/pdfGenerator';

const DownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      await generatePDF();
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="download-cv-btn"
    >
      {isLoading ? (
        <>
          Generating...
        </>
      ) : (
        "Download CV"
      )}
    </button>
  );
};

export default DownloadButton; 