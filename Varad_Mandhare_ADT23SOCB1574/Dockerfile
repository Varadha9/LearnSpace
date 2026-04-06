WORKDIR /app
COPY package*.json ./

# 🔥 FIX HERE
RUN npm install

COPY . .
RUN npm run build
