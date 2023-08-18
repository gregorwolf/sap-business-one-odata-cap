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
 * TaxInvoiceReportParams
 */
export interface TaxInvoiceReportParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Tax Invoice Report Number.
   * @nullable
   */
  taxInvoiceReportNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * TaxInvoiceReportParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxInvoiceReportParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxInvoiceReportParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxInvoiceReportParams.taxInvoiceReportNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxInvoiceReportNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TaxInvoiceReportNumber',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of TaxInvoiceReportParamsField.
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
      TaxInvoiceReportParams,
      fieldOptions
    );
  }
}

export namespace TaxInvoiceReportParams {
  /**
   * Metadata information on all properties of the `TaxInvoiceReportParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxInvoiceReportParams>[] = [
    {
      originalName: 'TaxInvoiceReportNumber',
      name: 'taxInvoiceReportNumber',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
