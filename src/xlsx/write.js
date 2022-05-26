import { writeFile, readFile } from 'react-native-fs';
import XLSX from 'xlsx';

const writeXLSX = () => {

    var data = [
        {"name":"John", "city": "Seattle"},
        {"name":"Mike", "city": "Los Angeles"},
        {"name":"Zach", "city": "New York"}
        ];
        
         var ws = XLSX.utils.json_to_sheet(data);
        
          var wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb,ws,"Prova");
        
          const wbout = XLSX.write(wb, {type:'binary', bookType:"xlsx"});
          var RNFS = require('react-native-fs');
          var file = RNFS.ExternalStorageDirectoryPath + '/test.xlsx';
          writeFile(file, wbout, 'ascii').then((r)=>{console.log('XLSX success: ', r.message)}).catch((e)=>{console.log('XLSX error: ',e.message)});
    

}

export default writeXLSX;