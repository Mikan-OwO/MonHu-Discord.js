@echo off
git add .
git commit -m  %1
git push -u monhu-disc master
@echo on