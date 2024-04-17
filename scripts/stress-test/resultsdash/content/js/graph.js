/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1117.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 2.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 3.0], [2.6, 3.0], [2.7, 3.0], [2.8, 3.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 3.0], [4.0, 3.0], [4.1, 3.0], [4.2, 3.0], [4.3, 3.0], [4.4, 3.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 4.0], [5.2, 4.0], [5.3, 4.0], [5.4, 4.0], [5.5, 4.0], [5.6, 4.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 4.0], [6.1, 4.0], [6.2, 4.0], [6.3, 4.0], [6.4, 4.0], [6.5, 4.0], [6.6, 4.0], [6.7, 4.0], [6.8, 4.0], [6.9, 4.0], [7.0, 4.0], [7.1, 4.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 5.0], [8.4, 5.0], [8.5, 5.0], [8.6, 5.0], [8.7, 5.0], [8.8, 5.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 5.0], [10.3, 5.0], [10.4, 5.0], [10.5, 5.0], [10.6, 5.0], [10.7, 5.0], [10.8, 5.0], [10.9, 5.0], [11.0, 5.0], [11.1, 5.0], [11.2, 5.0], [11.3, 5.0], [11.4, 5.0], [11.5, 5.0], [11.6, 5.0], [11.7, 5.0], [11.8, 5.0], [11.9, 5.0], [12.0, 5.0], [12.1, 5.0], [12.2, 6.0], [12.3, 6.0], [12.4, 6.0], [12.5, 6.0], [12.6, 6.0], [12.7, 6.0], [12.8, 6.0], [12.9, 6.0], [13.0, 6.0], [13.1, 6.0], [13.2, 6.0], [13.3, 6.0], [13.4, 6.0], [13.5, 6.0], [13.6, 6.0], [13.7, 6.0], [13.8, 6.0], [13.9, 6.0], [14.0, 6.0], [14.1, 6.0], [14.2, 6.0], [14.3, 6.0], [14.4, 6.0], [14.5, 6.0], [14.6, 6.0], [14.7, 6.0], [14.8, 6.0], [14.9, 6.0], [15.0, 6.0], [15.1, 6.0], [15.2, 6.0], [15.3, 6.0], [15.4, 6.0], [15.5, 6.0], [15.6, 6.0], [15.7, 6.0], [15.8, 6.0], [15.9, 6.0], [16.0, 7.0], [16.1, 7.0], [16.2, 7.0], [16.3, 7.0], [16.4, 7.0], [16.5, 7.0], [16.6, 7.0], [16.7, 7.0], [16.8, 7.0], [16.9, 7.0], [17.0, 7.0], [17.1, 7.0], [17.2, 7.0], [17.3, 7.0], [17.4, 7.0], [17.5, 7.0], [17.6, 7.0], [17.7, 7.0], [17.8, 7.0], [17.9, 7.0], [18.0, 7.0], [18.1, 7.0], [18.2, 7.0], [18.3, 7.0], [18.4, 7.0], [18.5, 7.0], [18.6, 7.0], [18.7, 7.0], [18.8, 7.0], [18.9, 7.0], [19.0, 7.0], [19.1, 7.0], [19.2, 7.0], [19.3, 7.0], [19.4, 7.0], [19.5, 7.0], [19.6, 8.0], [19.7, 8.0], [19.8, 8.0], [19.9, 8.0], [20.0, 8.0], [20.1, 8.0], [20.2, 8.0], [20.3, 8.0], [20.4, 8.0], [20.5, 8.0], [20.6, 8.0], [20.7, 8.0], [20.8, 8.0], [20.9, 8.0], [21.0, 8.0], [21.1, 8.0], [21.2, 8.0], [21.3, 8.0], [21.4, 8.0], [21.5, 8.0], [21.6, 8.0], [21.7, 8.0], [21.8, 8.0], [21.9, 8.0], [22.0, 8.0], [22.1, 8.0], [22.2, 8.0], [22.3, 8.0], [22.4, 8.0], [22.5, 8.0], [22.6, 8.0], [22.7, 8.0], [22.8, 9.0], [22.9, 9.0], [23.0, 9.0], [23.1, 9.0], [23.2, 9.0], [23.3, 9.0], [23.4, 9.0], [23.5, 9.0], [23.6, 9.0], [23.7, 9.0], [23.8, 9.0], [23.9, 9.0], [24.0, 9.0], [24.1, 9.0], [24.2, 9.0], [24.3, 9.0], [24.4, 9.0], [24.5, 9.0], [24.6, 9.0], [24.7, 9.0], [24.8, 9.0], [24.9, 9.0], [25.0, 9.0], [25.1, 9.0], [25.2, 9.0], [25.3, 9.0], [25.4, 9.0], [25.5, 9.0], [25.6, 9.0], [25.7, 9.0], [25.8, 10.0], [25.9, 10.0], [26.0, 10.0], [26.1, 10.0], [26.2, 10.0], [26.3, 10.0], [26.4, 10.0], [26.5, 10.0], [26.6, 10.0], [26.7, 10.0], [26.8, 10.0], [26.9, 10.0], [27.0, 10.0], [27.1, 10.0], [27.2, 10.0], [27.3, 10.0], [27.4, 10.0], [27.5, 10.0], [27.6, 10.0], [27.7, 10.0], [27.8, 10.0], [27.9, 10.0], [28.0, 10.0], [28.1, 10.0], [28.2, 10.0], [28.3, 11.0], [28.4, 11.0], [28.5, 11.0], [28.6, 11.0], [28.7, 11.0], [28.8, 11.0], [28.9, 11.0], [29.0, 11.0], [29.1, 11.0], [29.2, 11.0], [29.3, 11.0], [29.4, 11.0], [29.5, 11.0], [29.6, 11.0], [29.7, 11.0], [29.8, 11.0], [29.9, 11.0], [30.0, 11.0], [30.1, 11.0], [30.2, 11.0], [30.3, 11.0], [30.4, 11.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 12.0], [31.4, 12.0], [31.5, 12.0], [31.6, 12.0], [31.7, 12.0], [31.8, 12.0], [31.9, 12.0], [32.0, 12.0], [32.1, 12.0], [32.2, 12.0], [32.3, 12.0], [32.4, 12.0], [32.5, 13.0], [32.6, 13.0], [32.7, 13.0], [32.8, 13.0], [32.9, 13.0], [33.0, 13.0], [33.1, 13.0], [33.2, 13.0], [33.3, 13.0], [33.4, 13.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 13.0], [34.1, 14.0], [34.2, 14.0], [34.3, 14.0], [34.4, 14.0], [34.5, 14.0], [34.6, 14.0], [34.7, 14.0], [34.8, 14.0], [34.9, 14.0], [35.0, 14.0], [35.1, 14.0], [35.2, 14.0], [35.3, 14.0], [35.4, 14.0], [35.5, 15.0], [35.6, 15.0], [35.7, 15.0], [35.8, 15.0], [35.9, 15.0], [36.0, 15.0], [36.1, 15.0], [36.2, 15.0], [36.3, 15.0], [36.4, 15.0], [36.5, 15.0], [36.6, 15.0], [36.7, 15.0], [36.8, 16.0], [36.9, 16.0], [37.0, 16.0], [37.1, 16.0], [37.2, 16.0], [37.3, 16.0], [37.4, 16.0], [37.5, 16.0], [37.6, 16.0], [37.7, 16.0], [37.8, 16.0], [37.9, 17.0], [38.0, 17.0], [38.1, 17.0], [38.2, 17.0], [38.3, 17.0], [38.4, 17.0], [38.5, 17.0], [38.6, 17.0], [38.7, 17.0], [38.8, 17.0], [38.9, 18.0], [39.0, 18.0], [39.1, 18.0], [39.2, 18.0], [39.3, 18.0], [39.4, 18.0], [39.5, 18.0], [39.6, 19.0], [39.7, 19.0], [39.8, 19.0], [39.9, 19.0], [40.0, 19.0], [40.1, 19.0], [40.2, 20.0], [40.3, 20.0], [40.4, 20.0], [40.5, 20.0], [40.6, 21.0], [40.7, 21.0], [40.8, 21.0], [40.9, 22.0], [41.0, 22.0], [41.1, 22.0], [41.2, 23.0], [41.3, 24.0], [41.4, 28.0], [41.5, 70.0], [41.6, 74.0], [41.7, 76.0], [41.8, 77.0], [41.9, 77.0], [42.0, 78.0], [42.1, 78.0], [42.2, 78.0], [42.3, 78.0], [42.4, 79.0], [42.5, 79.0], [42.6, 79.0], [42.7, 79.0], [42.8, 79.0], [42.9, 80.0], [43.0, 80.0], [43.1, 80.0], [43.2, 80.0], [43.3, 80.0], [43.4, 80.0], [43.5, 80.0], [43.6, 80.0], [43.7, 80.0], [43.8, 81.0], [43.9, 81.0], [44.0, 81.0], [44.1, 81.0], [44.2, 81.0], [44.3, 81.0], [44.4, 81.0], [44.5, 81.0], [44.6, 81.0], [44.7, 81.0], [44.8, 81.0], [44.9, 81.0], [45.0, 81.0], [45.1, 82.0], [45.2, 82.0], [45.3, 82.0], [45.4, 82.0], [45.5, 82.0], [45.6, 82.0], [45.7, 82.0], [45.8, 82.0], [45.9, 82.0], [46.0, 82.0], [46.1, 82.0], [46.2, 82.0], [46.3, 83.0], [46.4, 83.0], [46.5, 83.0], [46.6, 83.0], [46.7, 83.0], [46.8, 83.0], [46.9, 83.0], [47.0, 83.0], [47.1, 83.0], [47.2, 83.0], [47.3, 83.0], [47.4, 83.0], [47.5, 83.0], [47.6, 83.0], [47.7, 83.0], [47.8, 83.0], [47.9, 83.0], [48.0, 84.0], [48.1, 84.0], [48.2, 84.0], [48.3, 84.0], [48.4, 84.0], [48.5, 84.0], [48.6, 84.0], [48.7, 84.0], [48.8, 84.0], [48.9, 84.0], [49.0, 84.0], [49.1, 84.0], [49.2, 84.0], [49.3, 84.0], [49.4, 84.0], [49.5, 84.0], [49.6, 84.0], [49.7, 84.0], [49.8, 85.0], [49.9, 85.0], [50.0, 85.0], [50.1, 85.0], [50.2, 85.0], [50.3, 85.0], [50.4, 85.0], [50.5, 85.0], [50.6, 85.0], [50.7, 85.0], [50.8, 85.0], [50.9, 85.0], [51.0, 85.0], [51.1, 85.0], [51.2, 85.0], [51.3, 85.0], [51.4, 85.0], [51.5, 85.0], [51.6, 86.0], [51.7, 86.0], [51.8, 86.0], [51.9, 86.0], [52.0, 86.0], [52.1, 86.0], [52.2, 86.0], [52.3, 86.0], [52.4, 86.0], [52.5, 86.0], [52.6, 86.0], [52.7, 86.0], [52.8, 86.0], [52.9, 86.0], [53.0, 86.0], [53.1, 86.0], [53.2, 86.0], [53.3, 87.0], [53.4, 87.0], [53.5, 87.0], [53.6, 87.0], [53.7, 87.0], [53.8, 87.0], [53.9, 87.0], [54.0, 87.0], [54.1, 87.0], [54.2, 87.0], [54.3, 87.0], [54.4, 87.0], [54.5, 87.0], [54.6, 87.0], [54.7, 87.0], [54.8, 87.0], [54.9, 87.0], [55.0, 87.0], [55.1, 88.0], [55.2, 88.0], [55.3, 88.0], [55.4, 88.0], [55.5, 88.0], [55.6, 88.0], [55.7, 88.0], [55.8, 88.0], [55.9, 88.0], [56.0, 88.0], [56.1, 88.0], [56.2, 88.0], [56.3, 88.0], [56.4, 88.0], [56.5, 88.0], [56.6, 88.0], [56.7, 88.0], [56.8, 88.0], [56.9, 88.0], [57.0, 89.0], [57.1, 89.0], [57.2, 89.0], [57.3, 89.0], [57.4, 89.0], [57.5, 89.0], [57.6, 89.0], [57.7, 89.0], [57.8, 89.0], [57.9, 89.0], [58.0, 89.0], [58.1, 89.0], [58.2, 89.0], [58.3, 89.0], [58.4, 89.0], [58.5, 89.0], [58.6, 89.0], [58.7, 89.0], [58.8, 90.0], [58.9, 90.0], [59.0, 90.0], [59.1, 90.0], [59.2, 90.0], [59.3, 90.0], [59.4, 90.0], [59.5, 90.0], [59.6, 90.0], [59.7, 90.0], [59.8, 90.0], [59.9, 90.0], [60.0, 90.0], [60.1, 90.0], [60.2, 90.0], [60.3, 90.0], [60.4, 90.0], [60.5, 91.0], [60.6, 91.0], [60.7, 91.0], [60.8, 91.0], [60.9, 91.0], [61.0, 91.0], [61.1, 91.0], [61.2, 91.0], [61.3, 91.0], [61.4, 91.0], [61.5, 91.0], [61.6, 91.0], [61.7, 91.0], [61.8, 91.0], [61.9, 91.0], [62.0, 91.0], [62.1, 91.0], [62.2, 92.0], [62.3, 92.0], [62.4, 92.0], [62.5, 92.0], [62.6, 92.0], [62.7, 92.0], [62.8, 92.0], [62.9, 92.0], [63.0, 92.0], [63.1, 92.0], [63.2, 92.0], [63.3, 92.0], [63.4, 92.0], [63.5, 92.0], [63.6, 92.0], [63.7, 92.0], [63.8, 92.0], [63.9, 92.0], [64.0, 93.0], [64.1, 93.0], [64.2, 93.0], [64.3, 93.0], [64.4, 93.0], [64.5, 93.0], [64.6, 93.0], [64.7, 93.0], [64.8, 93.0], [64.9, 93.0], [65.0, 93.0], [65.1, 93.0], [65.2, 93.0], [65.3, 93.0], [65.4, 93.0], [65.5, 93.0], [65.6, 93.0], [65.7, 93.0], [65.8, 93.0], [65.9, 94.0], [66.0, 94.0], [66.1, 94.0], [66.2, 94.0], [66.3, 94.0], [66.4, 94.0], [66.5, 94.0], [66.6, 94.0], [66.7, 94.0], [66.8, 94.0], [66.9, 94.0], [67.0, 94.0], [67.1, 94.0], [67.2, 94.0], [67.3, 94.0], [67.4, 95.0], [67.5, 95.0], [67.6, 95.0], [67.7, 95.0], [67.8, 95.0], [67.9, 95.0], [68.0, 95.0], [68.1, 95.0], [68.2, 95.0], [68.3, 95.0], [68.4, 95.0], [68.5, 95.0], [68.6, 95.0], [68.7, 95.0], [68.8, 95.0], [68.9, 95.0], [69.0, 95.0], [69.1, 96.0], [69.2, 96.0], [69.3, 96.0], [69.4, 96.0], [69.5, 96.0], [69.6, 96.0], [69.7, 96.0], [69.8, 96.0], [69.9, 96.0], [70.0, 96.0], [70.1, 96.0], [70.2, 96.0], [70.3, 96.0], [70.4, 96.0], [70.5, 96.0], [70.6, 96.0], [70.7, 97.0], [70.8, 97.0], [70.9, 97.0], [71.0, 97.0], [71.1, 97.0], [71.2, 97.0], [71.3, 97.0], [71.4, 97.0], [71.5, 97.0], [71.6, 97.0], [71.7, 97.0], [71.8, 97.0], [71.9, 97.0], [72.0, 97.0], [72.1, 97.0], [72.2, 97.0], [72.3, 98.0], [72.4, 98.0], [72.5, 98.0], [72.6, 98.0], [72.7, 98.0], [72.8, 98.0], [72.9, 98.0], [73.0, 98.0], [73.1, 98.0], [73.2, 98.0], [73.3, 98.0], [73.4, 98.0], [73.5, 98.0], [73.6, 98.0], [73.7, 98.0], [73.8, 98.0], [73.9, 99.0], [74.0, 99.0], [74.1, 99.0], [74.2, 99.0], [74.3, 99.0], [74.4, 99.0], [74.5, 99.0], [74.6, 99.0], [74.7, 99.0], [74.8, 99.0], [74.9, 99.0], [75.0, 99.0], [75.1, 99.0], [75.2, 100.0], [75.3, 100.0], [75.4, 100.0], [75.5, 100.0], [75.6, 100.0], [75.7, 100.0], [75.8, 100.0], [75.9, 100.0], [76.0, 100.0], [76.1, 100.0], [76.2, 100.0], [76.3, 100.0], [76.4, 100.0], [76.5, 100.0], [76.6, 101.0], [76.7, 101.0], [76.8, 101.0], [76.9, 101.0], [77.0, 101.0], [77.1, 101.0], [77.2, 101.0], [77.3, 101.0], [77.4, 101.0], [77.5, 101.0], [77.6, 101.0], [77.7, 101.0], [77.8, 101.0], [77.9, 101.0], [78.0, 102.0], [78.1, 102.0], [78.2, 102.0], [78.3, 102.0], [78.4, 102.0], [78.5, 102.0], [78.6, 102.0], [78.7, 102.0], [78.8, 102.0], [78.9, 102.0], [79.0, 103.0], [79.1, 103.0], [79.2, 103.0], [79.3, 103.0], [79.4, 103.0], [79.5, 103.0], [79.6, 103.0], [79.7, 103.0], [79.8, 103.0], [79.9, 103.0], [80.0, 103.0], [80.1, 103.0], [80.2, 104.0], [80.3, 104.0], [80.4, 104.0], [80.5, 104.0], [80.6, 104.0], [80.7, 104.0], [80.8, 104.0], [80.9, 104.0], [81.0, 105.0], [81.1, 105.0], [81.2, 105.0], [81.3, 105.0], [81.4, 105.0], [81.5, 105.0], [81.6, 105.0], [81.7, 106.0], [81.8, 106.0], [81.9, 106.0], [82.0, 106.0], [82.1, 106.0], [82.2, 106.0], [82.3, 107.0], [82.4, 107.0], [82.5, 107.0], [82.6, 107.0], [82.7, 107.0], [82.8, 107.0], [82.9, 108.0], [83.0, 108.0], [83.1, 108.0], [83.2, 108.0], [83.3, 108.0], [83.4, 109.0], [83.5, 109.0], [83.6, 109.0], [83.7, 109.0], [83.8, 109.0], [83.9, 110.0], [84.0, 110.0], [84.1, 110.0], [84.2, 111.0], [84.3, 111.0], [84.4, 111.0], [84.5, 111.0], [84.6, 112.0], [84.7, 112.0], [84.8, 112.0], [84.9, 113.0], [85.0, 113.0], [85.1, 113.0], [85.2, 113.0], [85.3, 114.0], [85.4, 114.0], [85.5, 115.0], [85.6, 115.0], [85.7, 116.0], [85.8, 117.0], [85.9, 117.0], [86.0, 118.0], [86.1, 119.0], [86.2, 119.0], [86.3, 121.0], [86.4, 123.0], [86.5, 173.0], [86.6, 176.0], [86.7, 177.0], [86.8, 178.0], [86.9, 178.0], [87.0, 179.0], [87.1, 179.0], [87.2, 180.0], [87.3, 180.0], [87.4, 180.0], [87.5, 181.0], [87.6, 181.0], [87.7, 181.0], [87.8, 182.0], [87.9, 182.0], [88.0, 182.0], [88.1, 182.0], [88.2, 183.0], [88.3, 183.0], [88.4, 183.0], [88.5, 183.0], [88.6, 184.0], [88.7, 184.0], [88.8, 185.0], [88.9, 185.0], [89.0, 185.0], [89.1, 185.0], [89.2, 186.0], [89.3, 186.0], [89.4, 187.0], [89.5, 187.0], [89.6, 187.0], [89.7, 187.0], [89.8, 188.0], [89.9, 188.0], [90.0, 188.0], [90.1, 189.0], [90.2, 189.0], [90.3, 189.0], [90.4, 190.0], [90.5, 190.0], [90.6, 190.0], [90.7, 191.0], [90.8, 191.0], [90.9, 191.0], [91.0, 192.0], [91.1, 192.0], [91.2, 192.0], [91.3, 193.0], [91.4, 193.0], [91.5, 193.0], [91.6, 194.0], [91.7, 194.0], [91.8, 194.0], [91.9, 195.0], [92.0, 195.0], [92.1, 195.0], [92.2, 196.0], [92.3, 196.0], [92.4, 196.0], [92.5, 197.0], [92.6, 197.0], [92.7, 197.0], [92.8, 198.0], [92.9, 198.0], [93.0, 198.0], [93.1, 198.0], [93.2, 199.0], [93.3, 199.0], [93.4, 199.0], [93.5, 200.0], [93.6, 200.0], [93.7, 200.0], [93.8, 201.0], [93.9, 201.0], [94.0, 202.0], [94.1, 202.0], [94.2, 202.0], [94.3, 203.0], [94.4, 203.0], [94.5, 204.0], [94.6, 204.0], [94.7, 205.0], [94.8, 205.0], [94.9, 206.0], [95.0, 207.0], [95.1, 208.0], [95.2, 209.0], [95.3, 210.0], [95.4, 211.0], [95.5, 212.0], [95.6, 214.0], [95.7, 216.0], [95.8, 220.0], [95.9, 274.0], [96.0, 279.0], [96.1, 280.0], [96.2, 283.0], [96.3, 285.0], [96.4, 286.0], [96.5, 287.0], [96.6, 288.0], [96.7, 289.0], [96.8, 291.0], [96.9, 292.0], [97.0, 293.0], [97.1, 294.0], [97.2, 295.0], [97.3, 296.0], [97.4, 298.0], [97.5, 299.0], [97.6, 300.0], [97.7, 301.0], [97.8, 302.0], [97.9, 303.0], [98.0, 305.0], [98.1, 307.0], [98.2, 309.0], [98.3, 313.0], [98.4, 317.0], [98.5, 381.0], [98.6, 385.0], [98.7, 391.0], [98.8, 394.0], [98.9, 396.0], [99.0, 399.0], [99.1, 402.0], [99.2, 407.0], [99.3, 415.0], [99.4, 485.0], [99.5, 496.0], [99.6, 511.0], [99.7, 596.0], [99.8, 689.0], [99.9, 800.0], [100.0, 1117.0]], "isOverall": false, "label": "Get by ID clusterIP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 18798.0, "series": [{"data": [[0.0, 18798.0], [1100.0, 2.0], [300.0, 358.0], [600.0, 29.0], [700.0, 17.0], [100.0, 4562.0], [200.0, 1033.0], [400.0, 128.0], [800.0, 12.0], [900.0, 9.0], [500.0, 49.0], [1000.0, 3.0]], "isOverall": false, "label": "Get by ID clusterIP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 586.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 24414.0, "series": [{"data": [[0.0, 24414.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 586.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 15.22285215874396, "minX": 1.71338526E12, "maxY": 24.61825726141072, "series": [{"data": [[1.71338532E12, 24.61825726141072], [1.71338538E12, 15.22285215874396], [1.71338526E12, 20.310400285918536]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71338538E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 3.931506849315071, "minX": 1.0, "maxY": 89.23309661633947, "series": [{"data": [[2.0, 6.5328947368421035], [3.0, 17.684931506849317], [4.0, 37.52173913043479], [5.0, 17.2], [6.0, 21.525925925925915], [7.0, 23.454022988505766], [8.0, 44.50704225352112], [9.0, 40.14953271028038], [10.0, 32.4698795180723], [11.0, 38.89121338912135], [12.0, 55.85454545454544], [13.0, 36.07926829268295], [14.0, 37.64143426294821], [15.0, 52.91666666666667], [1.0, 3.931506849315071], [16.0, 41.265873015873005], [17.0, 55.52592592592597], [18.0, 38.57517482517482], [19.0, 74.54032258064512], [20.0, 48.922544951590524], [21.0, 84.4095744680851], [22.0, 62.359756097560975], [23.0, 77.98149637972647], [24.0, 82.54655444502896], [25.0, 89.23309661633947]], "isOverall": false, "label": "Get by ID clusterIP", "isController": false}, {"data": [[22.79223999999998, 79.12424000000058]], "isOverall": false, "label": "Get by ID clusterIP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 5121.033333333334, "minX": 1.71338526E12, "maxY": 229316.28333333333, "series": [{"data": [[1.71338532E12, 229316.28333333333], [1.71338538E12, 30736.816666666666], [1.71338526E12, 74973.63333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71338532E12, 38214.566666666666], [1.71338538E12, 5121.033333333334], [1.71338526E12, 12497.733333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71338538E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 35.19668556476229, "minX": 1.71338526E12, "maxY": 85.99959090643489, "series": [{"data": [[1.71338532E12, 85.99959090643489], [1.71338538E12, 35.19668556476229], [1.71338526E12, 76.10096497498209]], "isOverall": false, "label": "Get by ID clusterIP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71338538E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 34.88791975577847, "minX": 1.71338526E12, "maxY": 84.70814096195457, "series": [{"data": [[1.71338532E12, 84.70814096195457], [1.71338538E12, 34.88791975577847], [1.71338526E12, 75.15439599714081]], "isOverall": false, "label": "Get by ID clusterIP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71338538E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.71338526E12, "maxY": 0.008220157255182258, "series": [{"data": [[1.71338532E12, 0.007539009993571404], [1.71338538E12, 0.0], [1.71338526E12, 0.008220157255182258]], "isOverall": false, "label": "Get by ID clusterIP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71338538E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.71338526E12, "maxY": 300.0, "series": [{"data": [[1.71338532E12, 300.0], [1.71338538E12, 298.0], [1.71338526E12, 300.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71338532E12, 186.0], [1.71338538E12, 89.0], [1.71338526E12, 181.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71338532E12, 290.0], [1.71338538E12, 192.09000000000015], [1.71338526E12, 289.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71338532E12, 200.0], [1.71338538E12, 96.0], [1.71338526E12, 195.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71338532E12, 1.0], [1.71338538E12, 1.0], [1.71338526E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71338532E12, 87.0], [1.71338538E12, 9.0], [1.71338526E12, 83.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71338538E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 98.0, "maxY": 707.0, "series": [{"data": [[98.0, 184.0], [110.0, 109.0], [136.0, 95.0], [151.0, 100.0], [158.0, 6.5], [163.0, 3.0], [169.0, 107.0], [173.0, 103.5], [182.0, 82.5], [181.0, 96.0], [179.0, 88.0], [177.0, 101.0], [191.0, 94.0], [197.0, 9.0], [203.0, 95.0], [200.0, 100.5], [206.0, 97.0], [214.0, 13.0], [215.0, 95.5], [216.0, 97.0], [222.0, 88.0], [229.0, 96.0], [239.0, 16.0], [237.0, 92.0], [235.0, 85.0], [245.0, 87.0], [242.0, 90.0], [241.0, 89.0], [243.0, 96.0], [253.0, 96.0], [252.0, 90.0], [256.0, 90.0], [261.0, 95.0], [260.0, 86.0], [267.0, 88.0], [266.0, 94.0], [284.0, 76.5], [278.0, 88.5], [283.0, 88.0], [272.0, 93.0], [273.0, 87.0], [294.0, 88.0], [300.0, 88.0], [297.0, 83.0], [293.0, 89.0], [295.0, 19.0], [296.0, 17.0], [311.0, 86.0], [304.0, 83.0], [307.0, 88.0], [312.0, 83.0], [330.0, 87.0], [326.0, 83.0], [333.0, 85.0], [332.0, 82.5], [341.0, 81.0], [351.0, 22.0], [337.0, 85.0], [348.0, 84.0], [354.0, 85.0], [364.0, 86.0], [365.0, 80.5], [362.0, 80.5], [370.0, 86.0], [381.0, 79.0], [378.0, 84.0], [392.0, 80.0], [394.0, 19.0], [418.0, 79.0], [446.0, 15.0], [462.0, 7.0], [465.0, 15.0], [494.0, 12.0], [510.0, 10.0], [511.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[98.0, 493.0], [110.0, 601.0], [136.0, 707.0], [151.0, 407.0], [169.0, 403.5], [173.0, 381.0], [181.0, 396.0], [179.0, 319.0], [177.0, 401.5], [191.0, 382.0], [203.0, 392.0], [200.0, 389.0], [206.0, 348.0], [214.0, 310.0], [215.0, 400.0], [216.0, 392.0], [222.0, 302.0], [229.0, 313.0], [239.0, 351.0], [237.0, 405.0], [235.0, 491.0], [245.0, 397.0], [242.0, 395.0], [241.0, 387.0], [253.0, 302.0], [252.0, 477.0], [256.0, 303.0], [261.0, 547.5], [260.0, 396.0], [267.0, 398.0], [266.0, 321.0], [278.0, 391.0], [284.0, 307.5], [283.0, 437.0], [272.0, 306.0], [273.0, 383.0], [294.0, 350.0], [300.0, 301.0], [297.0, 387.0], [293.0, 411.5], [295.0, 404.0], [296.0, 396.0], [311.0, 382.5], [307.0, 389.0], [330.0, 390.0], [326.0, 307.0], [332.0, 385.5], [351.0, 399.0], [337.0, 314.0], [348.0, 350.0], [341.0, 496.0], [354.0, 396.0], [364.0, 340.0], [365.0, 308.0], [381.0, 317.0], [392.0, 303.0], [394.0, 406.0], [418.0, 450.0], [446.0, 301.0], [465.0, 309.0], [494.0, 302.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 511.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 98.0, "maxY": 703.0, "series": [{"data": [[98.0, 184.0], [110.0, 109.0], [136.0, 95.0], [151.0, 100.0], [158.0, 6.0], [163.0, 3.0], [169.0, 107.0], [173.0, 103.0], [182.0, 82.0], [181.0, 96.0], [179.0, 88.0], [177.0, 100.0], [191.0, 94.0], [197.0, 8.0], [203.0, 95.0], [200.0, 98.5], [206.0, 96.0], [214.0, 13.0], [215.0, 95.0], [216.0, 96.0], [222.0, 88.0], [229.0, 96.0], [239.0, 16.0], [237.0, 92.0], [235.0, 85.0], [245.0, 86.0], [242.0, 89.5], [241.0, 88.0], [243.0, 96.0], [253.0, 96.0], [252.0, 90.0], [256.0, 90.0], [261.0, 95.0], [260.0, 84.0], [267.0, 88.0], [266.0, 94.0], [284.0, 48.0], [278.0, 88.0], [283.0, 88.0], [272.0, 92.0], [273.0, 86.0], [294.0, 87.0], [300.0, 87.0], [297.0, 83.0], [293.0, 89.0], [295.0, 19.0], [296.0, 17.0], [311.0, 86.0], [304.0, 82.0], [307.0, 88.0], [312.0, 82.5], [330.0, 86.0], [326.0, 83.0], [333.0, 85.0], [332.0, 82.0], [341.0, 79.5], [351.0, 22.0], [337.0, 85.0], [348.0, 83.0], [354.0, 85.0], [364.0, 86.0], [365.0, 80.0], [362.0, 80.0], [370.0, 85.0], [381.0, 79.0], [378.0, 84.0], [392.0, 80.0], [394.0, 19.0], [418.0, 79.0], [446.0, 14.0], [462.0, 7.0], [465.0, 15.0], [494.0, 12.0], [510.0, 10.0], [511.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[98.0, 493.0], [110.0, 596.0], [136.0, 703.0], [151.0, 403.0], [169.0, 353.0], [173.0, 309.0], [181.0, 396.0], [179.0, 319.0], [177.0, 401.5], [191.0, 382.0], [203.0, 392.0], [200.0, 389.0], [206.0, 348.0], [214.0, 310.0], [215.0, 400.0], [216.0, 392.0], [222.0, 302.0], [229.0, 308.0], [239.0, 347.0], [237.0, 405.0], [235.0, 399.0], [245.0, 397.0], [242.0, 395.0], [241.0, 387.0], [253.0, 302.0], [252.0, 477.0], [256.0, 303.0], [261.0, 547.5], [260.0, 396.0], [267.0, 398.0], [266.0, 321.0], [278.0, 389.0], [284.0, 307.5], [283.0, 437.0], [272.0, 306.0], [273.0, 383.0], [294.0, 350.0], [300.0, 301.0], [297.0, 387.0], [293.0, 411.5], [295.0, 400.0], [296.0, 396.0], [311.0, 381.5], [307.0, 389.0], [330.0, 390.0], [326.0, 307.0], [332.0, 385.5], [351.0, 399.0], [337.0, 314.0], [348.0, 346.5], [341.0, 396.0], [354.0, 245.5], [364.0, 296.5], [365.0, 308.0], [381.0, 317.0], [392.0, 303.0], [394.0, 406.0], [418.0, 450.0], [446.0, 301.0], [465.0, 309.0], [494.0, 302.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 511.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 37.86666666666667, "minX": 1.71338526E12, "maxY": 285.1166666666667, "series": [{"data": [[1.71338532E12, 285.1166666666667], [1.71338538E12, 37.86666666666667], [1.71338526E12, 93.68333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71338538E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 38.21666666666667, "minX": 1.71338526E12, "maxY": 285.18333333333334, "series": [{"data": [[1.71338532E12, 285.18333333333334], [1.71338538E12, 38.21666666666667], [1.71338526E12, 93.26666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71338538E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.71338526E12, "maxY": 277.4166666666667, "series": [{"data": [[1.71338532E12, 277.4166666666667], [1.71338538E12, 38.166666666666664], [1.71338526E12, 91.31666666666666]], "isOverall": false, "label": "Get by ID clusterIP-success", "isController": false}, {"data": [[1.71338532E12, 7.766666666666667], [1.71338538E12, 0.05], [1.71338526E12, 1.95]], "isOverall": false, "label": "Get by ID clusterIP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71338538E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.71338526E12, "maxY": 277.4166666666667, "series": [{"data": [[1.71338532E12, 277.4166666666667], [1.71338538E12, 38.166666666666664], [1.71338526E12, 91.31666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71338532E12, 7.766666666666667], [1.71338538E12, 0.05], [1.71338526E12, 1.95]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71338538E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

