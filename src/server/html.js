export default function html(options) {
  const {
    app = 'main',
    title = 'Codejobs',
    stylesheet = '/css/style.css',
    markup
  } = options;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <link rel="stylesheet" href="${stylesheet}" />
      </head>

      <body>
        <div id="root">${markup}</div>

        <script src="/app/${app}.bundle.js"
      </body>
    </html>
  `;
}
