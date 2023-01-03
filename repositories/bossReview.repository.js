const { Review } = require('../models');

class BossReviewRepository {
  constructor(bossModel) {
    this.bossModel = bossModel;
  }
  findAllReview = async (userId) => {
    try {
      const reviews = await this.bossModel.findAll({
        where: { user_id: userId },
        attributes: ['star', 'content', 'createdAt'],
      });

      return reviews;
    } catch (error) {
      return error;
    }
  };
}

module.exports = BossReviewRepository;
