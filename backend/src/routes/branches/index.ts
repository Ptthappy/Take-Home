import { FastifyPluginAsync } from "fastify"
import { IRepoQuerystring } from "../../shared/interfaces/Repo";
import HttpService from "../../shared/services/http-service";
import { branchesSchema } from "../../shared/schemas/branches";

const branches: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{
    Querystring: IRepoQuerystring
  }>('/', {
    schema: branchesSchema
  }, async function (request, reply) {
    const { owner, repo } = request.query;
    const httpService = new HttpService();
    const res = await httpService.get(`repos/${owner}/${repo}/branches`)
    reply.send(res)
  })
}

export default branches;
