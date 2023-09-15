import { FastifyPluginAsync } from "fastify"
import HttpService from "../../services/http-service";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    // const { owner, repo } = request.params;
    const httpService = new HttpService();
    const res = await httpService.get('repos/ptthappy/take-home/branches')
    reply.send(res)
  })
}

export default example;
