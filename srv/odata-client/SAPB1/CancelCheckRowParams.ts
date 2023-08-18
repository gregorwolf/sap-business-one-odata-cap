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
 * CancelCheckRowParams
 */
export interface CancelCheckRowParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Deposit Id.
   * @nullable
   */
  depositId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Check Id.
   * @nullable
   */
  checkId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * CancelCheckRowParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CancelCheckRowParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CancelCheckRowParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CancelCheckRowParams.depositId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  depositId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DepositID', 'Edm.Int32', true);
  /**
   * Representation of the {@link CancelCheckRowParams.checkId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CheckID', 'Edm.Int32', true);

  /**
   * Creates an instance of CancelCheckRowParamsField.
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
      CancelCheckRowParams,
      fieldOptions
    );
  }
}

export namespace CancelCheckRowParams {
  /**
   * Metadata information on all properties of the `CancelCheckRowParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CancelCheckRowParams>[] = [
    {
      originalName: 'DepositID',
      name: 'depositId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CheckID',
      name: 'checkId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
