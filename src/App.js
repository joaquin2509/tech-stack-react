import React, { useEffect } from 'react';
import * as d3Base from "d3";
import { legendColor, legendSize } from 'd3-svg-legend';
import './App.css';

import d3Image from './assets/images/d3.svg'; 
import raphaelImage from './assets/images/raphael.svg';
import relayImage from './assets/images/relay.svg';
import threejsImage from './assets/images/threejs.png';
import lodashImage from './assets/images/lodash.svg';
import momentjsImage from './assets/images/momentjs.png';
import reduxImage from './assets/images/redux.svg';
import angular2Image from './assets/images/angular2.svg';
import bootstrapImage from './assets/images/bootstrap.svg';
import emberImage from './assets/images/ember.png';
import expressjsImage from './assets/images/expressjs.png';
import hexoImage from './assets/images/hexo.png';
import reactImage from './assets/images/react.png';
import atomImage from './assets/images/atom.png';
import chromeDevtoolsImage from './assets/images/chrome-devtools.svg';
import jenkinsImage from './assets/images/jenkins.png';
import sublimetextImage from './assets/images/sublimetext.png';
import vscodeImage from './assets/images/vscode.png';
import yeomanImage from './assets/images/yeoman.png';
import postcssImage from './assets/images/postcss.svg';
import keystonejsImage from './assets/images/keystonejs.png';
import koajsImage from './assets/images/koajs.png';
import loopbackImage from './assets/images/loopback.svg';
import restifyImage from './assets/images/restify.png';
import mongodbImage from './assets/images/mongodb.png';
import nodejsImage from './assets/images/nodejs.svg';
import dockerImage from './assets/images/docker.svg';
import meteorImage from './assets/images/meteor.svg';
import phonegapImage from './assets/images/phonegap.png';
import reactioncommerceImage from './assets/images/reactioncommerce.png';
import reactnativeImage from './assets/images/reactnative.png';
import squarespaceImage from './assets/images/squarespace.svg';
import html5Css3Image from './assets/images/html5-css3.png';
import javascriptImage from './assets/images/javascript.png';
import cssnextImage from './assets/images/cssnext.png';
import graphqlImage from './assets/images/graphql.svg';
import lessImage from './assets/images/less.svg';
import sassImage from './assets/images/sass.png';
import typescriptImage from './assets/images/typescript.png';
import naustudioImage from './assets/images/naustudio.svg';
import babelImage from './assets/images/babel.png';
import eslintImage from './assets/images/eslint.svg';
import gitflowImage from './assets/images/gitflow.png';
import gulpImage from './assets/images/gulp.png';
import stylelintImage from './assets/images/stylelint.svg';
import webpackImage from './assets/images/webpack.svg';
import angular1Image from './assets/images/angular1.png';
import backboneImage from './assets/images/backbone.png';
import gruntImage from './assets/images/grunt.svg';
import jqueryImage from './assets/images/jquery.png';
import requirejsImage from './assets/images/requirejs.svg';

