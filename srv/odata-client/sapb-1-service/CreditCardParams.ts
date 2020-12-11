/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CreditCardParams
 */
export interface CreditCardParams {
  /**
   * Credit Card Code.
   * @nullable
   */
  creditCardCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CreditCardParams.build]] instead.
 */
export function createCreditCardParams(json: any): CreditCardParams {
  return CreditCardParams.build(json);
}

/**
 * CreditCardParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreditCardParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CreditCardParams> {
  /**
   * Representation of the [[CreditCardParams.creditCardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creditCardCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreditCardCode', this, 'Edm.Int32');

  /**
   * Creates an instance of CreditCardParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CreditCardParams);
  }
}

export namespace CreditCardParams {
  /**
   * Metadata information on all properties of the `CreditCardParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CreditCardParams>[] = [{
    originalName: 'CreditCardCode',
    name: 'creditCardCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CreditCardParams {
    return deserializeComplexTypeV4(json, CreditCardParams);
  }
}
