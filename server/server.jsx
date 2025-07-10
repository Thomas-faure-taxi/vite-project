// vite-project/server/server.jsx
import express from 'express';
import { renderToString } from 'react-dom/server';
import { App } from '../src/App';

const app = express();

