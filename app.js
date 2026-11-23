'use strict';

// Project descriptions are grounded in the supplied resume and public repositories.
const projects = {
  meeting: {
    title: 'AI Meeting Intelligence & RAG',
    intro: 'Turning recorded meetings into searchable, actionable knowledge. The application accepts a YouTube URL or a local video and supports English and Hindi transcription.',
    approach: 'Whisper and Sarvam AI transcribe the audio. Mistral AI and LangChain LCEL extract summaries, decisions, action items, and open questions. HuggingFace embeddings and ChromaDB power retrieval over the transcript.',
    outcomes: ['Chat with meeting content through a context-grounded RAG pipeline.', 'Explore structured insights in a Streamlit interface.', 'Export meeting reports as PDF or text.'],
    stack: ['Python', 'Whisper', 'Sarvam AI', 'Mistral AI', 'LangChain', 'ChromaDB', 'Streamlit'],
    repo: 'AI_Video_Assistance_-_RAG-system',
    note: 'Source: project README and resume. This portfolio links to the source code; the application runs separately.'
  },
  research: {
    title: 'Multi-Agent AI Research System',
    intro: 'A research workflow that breaks a broad task into the work of specialized agents: Search, Reader, Writer, and Critic.',
    approach: 'LangChain coordinates the agents. Tavily finds relevant material, BeautifulSoup extracts page content, and the writing and critique steps generate and refine the research report.',
    outcomes: ['Automates web research and content extraction.', 'Separates research, writing, and critique into focused agent responsibilities.', 'Provides an interactive Streamlit interface to execute the workflow.'],
    stack: ['Python', 'LangChain', 'Tavily', 'BeautifulSoup', 'Streamlit'],
    repo: 'Multi-Agent-Research-System', note: 'Source: supplied resume and linked public repository.'
  },
  plant: {
    title: 'Plant Disease Classification',
    intro: 'A full-stack computer vision project that identifies plant diseases from leaf photographs, bringing a trained CNN into an interactive application.',
    approach: 'The TensorFlow / Keras CNN uses 128 × 128 images, resizing, rescaling, and data augmentation. FastAPI serves predictions to a React interface. The frontend and backend are containerized with Docker for AWS EC2 deployment.',
    outcomes: ['Trained on more than 35,000 images across 23 classes.', 'Approximately 94% validation accuracy, as reported in the repository.', 'Built the complete path from training to API, interface, and cloud deployment.'],
    stack: ['Python', 'TensorFlow', 'Keras', 'FastAPI', 'React', 'Docker', 'AWS EC2'],
    repo: 'Plant_Disease_Classification', note: 'Source: public project README and supplied resume. Validation accuracy is a reported project result, not an independent benchmark.'
  },
  sentiment: {
    title: 'YouTube Sentiment Analysis & MLOps',
    intro: 'An NLP pipeline that converts YouTube comments into sentiment signals, with an emphasis on repeatable training and deployment.',
    approach: 'A scikit-learn sentiment workflow processes YouTube comments. MLflow tracks experiments, DVC supports pipeline reproducibility, Docker packages the application, and GitHub Actions automates the AWS deployment workflow.',
    outcomes: ['Analyzed 500+ comments with an approximately 88% F1-score, as reported in the resume.', 'Tracked experiments and packaged the workflow for reproducible deployment.', 'Automated training and deployment using CI/CD.'],
    stack: ['Python', 'scikit-learn', 'MLflow', 'DVC', 'Docker', 'FastAPI', 'GitHub Actions'],
    repo: 'YT_Comment_Sentimental_Analysis-ongoing-', note: 'Source: supplied resume and repository deployment notes. Dataset size and F1-score are resume-reported results.'
  }
};


