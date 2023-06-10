import { z } from 'zod';

const nameElement = document.getElementById('js-name');
const nameErrrorsElement = document.getElementById('js-name-errors');
const formElement = document.getElementById('js-form');

const schema = z.string().min(5);

schema.parse('faaeeee');
