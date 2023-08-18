/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * WebClientVariantEmbeddedChartSize
 */
export interface WebClientVariantEmbeddedChartSize<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Guid.
   * @nullable
   */
  guid?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Order.
   * @nullable
   */
  order?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Column Name.
   * @nullable
   */
  columnName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * WebClientVariantEmbeddedChartSizeField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WebClientVariantEmbeddedChartSizeField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WebClientVariantEmbeddedChartSize,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WebClientVariantEmbeddedChartSize.guid} property for query construction.
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
   * Representation of the {@link WebClientVariantEmbeddedChartSize.order} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  order: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Order', 'Edm.Int32', true);
  /**
   * Representation of the {@link WebClientVariantEmbeddedChartSize.columnName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  columnName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ColumnName', 'Edm.String', true);

  /**
   * Creates an instance of WebClientVariantEmbeddedChartSizeField.
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
      WebClientVariantEmbeddedChartSize,
      fieldOptions
    );
  }
}

export namespace WebClientVariantEmbeddedChartSize {
  /**
   * Metadata information on all properties of the `WebClientVariantEmbeddedChartSize` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WebClientVariantEmbeddedChartSize>[] =
    [
      {
        originalName: 'Guid',
        name: 'guid',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Order',
        name: 'order',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ColumnName',
        name: 'columnName',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
