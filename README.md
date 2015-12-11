
#DataLudi Grid
##Getting Started

To run DataLudi Grid, files such as "dataludi.lic.min.js", "dataludi.min.js" must be on the path. In the case of free trial version, those are "dataludi.lic.eval.min.js" and "dataludi.eval.min.js". And that need image files to use internally.

A.Include DataLudi Grid file

Include the license file passed independly and script files included to the product package in order as below codes. 

    // commercial version,
    <script src='dataludi.lic.min.js'></script>
    <script src='dataludi.min.js'></script>
    // if, trial version,
    <script src='dataludi.lic.eval.min.js'></script>
    <script src='dataludi.eval.min.js'></script>

B.Specify the resource path

DataLudi suppose that the icon image used in grid located a special location. Basically, resources is in the sub folder called assets of the directory dataludi.min.js installed in. But it will be right to change the location by selecting below many ways of codes. 

    // /dataludi 
    DataLudi.setRootContext('/dataludi');
    DataLudi.setAssetRoot('');
    // ./dataludi
    DataLudi.setRootContext('dataludi');
    DataLudi.setAssetRoot('');
    // ./dataludi/resource
    DataLudi.setRootContext('dataludi');
    DataLudi.setAssetRoot('resource');
    // ./dataludi/resource
    DataLudi.setRootContext('dataludi/resource');
    DataLudi.setAssetRoot('');
    // ./dataludi/resource
    DataLudi.setAssetRoot('dataludi/resource');
    
C.Begin to develop the grid.

Now, you can begin to develop the grid. 
Begin with [Hello Grid](http://helpme.dataludi.com/projects/grid/demo/en/Examples_HelloGrid) example. You can find more examples on the [Demo](http://helpme.dataludi.com/projects/grid/demo). 
