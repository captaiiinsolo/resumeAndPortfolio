import pdf from '../../assets/resume/Resume.pdf';
import { Grid, Row, Col } from 'rsuite';


import { pdfjs, Document, Page } from'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


function ResumePDF() {
    return (
     <Grid fluid>
        <Row>
        <Document file={pdf}>
           <Col>
           <Page 
            pageNumber={1} 
            renderAnnotationLayer={false}
            renderTextLayer={false}
            />
           </Col>
           <Col>
           <Page 
            pageNumber={2} 
            renderAnnotationLayer={false}
            renderTextLayer={false}
            />
           </Col>
        </Document>
        </Row>
     </Grid>
    );
}

export default ResumePDF;