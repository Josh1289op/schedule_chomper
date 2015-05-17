'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Course Schema
 */
var CourseSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true
	},
	code: {
		type: String,
		default: '',
		trim: true
	},
	section: {
		type: String,
		default: '',
		trim: true
	},
	credits: {
		type: Number
	},
	instructor: {
		type: String,
		trim: true
	},
	web: {
		type: Boolean,
		default: false
	},
	time: {
		type: Array,
		default: []
	}
});

mongoose.model('Course', CourseSchema);
