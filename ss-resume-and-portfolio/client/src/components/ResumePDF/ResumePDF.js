import pdf from '../../assets/resume/Resume.pdf';
import { useState } from'react';
import { FlexboxGrid, Container, IconButton, ButtonGroup, Whisper, Tooltip } from 'rsuite';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import PageNextIcon from '@rsuite/icons/PageNext';
import { pdfjs, Document, Page } from'react-pdf';


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
      <Container style={{ marginTop: '3rem'}}>
        <FlexboxGrid align="middle" justify="center">
          <FlexboxGrid.Item>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={750}
              />
            </Document>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid justify="center" style={{ marginBottom: '5rem'}}>
          <FlexboxGrid.Item>
            <ButtonGroup>
              <IconButton
                appearance="subtle"
                icon={<PagePreviousIcon />}
                onClick={toPrevPage}
                disabled={pageNumber === 1}
              />
             
             <Whisper
              followCursor
              placement="bottom"
              controlId="control-id-hover"
              trigger="hover"
              speaker={<Tooltip>Click here to download my resume!</Tooltip>}
             >
             <IconButton
                appearance='subtle'
                icon={<FileDownloadIcon />}
                href={pdf}
                download='SolomonSantos_Resume.pdf'
                target='_blank'
                rel='noreferrer'
              />
             </Whisper>
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