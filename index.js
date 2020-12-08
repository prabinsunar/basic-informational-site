const http = require('http');
const url = require('url');
const fs = require('fs');

http
	.createServer((req, res) => {
		const q = url.parse(req.url, true);
		let filename = '';
		if (q.pathname === '/') {
			filename = './index.html';
			fs.readFile(filename, (err, data) => {
				if (err) {
					res.writeHead(404, { 'Content-type': 'text/html' });
					return res.end('Pages not found');
				}

				res.writeHead(200, { 'Content-type': 'text/html' });
				res.write(data);
				return res.end();
			});
		} else if (q.pathname === '/about') {
			filename = './about.html';
			fs.readFile(filename, (err, data) => {
				if (err) {
					res.writeHead(404, { 'Content-type': 'text/html' });
					return res.end('Pages not found');
				}

				res.writeHead(200, { 'Content-type': 'text/html' });
				res.write(data);
				return res.end();
			});
		} else if (q.pathname === '/contact-me') {
			filename = './contact-me.html';
			fs.readFile(filename, (err, data) => {
				if (err) {
					res.writeHead(404, { 'Content-type': 'text/html' });
					return res.end('Pages not found');
				}

				res.writeHead(200, { 'Content-type': 'text/html' });
				res.write(data);
				return res.end();
			});
		} else {
			filename = './404.html';
			fs.readFile(filename, (err, data) => {
				if (err) {
					res.writeHead(404, { 'Content-type': 'text/html' });
					return res.end('Pages not found');
				}

				res.writeHead(200, { 'Content-type': 'text/html' });
				res.write(data);
				return res.end();
			});
		}
	})
	.listen(8080);