Object.assign(projects, {
  prompt: {
    title: 'PromptBench AI',
    intro: 'A practical prompt-testing and evaluation application built around Google Gemini. Compare prompt variants against the same test cases and inspect the results.',
    approach: 'A FastAPI backend calls Gemini and applies rule-based checks for instruction following, valid JSON, and insufficient-information responses. SQLite stores evaluation history, while an HTML, CSS, and JavaScript frontend provides the playground.',
    outcomes: ['Compare two prompts against shared test cases.', 'Inspect rule-based scores and their explanations.', 'Add test cases and review saved evaluation history.'],
    stack: ['Python', 'Gemini API', 'FastAPI', 'SQLite', 'JavaScript'],
    repo: 'Prompt_Bench_AI', note: 'The evaluation checks are rule-based. See the repository for the scoring method and its limitations.'
  },
  pdf: {
    title: 'PDF Chat RAG',
    intro: 'An AI-powered document question-answering app that turns PDF text into a conversational knowledge source.',
    approach: 'Documents pass through text extraction, chunking, and embeddings before entering ChromaDB. LangChain retrieves relevant context and Mistral AI generates the answer in a Streamlit chat interface.',
    outcomes: ['Upload PDF documents and ask questions about their contents.', 'Retrieve relevant document chunks through vector search.', 'Connect document processing, retrieval, and response generation in one application.'],
    stack: ['Python', 'LangChain', 'Mistral AI', 'ChromaDB', 'Streamlit'],
    repo: 'PDF-CHAT-RAG-Project', note: 'Explore the source repository for the RAG workflow and local setup.'
  },
  vehicle: {
    title: 'Vehicle Tracking & Counting',
    intro: 'A computer vision application that tracks objects across video frames and counts tracked vehicles when they cross a defined line.',
    approach: 'Ultralytics YOLO11 processes each frame with persistent tracking. OpenCV draws bounding boxes, class labels, tracking IDs, and the counting line. A Streamlit interface displays the annotated video and class counts.',
    outcomes: ['Maintain object IDs across video frames.', 'Visualize detections with annotated bounding boxes.', 'Count unique tracked objects crossing the counting line.'],
    stack: ['Python', 'Ultralytics YOLO11', 'OpenCV', 'Streamlit'],
    repo: 'Vehicle_Tracking-and-counting', note: 'Implementation details verified from the repository’s app.py.'
  },
  jobs: {
    title: 'AI Job Recommender',
    intro: 'A resume-driven career tool that uses AI to summarize a candidate’s experience, identify skill gaps, and suggest a learning roadmap.',
    approach: 'The Streamlit application extracts text from an uploaded PDF and asks Gemini to generate a summary, skill-gap analysis, and roadmap. It then derives search keywords and connects to LinkedIn and Naukri job-fetching helpers.',
    outcomes: ['Analyze skills and experience from a PDF resume.', 'Generate a personalized preparation roadmap.', 'Use AI-generated keywords to find relevant job listings.'],
    stack: ['Python', 'Gemini API', 'Streamlit', 'Apify', 'PDF processing'],
    repo: 'Job_Scrapper', note: 'Application workflow verified from the public repository and the original portfolio.'
  },
  toxic: {
    title: 'Toxic Comment Classifier',
    intro: 'A multi-label NLP project that classifies Wikipedia comments across six toxicity categories: toxic, severe toxic, obscene, threat, insult, and identity hate.',
    approach: 'TF-IDF converts comments into numerical features. One-vs-rest classifiers using Logistic Regression and Naive Bayes learn the labels. ROC-AUC and classification reports support model evaluation on the Kaggle Toxic Comment Classification dataset.',
    outcomes: ['Handle multiple toxicity labels for the same comment.', 'Apply text preprocessing and TF-IDF feature extraction.', 'Evaluate alternative classifiers with ROC-AUC and classification reports.'],
    stack: ['Python', 'scikit-learn', 'TF-IDF', 'NLTK', 'Pandas', 'NumPy'],
    repo: 'Toxic_Comment_Classifier', note: 'Project scope and techniques documented in the public README.'
  },
  movie: {
    title: 'Movie Recommender',
    intro: 'A content-based recommendation project that explores how text features and similarity can connect a movie to related titles.',
    approach: 'The project works with movie metadata, TF-IDF features, and similarity-based recommendations. The repository contains the data and serialized feature artifacts alongside Python application and API code.',
    outcomes: ['Explore content-based recommendation using movie metadata.', 'Work with text features and reusable model artifacts.', 'Connect machine learning concepts to a movie-discovery interface.'],
    stack: ['Python', 'TF-IDF', 'Pandas', 'NumPy', 'FastAPI'],
    repo: 'Movie_Recommender', note: 'Project information comes from the repository and the original portfolio preview.'
  }
});

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); mobileNav.hidden = true; }
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  mobileNav.hidden = expanded;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 641px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const filters = document.querySelectorAll('.filter');
const projectCards = [...document.querySelectorAll('.project-card')];
const searchInput = document.querySelector('#project-search');
const moreButton = document.querySelector('#more-projects');
let activeFilter = 'all';
let galleryExpanded = false;
function updateProjects() {
  const query = searchInput.value.trim().toLowerCase();
  const matches = projectCards.filter(card => (activeFilter === 'all' || card.dataset.category === activeFilter) && card.textContent.toLowerCase().includes(query));
  const exploring = activeFilter !== 'all' || query.length > 0;
  document.querySelector('#project-gallery').classList.toggle('is-expanded', galleryExpanded || exploring);
  projectCards.forEach(card => { card.hidden = !matches.includes(card) || (!galleryExpanded && !exploring && matches.indexOf(card) >= 3); });
  const shown = matches.filter(card => !card.hidden).length;
  document.querySelector('#project-count').textContent = `${shown} of ${matches.length} projects`;
  document.querySelector('.empty-projects').hidden = matches.length > 0;
  document.querySelector('.project-expansion').hidden = exploring || matches.length <= 3;
  moreButton.setAttribute('aria-expanded', String(galleryExpanded));
  moreButton.innerHTML = galleryExpanded ? 'Show fewer projects <span>−</span>' : 'View all 10 projects <span>＋</span>';
  document.querySelector('#expansion-caption').textContent = galleryExpanded ? 'The full collection, straight from GitHub.' : '3 featured projects · 7 more to discover';
}
filters.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filters.forEach(filter => { filter.classList.toggle('active', filter === button); filter.setAttribute('aria-pressed', String(filter === button)); });
  updateProjects();
}));
searchInput.addEventListener('input', updateProjects);
moreButton.addEventListener('click', () => {
  galleryExpanded = !galleryExpanded;
  updateProjects();
  if (!galleryExpanded) document.querySelector('#work').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});
