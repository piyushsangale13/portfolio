import { ZoomIn, ZoomOut, FitScreen } from "@mui/icons-material";
import DownloadIcon from '@mui/icons-material/Download';
import React, { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const resumePDF = "/resume.pdf";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const containerRef = useRef(null);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  const fitToPage = () => setScale(1.0);
  return (
    <div className="flex flex-col items-center p-4 text-white">
      <h2 className="text-2xl font-semibold mb-4">My Resume</h2>

      <div className="mb-4 flex gap-2">
        <a
          href={resumePDF}
          download="piyush_resume.pdf"
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
        >
          <DownloadIcon /> Download
        </a>
        <button onClick={zoomOut} className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">
          <ZoomOut /> Zoom Out
        </button>
        <button onClick={zoomIn} className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded">
          <ZoomIn /> Zoom In
        </button>
        <button
          onClick={fitToPage}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
        >
          <FitScreen /> Fit to Page
        </button>
      </div>

      <div ref={containerRef} className="border border-gray-600 rounded-md bg-white">
        <Document
          file={resumePDF}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
