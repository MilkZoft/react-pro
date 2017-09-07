// Constants
import { API } from '../../shared/constants/api';

// Utils
import { apiFetch } from '../../shared/utils/api';

class BlogApi {
  static getAllPosts(query = {}, fetchingFrom = 'client') {
    return apiFetch(API.BLOG.POSTS, { fetchingFrom }, query);
  }
}

export default BlogApi;
