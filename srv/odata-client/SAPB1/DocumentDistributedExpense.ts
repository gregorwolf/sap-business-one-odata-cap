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
 * DocumentDistributedExpense
 */
export interface DocumentDistributedExpense<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {}

/**
 * DocumentDistributedExpenseField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentDistributedExpenseField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocumentDistributedExpense,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );

  /**
   * Creates an instance of DocumentDistributedExpenseField.
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
      DocumentDistributedExpense,
      fieldOptions
    );
  }
}

export namespace DocumentDistributedExpense {
  /**
   * Metadata information on all properties of the `DocumentDistributedExpense` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentDistributedExpense>[] =
    [];
}
