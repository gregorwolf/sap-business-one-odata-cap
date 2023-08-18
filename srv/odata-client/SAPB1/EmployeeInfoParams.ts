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
 * EmployeeInfoParams
 */
export interface EmployeeInfoParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * EmployeeInfoParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeInfoParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeeInfoParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeeInfoParams.employeeId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EmployeeID', 'Edm.Int32', true);

  /**
   * Creates an instance of EmployeeInfoParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EmployeeInfoParams, fieldOptions);
  }
}

export namespace EmployeeInfoParams {
  /**
   * Metadata information on all properties of the `EmployeeInfoParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeInfoParams>[] = [
    {
      originalName: 'EmployeeID',
      name: 'employeeId',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
