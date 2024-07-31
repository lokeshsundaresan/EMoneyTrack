import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';

bootstrapApplication(AppComponent, AppConfig).catch((error) => {
  console.log(error);
});
