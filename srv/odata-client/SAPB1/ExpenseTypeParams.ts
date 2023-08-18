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
 * ExpenseTypeParams
 */
export interface ExpenseTypeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Expense Type.
   * @nullable
   */
  expenseType?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ExpenseTypeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExpenseTypeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExpenseTypeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExpenseTypeParams.expenseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expenseType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ExpenseType', 'Edm.String', true);

  /**
   * Creates an instance of ExpenseTypeParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ExpenseTypeParams, fieldOptions);
  }
}

export namespace ExpenseTypeParams {
  /**
   * Metadata information on all properties of the `ExpenseTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExpenseTypeParams>[] = [
    {
      originalName: 'ExpenseType',
      name: 'expenseType',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