projectCards.forEach(card => {
  const project = projects[card.querySelector('[data-project]').dataset.project];
  const link = document.createElement('a');
  link.className = 'repo-quick-link'; link.href = `https://github.com/mohitrohda/${project.repo}`; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'GitHub'; link.setAttribute('aria-label', `${project.title} source on GitHub`); card.append(link);
});
updateProjects();

const workflows = {
  rag: {
    nodes: [['▤', 'Documents & video', 'Extract and transcribe'], ['✧', 'Embeddings', 'Chunk and represent'], ['⌕', 'Vector retrieval', 'Find relevant context'], ['✦', 'Grounded answers', 'Generate with an LLM']],
    title: 'Make knowledge conversational.', text: 'I connect documents, meeting transcripts, and language models through retrieval pipelines — turning unstructured content into useful answers.', category: 'genai'
  },
  vision: {
    nodes: [['▣', 'Images & video', 'Collect and preprocess'], ['◎', 'Vision models', 'CNNs, U-Net, YOLO'], ['⌘', 'Prediction API', 'Serve with FastAPI'], ['✦', 'Useful interfaces', 'Classify, segment, track']],
    title: 'Give software a new way to see.', text: 'From plant diseases to satellite oil-spill segmentation and vehicle tracking, I build computer vision workflows that connect predictions to an interface.', category: 'vision'
  },
  mlops: {
    nodes: [['▤', 'Data & features', 'Prepare with Python'], ['⌬', 'Model experiments', 'Train and evaluate'], ['≋', 'Version & track', 'DVC and MLflow'], ['✦', 'Package & deploy', 'Docker and CI/CD']],
    title: 'Build beyond the notebook.', text: 'I bring model training together with experiment tracking, reproducible pipelines, APIs, and deployment — the engineering around a useful model.', category: 'mlops'
  }
};
let currentWorkflow = 'rag';
function updateWorkflow(key) {
  currentWorkflow = key;
  const workflow = workflows[key];
  document.querySelector('#workflow-nodes').innerHTML = workflow.nodes.map(node => `<div class="workflow-node"><span aria-hidden="true">${node[0]}</span><b>${node[1]}</b><small>${node[2]}</small></div>`).join('');
  document.querySelector('#workflow-title').textContent = workflow.title;
  document.querySelector('#workflow-text').textContent = workflow.text;
  document.querySelectorAll('.workflow-tab').forEach(button => { const active = button.dataset.workflow === key; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
}
document.querySelectorAll('.workflow-tab').forEach(button => button.addEventListener('click', () => updateWorkflow(button.dataset.workflow)));
document.querySelector('#workflow-link').addEventListener('click', () => { const button = [...filters].find(filter => filter.dataset.filter === workflows[currentWorkflow].category); button.click(); });
updateWorkflow('rag');

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  // All values below are trusted, static project copy, never user or API input.
  dialogContent.innerHTML = `<h2 id="dialog-title">${project.title}</h2><p>${project.intro}</p><h3>How it works</h3><p>${project.approach}</p><h3>What I built</h3><ul>${project.outcomes.map(item => `<li>${item}</li>`).join('')}</ul><h3>Stack</h3><div class="tags">${project.stack.map(item => `<span>${item}</span>`).join('')}</div><a class="button button-lime" href="https://github.com/mohitrohda/${project.repo}" target="_blank" rel="noopener">View source on GitHub <span>＋</span></a><p class="source-note">${project.note}</p>`;
  dialog.showModal();
  dialog.scrollTop = 0;
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

let toastTimeout;
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3000);
}
document.querySelector('.copy-email').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('rohdamohit@gmail.com'); showToast('Email address copied.'); }
  catch { showToast('Email: rohdamohit@gmail.com'); }
});
document.querySelector('#year').textContent = new Date().getFullYear();
function updateTime() {
  document.querySelector('#local-time').textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()) + ' IST';
}
updateTime(); setInterval(updateTime, 60000);
const waveform = document.querySelector('#waveform');
for (let i = 0; i < 62; i++) { const bar = document.createElement('i'); bar.style.setProperty('--h', `${16 + (Math.sin(i * 2.7) * .5 + .5) * 75}%`); waveform.append(bar); }

