// @ts-check

import type { Writable } from 'svelte/store';
import type { MarkPointComponentOption } from 'echarts';

import type { ReferenceColor, Symbol } from '../types.js';

export type LabelPosition = MarkPointComponentOption['label']['position'];

export type ReferencePointStoreValue = {
	data?: any;
	x?: number | string;
	y?: number | string;
	label?: string;
	symbol?: Symbol;
	color?: ReferenceColor;
	labelColor?: ReferenceColor;
	symbolColor?: ReferenceColor;
	symbolSize?: number;
	symbolOpacity?: number;
	symbolBorderWidth?: number;
	symbolBorderColor?: string;
	labelWidth?: number;
	labelPadding?: number;
	labelPosition?: LabelPosition;
	labelBackgroundColor?: string;
	labelBorderColor?: string;
	labelBorderWidth?: number;
	labelBorderRadius?: number;
	labelBorderType?: 'solid' | 'dotted' | 'dashed';
	fontSize?: number;
	align?: 'left' | 'center' | 'right';
	bold?: boolean;
	italic?: boolean;
};

export type ReferencePointStore = Writable<ReferencePointStoreValue> & Readable<{ error?: string }>;

export type ReferencePointChartData = MarkPointComponentOption['data'][number] & {
	evidenceSeriesType: 'reference_point';
};
