// pages/api/pdf.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Layout from '../../app/components/layout'; // Import as Layout

// Define the Propose type according to the structure of your data
type Propose = {
  // your data structure here
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const propose: Propose = req.body; // Use the Propose type here

    // Render the Layout component to a static HTML string
    const html = ReactDOMServer.renderToString(<Layout propose={propose} />);

    await page.setContent(html);
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    const pdf = await page.pdf({ format: 'A4' });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while generating the PDF.' });
  }
}