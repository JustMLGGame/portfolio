@echo off
call npm run build

set source_folder=.next\standalone
set dist_folder=dist
set server_script=%dist_folder%\start.bat

REM Copy files from .next\standalone to dist folder
xcopy /s /y /e "%source_folder%\*" "%dist_folder%\"

REM Copy ./next/static to the same folder but into the ./next inside dist folder
xcopy /s /y /e .next\static\* "%dist_folder%\.next\static\"

REM Copy public directory to dist folder
xcopy /s /y /e public\* "%dist_folder%\public\"

REM Create a batch file with the specified content
echo @echo off > "%server_script%"
echo start /B /MIN node server.js >> "%server_script%"
