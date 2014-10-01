/**
 * Copyright 2014 Intermedix Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS
 * IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied.  See the License for the specific language
 * governing permissions and limitations under the License.
 */

QUnit.test( 'App JavaScript loaded.', function( assert ) {
  assert.ok(typeof App.displayResults === 'function', 'Passed!' );
});

QUnit.test( 'Filtering test.', function( assert ) {
  // @TODO A a test or two to verify your filtering functionality works.
  // See http://api.qunitjs.com for more details on how to use QUnit.
  assert.ok(false, 'Passed!' );
});