const data = [{
  cat: 'library', name: 'D3', value: 30,
  image: true,
  icon: d3Image,
  desc: `
    D3.js (or just D3 for Data-Driven Documents) is a JavaScript library for
    producing dynamic, interactive data visualizations in web browsers.
    It makes use of the widely implemented SVG, HTML5, and CSS standards.<br>
    This infographic you are viewing is made with D3.
  `
}, {
  cat: 'library', name: 'Raphaël', value: 10,
  image: true,
  icon: raphaelImage,
  desc: `
    Raphaël is a cross-browser JavaScript library that draws Vector graphics for web sites.
    It will use SVG for most browsers, but will use VML for older versions of Internet Explorer.
  `
}, {
  cat: 'library', name: 'Relay', value: 70,
  image: true,
  icon: relayImage,
  desc: `
    A JavaScript framework for building data-driven React applications.
    It uses GraphQL as the query language to exchange data between app and server efficiently.
    Queries live next to the views that rely on them, so you can easily reason
    about your app. Relay aggregates queries into efficient network requests to fetch only what you need.
  `
}, {
  cat: 'library', name: 'Three.js', value: 40,
  image: true,
  icon: threejsImage,
  desc: `
    Three.js allows the creation of GPU-accelerated 3D animations using
    the JavaScript language as part of a website without relying on
    proprietary browser plugins. This is possible thanks to the advent of WebGL.
  `
}, {
  cat: 'library sub', name: 'Lodash', value: 30,
  image: true,
  icon: lodashImage,
  desc: `
    Lodash is a JavaScript library which provides <strong>utility functions</strong> for
    common programming tasks using the functional programming paradigm.`
}, {
  cat: 'library sub', name: 'Moment JS', value: 30,
  image: true,
  icon: momentjsImage,
  desc: `
    Handy and resourceful JavaScript library to parse, validate, manipulate, and display dates and times.
  `
}, {
  cat: 'library sub', name: 'Numeral.js', value: 20,
  image: false,
  icon: 'Numeral.js',
  desc: `
    A javascript library for formatting and manipulating numbers.
  `
}, {
  cat: 'library sub', name: 'Redux', value: 80,
  image: true,
  icon: reduxImage,
  desc: `
    Redux is an open-source JavaScript library designed for managing
    application state. It is primarily used together with React for building user interfaces.
    Redux is inspired by Facebook’s Flux and influenced by functional programming language Elm.
  `
}, {
  cat: 'framework', name: 'Angular 2.0', value: 30,
  image: true,
  icon: angular2Image,
  desc: `
    Angular (commonly referred to as 'Angular 2+' or 'Angular 2') is a TypeScript-based
    open-source front-end web application platform led by the Angular Team at Google and
    by a community of individuals and corporations to address all of the parts of the
    developer's workflow while building complex web applications.
  `
}, /*{
  cat: 'framework', name: 'Trails.JS', value: 10,
  icon: '',
},*/ {
  cat: 'framework', name: 'Bootstrap CSS', value: 50,
  image: true,
  icon: bootstrapImage,
  desc: `
    Bootstrap is a free and open-source front-end web framework for designing websites
    and web applications. It contains HTML-and CSS-based design templates for typography,
    forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
  `
}, {
  cat: 'framework', name: 'Ember JS', value: 10,
  image: true,
  icon: emberImage,
  desc: `
    Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel
    (MVVM) pattern. It allows developers to create scalable single-page web applications by
    incorporating common idioms and best practices into the framework.
  `
}, {
  cat: 'framework', name: 'ExpressJS', value: 30,
  image: true,
  icon: expressjsImage,
  desc: `
    Express.js, or simply Express, is a JavaScript framework designed for building web applications and APIs.
    It is the de facto server framework for Node.js.
  `
}, /*{
  cat: 'framework', name: 'Foundation', value: 10,
  icon: '',
},*/{
  cat: 'framework', name: 'Hexo', value: 50,
  image: true,
  icon: hexoImage,
  desc: `
    A fast, simple & powerful blog-aware <strong>static website</strong> generator, powered by Node.js.
  `
}, {
  cat: 'framework', name: 'ReactJS', value: 100,
  image: true,
  icon: reactImage,
  desc: `
    React (sometimes written React.js or ReactJS) is an open-source JavaScript framework maintained by Facebook for building user interfaces.
    React processes only user interface in applications and can be used in combination with other JavaScript libraries
    or frameworks such as Redux, Flux, Backbone...
  `
}, /*{
  cat: 'framework', name: 'SenchaTouch', value: 10,
  icon: '',
},*/ {
  cat: 'tooling', name: 'Atom', value: 10,
  image: true,
  icon: atomImage,
  desc: `
    Atom is a free and open-source text and source code editor for macOS, Linux, and Windows with support
    for plug-ins written in Node.js, and embedded Git Control, developed by GitHub.
    Atom is a desktop application built using web technologies.
  `
}, {
  cat: 'tooling', name: 'Google Chrome & Devtool', value: 70,
  image: true,
  icon: chromeDevtoolsImage,
  desc: `
    <strong>Web development tools (devtool)</strong> allow web developers to test and debug their code.
    At Nau, we use the one come with Google Chrome to debug our apps. It is one the the most powerful
    and sophisticated devtool available.
  `
}, {
  cat: 'tooling', name: 'Jenkins CI', value: 30,
  image: true,
  icon: jenkinsImage,
  desc: `
    Jenkins is an open source automation server. Jenkins helps to automate the non-human part of
    the whole software development process, with now common things like continuous integration,
    but by further empowering teams to implement the technical part of a Continuous Delivery.
  `
}, {
  cat: 'tooling', name: 'Sublime Text 3', value: 100,
  image: true,
  icon: sublimetextImage,
  desc: `
    Sublime Text 3 is a powerful and cross-platform source code editor. It is well-known for
    introducing the concept of multi-cursor and lots of text editing command. Besides, its
    plugin ecosystem is very rich which allows enhancing productivity to the fullest.
  `
}, {
  cat: 'tooling', name: 'Visual Studio Code', value: 200,
  image: true,
  icon: vscodeImage,
  desc: `
    Visual Studio Code is a cross-platform source code editor developed by Microsoft.
    It includes support for debugging, embedded Git control, syntax highlighting,
    intelligent code completion, snippets, and code refactoring. Its extensions eco system is
    growing quickly and it is becoming the best Front End editors out there.
  `
}, {
  cat: 'tooling', name: 'Performance Tooling', value: 30,
  image: false,
  icon: 'Performance;Tooling',
  desc: `
    At Nau, web performance is our top priority when development web sites and applications.
    We're practicing code optimization and Front End delivery optimization from day 1.
    To measure the resuslts, we use several tools to audit and benchmark our applications,
    including (but not limit to): Chrome devtool timeline & audit, Google PageSpeed Insights, Web Page Test, Website Grader...
  `
}, {
  cat: 'tooling', name: 'Yeoman generator for Nau Workflow', value: 20,
  image: true,
  icon: yeomanImage,
  desc: `
    Yeoman is an open source, command-line interface set of tools mainly used to generate
    structure and scaffolding for new projects, especially in JavaScript and Node.js.
    At Nau, we have developed a Yeoman generator that help quickly set up new projects aligned with
    Nau's conventions and standards.
  `
}, {
  cat: 'tooling', name: 'live-server', value: 30,
  image: false,
  icon: 'live-server',
  desc: `
    A Node.js-based developer web server for quickly test apps and web pages with some
    magic of 'auto-reload' on the browser.
  `
}, {
  cat: 'tooling', name: 'PostCSS', value: 30,
  image: true,
  icon: postcssImage,
  desc: `
    PostCSS is a software development tool that uses JavaScript-based plugins to automate routine CSS operations.<br>
    We use PostCSS mainly for auto-vendor-prefixing, but very soon we'll use it for NextCSS compilation.
  `
}, {
  cat: 'backend', name: 'Elastic Search', value: 10,
  image: false,
  icon: 'Elastic;Search',
  desc: `
    A specialized database software for high performance search queries.
  `
}, {
  cat: 'backend', name: 'Keystone CMS', value: 50,
  image: true,
  icon: keystonejsImage,
  desc: `
    The de-facto CMS system for website built with Node.js. It can be compared with
    Wordpress of PHP language.
  `
}, {
  cat: 'backend', name: 'KoaJS', value: 10,
  image: true,
  icon: koajsImage,
  desc: `
    The advanced and improved version of ExpressJS, with leaner middlewares architecture
    thanks to the avent of ES6 generators.
  `
}, {
  cat: 'backend', name: 'Loopback', value: 30,
  image: true,
  icon: loopbackImage,
  desc: `
    Powerful API-focused web framework built for Node.js. It feature easy to use configurations
    and auto API documentation page.
  `
}, {
  cat: 'backend', name: 'Restify', value: 20,
  image: true,
  icon: restifyImage,
  desc: `
    High performance API development framework, built for Node.js. It has some convenient wrapper
    to automatically generate admin backoffice site and API documentation page.
  `
}, {
  cat: 'backend', name: 'MongoDB', value: 70,
  image: true,
  icon: mongodbImage,
  desc: `
    The de-facto Database solution for JavaScript and Node.js applications. It is a light weight,
    high performance NoSQL database and can be used for small and large websites.
  `
}, {
  cat: 'backend', name: 'NodeJS', value: 100,
  image: true,
  icon: nodejsImage,
  desc: `
    Node.js is a cross-platform JavaScript runtime environment.
    Node.js allows creation of high performance and high concurrency websites with smaller footprint compared to
    other server-side solution. Node.js ecosystem is growing very fast and is trusted by a lot of big companies who
    are adopting it to enhance current products as well as for new ones.
  `
}, {
  cat: 'platform', name: 'Docker Platform', value: 10,
  image: true,
  icon: dockerImage,
  desc: `
    Docker is an open-source project that automates the deployment of applications inside software containers.
    At Nau, we're still learning this technology to later facilitate easy web app deployments.
  `
}, {
  cat: 'platform', name: 'MeteorJS', value: 80,
  image: true,
  icon: meteorImage,
  desc: `
    MeteorJS is a free and open-source JavaScript web framework written using Node.js.
    Meteor allows for rapid prototyping and produces cross-platform (Android, iOS, Web) code.
    It integrates with MongoDB and uses the Distributed Data Protocol and a publish–subscribe
    pattern to automatically propagate data changes to clients without requiring the developer
    to write any synchronization code.
  `
}, {
  cat: 'platform', name: 'Phonegap', value: 50,
  image: true,
  icon: phonegapImage,
  desc: `
    A platform, library and tool for building hybrid mobile app.
  `
}, {
  cat: 'platform', name: 'Reaction Commerce', value: 20,
  image: true,
  icon: reactioncommerceImage,
  desc: `
    Reaction Commerce is the first open source, real-time platform to
    combine the flexibility developers and designers want with the stability
    and support businesses need. ReactionCommerce is based on MeteorJS platform.
  `
}, {
  cat: 'platform', name: 'ReactNative', value: 10,
  image: true,
  icon: reactnativeImage,
  desc: `
    React Native lets you build mobile apps using only JavaScript.
    It uses the same design as React, letting us compose a rich
    mobile UI from declarative components.
  `
}, {
  cat: 'platform', name: 'SquareSpace', value: 30,
  image: true,
  icon: squarespaceImage,
  desc: `
    Squarespace is a SaaS-based content management system-integrated ecommerce-aware website builder and blogging platform.
    At Nau, we have built a website for Squarespace using their low-level API which allowed fully customization
    of the interface and other Front End functionalities.
  `
}, {
  cat: 'language', name: 'HTML5 & CSS3', value: 100,
  image: true,
  icon: html5Css3Image,
  desc: `
    The languages of the Web Front End. At Nau, they are in our blood and with them we can build
    world-class websites with any kind of visual effects or designs requested.
  `
}, {
  cat: 'language', name: 'JavaScript', value: 100,
  image: true,
  icon: javascriptImage,
  desc: `
    JavaScript is the heart of modern Web front end development and essential element of any Single Page
    Applications. In Nau, we invest a good deal in training developers to have good control of this universal language
    and now caplable of developing full stack websites with only JavaScript.
  `
}, {
  cat: 'language', name: 'CSS Next', value: 10,
  image: true,
  icon: cssnextImage,
  desc: `
    The CSS language specs of the future but with the help of PostCSS (like Babel for ES6),
    we can use CSS Next today.
  `
}, {
  cat: 'language', name: 'GraphQL', value: 50,
  image: true,
  icon: graphqlImage,
  desc: `
    GraphQL is a data query language developed by Facebook publicly released in 2015.
    It provides an alternative to REST and ad-hoc webservice architectures. In combination
    with RelayJS, this combo help us reduce the time to develop web apps for weeks.
  `
}, {
  cat: 'language', name: 'LESS CSS', value: 20,
  image: true,
  icon: lessImage,
  desc: `
    A preprocessor language to be compiled to CSS. This language is not as popular nowadays and we
    only use them when requested.
  `
}, {
  cat: 'language', name: 'SASS (SCSS flavor)', value: 70,
  image: true,
  icon: sassImage,
  desc: `
    This is our main CSS preprocessor language helping us lay structured foundation to CSS as well
    as assisting on writing more convenient BEM anotations.
  `
}, {
  cat: 'language', name: 'TypeScript 2', value: 30,
  image: true,
  icon: typescriptImage,
  desc: `
    The strict-typing flavor of ECMAScript, always requires a compiler to compile to vanilla JavaScript
    but the type checking and other syntactical sugar are exceptional. Right now, we only use it for
    Angular 2 projects when needed.
  `
}, {
  cat: 'workflow', name: 'code.naustud.io', value: 100,
  image: true,
  icon: naustudioImage,
  desc: `
    A set of guidelines, presets, configs and stadard documentation for Nau developers.
    Please visit the document site at: <a href='http://code.naustud.io' target='_blank'>code.naustud.io</a>
  `
}, {
  cat: 'workflow', name: 'Mobile First', value: 100,
  image: false,
  icon: 'Mobile First',
  desc: `
    This is one of our most important principle for web and mobile development.
    More details will be discussed in blog later.
  `
} , {
  cat: 'workflow', name: 'BabelJS', value: 50,
  image: true,
  icon: babelImage,
  desc: `
    The de-facto tool to work with ECMAScript 6 and ReactJS nowadays.
  `
}, /*{
  cat: 'workflow', name: 'Browserify', value: 10,
  icon: '',
},*/ {
  cat: 'workflow', name: 'CSS BEM Notation', value: 70,
  image: false,
  icon: 'CSS BEM Notation',
  desc: `
    Our naming standard for CSS, which enhance collaboration, documentation and reusability of
    CSS rules.
  `
}, {
  cat: 'workflow', name: 'Front End Code Guide', value: 30,
  image: false,
  icon: 'Front End;Code Guide',
  desc: `
    Based on an existing best practice document for HTML and CSS. We're adopting it as our standards
    and guideline.
  `
}, {
  cat: 'workflow', name: 'ESLint', value: 20,
  image: true,
  icon: eslintImage,
  desc: `
    The tool to check and validate JavaScript code when we develop and prevent potential issues with code.
  `
}, {
  cat: 'workflow', name: 'Gitflow Workflow', value: 70,
  image: true,
  icon: gitflowImage,
  desc: `
    Our code version control tool is Git, and Gitflow is one of its workflow standard which
    ensure good collaboration and avoid conflict-resolving efforts. For more info, visit: code.naustud.io
  `
}, {
  cat: 'workflow', name: 'GulpJS', value: 50,
  image: true,
  icon: gulpImage,
  desc: `
    GulpJS is a task automation tools written for Node.js. It is among the most popular
    Front End and Node project automation tools nowadays
  `
}, {
  cat: 'workflow', name: 'Nau Code Styles', value: 50,
  image: false,
  icon: 'Nau Code Styles',
  desc: `
    Based on AirBnB's well-defined JavaScript code styles. Our derivation has some different standards such as
    TAB indentation. This code style has an accompanied ESLint config.
  `
}, {
  cat: 'workflow', name: 'Stylelint', value: 50,
  image: true,
  icon: stylelintImage,
  desc: `
    Our on-stop tool to validate both CSS and SCSS with a set of conventions and guidelines from our best practice.
  `
}, {
  cat: 'workflow', name: 'SystemJS', value: 20,
  image: false,
  icon: 'SystemJS',
  desc: `
    A module loader library that come along Angular 2. Its use is scarce, however.
  `
}, {
  cat: 'workflow', name: 'Webpack', value: 30,
  image: true,
  icon: webpackImage,
  desc: `
    A module bundler library that is becoming de-facto tool to use in ReactJS or SPA apps nowadays.
  `
}, {
  cat: 'legacy', name: 'AngularJS 1', value: 10,
  image: true,
  icon: angular1Image,
  desc: `
    Angular 1. Deprecated
  `
}, {
  cat: 'legacy', name: 'Backbone', value: 30,
  image: true,
  icon: backboneImage,
  desc: `
    A Model-View library. Deprecated
  `
}, {
  cat: 'legacy', name: 'Grunt & Automation Stack', value: 30,
  image: true,
  icon: gruntImage,
  desc: `
    Grunt task automation tool. Deprecated
  `
}, {
  cat: 'legacy', name: 'jQuery', value: 50,
  image: true,
  icon: jqueryImage,
  desc: `
    Deprecated, because <a href='http://youmightnotneedjquery.com/' target='_blank'>youmightnotneedjquery.com</a>
  `
}, {
  cat: 'legacy', name: 'RequireJS & AMD', value: 30,
  image: true,
  icon: requirejsImage,
  desc: `
    AMD module loader. Deprecated and replaced by ES module and Webpack.
  `
}, {
  cat: 'legacy tooling', name: 'Browser Sync', value: 40,
  image: false,
  icon: 'Browser Sync',
  desc: `
    Web development server popular among gulp/grunt web apps. No deprecated and replaced by live-server
    or webpackDevServer.
  `
}, {
  cat: 'legacy tooling', name: 'Git Pre-commit', value: 30,
  image: false,
  icon: 'Git;Pre-commit',
  desc: `
    Pre-commit hook for git, now deprecated due to slow commit time. Code validation should be done
    in the code editor.
  `
}, {
  cat: 'legacy tooling', name: 'http-server', value: 20,
  image: false,
  icon: 'http-server',
  desc: `
    A quick test web server based on Node.js, deprecated and replaced by live-server.
  `
}, {
  cat: 'legacy tooling', name: 'LiveReload', value: 20,
  image: false,
  icon: 'Live;Reload',
  desc: `
    A propritery auto-reload solution for web developers, now deprecated in favor of live-server and
    hot module reload in Webpack.
  `
}];

