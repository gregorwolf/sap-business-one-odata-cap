/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BusinessPartnerParams
 */
export interface BusinessPartnerParams {
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerParams.build]] instead.
 */
export function createBusinessPartnerParams(json: any): BusinessPartnerParams {
  return BusinessPartnerParams.build(json);
}

/**
 * BusinessPartnerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPartnerParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BusinessPartnerParams.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
}

export namespace BusinessPartnerParams {
  export function build(json: { [keys: string]: FieldType }): BusinessPartnerParams {
    return createComplexType(json, {
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') })
    });
  }
}
