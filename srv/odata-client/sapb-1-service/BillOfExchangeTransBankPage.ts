/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BillOfExchangeTransBankPage
 */
export interface BillOfExchangeTransBankPage {
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: string;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransBankPage.build]] instead.
 */
export function createBillOfExchangeTransBankPage(json: any): BillOfExchangeTransBankPage {
  return BillOfExchangeTransBankPage.build(json);
}

/**
 * BillOfExchangeTransBankPageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransBankPageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BillOfExchangeTransBankPage> {
  /**
   * Representation of the [[BillOfExchangeTransBankPage.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[BillOfExchangeTransBankPage.sequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Sequence', this, 'Edm.Int32');

  /**
   * Creates an instance of BillOfExchangeTransBankPageField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BillOfExchangeTransBankPage);
  }
}

export namespace BillOfExchangeTransBankPage {
  /**
   * Metadata information on all properties of the `BillOfExchangeTransBankPage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BillOfExchangeTransBankPage>[] = [{
    originalName: 'AccountCode',
    name: 'accountCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Sequence',
    name: 'sequence',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BillOfExchangeTransBankPage {
    return deserializeComplexTypeV4(json, BillOfExchangeTransBankPage);
  }
}
