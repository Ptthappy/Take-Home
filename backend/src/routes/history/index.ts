import { FastifyPluginAsync } from "fastify"
import { IRepoQuerystring } from "../../shared/interfaces/Repo";
import HttpService from "../../shared/services/http-service";
import { historySchema } from "../../shared/schemas/history";

const history: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{
    Querystring: IRepoQuerystring
  }>('/', {
    schema: historySchema
  }, async function (request, reply) {
    const { owner, repo, branch } = request.query;
    const httpService = new HttpService();
    const res = await httpService.get(`/repos/${owner}/${repo}/commits?sha=${branch}`)
    reply.send(res)
  })
}

export default history;
