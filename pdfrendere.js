import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundCollor: "#ebebeb",
  },
  title: {
    fonSize: "16pt",
  },
  section: {
    margin: 4,
    padding: 8,
    fontSize: "12pt",
  },
});

function pdfText() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Parodi Hujan</Text>
          <View style={styles.section}>
            <Text>Tak ada yang lebih basah</Text>
            <Text>dari hujan setelah November</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default class PdfRender extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <BlobProvider document={pdfText()}>
          {({ url }) => (
            <iframe src={url} style={{ width: "100%", height: "100%" }} />
          )}
        </BlobProvider>
      </div>
    );
  }
}
