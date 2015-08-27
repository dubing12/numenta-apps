/* -----------------------------------------------------------------------------
 * Copyright © 2015, Numenta, Inc. Unless you have purchased from
 * Numenta, Inc. a separate commercial license for this software code, the
 * following terms and conditions apply:
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Affero Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero Public License for
 * more details.
 *
 * You should have received a copy of the GNU Affero Public License along with
 * this program. If not, see http://www.gnu.org/licenses.
 *
 * http://numenta.org/licenses/
 * -------------------------------------------------------------------------- */

'use strict';


/**
 * Unicorn: FileServer - Respond to a FileClient over IPC, sharing our access to
 *  the Node/io.js layer of filesystem, so client can CRUD files.
 */

// externals

import fs from 'fs';
import path from 'path';


// MAIN

/**
 *
 */
const FileServer = {

  folder: path.join('frontend', 'samples'),   // @TODO move to config

  /**
   *
   */
  getFile(filename, callback) {
    fs.readFile(path.join(this.folder, filename), callback);
  },

  /**
   *
   */
  getFiles(callback) {
    fs.readdir(this.folder, callback);
  }

};


// EXPORT

export default FileServer;
