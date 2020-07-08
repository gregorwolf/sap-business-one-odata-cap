/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BusinessPartnerPropertyParams
 */
export interface BusinessPartnerPropertyParams {
  /**
   * Property Code.
   * @nullable
   */
  propertyCode?: number;
  /**
   * Property Name.
   * @nullable
   */
  propertyName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerPropertyParams.build]] instead.
 */
export function createBusinessPartnerPropertyParams(json: any): BusinessPartnerPropertyParams {
  return BusinessPartnerPropertyParams.build(json);
}

/**
 * BusinessPartnerPropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPartnerPropertyParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BusinessPartnerPropertyParams.propertyCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PropertyCode', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPartnerPropertyParams.propertyName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  propertyName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PropertyName', this, 'Edm.String');
}

export namespace BusinessPartnerPropertyParams {
  export function build(json: { [keys: string]: FieldType }): BusinessPartnerPropertyParams {
    return createComplexType(json, {
      PropertyCode: (propertyCode: number) => ({ propertyCode: edmToTs(propertyCode, 'Edm.Int32') }),
      PropertyName: (propertyName: string) => ({ propertyName: edmToTs(propertyName, 'Edm.String') })
    });
  }
}
