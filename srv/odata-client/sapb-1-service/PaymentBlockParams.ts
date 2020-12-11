/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PaymentBlockParams
 */
export interface PaymentBlockParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Payment Block Code.
   * @nullable
   */
  paymentBlockCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentBlockParams.build]] instead.
 */
export function createPaymentBlockParams(json: any): PaymentBlockParams {
  return PaymentBlockParams.build(json);
}

/**
 * PaymentBlockParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentBlockParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentBlockParams> {
  /**
   * Representation of the [[PaymentBlockParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentBlockParams.paymentBlockCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentBlockCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentBlockCode', this, 'Edm.String');

  /**
   * Creates an instance of PaymentBlockParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentBlockParams);
  }
}

export namespace PaymentBlockParams {
  /**
   * Metadata information on all properties of the `PaymentBlockParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentBlockParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PaymentBlockCode',
    name: 'paymentBlockCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentBlockParams {
    return deserializeComplexTypeV4(json, PaymentBlockParams);
  }
}
