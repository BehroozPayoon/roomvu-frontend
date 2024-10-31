import HttpFactory from '../factory'
import { Post } from '~/data/post'
import { subDays } from 'date-fns'

class PostModule extends HttpFactory {
  private RESOURCE = '/posts'

  async list(): Promise<Post[]> {
    const response = await this.call<Post[]>('GET', this.RESOURCE)
    const today = new Date()
    return response
      .map((post) => new Post(post.id, post.title, post.body, subDays(today, post.id)))
      .sort((a, b) => b.date - a.date)
  }

  async detail(id: number): Promise<Post> {
    const response = await this.call<Post>('GET', `${this.RESOURCE}/${id}`)
    const today = new Date()
    return new Post(response.id, response.title, response.body, subDays(today, response.id))
  }
}

export default PostModule
