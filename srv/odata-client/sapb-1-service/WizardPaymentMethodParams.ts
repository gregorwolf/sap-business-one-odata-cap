/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * WizardPaymentMethodParams
 */
export interface WizardPaymentMethodParams {
  /**
   * Payment Method Code.
   * @nullable
   */
  paymentMethodCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[WizardPaymentMethodParams.build]] instead.
 */
export function createWizardPaymentMethodParams(json: any): WizardPaymentMethodParams {
  return WizardPaymentMethodParams.build(json);
}

/**
 * WizardPaymentMethodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WizardPaymentMethodParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, WizardPaymentMethodParams> {
  /**
   * Representation of the [[WizardPaymentMethodParams.paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentMethodCode', this, 'Edm.String');

  /**
   * Creates an instance of WizardPaymentMethodParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, WizardPaymentMethodParams);
  }
}

export namespace WizardPaymentMethodParams {
  /**
   * Metadata information on all properties of the `WizardPaymentMethodParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WizardPaymentMethodParams>[] = [{
    originalName: 'PaymentMethodCode',
    name: 'paymentMethodCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): WizardPaymentMethodParams {
    return deserializeComplexTypeV4(json, WizardPaymentMethodParams);
  }
}
