/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * StockTransferTaxExtension
 */
export interface StockTransferTaxExtension<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Support Vat.
   * @nullable
   */
  supportVat?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Form Number.
   * @nullable
   */
  formNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transaction Category.
   * @nullable
   */
  transactionCategory?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * StockTransferTaxExtensionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTransferTaxExtensionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  StockTransferTaxExtension,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link StockTransferTaxExtension.supportVat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supportVat: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('SupportVAT', BoYesNoEnum, true);
  /**
   * Representation of the {@link StockTransferTaxExtension.formNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FormNumber', 'Edm.String', true);
  /**
   * Representation of the {@link StockTransferTaxExtension.transactionCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransactionCategory',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of StockTransferTaxExtensionField.
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
      StockTransferTaxExtension,
      fieldOptions
    );
  }
}

export namespace StockTransferTaxExtension {
  /**
   * Metadata information on all properties of the `StockTransferTaxExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<StockTransferTaxExtension>[] =
    [
      {
        originalName: 'SupportVAT',
        name: 'supportVat',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'FormNumber',
        name: 'formNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TransactionCategory',
        name: 'transactionCategory',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
