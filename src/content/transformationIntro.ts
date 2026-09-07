export interface TransformationIntroContent {
  heading: string;
  body: string;
}

// Heading kept close to the production site's (a short section title, not prose). Body
// paraphrased — not copied verbatim — from PRODUCTION_SITE_ANALYSIS.md §3's retained
// content, per CLAUDE.md's rule against reproducing production-site copy directly.
export const transformationIntro: TransformationIntroContent = {
  heading: "Accelerate Your Business Transformation with Custom Software Solutions",
  body: "We deliver agile, scalable software built around your business. From the first idea through design, development, testing, and ongoing maintenance, we work alongside you at every stage of your digital transformation — with a strategy tailored to help you meet your goals.",
};
