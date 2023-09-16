import pdf from '../../assets/resume/Resume.pdf';
import { useState } from'react';
import { FlexboxGrid, Container, Grid, Row, Col, Button, IconButton, ButtonGroup, Divider } from 'rsuite';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import PageNextIcon from '@rsuite/icons/PageNext';


import { pdfjs, Document, Page } from'react-pdf';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


function ResumePDF() {

   const [numPages, setNumPages] = useState(null);
   const [pageNumber, setPageNumber] = useState(1);

const onDocumentLoadSuccess = ({ numPages }) => {
  setNumPages(numPages);
};

const toNextPage = () => {
   if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
   }
};

const toPrevPage = () => {
   if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
   }
};
    return (
      <Container>
        <FlexboxGrid align="middle" justify="center">
          <FlexboxGrid.Item>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item>
            <ButtonGroup>
              <IconButton
                appearance="subtle"
                icon={<PagePreviousIcon />}
                onClick={toPrevPage}
                disabled={pageNumber === 1}
              />
              <IconButton
                appearance="subtle"
                icon={<PageNextIcon />}
                onClick={toNextPage}
                disabled={pageNumber === numPages}
              />
            </ButtonGroup>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Container>
    );
}

export default ResumePDF;