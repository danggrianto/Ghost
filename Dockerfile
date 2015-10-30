FROM node:0.10-slim

RUN set -x \
	&& apt-get update \
	&& apt-get install -y --no-install-recommends curl ca-certificates \
	&& rm -rf /var/lib/apt/lists/*

ADD . /usr/src/ghost
WORKDIR /usr/src/ghost

ENV NODE_ENV=production

CMD ["npm", "start", "--production"]
