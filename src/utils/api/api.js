import axios from 'axios'

import { apiConfig } from 'config/api.config'

export const API = axios.create(apiConfig)
