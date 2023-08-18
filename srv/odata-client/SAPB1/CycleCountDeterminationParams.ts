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
 * CycleCountDeterminationParams
 */
export interface CycleCountDeterminationParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Warehouse Code.
   * @nullable
   */
  warehouseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cycle By.
   * @nullable
   */
  cycleBy?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * CycleCountDeterminationParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CycleCountDeterminationParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CycleCountDeterminationParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CycleCountDeterminationParams.warehouseCode} property for query construction.
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
   * Representation of the {@link CycleCountDeterminationParams.cycleBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cycleBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CycleBy', 'Edm.Int32', true);

  /**
   * Creates an instance of CycleCountDeterminationParamsField.
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
      CycleCountDeterminationParams,
      fieldOptions
    );
  }
}

export namespace CycleCountDeterminationParams {
  /**
   * Metadata information on all properties of the `CycleCountDeterminationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CycleCountDeterminationParams>[] =
    [
      {
        originalName: 'WarehouseCode',
        name: 'warehouseCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'CycleBy',
        name: 'cycleBy',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
