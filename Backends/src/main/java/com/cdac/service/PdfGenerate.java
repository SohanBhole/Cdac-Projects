package com.cdac.service;

import java.io.FileNotFoundException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.util.ByteArrayDataSource;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

import com.cdac.entity.Booking;
import com.itextpdf.io.source.ByteArrayOutputStream;
import com.itextpdf.kernel.color.Color;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.border.Border;
import com.itextpdf.layout.border.DashedBorder;
import com.itextpdf.layout.border.SolidBorder;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.property.TextAlignment;


public class PdfGenerate {

	private Booking bookorder;

	public PdfGenerate(Booking book) {
		this.bookorder = book;
	}
	

	public void export(HttpServletResponse response) throws FileNotFoundException {

		String path = "C:\\Users\\sohan\\Desktop\\Invoice" + bookorder.getBookingId()
		    + "-invoice.pdf";
	
		PdfWriter pdfWriter = new PdfWriter(path);
		PdfDocument pdfDocument = new PdfDocument(pdfWriter);
		pdfDocument.setDefaultPageSize(PageSize.A4);
		Document document = new Document(pdfDocument);

		float threecol = 190f;
		float twocol = 285f;
		float twocol150 = twocol + 150f;
		float twocolumnWidth[] = { twocol150, twocol };
		float threeColumnWidth[] = { threecol, threecol, threecol };
		float fullwidth[] = { threecol * 3 };
		Paragraph onesp = new Paragraph("\n");

		Table table = new Table(twocolumnWidth);
		table.addCell(new Cell().add("Invoice").setFontSize(20f).setBorder(Border.NO_BORDER).setBold());
		Table nestedTable = new Table(new float[] { twocol / 2, twocol / 2 });
		nestedTable.addCell(getHeaderTextCell("Invoice No:- "));
		nestedTable
				.addCell(getHeaderTextCellValue(String.valueOf(bookorder.getBookingId())).setBorder(Border.NO_BORDER));

		nestedTable.addCell(getHeaderTextCell("Invoice Date:- "));
		nestedTable.addCell(new Cell().add(java.time.LocalDate.now().toString()).setBorder(Border.NO_BORDER));

		table.addCell(new Cell().add(nestedTable).setBorder(Border.NO_BORDER).setBold());
		Border gb = new SolidBorder(Color.GRAY, 2f);
		Table divider = new Table(fullwidth);
		divider.setBorder(gb);
		document.add(table);
		document.add(onesp);
		document.add(divider);
		document.add(onesp);

		Table twoColTable = new Table(twocolumnWidth);
		twoColTable.addCell(getBillingShippingCell("Billing Information"));
		twoColTable.addCell(getBillingShippingCell("Shipping Information"));
		document.add(twoColTable.setMarginBottom(12f));

		Table twoColTable2 = new Table(twocolumnWidth);

		twoColTable2.addCell(getCell10fLeft("Name", true));
		twoColTable2.addCell(getCell10fLeft("Company Name", true));

		twoColTable2.addCell(getCell10fLeft(bookorder.getCustomer().getName(), false));
		twoColTable2.addCell(getCell10fLeft("Dronbiz", false));
		document.add(twoColTable2);

		Table twoColTable3 = new Table(twocolumnWidth);
		twoColTable3.addCell(getCell10fLeft("Address", true));
		twoColTable3.addCell(getCell10fLeft("Address", true));
		twoColTable3.addCell(getCell10fLeft(bookorder.getAddress(), false));
		twoColTable3.addCell(getCell10fLeft("Centre of Development in Advanced Computing, Cdac Mumbai", false));
		document.add(twoColTable3);

		float oneColoumnwidth[] = { twocol150 };
		Table oneColTable1 = new Table(oneColoumnwidth);
		oneColTable1.addCell(getCell10fLeft("Email", true));
		oneColTable1.addCell(getCell10fLeft(bookorder.getCustomer().getEmail(), false));
		oneColTable1.addCell(getCell10fLeft("ModeofPayment", true));
		oneColTable1.addCell(getCell10fLeft("cash", false));
		document.add(oneColTable1.setMarginBottom(10f));

		Table tableDivider2 = new Table(fullwidth);
		Border dbg = new DashedBorder(Color.GRAY, 0.5f);
		document.add(tableDivider2.setBorder(dbg));

		Paragraph productPara = new Paragraph("Drones");

		document.add(productPara.setBold());
		Table threeColTable1 = new Table(threeColumnWidth);
		threeColTable1.setBackgroundColor(Color.BLACK, 0.7f);

		threeColTable1
				.addCell(new Cell().add("Description").setBold().setFontColor(Color.WHITE).setBorder(Border.NO_BORDER));
		threeColTable1.addCell(new Cell().add("Quantity").setBold().setFontColor(Color.WHITE)
				.setTextAlignment(TextAlignment.CENTER).setBorder(Border.NO_BORDER));
		threeColTable1.addCell(new Cell().add("Price").setBold().setFontColor(Color.WHITE)
				.setTextAlignment(TextAlignment.RIGHT).setBorder(Border.NO_BORDER).setMarginRight(15f));
		document.add(threeColTable1);

		Table threeColTable2 = new Table(threeColumnWidth);

		threeColTable2.addCell(new Cell().add(bookorder.getDrone().getModelName()).setBorder(Border.NO_BORDER))
				.setMarginLeft((10f));
		threeColTable2.addCell(
				new Cell().add(String.valueOf(1)).setTextAlignment(TextAlignment.CENTER).setBorder(Border.NO_BORDER));
		threeColTable2.addCell(new Cell().add(String.valueOf(bookorder.getAmount()))
				.setTextAlignment(TextAlignment.RIGHT).setBorder(Border.NO_BORDER).setMarginRight(15f));

		document.add(threeColTable2.setMarginBottom(20f));

		float onetwo[] = { threecol + 125f, threecol * 2 };

		Table threeColTable4 = new Table(onetwo);
		threeColTable4.addCell(new Cell().add("").setBorder(Border.NO_BORDER));
		threeColTable4.addCell(tableDivider2).setBorder(Border.NO_BORDER);
		document.add(threeColTable4);

		Table threeTable3 = new Table(threeColumnWidth);
		threeTable3.addCell(new Cell().add("").setBorder(Border.NO_BORDER)).setMarginLeft(10f);
		threeTable3.addCell(new Cell().add("Total").setTextAlignment(TextAlignment.CENTER).setBorder(Border.NO_BORDER));
		threeTable3.addCell(new Cell().add(String.valueOf(bookorder.getAmount())).setTextAlignment(TextAlignment.RIGHT)
				.setBorder(Border.NO_BORDER).setMarginRight(15F));

		document.add(threeTable3);
		document.add(tableDivider2);
		document.add(new Paragraph("\n"));
		document.add(divider.setBorder(new SolidBorder(Color.GRAY, 1f)).setMarginBottom(15f));

		Table tb = new Table(fullwidth);
		tb.addCell(new Cell().add("TERMS AND CONDITIONS\n").setBold().setBorder(Border.NO_BORDER));
		ArrayList<String> TncList = new ArrayList<>();
		TncList.add(
				"1. The Seller shall not be liable to the Buyer directly or indirectly for any losses or damage suffered during shipping");

		TncList.add("2. The Seller warrants the product for one year from the date of shipment");

		for (String tnc : TncList) {
			tb.addCell(new Cell().add(tnc).setBorder(Border.NO_BORDER));
		}

		document.add(tb);

		document.close();
	}

	static Cell getHeaderTextCell(String textValue) {
		return new Cell().add(textValue).setBold().setBorder(Border.NO_BORDER).setTextAlignment(TextAlignment.RIGHT);
	}

	static Cell getHeaderTextCellValue(String textValue) {
		return new Cell().add(textValue).setBold().setBorder(Border.NO_BORDER).setTextAlignment(TextAlignment.LEFT);
	}

	static Cell getBillingShippingCell(String textValue) {
		return new Cell().add(textValue).setFontSize(12f).setBold().setBorder(Border.NO_BORDER)
				.setTextAlignment(TextAlignment.LEFT);
	}

	static Cell getCell10fLeft(String textValue, Boolean isBold) {
		Cell myCell = new Cell().add(textValue).setFontSize(10f).setBorder(Border.NO_BORDER)
				.setTextAlignment(TextAlignment.LEFT);
		return isBold ? myCell.setBold() : myCell;
	}

}
