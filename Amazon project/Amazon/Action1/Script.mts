SystemUtil.Run"Chrome.exe" @@ script infofile_;_ZIP::ssf134.xml_;_
DataTable.AddSheet "Test Data"
DataTable.ImportSheet "C:\Users\user248\Documents\Amazon\Test data\Test Data.xlsx","Amazon Data","Test Data"
rowCount=Datatable.GetSheet("Test Data").GetRowCount
For i=1 To rowCount
DataTable.SetCurrentRow(i)
If DataTable("Execution_flag","Test Data")="Y" Then
ExecuteTest (DataTable.Value("TestCaseID","Test Data"))
DataTable.Value("Result","Test Data")=Environment.Value("Result")
End if
Next
DataTable.ExportSheet "C:\Users\user248\Documents\Amazon\Test data\Test Data.xlsx","Test Data","Amazon Data"
 @@ script infofile_;_ZIP::ssf131.xml_;_
 @@ script infofile_;_ZIP::ssf141.xml_;_
 @@ script infofile_;_ZIP::ssf139.xml_;_
 @@ script infofile_;_ZIP::ssf138.xml_;_
 @@ script infofile_;_ZIP::ssf137.xml_;_
 @@ script infofile_;_ZIP::ssf136.xml_;_
 @@ script infofile_;_ZIP::ssf133.xml_;_
 @@ script infofile_;_ZIP::ssf135.xml_;_
