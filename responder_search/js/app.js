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


/**
 * Namespace for our demo application.
 */
var App = (function() {

  /**
   * Results object
   */
  var _results = {};

  /**
   * Retrieves all responders, then updates the table.
   *
   * @param   void
   * @return  void
   */
  function displayResults() {
    $.ajax({
      type: 'POST',
      url: 'responder_search.php',
      dataType: 'json',
      success: function(data) {
        _results = data;
        _redrawTable();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert('Error. Check the console for more details.');
        console.log(XMLHttpRequest);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });
  }

  /**
   * This updates the table, removing old rows and replacing them
   * with the data in _results.
   *
   * @param   void
   * @return  void
   */
  function _redrawTable() {
    if (!_results) { return; }

    var rows = '';
    for (var i in _results) {
      var responder = _results[i];
      rows += '<tr>' +
                '<td>' + responder.name + '</td>' +
                '<td>' + responder.occupation + '</td>' +
                '<td>' + responder.city + ', ' + responder.state + '</td>' +
                '<td>' + responder.status + '</td>' +
              '</tr>';
    }

    var _rEscapeChars = /\/|\\|\.|\||\*|\&|\+|\(|\)|\[|\]|\?|\$|\^/g;
    var _rMatch = /[A-Z]+[a-z]+|[0-9]+/g;
    var _length = _results.length;
    var result = $('#responder_results tbody');
    var search = $('.search-query');
    var occfilter = $('#occupation-filter');
    var avfilter = $('#availability-filter');

    result.html(rows);

    search.on("keyup", function () {
      var value = search.val().replace(_rEscapeChars, "");
      var regex = new RegExp(value, "i");
      var matches = [];
      if (value) {
        for (var i = _length; i--;) {
          if (regex.test(_results[i].name)) {
            matches.push(_results[i]);
          } else {
            result.html('No matches, please try again.');
          }
        }
        if (matches.length) {
          var newrows = '';
          for (var i = matches.length; i--;) {
            newrows += '<tr>' +
                        '<td>' + matches[i].name + '</td>' +
                        '<td>' + matches[i].occupation + '</td>' +
                        '<td>' + matches[i].city + ', ' + matches[i].state + '</td>' +
                        '<td>' + matches[i].status + '</td>' +
                      '</tr>'
          }
          result.html(newrows);
        }
      } else {
        result.html(rows);
      }
    });

    occfilter.on('change', function() {
      var occ = $.grep(_results, function(el, i) {
        if (el.occupation === occfilter.val()) {
          return el;
        }
      });
      var occrows = '';
      for (var i = occ.length; i--;) {
        occrows += '<tr>' +
                    '<td>' + occ[i].name + '</td>' +
                    '<td>' + occ[i].occupation + '</td>' +
                    '<td>' + occ[i].city + ', ' + occ[i].state + '</td>' +
                    '<td>' + occ[i].status + '</td>' +
                  '</tr>'
      }

      if (occrows.length > 0) {
        result.html(occrows);
      } else {
        result.html(rows);
      }
    });

    avfilter.on('change', function() {
      var av = $.grep(_results, function(el, i) {
        if (el.status === avfilter.val()) {
          return el;
        }
      });
      var avrows = '';
      for (var i = av.length; i--;) {
        avrows +=  '<tr>' +
                  '<td>' + av[i].name + '</td>' +
                  '<td>' + av[i].occupation + '</td>' +
                  '<td>' + av[i].city + ', ' + av[i].state + '</td>' +
                  '<td>' + av[i].status + '</td>' +
                '</tr>'
      }

      if (avrows.length > 0) {
        result.html(avrows);
      } else {
        result.html(rows);
      }
    });
  }

  /**
   * Expose public methods.
   */
  return {
    displayResults: displayResults
  };

})();

$(document).ready(function() {
  App.displayResults();
});
