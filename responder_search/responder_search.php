<?php
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

class responder_search {

  /**
   * Returns a hard-coded array of responder data.
   * 
   * @param   void
   * @return  array  The responder's name, occupation, location, and status.
   */
  public static function get_results() {
    return array(
       array('name' => 'Christopher Baker',
             'occupation' => 'Respiratory Therapist',
             'city' => 'Pittsburgh',
             'state' => 'PA',
             'status' => 'Available'
      ),
       array('name' => 'Elizabeth Brown',
             'occupation' => 'Veterinarian',
             'city' => 'Fort Lauderdale',
             'state' => 'FL',
             'status' => 'Unknown'
      ),
       array('name' => 'Nathan Allan',
             'occupation' => 'Physician',
             'city' => 'Pittsburgh',
             'state' => 'PA',
             'status' => 'Not Available'
      ),
      array('name' => 'Wendy Campbell',
            'occupation' => 'Veterinarian',
            'city' => 'Milwaukee',
            'state' => 'WI',
            'status' => 'Available'
      )
    );
  }

}

$results = responder_search::get_results();
echo json_encode($results);

?>