// Dependency-free WebGL: a real perspective-projected, rotating 3D particle mesh.
(function neuralCore() {
  const canvas = document.querySelector('#neural-canvas');
  const scene = document.querySelector('.neural-scene');
  const motionButton = document.querySelector('#motion-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let gl;
  try { gl = canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'low-power' }); } catch { return; }
  if (!gl) { canvasNeuralCore(canvas, scene, motionButton, reducedMotion); return; }
  const vertex = `
    precision mediump float;
    attribute vec3 a_position;
    attribute float a_brightness;
    uniform vec2 u_rotation;
    uniform float u_aspect;
    uniform float u_pixelRatio;
    uniform float u_points;
    varying float v_alpha;
    varying float v_light;
    varying float v_hue;
    void main() {
      float cy = cos(u_rotation.y); float sy = sin(u_rotation.y);
      float cx = cos(u_rotation.x); float sx = sin(u_rotation.x);
      vec3 p = a_position;
      p = vec3(p.x*cy+p.z*sy,p.y,-p.x*sy+p.z*cy);
      p = vec3(p.x,p.y*cx-p.z*sx,p.y*sx+p.z*cx);
      float perspective = 2.28/(4.3-p.z);
      gl_Position = vec4(p.x*perspective/u_aspect,p.y*perspective,0.0,1.0);
      v_light = (p.z+1.8)/3.6;
      v_hue = clamp(a_position.y * 0.32 + a_position.x * 0.19 + 0.5, 0.0, 1.0);
      v_alpha = a_brightness * (0.3 + v_light * 0.95);
      gl_PointSize = u_pixelRatio * (1.0 + a_brightness * 1.5) * (0.65+v_light*0.65) * u_points;
    }`;
  const fragment = `
    precision mediump float;
    uniform float u_points;
    varying float v_alpha;
    varying float v_light;
    varying float v_hue;
    void main() {
      float opacity = v_alpha;
      if (u_points > 0.5) {
        float distance = length(gl_PointCoord-vec2(0.5));
        if (distance > 0.5) discard;
        opacity *= 1.0-smoothstep(0.1,0.5,distance);
      }
      vec3 color = mix(vec3(0.22,0.76,1.0), vec3(0.64,0.47,1.0), smoothstep(0.0,0.65,v_hue));
      color = mix(color, vec3(1.0,0.53,0.79), smoothstep(0.55,1.0,v_hue));
      color *= 0.62 + v_light * 0.68;
      gl_FragColor = vec4(color,opacity);
    }`;
  function compile(type, source) { const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader); if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error('Neural core shader compilation failed: ' + gl.getShaderInfoLog(shader)); return shader; }
  let program;
  try {
    program = gl.createProgram(); gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex)); gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment)); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Neural core shader linking failed: ' + gl.getProgramInfoLog(program));
  } catch (error) { console.warn(error.message); canvasNeuralCore(canvas, scene, motionButton, reducedMotion); return; }
  gl.useProgram(program);
  const pointData = [], lineData = [];
  const latitudes = 48, longitudes = 96;
  function position(lat, lon) {
    const theta = lat / latitudes * Math.PI;
    const phi = lon / longitudes * Math.PI * 2;
    const r = 1.31 + .075 * Math.sin(phi * 6 + theta * 8) * Math.sin(theta * 3);
    return [r * Math.sin(theta) * Math.cos(phi), r * Math.cos(theta), r * Math.sin(theta) * Math.sin(phi)];
  }
  function addLine(a, b, brightness) { lineData.push(...a, brightness, ...b, brightness); }
  for (let lat = 1; lat < latitudes; lat++) {
    for (let lon = 0; lon < longitudes; lon++) {
      const p = position(lat, lon);
      const bright = .28 + .65 * ((Math.sin(lat * 78.233 + lon * 12.9898) * 43758.5453) % 1 + 1) / 2;
      pointData.push(...p, bright);
      if (lat % 2 === 0) addLine(p, position(lat, lon + 1), .11);
      if (lon % 3 === 0 && lat < latitudes - 1) addLine(p, position(lat + 1, lon), .12);
      if ((lat + lon) % 9 === 0) addLine(p, position(lat + 1, lon + 1), .15);
    }
  }
  for (let ring = 0; ring < 3; ring++) {
    const n = 270, radius = 1.68 + ring * .05, tilt = .45 + ring * .9;
    let last;
    for (let i = 0; i <= n; i++) {
      const a = i / n * Math.PI * 2;
      const x = radius * Math.cos(a), y = radius * Math.sin(a) * Math.cos(tilt), z = radius * Math.sin(a) * Math.sin(tilt);
      const rot = ring * 1.2;
      const p = [x * Math.cos(rot) - y * Math.sin(rot), x * Math.sin(rot) + y * Math.cos(rot), z];
      if (last) addLine(last, p, ring === 0 ? .44 : .22);
      if (i % 15 === 0) pointData.push(...p, 1.5);
      last = p;
    }
  }
  function buffer(data) { const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW); return b; }
  const points = buffer(pointData), lines = buffer(lineData);
  const pos = gl.getAttribLocation(program, 'a_position'), brightness = gl.getAttribLocation(program, 'a_brightness');
  const uniforms = Object.fromEntries(['rotation', 'aspect', 'pixelRatio', 'points'].map(name => [name, gl.getUniformLocation(program, 'u_' + name)]));
  gl.enableVertexAttribArray(pos); gl.enableVertexAttribArray(brightness);
  gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE); gl.clearColor(0, 0, 0, 0);
  let rotationY = -.3, rotationX = .2, targetX = .2, paused = reducedMotion.matches, visible = true, dragging = false, lastX = 0, lastY = 0, frameId = 0, lastTime = 0;
  function updateButton() { motionButton.setAttribute('aria-pressed', String(paused)); motionButton.setAttribute('aria-label', paused ? 'Play 3D animation' : 'Pause 3D animation'); motionButton.textContent = paused ? '▷' : 'Ⅱ'; }
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = scene.clientWidth, height = scene.clientHeight;
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(uniforms.aspect, width / height); gl.uniform1f(uniforms.pixelRatio, dpr);
    render();
  }
  function render() {
    gl.clear(gl.COLOR_BUFFER_BIT); gl.uniform2f(uniforms.rotation, rotationX, rotationY);
    for (const [b, mode, count, isPoints] of [[lines, gl.LINES, lineData.length / 4, 0], [points, gl.POINTS, pointData.length / 4, 1]]) {
      gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 16, 0); gl.vertexAttribPointer(brightness, 1, gl.FLOAT, false, 16, 12); gl.uniform1f(uniforms.points, isPoints); gl.drawArrays(mode, 0, count);
    }
  }
  function animate(time) {
    frameId = 0;
    if (!visible || document.hidden || paused) return;
    const dt = Math.min((time - lastTime) / 1000 || 0, .05); lastTime = time;
    if (!dragging) { rotationY += dt * .11; rotationX += (targetX - rotationX) * .02; }
    render(); frameId = requestAnimationFrame(animate);
  }
  function start() { if (!frameId && !paused && visible && !document.hidden) { lastTime = performance.now(); frameId = requestAnimationFrame(animate); } }
  function stop() { cancelAnimationFrame(frameId); frameId = 0; }
  motionButton.addEventListener('click', () => { paused = !paused; updateButton(); paused ? stop() : start(); });
  reducedMotion.addEventListener('change', event => { paused = event.matches; updateButton(); paused ? stop() : start(); });
  scene.addEventListener('pointerdown', event => { if (event.target.closest('button') || event.pointerType === 'touch') return; dragging = true; lastX = event.clientX; lastY = event.clientY; scene.setPointerCapture(event.pointerId); });
  scene.addEventListener('pointermove', event => { if (!dragging) return; rotationY += (event.clientX - lastX) * .006; rotationX = Math.max(-1.1, Math.min(1.1, rotationX + (event.clientY - lastY) * .006)); targetX = rotationX; lastX = event.clientX; lastY = event.clientY; if (paused) render(); });
  scene.addEventListener('pointerup', () => { dragging = false; });
  scene.addEventListener('pointercancel', () => { dragging = false; });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; visible ? start() : stop(); }, { threshold: .05 }).observe(scene);
  new ResizeObserver(resize).observe(scene);
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); stop(); scene.classList.remove('webgl-ready'); motionButton.hidden = true; });
  canvas.addEventListener('webglcontextrestored', () => { window.location.reload(); });
  scene.classList.add('webgl-ready'); updateButton(); resize(); start();
})();

