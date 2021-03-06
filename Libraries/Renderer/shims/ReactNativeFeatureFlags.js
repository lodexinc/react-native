/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNativeFeatureFlags
 * @flow
 */

'use strict';

var ReactNativeFeatureFlags = {
  useFiber: false,
};

if (__DEV__) {
  require('Systrace').installReactHook(false);
}

module.exports = ReactNativeFeatureFlags;
