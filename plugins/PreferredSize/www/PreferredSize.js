/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/



module.exports = {
    
    setPreferredSize: function (onSuccess, onErr, args) {
        try{
            var ViewManagement = Windows.UI.ViewManagement;
            var ApplicationView = ViewManagement.ApplicationView;
            view.setPreferredMinSize({ width: 860, height: 680 });
            onSuccess();
        }catch(err){
            onErr(err);
        }
    }

}; // exports

require('cordova/exec/proxy').add('PreferredSize', module.exports);
