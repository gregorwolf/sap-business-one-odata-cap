/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpPaymentDate
 */
export interface BpPaymentDate {
  /**
   * Payment Date.
   * @nullable
   */
  paymentDate?: string;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BpPaymentDate.build]] instead.
 */
export function createBpPaymentDate(json: any): BpPaymentDate {
  return BpPaymentDate.build(json);
}

/**
 * BpPaymentDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpPaymentDateField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpPaymentDate> {
  /**
   * Representation of the [[BpPaymentDate.paymentDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentDate: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentDate', this, 'Edm.String');
  /**
   * Representation of the [[BpPaymentDate.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');

  /**
   * Creates an instance of BpPaymentDateField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpPaymentDate);
  }
}

export namespace BpPaymentDate {
  /**
   * Metadata information on all properties of the `BpPaymentDate` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpPaymentDate>[] = [{
    originalName: 'PaymentDate',
    name: 'paymentDate',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpPaymentDate {
    return deserializeComplexTypeV4(json, BpPaymentDate);
  }
}
