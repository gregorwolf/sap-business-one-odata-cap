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
 * StockTakingParams
 */
export interface StockTakingParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * StockTakingParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTakingParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  StockTakingParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link StockTakingParams.itemCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ItemCode', 'Edm.String', true);
  /**
   * Representation of the {@link StockTakingParams.warehouseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  warehouseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WarehouseCode', 'Edm.String', true);

  /**
   * Creates an instance of StockTakingParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, StockTakingParams, fieldOptions);
  }
}

export namespace StockTakingParams {
  /**
   * Metadata information on all properties of the `StockTakingParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<StockTakingParams>[] = [
    {
      originalName: 'ItemCode',
      name: 'itemCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WarehouseCode',
      name: 'warehouseCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
