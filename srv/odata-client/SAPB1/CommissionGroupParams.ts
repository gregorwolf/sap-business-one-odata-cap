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
 * CommissionGroupParams
 */
export interface CommissionGroupParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Commission Group Code.
   * @nullable
   */
  commissionGroupCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * CommissionGroupParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CommissionGroupParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CommissionGroupParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CommissionGroupParams.commissionGroupCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commissionGroupCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CommissionGroupCode',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of CommissionGroupParamsField.
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
      CommissionGroupParams,
      fieldOptions
    );
  }
}

export namespace CommissionGroupParams {
  /**
   * Metadata information on all properties of the `CommissionGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CommissionGroupParams>[] = [
    {
      originalName: 'CommissionGroupCode',
      name: 'commissionGroupCode',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
