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
 * WebClientVariantSortBy
 */
export interface WebClientVariantSortBy<
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
  /**
   * Direction.
   * @nullable
   */
  direction?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * WebClientVariantSortByField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WebClientVariantSortByField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WebClientVariantSortBy,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WebClientVariantSortBy.guid} property for query construction.
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
   * Representation of the {@link WebClientVariantSortBy.order} property for query construction.
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
   * Representation of the {@link WebClientVariantSortBy.columnName} property for query construction.
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
   * Representation of the {@link WebClientVariantSortBy.direction} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  direction: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Direction', 'Edm.String', true);

  /**
   * Creates an instance of WebClientVariantSortByField.
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
      WebClientVariantSortBy,
      fieldOptions
    );
  }
}

export namespace WebClientVariantSortBy {
  /**
   * Metadata information on all properties of the `WebClientVariantSortBy` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WebClientVariantSortBy>[] = [
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
    },
    {
      originalName: 'Direction',
      name: 'direction',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
