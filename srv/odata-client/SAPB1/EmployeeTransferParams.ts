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
 * EmployeeTransferParams
 */
export interface EmployeeTransferParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Transfer Id.
   * @nullable
   */
  transferId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * EmployeeTransferParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeTransferParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeeTransferParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeeTransferParams.transferId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TransferID', 'Edm.Int32', true);

  /**
   * Creates an instance of EmployeeTransferParamsField.
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
      EmployeeTransferParams,
      fieldOptions
    );
  }
}

export namespace EmployeeTransferParams {
  /**
   * Metadata information on all properties of the `EmployeeTransferParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeTransferParams>[] = [
    {
      originalName: 'TransferID',
      name: 'transferId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
