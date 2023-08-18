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
 * InventoryOpeningBalanceParams
 */
export interface InventoryOpeningBalanceParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Document Entry.
   * @nullable
   */
  documentEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * InventoryOpeningBalanceParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class InventoryOpeningBalanceParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  InventoryOpeningBalanceParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link InventoryOpeningBalanceParams.documentEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link InventoryOpeningBalanceParams.documentNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentNumber', 'Edm.Int32', true);

  /**
   * Creates an instance of InventoryOpeningBalanceParamsField.
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
      InventoryOpeningBalanceParams,
      fieldOptions
    );
  }
}

export namespace InventoryOpeningBalanceParams {
  /**
   * Metadata information on all properties of the `InventoryOpeningBalanceParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<InventoryOpeningBalanceParams>[] =
    [
      {
        originalName: 'DocumentEntry',
        name: 'documentEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DocumentNumber',
        name: 'documentNumber',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