// The same 3D experience remains available in browsers without GPU/WebGL access.
function canvasNeuralCore(originalCanvas, scene, motionButton, reducedMotion) {
  // A failed WebGL context can prevent using 2D on that canvas in some engines.
  const canvas = originalCanvas.cloneNode();
  originalCanvas.replaceWith(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) { motionButton.hidden = true; return; }
  const points = [], edges = [], rings = [];
  const rows = 42, cols = 80;
  for (let row = 1; row < rows; row++) {
    const theta = row / rows * Math.PI;
    for (let col = 0; col < cols; col++) {
      const phi = col / cols * Math.PI * 2;
      const radius = 1.30 + .065 * Math.sin(phi * 6 + theta * 8) * Math.sin(theta * 3);
      points.push({x: radius * Math.sin(theta) * Math.cos(phi), y: radius * Math.cos(theta), z: radius * Math.sin(theta) * Math.sin(phi), bright: .4 + .6 * Math.abs(Math.sin(row * 78.233 + col * 12.9898))});
      const index = (row - 1) * cols + col;
      if (row % 2 === 0) edges.push([index, (row - 1) * cols + (col + 1) % cols]);
      if (col % 3 === 0 && row < rows - 1) edges.push([index, index + cols]);
      if ((row + col) % 7 === 0 && row < rows - 1) edges.push([index, row * cols + (col + 1) % cols]);
    }
  }
  for (let ring = 0; ring < 3; ring++) {
    const ringPoints = [];
    const radius = 1.68 + ring * .04, tilt = .45 + ring * .9, turn = ring * 1.2;
    for (let i = 0; i <= 180; i++) {
      const phi = i / 180 * Math.PI * 2;
      const x = radius * Math.cos(phi), y = radius * Math.sin(phi) * Math.cos(tilt), z = radius * Math.sin(phi) * Math.sin(tilt);
      ringPoints.push({x:x * Math.cos(turn) - y * Math.sin(turn), y:x * Math.sin(turn) + y * Math.cos(turn), z});
    }
    rings.push(ringPoints);
  }
  let rotationX = .2, rotationY = -.3, paused = reducedMotion.matches, visible = true, dragging = false, lastX = 0, lastY = 0, width = 0, height = 0, frameId = 0, lastFrame = 0;
  function project(p) {
    const cy = Math.cos(rotationY), sy = Math.sin(rotationY), cx = Math.cos(rotationX), sx = Math.sin(rotationX);
    const x = p.x * cy + p.z * sy;
    const z1 = -p.x * sy + p.z * cy;
    const y = p.y * cx - z1 * sx, z = p.y * sx + z1 * cx;
    const scale = height * 1.14 / (4.3 - z);
    return { x: width / 2 + x * scale, y: height / 2 - y * scale, depth: (z + 1.8) / 3.6, z };
  }
  function render() {
    ctx.clearRect(0, 0, width, height);
    const projected = points.map(project);
    // Fine cross-connections, shaded by their actual position in 3D space.
    for (let layer = 0; layer < 3; layer++) {
      ctx.beginPath();
      for (const [a, b] of edges) {
        const pa = projected[a], pb = projected[b];
        if (Math.min(2, Math.floor(pa.depth * 3)) !== layer) continue;
        ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y);
      }
      ctx.strokeStyle = ['rgba(85,140,220,.10)','rgba(135,134,242,.25)','rgba(203,149,255,.42)'][layer];
      ctx.lineWidth = .55; ctx.stroke();
    }
    for (let index = 0; index < projected.length; index++) {
      const p = projected[index], brightness = points[index].bright;
      const opacity = .1 + p.depth * .75 * brightness;
      const hue = 195 + (points[index].y / 2.7 + .5) * 105;
      ctx.fillStyle = `hsla(${hue},90%,77%,${opacity})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, (.45 + p.depth * .65) * brightness, 0, Math.PI * 2); ctx.fill();
    }
    rings.forEach((ring, ringIndex) => {
      const projectedRing = ring.map(project);
      for (let front = 0; front < 2; front++) {
        ctx.beginPath();
        for (let i = 1; i < projectedRing.length; i++) {
          const a = projectedRing[i - 1], b = projectedRing[i];
          if ((b.z >= 0 ? 1 : 0) !== front) continue;
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        }
        ctx.strokeStyle = front ? `hsla(${195+ringIndex*65},90%,75%,${ringIndex === 0 ? .7 : .45})` : 'rgba(123,128,220,.22)'; ctx.lineWidth = .7; ctx.stroke();
      }
      for (let i = 0; i < projectedRing.length; i += 30) {
        const p = projectedRing[i]; if (p.depth < .45) continue;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 6);
        glow.addColorStop(0, 'rgba(225,217,255,.9)'); glow.addColorStop(.2, 'rgba(153,185,255,.55)'); glow.addColorStop(1, 'rgba(153,185,255,0)');
        ctx.fillStyle = glow; ctx.fillRect(p.x - 6, p.y - 6, 12, 12);
      }
    });
  }
  function resize() {
    width = scene.clientWidth; height = scene.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); render();
  }
  function animate(time) {
    frameId = 0;
    if (!visible || paused || document.hidden) return;
    if (time - lastFrame >= 33) { if (!dragging) rotationY += Math.min((time - lastFrame) / 1000, .05) * .11; lastFrame = time; render(); }
    frameId = requestAnimationFrame(animate);
  }
  function start() { if (!frameId && !paused && visible && !document.hidden) { lastFrame = performance.now(); frameId = requestAnimationFrame(animate); } }
  function stop() { cancelAnimationFrame(frameId); frameId = 0; }
  function updateButton() { motionButton.setAttribute('aria-pressed', String(paused)); motionButton.setAttribute('aria-label', paused ? 'Play 3D animation' : 'Pause 3D animation'); motionButton.textContent = paused ? '▷' : 'Ⅱ'; }
  motionButton.addEventListener('click', () => { paused = !paused; updateButton(); paused ? stop() : start(); });
  reducedMotion.addEventListener('change', event => { paused = event.matches; updateButton(); paused ? stop() : start(); });
  scene.addEventListener('pointerdown', event => { if (event.target.closest('button') || event.pointerType === 'touch') return; dragging = true; lastX = event.clientX; lastY = event.clientY; scene.setPointerCapture(event.pointerId); });
  scene.addEventListener('pointermove', event => { if (!dragging) return; rotationY += (event.clientX - lastX) * .006; rotationX = Math.max(-1.1, Math.min(1.1, rotationX + (event.clientY - lastY) * .006)); lastX = event.clientX; lastY = event.clientY; if (paused) render(); });
  scene.addEventListener('pointerup', () => { dragging = false; }); scene.addEventListener('pointercancel', () => { dragging = false; });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; visible ? start() : stop(); }, { threshold: .05 }).observe(scene);
  new ResizeObserver(resize).observe(scene);
  scene.classList.add('webgl-ready'); updateButton(); resize(); start();
}
