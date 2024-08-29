@echo off
REM serve.bat
REM Serve Jekyll Web for Development on Windows

REM Navigate to the 'web' directory
cd web

REM Execute Jekyll serve command with development configuration
bundle exec jekyll serve --config _config.yml,_config_dev.yml
