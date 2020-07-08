/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class WizardPaymentMethodParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WizardPaymentMethodParams.paymentMethodCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethodCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentMethodCode', this, 'Edm.String');
}

export namespace WizardPaymentMethodParams {
  export function build(json: { [keys: string]: FieldType }): WizardPaymentMethodParams {
    return createComplexType(json, {
      PaymentMethodCode: (paymentMethodCode: string) => ({ paymentMethodCode: edmToTs(paymentMethodCode, 'Edm.String') })
    });
  }
}
