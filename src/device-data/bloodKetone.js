/*
 * == BSD2 LICENSE ==
 * Copyright (c) 2015, Tidepool Project
 * 
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 * 
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 * == BSD2 LICENSE ==
 */

var Chance = require('chance');
var chance = new Chance();
var common = require('./common');

var TYPE = 'bloodKetone';
var UNITS = 'mmol/L';

var schema = {
  type: {
    instance: TYPE,
    description: common.propTypes.stringValue(TYPE)
  },
  units: {
    instance: UNITS,
    description: common.propTypes.stringValue(UNITS)
  },
  value: {
    instance: function() {
      return chance.floating({min: 0, max: 5, fixed: 1});
    },
    description: '[ingestion, storage, client] Blood ketone value in mmol/L (float), with appropriately matching `units` field.'
  }
};

module.generate = function(utc, format) {
  var bk = common.generate(schema, utc, format);
  return bk;
};

module.propTypes = common.getPropTypes(schema);

module.changeLog = common.getChangeLog(schema);

module.exports = module;