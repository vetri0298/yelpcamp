const express = require('express');
const router = express.Router({ mergeParams: true });
const { validatereview, isLoggedIn, isReviewAuthor } = require('../loginMiddleware');
const Campground = require('../models/campground');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');
const catchAsync = require('../utils/catchAsync');


router.post('/', isLoggedIn, validatereview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;
