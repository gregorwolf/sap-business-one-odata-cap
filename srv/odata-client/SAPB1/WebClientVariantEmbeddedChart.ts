/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientVariantEmbeddedChartValue1 } from './WebClientVariantEmbeddedChartValue1';
import { WebClientVariantEmbeddedChartValue2 } from './WebClientVariantEmbeddedChartValue2';
import { WebClientVariantEmbeddedChartSize } from './WebClientVariantEmbeddedChartSize';
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
 * WebClientVariantEmbeddedChart
 */
export interface WebClientVariantEmbeddedChart<
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
   * Web Client Variant Embedded Chart Value 1 Collection.
   * @nullable
   */
  webClientVariantEmbeddedChartValue1Collection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WebClientVariantEmbeddedChartValue1'
  >;
  /**
   * Web Client Variant Embedded Chart Value 2 Collection.
   * @nullable
   */
  webClientVariantEmbeddedChartValue2Collection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WebClientVariantEmbeddedChartValue2'
  >;
  /**
   * Web Client Variant Embedded Chart Size Collection.
   * @nullable
   */
  webClientVariantEmbeddedChartSizeCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.WebClientVariantEmbeddedChartSize'
  >;
}

/**
 * WebClientVariantEmbeddedChartField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WebClientVariantEmbeddedChartField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WebClientVariantEmbeddedChart,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WebClientVariantEmbeddedChart.guid} property for query construction.
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
   * Representation of the {@link WebClientVariantEmbeddedChart.chartType} property for query construction.
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
   * Representation of the {@link WebClientVariantEmbeddedChart.isShowLegend} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isShowLegend: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsShowLegend', BoYesNoEnum, true);
  /**
   * Representation of the {@link WebClientVariantEmbeddedChart.categoryAxis1} property for query construction.
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
   * Representation of the {@link WebClientVariantEmbeddedChart.categoryAxis2} property for query construction.
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
   * Representation of the {@link WebClientVariantEmbeddedChart.timeAxis} property for query construction.
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
   * Representation of the {@link WebClientVariantEmbeddedChart.color} property for query construction.
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
   * Representation of the {@link WebClientVariantEmbeddedChart.shape} property for query construction.
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
   * Representation of the {@link WebClientVariantEmbeddedChart.bubbleWidth} property for query construction.
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
   * Representation of the {@link WebClientVariantEmbeddedChart.webClientVariantEmbeddedChartValue1Collection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  webClientVariantEmbeddedChartValue1Collection: CollectionField<
    EntityT,
    DeSerializersT,
    WebClientVariantEmbeddedChartValue1,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WebClientVariantEmbeddedChartValue1Collection',
    WebClientVariantEmbeddedChartValue1,
    true
  );
  /**
   * Representation of the {@link WebClientVariantEmbeddedChart.webClientVariantEmbeddedChartValue2Collection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  webClientVariantEmbeddedChartValue2Collection: CollectionField<
    EntityT,
    DeSerializersT,
    WebClientVariantEmbeddedChartValue2,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WebClientVariantEmbeddedChartValue2Collection',
    WebClientVariantEmbeddedChartValue2,
    true
  );
  /**
   * Representation of the {@link WebClientVariantEmbeddedChart.webClientVariantEmbeddedChartSizeCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  webClientVariantEmbeddedChartSizeCollection: CollectionField<
    EntityT,
    DeSerializersT,
    WebClientVariantEmbeddedChartSize,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'WebClientVariantEmbeddedChartSizeCollection',
    WebClientVariantEmbeddedChartSize,
    true
  );

  /**
   * Creates an instance of WebClientVariantEmbeddedChartField.
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
      WebClientVariantEmbeddedChart,
      fieldOptions
    );
  }
}

export namespace WebClientVariantEmbeddedChart {
  /**
   * Metadata information on all properties of the `WebClientVariantEmbeddedChart` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WebClientVariantEmbeddedChart>[] =
    [
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
        originalName: 'WebClientVariantEmbeddedChartValue1Collection',
        name: 'webClientVariantEmbeddedChartValue1Collection',
        type: WebClientVariantEmbeddedChartValue1,
        isCollection: true
      },
      {
        originalName: 'WebClientVariantEmbeddedChartValue2Collection',
        name: 'webClientVariantEmbeddedChartValue2Collection',
        type: WebClientVariantEmbeddedChartValue2,
        isCollection: true
      },
      {
        originalName: 'WebClientVariantEmbeddedChartSizeCollection',
        name: 'webClientVariantEmbeddedChartSizeCollection',
        type: WebClientVariantEmbeddedChartSize,
        isCollection: true
      }
    ];
}
