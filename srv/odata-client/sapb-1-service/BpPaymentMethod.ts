/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpPaymentMethod
 */
export interface BpPaymentMethod {
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: string;
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: number;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BpPaymentMethod.build]] instead.
 */
export function createBpPaymentMethod(json: any): BpPaymentMethod {
  return BpPaymentMethod.build(json);
}

/**
 * BpPaymentMethodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpPaymentMethodField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpPaymentMethod> {
  /**
   * Representation of the [[BpPaymentMethod.paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentMethodCode', this, 'Edm.String');
  /**
   * Representation of the [[BpPaymentMethod.rowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BpPaymentMethod.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');

  /**
   * Creates an instance of BpPaymentMethodField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpPaymentMethod);
  }
}

export namespace BpPaymentMethod {
  /**
   * Metadata information on all properties of the `BpPaymentMethod` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpPaymentMethod>[] = [{
    originalName: 'PaymentMethodCode',
    name: 'paymentMethodCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RowNumber',
    name: 'rowNumber',
    type: 'Edm.Int32',
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
  export function build(json: { [keys: string]: FieldType }): BpPaymentMethod {
    return deserializeComplexTypeV4(json, BpPaymentMethod);
  }
}
