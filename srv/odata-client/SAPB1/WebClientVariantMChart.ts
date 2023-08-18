/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientVariantMChartValue1 } from './WebClientVariantMChartValue1';
import { WebClientVariantMChartValue2 } from './WebClientVariantMChartValue2';
import { WebClientVariantMChartSize } from './WebClientVariantMChartSize';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * WebClientVariantMChart
 */
export interface WebClientVariantMChart<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Guid.
   * @nullable
   */
  guid?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Chart Type.
   * @nullable
   */
  chartType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Is Show Legend.
   * @nullable
   */
  isShowLegend?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Category Axis 1.
   * @nullable
   */
  categoryAxis1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Category Axis 2.
   * @nullable
   */
  categoryAxis2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Time Axis.
   * @nullable
   */
  timeAxis?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Color.
   * @nullable
   */
  color?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Shape.
   * @nullable
   */
  shape?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bubble Width.
   * @nullable
   */
  bubbleWidth?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Web Client Variant M Chart Value 1 Collection.
   * @nullable
   */
  webClientVariantMChartValue1Collection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WebClientVariantMChartValue1'
  >;
  /**
   * Web Client Variant M Chart Value 2 Collection.
   * @nullable
   */
  webClientVariantMChartValue2Collection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WebClientVariantMChartValue2'
  >;
  /**
   * Web Client Variant M Chart Size Collection.
   * @nullable
   */
  webClientVariantMChartSizeCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WebClientVariantMChartSize'
  >;
}

/**
 * WebClientVariantMChartField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WebClientVariantMChartField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WebClientVariantMChart,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WebClientVariantMChart.guid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  guid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Guid', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientVariantMChart.chartType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  chartType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ChartType', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientVariantMChart.isShowLegend} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isShowLegend: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsShowLegend', BoYesNoEnum, true);
  /**
   * Representation of the {@link WebClientVariantMChart.categoryAxis1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryAxis1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CategoryAxis1', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientVariantMChart.categoryAxis2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryAxis2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CategoryAxis2', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientVariantMChart.timeAxis} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeAxis: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TimeAxis', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientVariantMChart.color} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  color: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Color', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientVariantMChart.shape} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shape: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Shape', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientVariantMChart.bubbleWidth} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bubbleWidth: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BubbleWidth', 'Edm.String', true);
  /**
   * Representation of the {@link WebClientVariantMChart.webClientVariantMChartValue1Collection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  webClientVariantMChartValue1Collection: CollectionField<
    EntityT,
    DeSerializersT,
    WebClientVariantMChartValue1,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WebClientVariantMChartValue1Collection',
    WebClientVariantMChartValue1,
    true
  );
  /**
   * Representation of the {@link WebClientVariantMChart.webClientVariantMChartValue2Collection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  webClientVariantMChartValue2Collection: CollectionField<
    EntityT,
    DeSerializersT,
    WebClientVariantMChartValue2,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WebClientVariantMChartValue2Collection',
    WebClientVariantMChartValue2,
    true
  );
  /**
   * Representation of the {@link WebClientVariantMChart.webClientVariantMChartSizeCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  webClientVariantMChartSizeCollection: CollectionField<
    EntityT,
    DeSerializersT,
    WebClientVariantMChartSize,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WebClientVariantMChartSizeCollection',
    WebClientVariantMChartSize,
    true
  );

  /**
   * Creates an instance of WebClientVariantMChartField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      WebClientVariantMChart,
      fieldOptions
    );
  }
}

export namespace WebClientVariantMChart {
  /**
   * Metadata information on all properties of the `WebClientVariantMChart` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WebClientVariantMChart>[] = [
    {
      originalName: 'Guid',
      name: 'guid',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ChartType',
      name: 'chartType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'IsShowLegend',
      name: 'isShowLegend',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'CategoryAxis1',
      name: 'categoryAxis1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CategoryAxis2',
      name: 'categoryAxis2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TimeAxis',
      name: 'timeAxis',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Color',
      name: 'color',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Shape',
      name: 'shape',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BubbleWidth',
      name: 'bubbleWidth',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WebClientVariantMChartValue1Collection',
      name: 'webClientVariantMChartValue1Collection',
      type: WebClientVariantMChartValue1,
      isCollection: true
    },
    {
      originalName: 'WebClientVariantMChartValue2Collection',
      name: 'webClientVariantMChartValue2Collection',
      type: WebClientVariantMChartValue2,
      isCollection: true
    },
    {
      originalName: 'WebClientVariantMChartSizeCollection',
      name: 'webClientVariantMChartSizeCollection',
      type: WebClientVariantMChartSize,
      isCollection: true
    }
  ];
}
