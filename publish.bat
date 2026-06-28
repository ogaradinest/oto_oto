@echo off
cd /d "%~dp0"
echo.
echo Publishing to otobrothers.co.uk...
echo.

git add frontend/public/articles/
git diff --cached --quiet
if %errorlevel%==0 (
  echo No new articles found. Nothing to publish.
  pause
  exit /b 0
)

for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set dt=%%I
set datestamp=%dt:~0,8%

git commit -m "new article: %datestamp%"
git push origin main

echo.
echo Done. Your article will be live in 2-3 minutes.
echo Visit: https://otobrothers.co.uk/#/blog
echo.
pause
