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
 * EmployeeIdTypeParams
 */
export interface EmployeeIdTypeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Id Type.
   * @nullable
   */
  idType?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EmployeeIdTypeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeIdTypeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeeIdTypeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeeIdTypeParams.idType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  idType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('IDType', 'Edm.String', true);

  /**
   * Creates an instance of EmployeeIdTypeParamsField.
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
      EmployeeIdTypeParams,
      fieldOptions
    );
  }
}

export namespace EmployeeIdTypeParams {
  /**
   * Metadata information on all properties of the `EmployeeIdTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeIdTypeParams>[] = [
    {
      originalName: 'IDType',
      name: 'idType',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