function App() {

  useEffect(() => {
    const d3 = Object.assign(d3Base, { legendColor, legendSize })
    document.title = 'Tech Stack with React';
    let svg = d3.select('svg');
		let width = document.body.clientWidth; // get width in pixels
		let height = +svg.attr('height');
		let centerX = width * 0.5;
		let centerY = height * 0.5;
		let strength = 0.05;
    let focusedNode;
    
		let format = d3.format(',d');

		let scaleColor = d3.scaleOrdinal(d3.schemeAccent);

		// use pack to calculate radius of the circle
		let pack = d3.pack()
			.size([width , height ])
			.padding(1.5);

		let forceCollide = d3.forceCollide(d => d.r + 1);

		// use the force
		let simulation = d3.forceSimulation()
			// .force('link', d3.forceLink().id(d => d.id))
			.force('charge', d3.forceManyBody())
			.force('collide', forceCollide)
			// .force('center', d3.forceCenter(centerX, centerY))
			.force('x', d3.forceX(centerX ).strength(strength))
			.force('y', d3.forceY(centerY ).strength(strength));

		// reduce number of circles on mobile screen due to slow computation
		if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
			data = data.filter(el => {
				return el.value >= 50;
			});
    }

		let root = d3.hierarchy({ children: data })
			.sum(d => d.value);

		// we use pack() to automatically calculate radius conveniently only
		// and get only the leaves
		let nodes = pack(root).leaves().map(node => {
			console.log('node:', node.x, (node.x - centerX) * 2);
			const data = node.data;
			return {
				x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
				y: centerY + (node.y - centerY) * 3,
				r: 0, // for tweening
				radius: node.r, //original radius
				id: data.cat + '.' + (data.name.replace(/\s/g, '-')),
				cat: data.cat,
				name: data.name,
				value: data.value,
        icon: data.icon,
        image: data.image,
				desc: data.desc,
			}
		});
		simulation.nodes(nodes).on('tick', ticked);

		svg.style('background-color', '#eee');
		let node = svg.selectAll('.node')
			.data(nodes)
			.enter().append('g')
			.attr('class', 'node')
			.call(d3.drag()
				.on('start', (d) => {
					if (!d3.event.active) simulation.alphaTarget(0.2).restart();
					d.fx = d.x;
					d.fy = d.y;
				})
				.on('drag', (d) => {
					d.fx = d3.event.x;
					d.fy = d3.event.y;
				})
				.on('end', (d) => {
					if (!d3.event.active) simulation.alphaTarget(0);
					d.fx = null;
					d.fy = null;
				}));

		node.append('circle')
			.attr('id', d => d.id)
			.attr('r', 0)
			.style('fill', d => scaleColor(d.cat))
			.transition().duration(2000).ease(d3.easeElasticOut)
				.tween('circleIn', (d) => {
					let i = d3.interpolateNumber(0, d.radius);
					return (t) => {
						d.r = i(t);
						simulation.force('collide', forceCollide);
					}
				})

		node.append('clipPath')
			.attr('id', d => `clip-${d.id}`)
			.append('use')
			.attr('xlink:href', d => `#${d.id}`);


		// display text as circle icon
		node.filter(d => !Boolean(d.image))
			.append('text')
			.classed('node-icon', true)
			.attr('clip-path', d => `url(#clip-${d.id})`)
			.selectAll('tspan')
			.data(d => d.icon.split(';'))
			.enter()
				.append('tspan')
				.attr('x', 0)
				.attr('y', (d, i, nodes) => (13 + (i - nodes.length / 2 - 0.5) * 10))
				.text(name => name);
		// display image as circle icon
		node.filter(d => Boolean(d.image))
			.append('image')
			.classed('node-icon', true)
			.attr('clip-path', d => `url(#clip-${d.id})`)
			.attr('href', d => d.icon)
			.attr('x', d => - d.radius * 0.7)
			.attr('y', d => - d.radius * 0.7)
			.attr('height', d => d.radius * 2 * 0.7)
			.attr('width', d => d.radius * 2 * 0.7)

		node.append('title')
			.text(d => (d.cat + '::' + d.name + '\n' + format(d.value)));

		let legendOrdinal = d3.legendColor()
			.scale(scaleColor)
			.shape('circle');

		let legend = svg.append('g')
			.classed('legend-color', true)
			.attr('text-anchor', 'start')
			.attr('transform','translate(20,30)')
			.style('font-size','12px')
			.call(legendOrdinal);

		let sizeScale = d3.scaleOrdinal()
  			.domain(['less use', 'more use'])
  			.range([5, 10] );

		let legendSize1 = d3.legendSize()
			.scale(sizeScale)
			.shape('circle')
			.shapePadding(10)
			.labelAlign('end');

		let legend2 = svg.append('g')
			.classed('legend-size', true)
			.attr('text-anchor', 'start')
			.attr('transform', 'translate(150, 25)')
			.style('font-size', '12px')
			.call(legendSize1);


		/*
		<foreignObject class="circle-overlay" x="10" y="10" width="100" height="150">
			<div class="circle-overlay__inner">
				<h2 class="circle-overlay__title">ReactJS</h2>
				<p class="circle-overlay__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, sunt, aspernatur. Autem repudiandae, laboriosam. Nulla quidem nihil aperiam dolorem repellendus pariatur, quaerat sed eligendi inventore ipsa natus fugiat soluta doloremque!</p>
			</div>
		</foreignObject>
		*/
		let infoBox = node.append('foreignObject')
			.classed('circle-overlay hidden', true)
			.attr('x', -350 * 0.5 * 0.8)
			.attr('y', -350 * 0.5 * 0.8)
			.attr('height', 350 * 0.8)
			.attr('width', 350 * 0.8)
				.append('xhtml:div')
				.classed('circle-overlay__inner', true);

		infoBox.append('h2')
			.classed('circle-overlay__title', true)
			.text(d => d.name);

		infoBox.append('p')
			.classed('circle-overlay__body', true)
			.html(d => d.desc);


		node.on('click', (currentNode) => {
			d3.event.stopPropagation();
			console.log('currentNode', currentNode);
			let currentTarget = d3.event.currentTarget; // the <g> el

			if (currentNode === focusedNode) {
				// no focusedNode or same focused node is clicked
				return;
			}
			let lastNode = focusedNode;
			focusedNode = currentNode;

			simulation.alphaTarget(0.2).restart();
			// hide all circle-overlay
			d3.selectAll('.circle-overlay').classed('hidden', true);
			d3.selectAll('.node-icon').classed('node-icon--faded', false);

			// don't fix last node to center anymore
			if (lastNode) {
				lastNode.fx = null;
				lastNode.fy = null;
				node.filter((d, i) => i === lastNode.index)
					.transition().duration(2000).ease(d3.easePolyOut)
					.tween('circleOut', () => {
						let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
						return (t) => {
							lastNode.r = irl(t);
						}
					})
					.on('interrupt', () => {
						lastNode.r = lastNode.radius;
					});
			}

			// if (!d3.event.active) simulation.alphaTarget(0.5).restart();

			d3.transition().duration(2000).ease(d3.easePolyOut)
				.tween('moveIn', () => {
					console.log('tweenMoveIn', currentNode);
					let ix = d3.interpolateNumber(currentNode.x, centerX);
					let iy = d3.interpolateNumber(currentNode.y, centerY);
					let ir = d3.interpolateNumber(currentNode.r, centerY * 0.5);
					return function (t) {
						// console.log('i', ix(t), iy(t));
						currentNode.fx = ix(t);
						currentNode.fy = iy(t);
						currentNode.r = ir(t);
						simulation.force('collide', forceCollide);
					};
				})
				.on('end', () => {
					simulation.alphaTarget(0);
					let $currentGroup = d3.select(currentTarget);
					$currentGroup.select('.circle-overlay')
						.classed('hidden', false);
					$currentGroup.select('.node-icon')
						.classed('node-icon--faded', true);

				})
				.on('interrupt', () => {
					console.log('move interrupt', currentNode);
					currentNode.fx = null;
					currentNode.fy = null;
					simulation.alphaTarget(0);
				});

		});

		// blur
		d3.select(document).on('click', () => {
			let target = d3.event.target;
			// check if click on document but not on the circle overlay
			if (!target.closest('#circle-overlay') && focusedNode) {
				focusedNode.fx = null;
				focusedNode.fy = null;
				simulation.alphaTarget(0.2).restart();
				d3.transition().duration(2000).ease(d3.easePolyOut)
					.tween('moveOut', function () {
						console.log('tweenMoveOut', focusedNode);
						let ir = d3.interpolateNumber(focusedNode.r, focusedNode.radius);
						return function (t) {
							focusedNode.r = ir(t);
							simulation.force('collide', forceCollide);
						};
					})
					.on('end', () => {
						focusedNode = null;
						simulation.alphaTarget(0);
					})
					.on('interrupt', () => {
						simulation.alphaTarget(0);
					});

				// hide all circle-overlay
				d3.selectAll('.circle-overlay').classed('hidden', true);
				d3.selectAll('.node-icon').classed('node-icon--faded', false);
			}
    });
		function ticked() {
			node
				.attr('transform', d => `translate(${d.x},${d.y})`)
				.select('circle')
					.attr('r', d => d.r);
		}
  })

  return (
    <div>
      <h1>Technologies Stack</h1>
      <svg width="100%" height="700" fontFamily="sans-serif" fontSize="10" textAnchor="middle"></svg>
    </div>
  );
}

export default App;
