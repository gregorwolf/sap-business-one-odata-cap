/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxReportBusinessPartner
 */
export interface TaxReportBusinessPartner {
  /**
   * Code.
   * @nullable
   */
  code?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxReportBusinessPartner.build]] instead.
 */
export function createTaxReportBusinessPartner(json: any): TaxReportBusinessPartner {
  return TaxReportBusinessPartner.build(json);
}

/**
 * TaxReportBusinessPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxReportBusinessPartnerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxReportBusinessPartner.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
}

export namespace TaxReportBusinessPartner {
  export function build(json: { [keys: string]: FieldType }): TaxReportBusinessPartner {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') })
    });
  }
}
