export default function formatTextDetail(text) {
    const htmlTagRegex = /<[^>]+>/g;
    const cleanText = text.replace(htmlTagRegex, '');
    return cleanText;
}