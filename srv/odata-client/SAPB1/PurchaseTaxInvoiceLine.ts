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
 * PurchaseTaxInvoiceLine
 */
export interface PurchaseTaxInvoiceLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Ref Entry 1.
   * @nullable
   */
  refEntry1?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ref Entry 2.
   * @nullable
   */
  refEntry2?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * PurchaseTaxInvoiceLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PurchaseTaxInvoiceLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PurchaseTaxInvoiceLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PurchaseTaxInvoiceLine.refEntry1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refEntry1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RefEntry1', 'Edm.Int32', true);
  /**
   * Representation of the {@link PurchaseTaxInvoiceLine.refEntry2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  refEntry2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RefEntry2', 'Edm.Int32', true);

  /**
   * Creates an instance of PurchaseTaxInvoiceLineField.
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
      PurchaseTaxInvoiceLine,
      fieldOptions
    );
  }
}

export namespace PurchaseTaxInvoiceLine {
  /**
   * Metadata information on all properties of the `PurchaseTaxInvoiceLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PurchaseTaxInvoiceLine>[] = [
    {
      originalName: 'RefEntry1',
      name: 'refEntry1',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RefEntry2',
      name: 'refEntry2',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
