import { Widget } from './widget.interface'
import { InjectionToken } from '@angular/core'

export const WIDGET_TOKEN = new InjectionToken<Widget>('widget')
