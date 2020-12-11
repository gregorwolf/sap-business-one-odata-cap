/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * StockTransferTaxExtension
 */
export interface StockTransferTaxExtension {
  /**
   * Support Vat.
   * @nullable
   */
  supportVat?: BoYesNoEnum;
  /**
   * Form Number.
   * @nullable
   */
  formNumber?: string;
  /**
   * Transaction Category.
   * @nullable
   */
  transactionCategory?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[StockTransferTaxExtension.build]] instead.
 */
export function createStockTransferTaxExtension(json: any): StockTransferTaxExtension {
  return StockTransferTaxExtension.build(json);
}

/**
 * StockTransferTaxExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTransferTaxExtensionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTransferTaxExtension> {
  /**
   * Representation of the [[StockTransferTaxExtension.supportVat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supportVat: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SupportVAT', this);
  /**
   * Representation of the [[StockTransferTaxExtension.formNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FormNumber', this, 'Edm.String');
  /**
   * Representation of the [[StockTransferTaxExtension.transactionCategory]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionCategory: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TransactionCategory', this, 'Edm.String');

  /**
   * Creates an instance of StockTransferTaxExtensionField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, StockTransferTaxExtension);
  }
}

export namespace StockTransferTaxExtension {
  /**
   * Metadata information on all properties of the `StockTransferTaxExtension` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<StockTransferTaxExtension>[] = [{
    originalName: 'SupportVAT',
    name: 'supportVat',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FormNumber',
    name: 'formNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TransactionCategory',
    name: 'transactionCategory',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): StockTransferTaxExtension {
    return deserializeComplexTypeV4(json, StockTransferTaxExtension);
  }
}
