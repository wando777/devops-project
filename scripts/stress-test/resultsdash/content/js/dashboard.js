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
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 97.656, "KoPercent": 2.344};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.97656, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.97656, 500, 1500, "Get by ID clusterIP"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 25000, 586, 2.344, 79.12424000000058, 1, 1117, 85.0, 189.0, 207.0, 398.9900000000016, 286.22458325700677, 224.74895420692894, 37.45517007464738], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Get by ID clusterIP", 25000, 586, 2.344, 79.12424000000058, 1, 1117, 85.0, 189.0, 207.0, 398.9900000000016, 286.22458325700677, 224.74895420692894, 37.45517007464738], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 490 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 594 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 388 milliseconds, but should not have lasted longer than 300 milliseconds.", 8, 1.3651877133105803, 0.032], "isController": false}, {"data": ["The operation lasted too long: It took 304 milliseconds, but should not have lasted longer than 300 milliseconds.", 11, 1.8771331058020477, 0.044], "isController": false}, {"data": ["The operation lasted too long: It took 909 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 998 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 423 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 398 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 408 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 401 milliseconds, but should not have lasted longer than 300 milliseconds.", 6, 1.023890784982935, 0.024], "isController": false}, {"data": ["The operation lasted too long: It took 309 milliseconds, but should not have lasted longer than 300 milliseconds.", 6, 1.023890784982935, 0.024], "isController": false}, {"data": ["The operation lasted too long: It took 497 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 480 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 418 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 314 milliseconds, but should not have lasted longer than 300 milliseconds.", 8, 1.3651877133105803, 0.032], "isController": false}, {"data": ["The operation lasted too long: It took 584 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 790 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 619 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 393 milliseconds, but should not have lasted longer than 300 milliseconds.", 9, 1.5358361774744027, 0.036], "isController": false}, {"data": ["The operation lasted too long: It took 698 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 505 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 686 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 319 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 403 milliseconds, but should not have lasted longer than 300 milliseconds.", 5, 0.8532423208191127, 0.02], "isController": false}, {"data": ["The operation lasted too long: It took 683 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 599 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 406 milliseconds, but should not have lasted longer than 300 milliseconds.", 5, 0.8532423208191127, 0.02], "isController": false}, {"data": ["The operation lasted too long: It took 316 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 1,094 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 693 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 487 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 1,000 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 391 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 696 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 512 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 500 milliseconds, but should not have lasted longer than 300 milliseconds.", 5, 0.8532423208191127, 0.02], "isController": false}, {"data": ["The operation lasted too long: It took 416 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 708 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 503 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 413 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 882 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 596 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 477 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 612 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 381 milliseconds, but should not have lasted longer than 300 milliseconds.", 5, 0.8532423208191127, 0.02], "isController": false}, {"data": ["The operation lasted too long: It took 489 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 307 milliseconds, but should not have lasted longer than 300 milliseconds.", 14, 2.3890784982935154, 0.056], "isController": false}, {"data": ["The operation lasted too long: It took 311 milliseconds, but should not have lasted longer than 300 milliseconds.", 8, 1.3651877133105803, 0.032], "isController": false}, {"data": ["The operation lasted too long: It took 385 milliseconds, but should not have lasted longer than 300 milliseconds.", 4, 0.6825938566552902, 0.016], "isController": false}, {"data": ["The operation lasted too long: It took 890 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 395 milliseconds, but should not have lasted longer than 300 milliseconds.", 6, 1.023890784982935, 0.024], "isController": false}, {"data": ["The operation lasted too long: It took 479 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 493 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 789 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 405 milliseconds, but should not have lasted longer than 300 milliseconds.", 6, 1.023890784982935, 0.024], "isController": false}, {"data": ["The operation lasted too long: It took 390 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 508 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 404 milliseconds, but should not have lasted longer than 300 milliseconds.", 7, 1.1945392491467577, 0.028], "isController": false}, {"data": ["The operation lasted too long: It took 920 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 502 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 301 milliseconds, but should not have lasted longer than 300 milliseconds.", 21, 3.583617747440273, 0.084], "isController": false}, {"data": ["The operation lasted too long: It took 478 milliseconds, but should not have lasted longer than 300 milliseconds.", 4, 0.6825938566552902, 0.016], "isController": false}, {"data": ["The operation lasted too long: It took 415 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 396 milliseconds, but should not have lasted longer than 300 milliseconds.", 12, 2.04778156996587, 0.048], "isController": false}, {"data": ["The operation lasted too long: It took 317 milliseconds, but should not have lasted longer than 300 milliseconds.", 4, 0.6825938566552902, 0.016], "isController": false}, {"data": ["The operation lasted too long: It took 905 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 793 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 376 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 501 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 380 milliseconds, but should not have lasted longer than 300 milliseconds.", 5, 0.8532423208191127, 0.02], "isController": false}, {"data": ["The operation lasted too long: It took 716 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 1,114 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 585 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 414 milliseconds, but should not have lasted longer than 300 milliseconds.", 4, 0.6825938566552902, 0.016], "isController": false}, {"data": ["The operation lasted too long: It took 386 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 312 milliseconds, but should not have lasted longer than 300 milliseconds.", 6, 1.023890784982935, 0.024], "isController": false}, {"data": ["The operation lasted too long: It took 881 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 604 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 321 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 488 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 678 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 318 milliseconds, but should not have lasted longer than 300 milliseconds.", 4, 0.6825938566552902, 0.016], "isController": false}, {"data": ["The operation lasted too long: It took 482 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 697 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 492 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 511 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 575 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 308 milliseconds, but should not have lasted longer than 300 milliseconds.", 14, 2.3890784982935154, 0.056], "isController": false}, {"data": ["The operation lasted too long: It took 302 milliseconds, but should not have lasted longer than 300 milliseconds.", 21, 3.583617747440273, 0.084], "isController": false}, {"data": ["The operation lasted too long: It took 877 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 498 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 517 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 516 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 382 milliseconds, but should not have lasted longer than 300 milliseconds.", 5, 0.8532423208191127, 0.02], "isController": false}, {"data": ["The operation lasted too long: It took 392 milliseconds, but should not have lasted longer than 300 milliseconds.", 10, 1.7064846416382253, 0.04], "isController": false}, {"data": ["The operation lasted too long: It took 496 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 402 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 707 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 903 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 377 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 407 milliseconds, but should not have lasted longer than 300 milliseconds.", 7, 1.1945392491467577, 0.028], "isController": false}, {"data": ["The operation lasted too long: It took 303 milliseconds, but should not have lasted longer than 300 milliseconds.", 22, 3.7542662116040955, 0.088], "isController": false}, {"data": ["The operation lasted too long: It took 595 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 804 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 399 milliseconds, but should not have lasted longer than 300 milliseconds.", 7, 1.1945392491467577, 0.028], "isController": false}, {"data": ["The operation lasted too long: It took 908 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 491 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 796 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 412 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 717 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 397 milliseconds, but should not have lasted longer than 300 milliseconds.", 14, 2.3890784982935154, 0.056], "isController": false}, {"data": ["The operation lasted too long: It took 1,009 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 394 milliseconds, but should not have lasted longer than 300 milliseconds.", 12, 2.04778156996587, 0.048], "isController": false}, {"data": ["The operation lasted too long: It took 323 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 313 milliseconds, but should not have lasted longer than 300 milliseconds.", 8, 1.3651877133105803, 0.032], "isController": false}, {"data": ["The operation lasted too long: It took 320 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 409 milliseconds, but should not have lasted longer than 300 milliseconds.", 4, 0.6825938566552902, 0.016], "isController": false}, {"data": ["The operation lasted too long: It took 410 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 484 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 605 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 481 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 384 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 699 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 387 milliseconds, but should not have lasted longer than 300 milliseconds.", 9, 1.5358361774744027, 0.036], "isController": false}, {"data": ["The operation lasted too long: It took 310 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 702 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 689 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 400 milliseconds, but should not have lasted longer than 300 milliseconds.", 16, 2.7303754266211606, 0.064], "isController": false}, {"data": ["The operation lasted too long: It took 593 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 898 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 591 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 597 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 513 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 611 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 995 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 519 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 617 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 494 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 714 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 610 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 420 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 306 milliseconds, but should not have lasted longer than 300 milliseconds.", 19, 3.242320819112628, 0.076], "isController": false}, {"data": ["The operation lasted too long: It took 592 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 807 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 606 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 587 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 621 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 504 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 582 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 1,117 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 713 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 383 milliseconds, but should not have lasted longer than 300 milliseconds.", 10, 1.7064846416382253, 0.04], "isController": false}, {"data": ["The operation lasted too long: It took 719 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 703 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 389 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 417 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 485 milliseconds, but should not have lasted longer than 300 milliseconds.", 7, 1.1945392491467577, 0.028], "isController": false}, {"data": ["The operation lasted too long: It took 315 milliseconds, but should not have lasted longer than 300 milliseconds.", 7, 1.1945392491467577, 0.028], "isController": false}, {"data": ["The operation lasted too long: It took 806 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 411 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 694 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 601 milliseconds, but should not have lasted longer than 300 milliseconds.", 2, 0.3412969283276451, 0.008], "isController": false}, {"data": ["The operation lasted too long: It took 514 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 588 milliseconds, but should not have lasted longer than 300 milliseconds.", 1, 0.17064846416382254, 0.004], "isController": false}, {"data": ["The operation lasted too long: It took 495 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 379 milliseconds, but should not have lasted longer than 300 milliseconds.", 4, 0.6825938566552902, 0.016], "isController": false}, {"data": ["The operation lasted too long: It took 800 milliseconds, but should not have lasted longer than 300 milliseconds.", 3, 0.5119453924914675, 0.012], "isController": false}, {"data": ["The operation lasted too long: It took 305 milliseconds, but should not have lasted longer than 300 milliseconds.", 14, 2.3890784982935154, 0.056], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 25000, 586, "The operation lasted too long: It took 303 milliseconds, but should not have lasted longer than 300 milliseconds.", 22, "The operation lasted too long: It took 301 milliseconds, but should not have lasted longer than 300 milliseconds.", 21, "The operation lasted too long: It took 302 milliseconds, but should not have lasted longer than 300 milliseconds.", 21, "The operation lasted too long: It took 306 milliseconds, but should not have lasted longer than 300 milliseconds.", 19, "The operation lasted too long: It took 400 milliseconds, but should not have lasted longer than 300 milliseconds.", 16], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Get by ID clusterIP", 25000, 586, "The operation lasted too long: It took 303 milliseconds, but should not have lasted longer than 300 milliseconds.", 22, "The operation lasted too long: It took 301 milliseconds, but should not have lasted longer than 300 milliseconds.", 21, "The operation lasted too long: It took 302 milliseconds, but should not have lasted longer than 300 milliseconds.", 21, "The operation lasted too long: It took 306 milliseconds, but should not have lasted longer than 300 milliseconds.", 19, "The operation lasted too long: It took 400 milliseconds, but should not have lasted longer than 300 milliseconds.", 16], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
