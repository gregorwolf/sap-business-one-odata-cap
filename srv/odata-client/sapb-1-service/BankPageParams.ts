/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BankPageParams
 */
export interface BankPageParams {
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
 * @deprecated Since v1.6.0. Use [[BankPageParams.build]] instead.
 */
export function createBankPageParams(json: any): BankPageParams {
  return BankPageParams.build(json);
}

/**
 * BankPageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankPageParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BankPageParams> {
  /**
   * Representation of the [[BankPageParams.accountCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountCode', this, 'Edm.String');
  /**
   * Representation of the [[BankPageParams.sequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Sequence', this, 'Edm.Int32');

  /**
   * Creates an instance of BankPageParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BankPageParams);
  }
}

export namespace BankPageParams {
  /**
   * Metadata information on all properties of the `BankPageParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BankPageParams>[] = [{
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
  export function build(json: { [keys: string]: FieldType }): BankPageParams {
    return deserializeComplexTypeV4(json, BankPageParams);
  }
}
